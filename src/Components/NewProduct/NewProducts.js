import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './NewProducts.css';
import {Link, NavLink} from "react-router-dom";

const NewProducts = (props) => {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);
    const [newestProducts, setNewestProducts] = useState([]);

    useEffect(() => {
        const fetchNewestProducts = async () => {
            setLoading(true);
            try {
                setError(false);
                const response = await axios.get('https://fakestoreapi.com/products');
                const products = response.data;
                // Sorteer de producten op basis van de nieuwste eerst
                const sortedProducts = products.sort(
                    (a, b) => new Date(b.createdAt) - new Date(a.createdAt)
                );
                // Haal de nieuwste producten op (bijv. de eerste 4)
                const newest = sortedProducts.slice(0, 8);
                setNewestProducts(newest);
            } catch (error) {
                setError(true);
                console.error(error);
            }
            setLoading(false);
        };

        fetchNewestProducts();
    }, []);

    return (
        <>
            {loading && <p>Loading...</p>}
            {error && <p>Error: Could not fetch data!</p>}

            <div className="inner-content-container">
                <Link to='./products' className='new-homepage'><h1>NIEUW</h1></Link>
                <ul className="product-overview">
                    {newestProducts.map((product) => (
                        <li className="product-card" key={product.id}>
                            <div className="product-details">
                                <img src={props.image} alt={product.title} />
                                <h4 className="product-title">
                                    {product.title.slice(0, 11)} €{product.price}
                                </h4>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        </>
    );
};

export default NewProducts;
