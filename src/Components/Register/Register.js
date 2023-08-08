import React, {useContext, useState} from 'react';
import axios from 'axios';
import './Register.css';
import {AuthenticationContext} from "../../context/AuthenticationProvider/AuthenticationContext";

// ... (import statements and other code)

function Register(props) {
    const {auth, login, logout} = useContext(AuthenticationContext);
    const [error, setError] = useState(false);
    const [formState, setFormState] = useState({
        name: '',
        username: '',
        email: '',
        password: '',
        address: '',
        postcode: '',
        houseNumber: '',

    });

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            setError(false);
            const res = await axios.post('https://frontend-educational-backend.herokuapp.com/api/auth/signup', formState);

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
                        <label className='register-label-address'>Verzendadres</label>
                        <label htmlFor='register-address' className='register-label'>

                            <input
                                className='register-input-address'
                                type='text'
                                id='register-address'
                                name='address'
                                placeholder='adres'
                                value={formState.address}
                                onChange={handleInputChange}
                            />
                        </label>

                        <label htmlFor='register-postcode' className='register-label-postcode'>

                            <input
                                className='register-input-postcode'
                                type='text'
                                id='register-postcode'
                                name='postcode'
                                value={formState.postcode}
                                placeholder='postcode'
                                onChange={handleInputChange}
                            />
                            <input
                                className='register-input-housenumber'
                                type='text'
                                id='register-houseNumber'
                                name='houseNumber'
                                value={formState.houseNumber}
                                placeholder='huisnr.'
                                onChange={handleInputChange}
                            />
                        </label>




                        <span className='register-button-two'>
                            <button type='submit'>Registreer</button>
                        </span>
                        {error &&
                            <p className='error-message-register'>Er is iets misgegaan bij het registreren, probeer het
                                nog eens. LET OP! voor deze website is een emailadres dat eindigt op @novi.nl
                                verplicht</p>}
                    </div>
                </form>


            </div>

        </div>
);
}

export default Register;
