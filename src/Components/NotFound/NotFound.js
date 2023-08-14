import React from 'react';
import {Link} from "react-router-dom";

function NotFound(props) {
    return (
        <div className='inner-content-container'>
            <h2> Oeps, deze pagina bestaat niet</h2>
            <p> brengt me terug naar de <Link to='/'> homepagina </Link> </p>
        </div>
    );
}

export default NotFound;