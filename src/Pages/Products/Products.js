import React, {useEffect, useState} from 'react';
import {Link, NavLink} from "react-router-dom";
import axios from "axios";
import './Products.css'

const Products = () => {
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(false);
    const [data, setData] = useState([]);

    useEffect(() => {
        const controller = new AbortController();

        const fetchData = async () => {
            setLoading(true);
            try {
                setError(false);
                const response = await axios.get('https://fakestoreapi.com/products', {
                    signal: controller.signal,
                });
                setData(response.data);
            } catch (e) {
                console.error( e )
                setError(true)

                if (axios.isCancel(e)) {
                    console.log('The axios request was cancelled')
                } else {
                    console.error(e)
                }
            }
            setLoading(false);
        }
        fetchData()
        return function cleanup() {
            controller.abort();
        }
    }, [])

    return (
        <>
            {loading && <p>Loading...</p>}
            {error && <p>Error: Could not fetch data!</p>}

            <div className='inner-content-container'>
                <h1> Alle producten</h1>
                <nav className='nav-products'>
                    <p><NavLink to='/Armbanden' className='product-category'>Armbanden</NavLink></p>
                    <p><NavLink to='/Kettingen' className='product-category'>Kettingen</NavLink></p>
                    <p><NavLink to='/Brilkoorden' className='product-category'>Brilkoorden</NavLink></p>
                </nav>
                <ul className="products-overview">
                    {data.map(product => {
                        return (
                            <li className="product-card" key={product.id}>
                                <Link to={`/products/${product.id}`}>
                                    <div className='product-details'>
                                        <img src={product.image} alt={product.title}/>
                                        <h4>{product.title.slice(0, 25) } €{product.price}</h4>

                                    </div>
                                </Link>
                            </li>
                        )
                    })}
                </ul>
            </div>
        </>
    );
};

export default Products;