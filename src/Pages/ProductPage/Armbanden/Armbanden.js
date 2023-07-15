import React from 'react';

import {Link, NavLink} from "react-router-dom";
import './Armbanden.css'

function Armbanden() {

/********let op!! navlink naar product ID = Vul het ID nummer/naam in acher ProductDetailsArmbenden/XXXX, anders komt er ID in je beeldscherm te staan!****/
    return (
        <div className='outer-content-container'>
            <div className='inner-content-container'>
                <h4> hier komt een overzicht van ALLE armbanden</h4>
                <NavLink to='../ProductDetailsArmbanden/1' className='armbanden'>
                    <p>Armband 1</p></NavLink>

                <p><Link to='../../Products'> Ga terug</Link> naar het overzicht.</p>

            </div>
        </div>


    );
}

export default Armbanden;