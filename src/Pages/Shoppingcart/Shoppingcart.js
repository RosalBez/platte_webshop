import React from 'react';
import {NavLink} from "react-router-dom";
import './../../Styles/Buttons.css'

function Shoppingcart(props) {
    return (
        <div className='inner-content-container'>
            <h2> jouw winkelmandje</h2>
            <p> Helaas, deze pagina bestaat nog niet. Waar wil je nu heen? Kies hieronder!</p>
            <NavLink to='/'>
                <button>Home</button>
            </NavLink>

            <NavLink to='/about'>
                <button>Over</button>
            </NavLink>

            <NavLink to='/RegisterSignIn'>
                <button>Registreer/Log in</button>

            </NavLink>

            <NavLink to='/products'>
                <button>Shop</button>
            </NavLink>




        </div>
    );
}

export default Shoppingcart;