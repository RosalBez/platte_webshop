import React from 'react';
import {NavLink} from "react-router-dom";
import './NavBar.css'
import SearchBar from "../Searchbar/SearchBar";
import logo from '../../assets/Specifics/LOGO NAVBAR.svg'
import profile from '../../assets/Specifics/noun-person-2209440 1.svg'
import basket from '../../assets/Specifics/noun-basket-1131344 1.svg'
import about from '../../assets/Specifics/over.svg'
// import shop from '../../assets/Specifics/shop.svg'
import DropdownMenu from "./dropdownmenu/DropdownNavItem";

function Nav(props) {
    return (

            <nav className="navigation">
                <div className='left-side-nav'>
                    <ul>
                        <li>
                            <NavLink to="/"
                                     className={({isActive}) => isActive === true ? 'active-link' : 'default-link'}>
                                <img src={logo} alt='logo' className='logo'/>
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to='/about'
                                     className={({isActive}) => isActive === true ? 'active-link' : 'default-link'}>
                                <img src={about} alt='about' className='about'/>
                            </NavLink>
                        </li>
                    </ul>
                </div>

                <div className='right-side-nav'>
                    <ul>
                        <DropdownMenu/>

                        <li><SearchBar/></li>
                        <li>
                            <NavLink to='/register_sign_in'
                                     className={({isActive}) => isActive === true ? 'active-link' : 'default-link'}>
                                <img src={profile} alt='profile' className='profile'/>
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to='/shoppingcart'
                                     className={({isActive}) => isActive === true ? 'active-link' : 'default-link'}>
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