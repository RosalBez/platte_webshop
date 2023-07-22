import React from 'react';
import {Link, NavLink} from "react-router-dom";
import './Brilkoorden.css'
import Product from "../../../Components/Product/Product";
import Photo3 from '../../../assets/photos/Photo3.jpg';
import Arrow1 from "../../../assets/photos/Arrow1.jpg";

function Brilkoorden() {
    return (
        <>
            <Link to='/products'><img className='go-back-arrow' src={Arrow1}/></Link>

            <Product title='Brilkoorden' image={Photo3}></Product>
            <p className='nav-link'> <NavLink to='/products' className='go-back'>Ga terug </NavLink> naar het overzicht </p>

        </>

    );
}

export default Brilkoorden;