import React, {useContext, useEffect, useState} from 'react';
import { AuthenticationContext} from "../../../context/AuthenticationProvider/AuthenticationContext";
import {useNavigate} from "react-router-dom";
import axios from "axios";
import profilePicture from "../../../assets/photos/profile_picture.jpg";

function Gegevens() {
    const [imageData, setImageData] = useState('');
    const { user, token } = useContext(AuthenticationContext);


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
        } catch (error) {
            console.error('Fout bij het uploaden van de afbeelding:', error);
        }
    };

    return (
        <div className='inner-content-container'>
            <h1>Gegevenspagina</h1>

            <div className='profile-div'>
                <img className='profile-image' src={imageData} alt='profile picture' />
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


            <p>Gebruikersnaam: {user.username}</p>
            <p>Emailadres: {user.email}</p>
            <p> Info: {user.info}</p>

        </div>
    );
}

export default Gegevens;
