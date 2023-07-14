import React from 'react';

function ProductPage(props) {
    const {id} = useParams()
    return (
        <>
            <h1> ProductPage 1  met details!! omschrijvingen enzo (bijv. armband roze)</h1>
            <p> dit is de pagina met de product details van <strong> armband 1 </strong></p>
        </>

    );
}

export default ProductPage;