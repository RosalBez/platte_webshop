import React from 'react';
import head from '../../assets/photos/header.png'
import login from '../../assets/photos/login.jpg'
import signature from '../../assets/Specifics/signatuur.svg'
import './home.css';
import {NavLink} from "react-router-dom";

function Home() {
    return (
        <>
            <body>
                <meta name="viewport" content="width=device-width, initial-scale=1"/>
                <header className="outer-container">
                    <div className="inner-container">

                        <div className='header-content'>
                            <img src={head} alt='girl with sunglasses' className="header-image"/>
                            <NavLink to='/products'>
                                <button type='button' className='header-button'>
                                    Shop nu
                                </button>
                            </NavLink>
                        </div>

                    </div>
                </header>

                <div className='inner-container'>
                    <div className='login-body'>
                        <span className='login'>
                            <img src={login} alt='laying girl with sunglasses' className='login-picture'/>
                            <img src={signature} alt='signature' className='login-signature'/>
                            <NavLink to='/register_sign_in'>
                                <button type='button' className='login-button'>
                                    Log In
                                </button></NavLink>

                            <div className='login-text'>
                                <h2> Al een account?</h2>
                                <p> "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
                                et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                                aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
                                cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                                culpa qui officia deserunt mollit anim id est laborum."
                                </p>
                                <NavLink to='/register-sign-in'>
                                <button type='button' className='register-button'>
                                    Registreer nu
                                </button> </NavLink>
                                </div>
                        </span>
                    </div>

                    <section className='new-section'>
                    <h2> Nieuw </h2>
                    <p> hier komen plaatjes </p>
                    </section>

                </div>
            </body>

        </>
    )
        ;
}

export default Home;