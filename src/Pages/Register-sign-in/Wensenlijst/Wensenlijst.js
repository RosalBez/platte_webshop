import React from 'react';
import {NavLink} from "react-router-dom";
import './../../../Styles/Buttons.css'

function Wensenlijst(props) {
    return (
        <div className='inner-content-container'>

            <div className='orders-overview'>
                <h1>Jouw wensen</h1>
                <p> Helaas, deze pagina bestaat nog niet. Waar wil je nu heen? Kies hieronder!</p>
            </div>
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

            <NavLink to='/profiel'>
                <button>Mijn profielpagina</button>
            </NavLink>

            <NavLink to='/bestellingen'>
                <button>Mijn bestellingen</button>
            </NavLink>


        </div>
    );
}

export default Wensenlijst;