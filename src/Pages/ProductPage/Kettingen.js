import React from 'react';
import Product from "../../Components/Product/Product";
import './../../Styles/goBackArrow.css'
import {Link, NavLink} from "react-router-dom";
import Arrow1 from './../../assets/photos/Arrow1.png'

function Kettingen(props) {
    return (
        <>
            <Link to='/products'><img className='go-back-arrow' src={Arrow1} alt='go-back-arrow'/></Link>
            <Link to='/ProductDetails'>

                <Product title='kettingen'></Product>

            </Link>
            <p className='nav-link'> <NavLink to='/products' className='go-back'>Ga terug </NavLink> naar het overzicht </p>
        </>

    );
}

export default Kettingen;