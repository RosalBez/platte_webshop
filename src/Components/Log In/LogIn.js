import React, {useContext, useState} from 'react';
import {AuthContext} from "../../context/AuthContext";
import axios from "axios";
import './LogIn.css'

function LogIn(props) {
    const {login} = useContext(AuthContext);

    const [userNameValue, setUserNameValue] = React.useState('')
    const [passwordValue, setPasswordValue] = React.useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const res = await axios.post('https://frontend-educational-backend.herokuapp.com/api/auth/signin', {
                userNameValue,
                passwordValue,
            });

            login(res.data.accessToken);
        } catch (e) {
            console.error("de combinatie van je wachtwoord en email lijken verkeerd, probeer het nog eens", e)

        }
    }
    return (
        <div className='inner-content-container login-background-style'>


                <form className='login-form' onSubmit={handleSubmit}>
                    <h2 className='title-login'> Log In </h2>


                    <label htmlFor='login-userName' className='login-label'>
                        Gebruikersnaam:
                        <input
                            className='login-input'
                            type='username'
                            id='login-username'
                            name='username'
                            value={userNameValue}
                            onChange={(e) => setUserNameValue(e.target.value)}
                            />
                    </label>


                    <label htmlFor='login-password' className='login-label'>
                        wachtwoord:
                        <input
                            className='login-input'
                            type='password'
                            id='Login-password'
                            name='password'
                            value={passwordValue}
                            onChange={(e) => setPasswordValue(e.target.value)}
                            autoComplete="off"
                        />
                    </label>

                    <span className='login-button-two'>
                        <button type="submit">Log In </button>
                    </span>
                </form>
        </div>
    );
}

export default LogIn;