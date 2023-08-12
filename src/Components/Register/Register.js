import React, {useContext, useState} from 'react';
import axios from 'axios';
import './Register.css';
import {AuthenticationContext} from "../../context/AuthenticationProvider/AuthenticationContext";
import {Navigate} from 'react-router-dom'


function Register(props) {
    const {login} = useContext(AuthenticationContext);
    const [error, setError] = useState(false);
    const [isRegistered, setIsRegistered] = useState(false);
    const [formState, setFormState] = useState({
        name: '', /*****deze kun je niet mee geven in de backend van novi**/
        username: '',
        email: '',
        password: '',
        info: '',
        // address: '', /*****deze kun je niet mee geven in de backend van novi**/
        // postcode: '', /*****deze kun je niet mee geven in de backend van novi**/
        // houseNumber: '', /*****deze kun je niet mee geven in de backend van novi**/

    });

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            setError(false);
            const res = await axios.post('https://frontend-educational-backend.herokuapp.com/api/auth/signup', formState);

            login(res.data.token); // Aannemende dat login de token opslaat in de context
            setIsRegistered(true);

        } catch (error) {
            if (error.response) {
                // Er is een foutieve response ontvangen van de server
                const { status, data } = error.response;

                if (status === 400) {
                    setError(true);
                    console.error("Er is een validatiefout opgetreden:", data.error);
                } else {
                    console.error("Er is een onverwachte fout opgetreden:", error);
                }
            } else {
                console.error("Er is een fout opgetreden:", error);
            }
        }
    };
    const handleInputChange = (e) => {
        const {name, value} = e.target;
        setFormState(prevState => ({
            ...prevState,
            [name]: value,
        }));
    };

    if (isRegistered) {
        return <Navigate to="/profiel"/>;
    }


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
                                name='info'
                                placeholder='adres en huisnummer'
                                value={formState.info}
                                onChange={handleInputChange}
                            />
                        </label>



                        <span className='register-button-two'>
                            <button type='submit'>Registreer</button>
                        </span>
                        {error &&
                            <p className='error-message-register'>Er is iets misgegaan bij het registreren, probeer het
                                nog eens. LET OP: een gebruiksnaam en een wachtwoord moeten uit tenminste 6 tekens bestaan!</p>}

                    </div>
                </form>


            </div>

        </div>
);
}

export default Register;
