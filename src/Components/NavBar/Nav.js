import React from 'react';
import {NavLink} from "react-router-dom";
import './NavBar.css'
import SearchBar from "../Searchbar/SearchBar";
import logo from '../../assets/Specifics/LOGO NAVBAR.svg'
import profile from '../../assets/Specifics/noun-person-2209440 1.svg'
import basket from '../../assets/Specifics/noun-basket-1131344 1.svg'
import about from '../../assets/Specifics/over.svg'
import shop from '../../assets/Specifics/shop.svg'
import DropdownMenu from "./dropdownmenu/DropdownNavItem";

function Nav(props) {
    return (

            <nav className="navigation">
                <div className='left-side-nav'>
                    <ul>
                        <li>
                            <NavLink to="/" ><img src={logo} alt='logo' className='logo'/>
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to='/about'> <img src={about} alt='about' className='about'/>
                            </NavLink>
                        </li>
                    </ul>
                </div>

                <div className='right-side-nav'>
                    <ul>
                        <DropdownMenu
                            menuLink='./products'
                            image={shop}
                            title='shop'
                            menuItems={['armbanden', 'kettingen', 'brilkoorden']}
                        />

                        <li><SearchBar/></li>

                        <DropdownMenu
                            menuLink='./RegisterSignIn'
                            image={profile}
                            title='profile'
                            menuItems={['profiel', 'wensenlijst']}
                            />

                        <li>
                            <NavLink to='/shoppingcart'>
                                <img src={basket} alt='basket' className='basket'/>
                            </NavLink>
                        </li>
                    </ul>
                </div>
            </nav>



    )
        ;
}

export default Nav;