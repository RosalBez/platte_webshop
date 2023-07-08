import React from "react";


function Card(props) {
    return (
        <section
            className={props.className}>
            <h2>{props.title}</h2>
            {props.children}
        </section>
    );
}

export default Card;