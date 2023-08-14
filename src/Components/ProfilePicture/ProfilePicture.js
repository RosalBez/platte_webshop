import React, {useEffect, useState, useContext} from 'react';
import {AuthenticationContext} from "../../context/AuthenticationProvider/AuthenticationContext";
import axios from 'axios';
import './ProfilePicture.css';

function ProfilePicture() {
    const {user} = useContext(AuthenticationContext)
    const [userImage, setUserImage] = useState(null);

    useEffect(() => {
        if (user && user.profileImage) {
            setUserImage(user.profileImage);
        }
    }, [user])


    const handleFileChange = (event) => {
        const selectedFile = event.target.files[0];
        if (selectedFile) {
            const reader = new FileReader();
            reader.readAsDataURL(selectedFile);
            reader.onload = () => {
                const base64Image = reader.result;
                uploadImage(base64Image);
            };
        }
    };

    const uploadImage = (base64Image) => {
        const token = localStorage.getItem('token'); // Haal de token op uit localStorage

        if (token) {
            axios
                .post(
                    'https://frontend-educational-backend.herokuapp.com/api/user/image',
                    { base64Image },
                    {
                        headers: {
                            Authorization: `Bearer ${token}`, // Voeg de token toe aan de headers
                        },
                    }
                )
                .then(response => {
                    console.log('Profielfoto geupload:', response.data);
                    setUserImage(base64Image); // Update de afbeelding met de nieuwe base64-afbeelding
                })
                .catch(error => {
                    console.error('Uploaden van profielfoto niet gelukt:', error);
                });
        }
    };

    return (
        <div className='profile-picture'>
            <img className='uploaded-picture' src={userImage || 'default_image_url.jpg'} alt='person' />
            <input
                className='uploaded-picture-input'
                type='file'
                accept='image/*'
                id="fileInput"
                style={{ display: 'none' }}
                onChange={handleFileChange}
            />
            <label htmlFor="fileInput"><button>Upload profielfoto</button></label>
        </div>
    );
}

export default ProfilePicture;
