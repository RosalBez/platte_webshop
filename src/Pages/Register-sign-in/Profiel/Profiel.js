import React, { useState, useContext, useEffect } from 'react';
import axios from 'axios';
import { AuthenticationContext } from './../../../context/AuthenticationProvider/AuthenticationContext';
import Button from '../../../Components/Button/Button'
import { useNavigate, NavLink } from "react-router-dom";
import profilePicture from './../../../assets/photos/profile_picture.jpg';
import './Profiel.css';
import Nav from "../../../Components/NavBar/Nav";

function Profiel() {
    const [imageData, setImageData] = useState('');
    const { user, token } = useContext(AuthenticationContext);
    const navigate = useNavigate();
    const { isAuth, login, logout, user: { username} } = useContext(AuthenticationContext);

    useEffect(() => {
        const storedImageData = localStorage.getItem('userImage');
        if (storedImageData) {
            setImageData(storedImageData);
        }
    }, []);

    const handleImageChange = (event) => {
        const file = event.target.files[0];
        const reader = new FileReader();

        reader.onloadend = () => {
            setImageData(reader.result);
            localStorage.setItem('userImage', reader.result); // Sla de afbeelding op in localStorage
        };

        reader.readAsDataURL(file);
    };

    const handleImageUpload = async () => {
        try {
            const response = await axios.post(
                'https://frontend-educational-backend.herokuapp.com/api/user/image',
                { base64Image: imageData },
                {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                }
            );

            console.log('Afbeelding geüpload:', response.data);
            setImageData(''); // Reset de imageData naar een lege string na upload
            localStorage.removeItem('userImage'); // Verwijder de afbeelding uit localStorage
            navigate('/profiel');
        } catch (error) {
            console.error('Fout bij het uploaden van de afbeelding:', error);
        }
    };

    return (
        <div className='inner-content-container'>
            <div className='profile-div'>
                <img className='profile-image' src={imageData || user.profileImage || profilePicture} alt='profile picture' />
                <form>
                    <label htmlFor='image-upload' className='plus-sign'>
                        <input
                            id='image-upload'
                            type='file'
                            accept='image/*'
                            onChange={handleImageChange}
                        />
                        + wijzig afbeelding
                    </label>
                    {imageData && <button onClick={handleImageUpload}>Upload Afbeelding</button>}
                </form>
            </div>
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

