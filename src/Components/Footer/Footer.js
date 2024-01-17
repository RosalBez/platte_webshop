import React from 'react';
import {NavLink} from "react-router-dom";
import './Footer.css'
import insta from '../../assets/Specifics/noun-camera-5053228.png'
import footerLogo from "../../assets/Specifics/LOGO NAV.png";


function Footer(props) {
    return (
        <footer className='footer'>
            <div className='left-side-footer'>

                <NavLink to='https://www.instagram.com/rsl_concept/' target="_blank">
                    <img src={insta} alt='instagram' className='insta-footer'/>
                </NavLink>
            </div>

            <div className='right-side-footer'>
                <NavLink to='/'>
                    <img src={footerLogo} alt='footerLogo' className='logo-footer'/>
                </NavLink>

                <section className='text-footer'>
                    <p> KVK: 7778889 </p>
                    <p>Adres: Jansenstraat 123, 3434BB Utrecht</p>
                    <p> mail: rsl@concept.com</p>
                    <p> verzending via: postNL </p>
                    <p> retourbeleid </p>
                    <NavLink to='/FAQS' className='faqs-footer'> FAQS</NavLink>
                </section>
            </div>




        </footer>


    );
}

export default Footer;