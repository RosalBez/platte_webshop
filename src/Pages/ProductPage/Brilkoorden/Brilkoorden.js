import React from 'react';
import {Link, NavLink, useParams} from "react-router-dom";
import './Brilkoorden.css'


function Brilkoorden (props) {


    return (
        <div className='outer-content-container'>
            <div className='inner-content-container'>
                <h4> hier komt een overzicht van ALLE brilkoorden</h4>
                <NavLink to='../ProductDetailsBrilkoorden/1' className='brilkoorden'>
                    <p>Brilkoord 1</p></NavLink>
                <p><Link to='../../Products'> Ga terug</Link> naar het overzicht.</p>
            </div>
        </div>

    );
}

export default Brilkoorden;