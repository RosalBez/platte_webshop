import React from 'react';

function Question(props) {
    return (

        <details className="faq-details">
            <summary className="faq-summary">
                {props.question}
            </summary>

            <p className='faq-answer'>{props.description}</p>
        </details>
    )

}

export default Question;