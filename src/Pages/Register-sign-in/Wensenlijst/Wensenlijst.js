import React from 'react';
import {Link} from "react-router-dom";
import Arrow1 from "../../../assets/photos/Arrow1.png";
import './Wensenlijst.css'

function Wensenlijst(props) {
    return (
        <div className='inner-content-container'>
            <h1>Jouw wensen</h1>

            <Link to='/profiel'><img className='go-back-arrow' src={Arrow1} alt='go-back-arrow' /></Link>

            <div className='favorites-overview'>
                <p>wensenlijst</p>
            </div>
        </div>
    );
}

export default Wensenlijst;