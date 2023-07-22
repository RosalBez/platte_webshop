import React from 'react';
import Product from "../../../Components/Product/Product";
import './Armbanden.css'
import Photo2 from '../../../assets/photos/photo2.jpg';
import {Link, NavLink} from "react-router-dom";
import Arrow1 from '../../../assets/photos/Arrow1.jpg'


function Armbanden(props) {
    return (
        <>
            <Link to='/products'><img className='go-back-arrow' src={Arrow1}/></Link>
            <Product title='Armbanden' image={Photo2}></Product>
            <p className='nav-link'> <NavLink to='/products' className='go-back'>Ga terug </NavLink> naar het overzicht </p>
        </>

    );
}

export default Armbanden;