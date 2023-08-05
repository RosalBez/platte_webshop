import React from 'react';
import {Link, NavLink} from "react-router-dom";
import './Brilkoorden.css'
import Product from "../../../Components/Product/Product";
import Arrow1 from '../../../assets/photos/Arrow1.png'

function Brilkoorden() {
    return (
        <>
            <Link to='/products'><img className='go-back-arrow' src={Arrow1} alt='go-back-arrow'/></Link>
            <Link to='/ProductDetails/1'>
                <Product title='Brilkoorden' category='jewelery'></Product>
                <Product category='jewelery'></Product>
                <Product category='jewelery'></Product>
            </Link>

            <p className='nav-link'> <NavLink to='/products' className='go-back'>Ga terug </NavLink> naar het overzicht </p>

        </>

    );
}

export default Brilkoorden;