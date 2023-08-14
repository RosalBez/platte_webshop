import React, { useContext } from 'react';
import { AuthenticationContext } from '../../../context/AuthenticationProvider/AuthenticationContext';
import { NavLink } from 'react-router-dom';
import ProfilePicture from './../../../assets/photos/profile_picture.jpg'
import './../../../Styles/Buttons.css'
import './Profiel.css';

function Profiel() {
    const { isAuth, login, logout, user: { username, profileImage } } = useContext(AuthenticationContext);

    return (
        <div className="inner-content-container">
            {/*// hieronder zou je de profileImage moeten kunnen opvragen uit de backend via {profileImage}//*/}
            <img src={ProfilePicture} alt='profiel foto' className='profile-image'/>

            <p className="welcome-text">
                Je bent ingelogd, welkom <span>{username}</span> op jouw profielpagina!
            </p>



            <div className="profile-buttons">
                <NavLink to="GebruikersGegevens"><button className="profile-button">Mijn gegevens</button></NavLink>
                <NavLink to="Wensenlijst"><button className="profile-button">Mijn wensen</button></NavLink>
                <NavLink to="Bestellingen"><button className="profile-button">Mijn bestellingen</button></NavLink>

            </div>

            <div className="logout-button-profile">
                <button type="button" className="logout" onClick={isAuth ? logout : login}>Log uit</button>
            </div>
        </div>
    );
}

export default Profiel;
