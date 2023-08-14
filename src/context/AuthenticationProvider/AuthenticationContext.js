import React, {createContext, useEffect, useState} from 'react';
import {useNavigate} from "react-router-dom";
import jwt_decode from "jwt-decode";
import {checkTokenValidity} from "../../Helper/tokenValidityCheck";
import axios from "axios";


export const AuthenticationContext= createContext(null)

function AuthenticationContextProvider({children}) {

    const [auth, setAuth] = useState({
        isAuth: false,
        user: null,
        status: "pending",

    });
    const navigate = useNavigate()

    useEffect(() => {
        const storedToken = localStorage.getItem('token')

        if (storedToken && checkTokenValidity(storedToken)) {
            void login(storedToken)
        } else {
            void logout()

        }
    }, [])


    async function login(jwt_token, redirect) {
        const decodedToken = jwt_decode(jwt_token);
        localStorage.setItem('token', jwt_token);
        console.log(decodedToken)
        try {
            const {
                data: {
                    email,
                    username,
                    id
                }
            } = await axios.get(`https://frontend-educational-backend.herokuapp.com/api/user`, {
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${jwt_token}`
                }
            })
            setAuth({
                ...auth,
                isAuth: true,
                user: {
                    email,
                    id,
                    username
                },
                status: "done"
            })
            console.log('De gebruiker is ingelogd 🔓')
            if (redirect) navigate(redirect);
        } catch (e) {
            console.error(e)
        }
    }


    function logout() {
        localStorage.removeItem('token');
        setAuth({
            ...auth,
            isAuth: false,
            user: null,
            status: 'done',
        })
        navigate('/')
    }

    const data = {
        isAuth: auth.isAuth,
        user: auth.user,
        logout: logout,
        login: login,
    }


    return (
        <AuthenticationContext.Provider value={data}>
            {auth.status === 'done' ? children : <p> loading ...</p>}
        </AuthenticationContext.Provider>
    );
}
export default AuthenticationContextProvider;