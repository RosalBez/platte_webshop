import React, {useContext} from 'react';
import './Register_sign_in.css'
import {AuthenticationContext} from "../../context/AuthenticationProvider/AuthenticationContext";
import {Link} from "react-router-dom";
// import Register from "../../Components/Register/Register";
// import LogIn from "../../Components/Log In/LogIn";

function RegisterSignIn(props) {
    const { isAuth, login, logout } = useContext(AuthenticationContext);


    return (
        <div className='login-en-registreer'>
            <h2> registreer en log maar lekker in </h2>
                <button type='button' onClick={isAuth? logout: login} >  {isAuth? "Logout" : "Login"}</button>


            {/*<Register/>*/}
            {/*<LogIn/>*/}
        </div>
    );
}

export default RegisterSignIn;