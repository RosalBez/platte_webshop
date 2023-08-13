import React, {useContext, useState} from 'react';
import axios from 'axios';
import './Register.css';
import {AuthenticationContext} from "../../context/AuthenticationProvider/AuthenticationContext";


function Register(props) {
    const {user} = useContext(AuthenticationContext);
    const [error, setError] = useState(false);
    const [success, setSuccess] = useState(false)
    const [formState, setFormState] = useState({
        name: '', /*****deze kun je niet mee geven in de backend van novi**/
        username: '',
        email: '',
        password: '',
        address: '',


    });

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            setError(false);
            const res = await axios.post('https://frontend-educational-backend.herokuapp.com/api/auth/signup', formState);

            if (res.status === 200) {
                setSuccess(true);
                setFormState({
                    name: '',
                    username: '',
                    email: '',
                    password: '',
                    address: '',

                })
            }

        } catch (e) {
            console.error("Er lijkt iets mis te gaan, probeer het nog eens", e);
            setError(true);
        }
    };

    const handleInputChange = (e) => {
        const {name, value} = e.target;
        setFormState(prevState => ({
            ...prevState,
            [name]: value,
        }));
    };

    return (
        <div className='inner-content-container'>
            <div className='register-form-border'>

                <h2 className='title-register'> Registreren </h2>

                <form className='register-form-first-part' onSubmit={handleSubmit} name='registerForm'>

                    <label htmlFor='register-name' className='register-label'>
                        Naam
                        <input
                            className='register-input'
                            type='text'
                            id='register-name'
                            name='name'
                            value={formState.name}
                            onChange={handleInputChange}
                        />
                    </label>

                    <label htmlFor='register-username' className='register-label'>
                        Gebruikersnaam
                        <input
                            className='register-input'
                            type='text'
                            id='register-usernaam'
                            name='username'
                            value={formState.username}
                            onChange={handleInputChange}
                        />
                    </label>

                    <label htmlFor='register-email' className='register-label'>
                        Emailadres
                        <input
                            className='register-input'
                            type='email'
                            id='register-email'
                            name='email'
                            value={formState.email}
                            onChange={handleInputChange}
                        />
                    </label>
                    <label htmlFor='register-password' className='register-label'>
                        Wachtwoord
                        <input
                            className='register-input'
                            type='password'
                            id='register-password'
                            name='password'
                            value={formState.password}
                            onChange={handleInputChange}
                        />
                    </label>


                    <div className='register-form-second-part'>

                        <label htmlFor='register-address' className='register-label'>
                            Verzendadres
                            <input
                                className='register-input'
                                type='text'
                                id='register-address'
                                name='address'
                                value={formState.address}
                                placeholder='straat, huisnr. woonplaats'
                                onChange={handleInputChange}
                            />
                        </label>


                        <span className='register-button-two'>
                            <button type='submit'>Registreer</button>
                        </span>
                        {error && (
                            <p className='error-message-register'>Er is iets misgegaan bij het registreren, probeer het
                                nog eens.</p>
                        )}
                        {success && (
                            <p className="success-message-register">Registreren is gelukt! Je kunt vanaf nu, hiernaast, inloggen </p>
                        )}

                    </div>
                </form>


            </div>

        </div>
    );
}

export default Register;