import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import '../../Styles/Products.css';
import photo1 from '../../assets/photos/photo1.jpg'
import photo2 from '../../assets/photos/photo2.jpg';
import photo3 from '../../assets/photos/photo3.jpg';
import photo4 from '../../assets/photos/photo 4.jpg';
import photo5 from '../../assets/photos/photo 5.jpg';
import photo6 from '../../assets/photos/photo 6.jpg';
import photo7 from '../../assets/photos/photo 7.jpg';
import photo8 from '../../assets/photos/photo 8.jpg';
import photo9 from '../../assets/photos/photo 9.jpg';
import photo10 from '../../assets/photos/photo10.jpg'
import photo11 from '../../assets/photos/photo11.jpg'
import photo12 from '../../assets/photos/photo12.jpg'


// Array van geïmporteerde productafbeeldingen//
export const importedImages = [
    photo1,
    photo2,
    photo3,
    photo4,
    photo5,
    photo6,
    photo7,
    photo8,
    photo9,
    photo10,
    photo11,
    photo12,

];
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
                const response = await axios.get('https://fakestoreapi.com/products', {
                    signal: controller.signal,
                });
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

    return (
        <>
            {loading && <p>Loading...</p>}
            {error && <p>Error: Could not fetch data!</p>}

            <div className="inner-content-container">
                <h1>{props.title}</h1>

                <div className="product-overview">
                    {data.map((product, index) => {
                        // Kiest de afbeelding op basis van het huidige productindex
                        const imageIndex = index % importedImages.length;
                        const imageSrc = importedImages[imageIndex];

                        return (
                            <div className="product-card" key={product.id}>
                                <Link to={`/products/${product.id}?image=${encodeURIComponent(imageSrc)}`}>
                                    <img className='product-image' src={imageSrc} alt={product.title} />
                                    <h4 className='product-title'> {product.title.slice(0, 11)} €{product.price}</h4>
                                </Link>
                            </div>
                        );
                    })}
                </div>
            </div>
        </>
    );
};

export default Product;
