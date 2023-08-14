import React from 'react';
import { NavLink } from 'react-router-dom';
import Product from "../../Components/Product/Product";
import './ProductsOverview.css'


function ProductsOverview() {
    return (
        <>
            <h1> Alle producten </h1>
            <nav className="nav-products">
                <h4>
                    <NavLink to="/Armbanden" className="product-category">
                        Armbanden
                    </NavLink>
                </h4>
                <h4>
                    <NavLink to="/Kettingen" className="product-category">
                        Kettingen
                    </NavLink>
                </h4>
                <h4>
                    <NavLink to="/Brilkoorden" className="product-category">
                        Brilkoorden
                    </NavLink>
                </h4>
            </nav>

            <Product/>


        </>
    );
};


export default ProductsOverview;