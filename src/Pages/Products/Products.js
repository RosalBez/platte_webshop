import React from 'react';
import {NavLink} from "react-router-dom";
import './Products.css'



function Products(props) {
    return (
        <>
            <div className='outer-content-container'>
                <div className='inner-content-container'>
                    <h1> Producten</h1>
                    <p>  <strong> Alle producten </strong> vind je hier , als je op een foto klikt kom je op de details van het product als je op een titel druk kom je op de pagina met een overzicht van al de spullen binnen die categorie</p>

                    <NavLink to='/Armbanden' className='armbanden'>
                        <p>Armbanden</p>
                    </NavLink>
                    <NavLink to='/Kettingen'>
                        <p>Kettingen</p>
                    </NavLink>
                    <NavLink to='/Brilkoorden'>
                        <p>Brilkoorden</p>
                    </NavLink>



                </div>

            </div>
        </>
)
    ;
}

export default Products;