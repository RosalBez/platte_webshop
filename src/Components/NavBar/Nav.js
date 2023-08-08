import React, {useContext} from 'react';
import {NavLink} from "react-router-dom";
import './NavBar.css'
import SearchBar from "../Searchbar/SearchBar";
import logo from '../../assets/Specifics/LOGO NAVBAR.svg'
import profile from '../../assets/Specifics/noun-person-2209440 1.svg'
import basket from '../../assets/Specifics/noun-basket-1131344 1.svg'
import about from '../../assets/Specifics/over.svg'
import shop from '../../assets/Specifics/shop.svg'
import DropdownMenu from "./dropdownmenu/DropdownNavItem";
import {AuthenticationContext} from "../../context/AuthenticationProvider/AuthenticationContext";

function Nav(props) {
    const {isAuth, logout} = useContext(AuthenticationContext)


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
                        <li>
                            <NavLink to='/RegisterSignIn' className='homepage_register_sign_in'>Registreer/Log In</NavLink>
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

                        <li>
                            <NavLink to='/shoppingcart'>
                                <img src={basket} alt='basket' className='basket'/>
                            </NavLink>
                        </li>

                        {isAuth && (
                            <li>
                                <DropdownMenu
                                    menulink='/Profiel'
                                    image={profile}
                                    title='Profiel'
                                    menuItems={['Profiel', 'Wensenlijst', 'Log uit']}
                                    onLogout={logout}
                                    />
                            </li>
                        )}



                    </ul>
                </div>
            </nav>



    )
        ;
}

export default Nav;