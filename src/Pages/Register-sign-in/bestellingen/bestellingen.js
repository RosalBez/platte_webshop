import React from 'react';
import {Link, NavLink} from "react-router-dom";
import Arrow1 from "../../../assets/photos/Arrow1.png";
import './../../../Styles/goBackArrow.css'
import './bestellingen.css'

function Bestellingen(props) {
    return (
        <div className='inner-content-container'>
            <h1>Jouw bestellingen</h1>
            <Link to='/profiel'><img className='go-back-arrow' src={Arrow1} alt='go-back-arrow' /></Link>

            <div className='orders-overview'>
                <p>Je hebt nog geen bestellingen geplaatst. Klik
                    <NavLink to='/products'>
                        <button className='order-page'>hier</button>
                    </NavLink>
                    voor al onze producten</p>


            <p> Of kies hieronder een pagina waar je heen wilt</p>

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

            <NavLink to='/Wensenlijst'>
                <button>Mijn wensenlijst</button>
            </NavLink>


            </div>



    );
}

export default Bestellingen;