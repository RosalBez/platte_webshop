import React from 'react';
import {NavLink} from "react-router-dom";
import head from '../../assets/photos/header.png'
import login from '../../assets/photos/login.jpg'
import signature from '../../assets/Specifics/signatuur.svg'
import Card from "../../Components/Card/Card";
import NewProducts from "../../Components/NewProduct/NewProducts";
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
                        <NavLink to='/RegisterSignIn'>
                            <button className='login-button'>Log In</button>
                        </NavLink>

                        <Card className='login-text' title='Al een account?'>
                            <p> "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
                                et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                                aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
                                cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                                culpa qui officia deserunt mollit anim id est laborum."
                            </p>

                            <NavLink to='/RegisterSignIn'>
                                <button>Registreer nu</button>
                            </NavLink>
                        </Card>
                    </span>
                    </div>

                    <NewProducts/>

            </main>
        </>


)
;
}

export default Home;