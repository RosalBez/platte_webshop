import React, {useContext} from 'react';
import './gebruikers_gegevens.css'
import {AuthenticationContext} from "../../../context/AuthenticationProvider/AuthenticationContext";
import {Link} from "react-router-dom";
import ProfilePicture from "../../../Components/ProfilePicture/ProfilePicture";
import Arrow1 from "../../../assets/photos/Arrow1.png";

function Gegevens() {
    const { user } = useContext(AuthenticationContext);


    return (
        <>
            <div className='inner-content-container'>
                <h1>Gegevenspagina</h1>
                <Link to='/profiel'><img className='go-back-arrow' src={Arrow1} alt='go-back-arrow'/></Link>
                <ProfilePicture/>

                <section className='user-information'>
                    <p>Gebruikersnaam: {user.username}</p>
                    <p>Emailadres: {user.email}</p>
                <p> Info: {user.info}</p>

                </section>


            </div>

        </>

    );
}

export default Gegevens;
