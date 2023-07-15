import React from 'react';
import {Link} from "react-router-dom";
import {useParams} from "react-router-dom";
import './ProductDetailsArmbanden.css'

const ProductDetailsArmbanden = () => {

    const {id} = useParams()

    return (
        <>
            <div className='outer-content-container'>
                <div className='inner-content-container'>
                    <h1> ProductPage { id }</h1>
                    <p> dit is de pagina met de product details van <strong> armband { id } </strong></p>
                    <p><Link to='../../Armbanden'> Ga terug</Link> naar het overzicht.</p>
                </div>
            </div>

        </>

    );
}

export default ProductDetailsArmbanden;