import React, {useContext, useState} from 'react';
import axios from 'axios';
import './Register.css';
import {AuthenticationContext} from "../../context/AuthenticationProvider/AuthenticationContext";

function Register(props) {
    const {auth, login, logout} = useContext(AuthenticationContext);
    const [error, setError] = useState(false);

    const [nameValue, setNameValue] = useState('');
    const [userNameValue, setUserNameValue] = useState('');
    const [emailValue, setEmailValue] = useState('');
    const [passwordValue, setPasswordValue] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            setError(false);
            const res = await axios.post('https://frontend-educational-backend.herokuapp.com/api/auth/signup', {
                name: nameValue,
                username: userNameValue,
                email: emailValue,
                password: passwordValue,
            })


        }
        catch (e) {
            console.error ( "Er lijkt iets mis te gaan, probeer het nog eens", e);
            setError(true);
        }
    }

    return (
        <div className='inner-content-container'>
            <form className='register-form' onSubmit={handleSubmit} name='registerForm'>
                <h2 className='title-register'> Registreren </h2>

                <label htmlFor='register-name' className='register-label'>
                    Naam:
                    <input
                        className='register-input'
                        type='text'
                        id='register-name'
                        name='name'
                        value={nameValue}
                        onChange={(e) => setNameValue(e.target.value)}
                    />
                </label>

                <label htmlFor='register-userName' className='register-label'>
                    Gebruikersnaam:
                    <input
                        className='register-input'
                        type='text'
                        id='register-username'
                        name='username'
                        value={userNameValue}
                        onChange={(e) => setUserNameValue(e.target.value)}
                    />
                </label>

                <label htmlFor='register-email' className='register-label'>
                    E-mail:
                    <input
                        className='register-input'
                        type='email'
                        id='register-email'
                        name='email'
                        value={emailValue}
                        onChange={(e) => setEmailValue(e.target.value)}
                    />
                </label>

                <label htmlFor='register-password' className='register-label'>
                    Wachtwoord:
                    <input
                        className='register-input'
                        type='password'
                        id='register-password'
                        name='password'
                        value={passwordValue}
                        onChange={(e) => setPasswordValue(e.target.value)}
                    />
                </label>

                <span className='register-button-two'>
                    <button type='submit'>Registreer</button>
                </span>
                    {error && <p className='error-message-register'>Er is iets misgegaan bij het registreren, probeer het nog eens. LET OP! voor deze website is een emailadres dat eindigd op @novi.nl verplicht</p>}
            </form>
        </div>
    );
}

export default Register;
