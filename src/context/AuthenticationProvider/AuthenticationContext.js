import React, {createContext, useState} from 'react';
import {useNavigate} from "react-router-dom";
import jwt_decode from "jwt-decode";


export const AuthenticationContext= createContext(null)



function AuthenticationContextProvider({children}) {

    const [auth, setAuth] = useState({
        isAuth: false,
        user: null,

});
    const navigate = useNavigate()

    function login(jwt_token) {
        const decodedToken = jwt_decode(jwt_token)
        localStorage.setItem('token',  jwt_token)
        setAuth({
            ...auth,
            isAuth: true,
            user: {
                username: decodedToken.username,
                id: decodedToken.sub,
            }
        })
        navigate('/Profiel')
    }

    function logout () {
        localStorage.removeItem('token');
        setAuth({
            ...auth,
            isAuth: false,
            user: null,
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
            {children}
        </AuthenticationContext.Provider>
    );
}

export default AuthenticationContextProvider;