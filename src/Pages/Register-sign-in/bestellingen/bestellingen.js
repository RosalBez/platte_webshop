import React from 'react';
import {Link, NavLink} from "react-router-dom";
import Arrow1 from "../../../assets/photos/Arrow1.png";
import './bestellingen.css'

function Bestellingen(props) {
    return (
        <div className='inner-content-container'>
            <h1>Jouw bestellingen</h1>
            <Link to='/profiel'><img className='go-back-arrow' src={Arrow1} alt='go-back-arrow' /></Link>

            <div className='orders-overview'>
                <p>Je hebt nog geen bestellingen geplaatst. Klik <NavLink to='/products'>hier</NavLink> voor al onze producten</p>
            </div>

        </div>
    );
}

export default Bestellingen;