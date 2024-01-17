import React from 'react';
import {NavLink} from "react-router-dom";
import head from '../../assets/photos/header.png'
import login from '../../assets/photos/login.jpg'
import signature from '../../assets/Specifics/signatuur.svg'
import './../../Styles/Buttons.css'
import './home.css';


function Home() {
    return (
        <>

            <main className='main-container'>
                    <header className='inner-content-container header-content'>
                        <img src={head} alt='girl with sunglasses' className="header-image"/>
                        <NavLink to='/products'>
                            <button className='header-button'>Shop nu</button>
                        </NavLink>
                    </header>

                    <div className='inner-content-container'>
                    <span className='login'>
                        <img src={login} alt='laying girl with sunglasses' className='login-picture'/>
                        <img src={signature} alt='signature' className='login-signature'/>
                        <p> tekst tekst </p>
                    </span>
                    </div>
            </main>
        </>


)
;
}

export default Home;