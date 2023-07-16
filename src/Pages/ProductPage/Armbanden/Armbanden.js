import React from 'react';
import Product from "../../../Components/Product/Product";
import './Armbanden.css'
import Photo2 from '../../../assets/photos/photo2.jpg';
import {NavLink} from "react-router-dom";


function Armbanden(props) {
    return (
        <>
            <Product title='Armbanden' image={Photo2}></Product>
            <p className='nav-link'> <NavLink to='/products' className='go-back'>Ga terug </NavLink> naar het overzicht </p>
        </>

    );
}

export default Armbanden;