import React, { useContext } from 'react';
import { AuthenticationContext } from '../../../context/AuthenticationProvider/AuthenticationContext';
import Button from '../../../Components/Button/Button'
import {NavLink, useLocation } from "react-router-dom";
import profilePicture from './../../../assets/photos/profile_picture.jpg';
import './Profiel.css';


function Profiel() {
    const location = useLocation();
    const { isAuth, login, logout, user}= useContext(AuthenticationContext);
    const {username} = user;
    const gegevensImageData = location.state?.gegevensImageData; // Haal de imageData op uit de locatie

    return (
        <div className='inner-content-container'>
            <img
                className='profile-image'
                src={gegevensImageData || user.profileImage || profilePicture}
                alt='profile picture'
            />

            <p className='welcome-text'>Je bent ingelogd, welkom <span>{username}</span> op jouw profielpagina!</p>
                <div className='profile-buttons'>
                    <NavLink to='GebruikersGegevens'><Button className='profile-button' title="Mijn gegevens"/></NavLink>
                    <NavLink to='/Profiel/Wensenlijst'><Button className='profile-button' title="Mijn wensen"/></NavLink>
                    <Button className='profile-button' title="Mijn bestellingen"/>
                </div>
                <button type='button'  className='logout' onClick={isAuth ? logout : login}>Log uit </button>

        </div>
    )
}

export default Profiel;

