import React from 'react';

function Products(props) {
    return (
        <>
            <div className='outer-content-container'>
                <div className='inner-content-container'>
                    <h1> Producten</h1>
                    <p> Alle producten vind je hier</p>
                    <ul>
                        <li><a href='product/1'>Product 1</a></li>
                        <li><a href='product/2'>Product 2</a></li>
                        <li><a href='product/3'>Product 3</a></li>
                    </ul>

                </div>

            </div>
        </>
)
    ;
}

export default Products;