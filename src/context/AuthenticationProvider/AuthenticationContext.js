import React, {createContext, useState} from 'react';
import {useNavigate} from "react-router-dom";

export const AuthenticationContext= createContext(null)



function AuthenticationContextProvider({children}) {

    const [isAuth, setIsAuth] = useState(false)
    const navigate = useNavigate()

    function login() {
        setIsAuth(true)
        navigate('/Profiel')
    }

    function logout () {
        setIsAuth(false)
        navigate('/')
    }

    const data = {
        isAuth,
        logout,
        login,
    }


    return (
        <AuthenticationContext.Provider value={data}>
            {children}
        </AuthenticationContext.Provider>
    );
}

export default AuthenticationContextProvider;