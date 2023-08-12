import React, { createContext, useEffect, useState } from 'react';
import { useNavigate } from "react-router-dom";
import jwt_decode from "jwt-decode";
import { checkTokenValidity } from "../../Helper/tokenValidityCheck";
import axios from 'axios';

export const AuthenticationContext = createContext({});

function AuthenticationContextProvider({ children }) {
    const navigate = useNavigate();
    const [auth, setAuth] = useState({
        isAuth: false,
        user: null,
        status: "pending",
    });


    useEffect(() => {
        const storedToken = localStorage.getItem('token');

        if (storedToken && checkTokenValidity(storedToken)) {
            void login(storedToken);
        } else {
            void logout()
            }

    }, []);

    function login(JWT) {
        localStorage.setItem('token', JWT);
        const decoded = jwt_decode(JWT);
        fetchUserData(decoded.sub, JWT, '/profiel');
    }


    function logout() {
        localStorage.removeItem('token');
        setAuth({
            ...auth,
            isAuth: false,
            user: null,
            status: 'done'
        });
        navigate('/');
    }

    async function fetchUserData(id, token, redirect) {
        try {
            const result = await axios.get(
                `https://frontend-educational-backend.herokuapp.com/api/user/`,
                {
                    headers: {
                        'Content-Type': 'application/json',
                        Authorization: `Bearer ${token}`,
                    },
                }
            );

            setAuth({
                ...auth,
                isAuth: true,
                user: {
                    username: result.data.username,
                    email: result.data.email,
                    id: result.data.id,
                },
                status: 'done',
            });

            if (redirect) {
                navigate(redirect);
            }
        } catch (e) {
            console.error(e);
            setAuth({
                isAuth: false,
                user: null,
                status: 'done',
            });
        }
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
