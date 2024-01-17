import React, {useContext} from 'react';
import {NavLink} from "react-router-dom";
import './NavBar.css'
import logo from '../../assets/Specifics/LOGO NAVBAR.svg'
import about from '../../assets/Specifics/over.svg'
import shop from '../../assets/Specifics/shop.svg'

function Nav() {

    return(
        <nav className="navigation">
            <div className='left-side-nav'>
                <ul>
                    <li>
                        <NavLink to='/about'> <img src={about} alt='about' className='about'/></NavLink>
                    </li>
                    <li>
                        <NavLink to="/"><img src={logo} alt='logo' className='logo'/> </NavLink>
                    </li>
                    <li>
                        <NavLink to='/products'> <p className='shop'> shop</p></NavLink>
                    </li>
                </ul>
            </div>



        </nav>
)}

export default Nav;