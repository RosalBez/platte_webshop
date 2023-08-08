import React, {createContext, useState} from 'react';
import {useNavigate} from "react-router-dom";

export const AuthenticationContext= createContext(null)



function AuthenticationContextProvider({children}) {

    const [auth, setAuth] = useState({
        isAuth: false,
        user: null,

});
    const navigate = useNavigate()

    function login() {
        setAuth({
            ...auth,
            isAuth: true,
            user: {
                email: 'klaasje@novi.nl',
                id: 1,
            }
        })
        navigate('/Profiel')
    }

    function logout () {
        setAuth({
            ...auth,
            isAuth: false,
            user: null,
        })
        navigate('/')
    }

    const data = {
        isAuth: auth.isAuth,
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