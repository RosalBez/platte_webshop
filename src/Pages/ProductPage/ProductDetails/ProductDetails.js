import React, { useEffect, useState } from 'react';
import {useParams, useLocation, Link} from 'react-router-dom';
import axios from 'axios';
import './ProductDetails.css';
import basket from '../../../assets/Specifics/icons8-basket-100.png';
import Arrow1 from "../../../assets/photos/Arrow1.png";
import favorite from "../../../assets/Specifics/favorite (Stroke).svg"

function ProductDetails() {
    const { productId } = useParams();
    const location = useLocation();
    const [product, setProduct] = useState(null);
    const [imageSrc, setImageSrc] = useState('');

    useEffect(() => {
        axios.get(`https://fakestoreapi.com/products/${productId}`)
            .then(response => {
                setProduct(response.data);
            })
            .catch(error => {
                console.error('Error fetching product details:', error);
            });

        const searchParams = new URLSearchParams(location.search);
        const image = searchParams.get('image');
        setImageSrc(image);
    }, [productId, location]);

    if (!product) {
        return <p>Loading... productdetails</p>;
    }
    return (

        <div className="inner-content-container">
            <Link to='/products'><img className='go-back-arrow' src={Arrow1} alt='go-back-arrow'/></Link>
            <div className='product-description-overview'>
                <img src={imageSrc} alt='productfoto' className='specific-product-image'></img>
                <section className='product-description'>
                    <h2 className='product-description-title'>{product.title}</h2>
                    <img src={favorite} alt='favorite heart' className='favorite-heart'/>
                    <p className='description-details'>{product.description}</p>
                    <div className='price-basket'>
                        <p className='description-price'>  Price: ${product.price}</p>
                        <img src={basket} alt='basket' className='description-basket'/>
                    </div>
                </section>

            </div>

        </div>
    );
}

export default ProductDetails;