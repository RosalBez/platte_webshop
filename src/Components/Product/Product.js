import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import './Product.css';

const Product = (props) => {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);
    const [data, setData] = useState([]);

    useEffect(() => {
        const controller = new AbortController();

        const fetchData = async () => {
            setLoading(true);
            try {
                setError(false);
                const response = await axios.get( 'https://fakestoreapi.com/products', {
                    signal: controller.signal,
                    }
                );
                setData(response.data);
            } catch (e) {
                if (!axios.isCancel(e)) {
                    setError(true);
                    console.error(e);
                }
            }
            setLoading(false);
        };

        fetchData();

        return function cleanup() {
            controller.abort();
        };
    }, []);

    /********let op!! navlink naar product ID = Vul het ID nummer/naam in acher ProductDetailsArmbenden/XXXX, anders komt er ID in je beeldscherm te staan!****/
    return (
        <>
            {loading && <p>Loading...</p>}
            {error && <p>Error: Could not fetch data!</p>}

            <div className="inner-content-container">
                <h1>{props.title}</h1>
                <ul className="product-overview">
                    {data.map((product) => {
                        return (
                            <li className="product-card" key={product.id}>
                                <Link to={`/products/${product.id}`}>
                                    <div className="product-details">
                                        <img src={props.image} alt={product.title} />
                                        <h4 className='product-title'>
                                            {product.title.slice(0, 11)} €{product.price}
                                        </h4>
                                    </div>
                                </Link>
                            </li>
                        );
                    })}
                </ul>
            </div>

        </>
    );
};

export default Product;
