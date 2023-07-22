import React from 'react';
import {NavLink} from "react-router-dom";
import './Brilkoorden.css'
import Product from "../../../Components/Product/Product";
import Photo3 from '../../../assets/photos/Photo3.jpg';

function Brilkoorden() {
    return (
        <>
            <Product title='Brilkoorden' image={Photo3}></Product>
            <p className='nav-link'> <NavLink to='/products' className='go-back'>Ga terug </NavLink> naar het overzicht </p>

        </>

    );
}

export default Brilkoorden;