import React from 'react';
import './SearchBar.css';

function SearchBar() {
    return (
        <input className="searchbar"
          type="text"
          name="search"
          placeholder="Zoek een product"
      />

    );
}

export default SearchBar;