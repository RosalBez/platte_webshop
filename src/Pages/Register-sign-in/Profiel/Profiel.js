import React, { useContext } from 'react';
import { AuthenticationContext } from '../../../context/AuthenticationProvider/AuthenticationContext';
import Button from '../../../Components/Button/Button'
import {NavLink, useLocation } from "react-router-dom";
// import profilePicture from './../../../assets/photos/profile_picture.jpg';
import './Profiel.css';
import ProfilePicture from "../../../Components/ProfilePicture/ProfilePicture";


function Profiel() {
    const location = useLocation();
    const { isAuth, login, logout, username}= useContext(AuthenticationContext);


    return (
        <div className='inner-content-container'>
            <p className='welcome-text'>Je bent ingelogd, welkom <span>{username}</span> op jouw profielpagina!</p>

                <div className='profile-buttons'>
                    <NavLink to='GebruikersGegevens'><Button className='profile-button' title="Mijn gegevens"/></NavLink>
                    <NavLink to='/Profiel/Wensenlijst'><Button className='profile-button' title="Mijn wensen"/></NavLink>
                    <NavLink to='/Profiel/Bestellingen'><Button className='profile-button' title="Mijn Bestellingen"/></NavLink>

                </div>

                <div className='logout-button-profile'>

                    <button type='button'  className='logout' onClick={isAuth ? logout : login}>Log uit </button>
                </div>

        </div>
    )
}

export default Profiel;

