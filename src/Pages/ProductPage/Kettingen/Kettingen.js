import React from 'react';
import {NavLink} from "react-router-dom";
import Product from "../../../Components/Product/Product";
import Photo1 from '../../../assets/photos/photo1.jpg';

function Kettingen(props) {
    return (
        <>
            <Product title='Kettingen' image={Photo1}></Product>
            <p className='nav-link'> <NavLink to='/products' className='go-back'>Ga terug </NavLink> naar het overzicht </p>
        </>

    );
}

export default Kettingen;