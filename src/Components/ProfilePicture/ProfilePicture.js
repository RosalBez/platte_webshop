import React, { useEffect, useState, useContext } from 'react';
import { AuthenticationContext } from '../../context/AuthenticationProvider/AuthenticationContext';
import axios from 'axios';
import profielfoto from './../../assets/photos/profile_picture.jpg';
import './ProfilePicture.css';

function ProfilePicture() {
    const { user } = useContext(AuthenticationContext);
    const [userImage, setUserImage] = useState(null);
    const [uploadMode, setUploadMode] = useState(true); // Nieuwe toestand voor de modus

    useEffect(() => {
        if (user && user.profileImage) {
            setUserImage(user.profileImage);
        }
    }, [user]);

    const handleFileChange = (event) => {
        const selectedFile = event.target.files[0];
        if (selectedFile) {
            const reader = new FileReader();
            reader.readAsDataURL(selectedFile);
            reader.onload = () => {
                const base64Image = reader.result;
                setUserImage(base64Image); // Toon de voorvertoning van de nieuwe afbeelding
                setUploadMode(false); // Schakel over naar de "Opslaan" modus
            };
        }
    };

    const saveProfileImage = () => {
        if (userImage) {
            uploadImage(userImage);
            setUploadMode(true); // Schakel terug naar de "Upload" modus na opslaan
        }
    };

    const uploadImage = (base64Image) => {
        const token = localStorage.getItem('token');

        if (token) {
            axios
                .post(
                    'https://frontend-educational-backend.herokuapp.com/api/user/image',
                    { base64Image },
                    {
                        headers: {
                            'Content-Type': 'application/json',
                            Authorization: `Bearer ${token}`,
                        },
                    }
                )
                .then((response) => {
                    console.log('Profielfoto geupload:', response.data);
                    setUserImage(base64Image);
                })
                .catch((error) => {
                    console.error('Uploaden van profielfoto niet gelukt:', error);
                });
        }


    };

    return (
        <div className='profile-picture'>
            <img className='uploaded-picture' src={userImage || profielfoto} alt='person' />
            <input
                className='uploaded-picture-input'
                type='file'
                accept='image/*'
                id='fileInput'
                style={{ display: 'none' }}
                onChange={handleFileChange}
            />
            {uploadMode ? (
                <button type='button'> <label htmlFor='fileInput'>Wijzig profielfoto</label></button>
            ) : (
                <button onClick={saveProfileImage}>Opslaan</button>
            )}
        </div>
    );
}

export default ProfilePicture;
