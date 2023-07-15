import React from 'react';
import {Link, NavLink, useParams} from "react-router-dom";
import './Kettingen.css'

function Kettingen  (props) {


    return (
        <div className='outer-content-container'>
            <div className='inner-content-container'>
                <h4> hier komt een overzicht van ALLE kettingen</h4>
                <NavLink to='../ProductDetailsKettingen/1' className='kettingen'>
                    <p>Ketting 1</p></NavLink>
                <p><Link to='../../Products'> Ga terug</Link> naar het overzicht.</p>
            </div>
        </div>

    );
}

export default Kettingen;