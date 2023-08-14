import React, { useState } from 'react';
import './SearchBar.css';
import {Link} from "react-router-dom";
import {importedImages} from '../Product/Product'



const SearchBar = () => {
    const [searchItem, setSearchItem] = useState('');
    const [searchResults, setSearchResults] = useState([]);


    const handleInputChange = (event) => {
        const value = event.target.value;
        setSearchItem(value);
        fetchSearchResults(value);
    };

    const fetchSearchResults = (searchTerm) => {
        if (searchTerm.length === 0) {
            setSearchResults([]);
            return;
        }

        fetch(`https://fakestoreapi.com/products?limit=4}`)
            .then((res) => res.json())
            .then((data) => {
                const filteredResults = data.filter(product =>
                    product.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                    product.category.toLowerCase().includes(searchTerm.toLowerCase()) ||
                    product.description.toLowerCase().includes(searchTerm.toLowerCase())
                ).slice(0, 4);
                setSearchResults(filteredResults);
            })
            .catch((error) => {
                console.error('Error fetching data:', error);
            });
    };
    const clearSearchResults = () => {
        setSearchResults([]);
    };

    return (
        <div>
            <input
                className="searchbar"
                type="text"
                name="search"
                placeholder="Zoek een product"
                value={searchItem}
                onChange={handleInputChange}
            />
            <div id="searchResults" className='search-results'>
                {searchResults.length === 0 ? null : (
                    searchResults.map((product, index) => (
                        <Link
                            key={product.id}
                            to={`/products/${product.id}?image=${encodeURIComponent(importedImages[index % importedImages.length])}`}
                            onClick={clearSearchResults}
                        >
                            <div className="product-details">
                                <img className='product-image' src={importedImages[index % importedImages.length]} alt={product.title} />
                                <h4 className='product-title'>
                                    {product.title.slice(0, 11)} €{product.price}
                                </h4>
                            </div>
                        </Link>
                    ))
                )}
            </div>
        </div>
    );
};

export default SearchBar;
