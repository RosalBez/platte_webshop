import React, { useContext } from 'react';
import './Profiel.css';
import { AuthenticationContext } from '../../../context/AuthenticationProvider/AuthenticationContext'; // Importeer de juiste context

function Profiel() {
    const { user: { id }, isAuth, logout, login } = useContext(AuthenticationContext);  //vanwege de backend kan ik hier username niet neerzetten maar moet ik ID neerzetten //

    return (
        <div className='inner-content-container'>
            <h1>PROFIEL</h1>
            <p>Je bent ingelogd, welkom <span>{ id }</span> op jouw profielpagina!</p>
            <p>Log hier uit</p>
            <button type='button' onClick={isAuth ? logout : login}>
                {isAuth ? 'log uit' : 'log in'}
            </button>
        </div>
    );
}

export default Profiel;
