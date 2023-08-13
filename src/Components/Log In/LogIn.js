import React, {useContext, useState} from 'react';
import axios from "axios";
import {AuthenticationContext} from "../../context/AuthenticationProvider/AuthenticationContext";
import './LogIn.css'


function LogIn(props) {
    const {login} = useContext(AuthenticationContext)
    const [error, setError] = useState(false);


    const [userNameValue, setUserNameValue] = useState('');
    const [passwordValue, setPasswordValue] = useState('')

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            setError(false);
            const res = await axios.post('https://frontend-educational-backend.herokuapp.com/api/auth/signin', {
                username: userNameValue,
                password: passwordValue,
            })
            setError(null);
            login(res.data.accessToken, '/profiel');
        }
        catch (e) {
            console.error ( "Onjuist email en wachtwoord combinatie", e);
            setError(true);
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

                            <button type='submit'> Login </button>


                    </span>
                {error && <p className='error-message-login'>Onjuist email en wachtwoord combinatie, probeer het nog eens</p>}
            </form>
        </div>
    );
}

export default LogIn;