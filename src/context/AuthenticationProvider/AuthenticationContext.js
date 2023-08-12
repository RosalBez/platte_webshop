import React, { createContext, useEffect, useState } from 'react';
import { useNavigate } from "react-router-dom";
import jwt_decode from "jwt-decode";
import { checkTokenValidity } from "../../Helper/tokenValidityCheck";
import axios from 'axios';

export const AuthenticationContext = createContext(null);

function AuthenticationContextProvider({ children }) {
    const [auth, setAuth] = useState({
        isAuth: false,
        user: null,
        status: "pending",
    });
    const [error, setError] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        const storedToken = localStorage.getItem('token');

        if (storedToken && checkTokenValidity(storedToken)) {
            void login(storedToken);
        } else {
            setAuth({
                ...auth,
                isAuth: false,
                user: null,
                status: 'done'
            });
        }
    }, []);

    async function login(jwt_token, redirect) {
        const decodedToken = jwt_decode(jwt_token);
        localStorage.setItem('token', jwt_token);
        console.log(decodedToken)

        try {
            const response = await axios.get('https://frontend-educational-backend.herokuapp.com/api/user', {
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${jwt_token}`,
                }
            });

            const userData = response.data;
            console.log('API response:', userData);

            setAuth({
                ...auth,
                isAuth: true,
                user: {
                    id: userData.id,
                    email: userData.email,
                    username: userData.username,
                    info: userData.info,
                },
                status: 'done'
            });

            if (redirect) navigate(redirect);
        } catch (error) {
            console.error('Error during login:', error);
            setError(true);
        }
    }


    function logout() {
        localStorage.removeItem('token');
        setAuth({
            ...auth,
            isAuth: false,
            user: null,
        });
        navigate('/');
    }

    const data = {
        isAuth: auth.isAuth,
        user: auth.user,
        logout: logout,
        login: login,

    };

    return (
        <AuthenticationContext.Provider value={data}>
            {auth.status === 'done' ? children : <p> loading ...</p>}
        </AuthenticationContext.Provider>
    );
}

export default AuthenticationContextProvider;
