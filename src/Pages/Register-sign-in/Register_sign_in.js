import React, {useContext} from 'react';
import './Register_sign_in.css'
import {AuthenticationContext} from "../../context/AuthenticationProvider/AuthenticationContext";
import {Link} from "react-router-dom";
import Register from "../../Components/Register/Register";
import LogIn from "../../Components/Log In/LogIn";

function RegisterSignIn(props) {



    return (
        <div className='login-en-registreer'>



            <Register/>
            <LogIn/>



        </div>
    );
}

export default RegisterSignIn;