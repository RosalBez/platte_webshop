import React from 'react';
import head from '../../assets/photos/header.png'
import login from '../../assets/photos/login.jpg'
import signature from '../../assets/Specifics/signatuur.svg'
import './home.css';
import {NavLink} from "react-router-dom";
import Button from "../../Components/Button/Button";
import Card from "../../Components/Card/Card";


function Home() {
    return (
        <>

            <main>
                    <header className='inner-content-container header-content'>
                        <img src={head} alt='girl with sunglasses' className="header-image"/>
                        <NavLink to='/products'>
                            <Button className='header-button' title="Shop nu"/>
                        </NavLink>
                    </header>

                    <div className='inner-content-container'>
                    <span className='login'>
                        <img src={login} alt='laying girl with sunglasses' className='login-picture'/>
                        <img src={signature} alt='signature' className='login-signature'/>
                        <NavLink to='/RegisterSignIn'>
                            <Button className='login-button' title='Log In'/>
                        </NavLink>

                        <Card className='login-text' title='Al een account?'>
                            <p> "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
                                et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                                aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
                                cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                                culpa qui officia deserunt mollit anim id est laborum."
                            </p>

                            <NavLink to='/register-sign-in'>
                                <Button className='register-button' title='Registreer nu'/>
                            </NavLink>
                        </Card>
                    </span>
                    </div>

                    <Card className='inner-content-container new-section' title='Nieuw'>
                        <p> hier komen plaatjes </p>
                    </Card>
            </main>
        </>


)
;
}

export default Home;