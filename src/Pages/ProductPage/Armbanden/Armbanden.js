import React, {useEffect, useState} from 'react';
import axios from "axios";
import {Link, } from "react-router-dom";
import './Armbanden.css'

const Armbanden = () => {
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(false);
    const [data, setData] = useState([]);

    useEffect(() => {
        const controller = new AbortController();

        const fetchData = async () => {
            setLoading(true);
            try {
                setError(false);
                const response = await axios.get('https://fakestoreapi.com/products/category/jewelery', {
                    signal: controller.signal,
                });
                setData(response.data);
            } catch (e) {
                // console.error( e )
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

    /********let op!! navlink naar product ID = Vul het ID nummer/naam in acher ProductDetailsArmbenden/XXXX, anders komt er ID in je beeldscherm te staan!****/
    return (
        <>
            {loading && <p>Loading...</p>}
            {error && <p>Error: Could not fetch data!</p>}


            <div className='inner-content-container'>
                <h1> Armbanden</h1>
                <ul className="product-overview-armbanden">
                    {data.map(product => {
                        return (
                            <li className="product-card-armbanden" key={product.id}>
                                <Link to={`/products/${product.id}`}>
                                    <div className='product-details'>
                                        <img src={product.image} alt={product.title}/>
                                        <h4>{product.title.slice(0, 25)} €{product.price}</h4>

                                    </div>
                                </Link>
                            </li>
                        )
                    })}
                </ul>


            </div>
            <p className='go-back-link'><Link to='../../Products' className='link'> Ga terug</Link> naar het overzicht.</p>
        </>


    );
}

export default Armbanden;