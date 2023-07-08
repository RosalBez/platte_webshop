import React from 'react';
import './Button.css'

function Button(props) {
    return (
        <button
            className={props.className}
            type='button'>

            {props.title}

        </button>

    );
}

export default Button;