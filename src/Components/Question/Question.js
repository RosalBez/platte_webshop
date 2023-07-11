import React from 'react';
import './Question.css'

function Question(props) {
    return (

        <details className="faq-details">
            <summary className="faq-question">
                {props.question}
            </summary>

            <p className='faq-answer'>{props.description}</p>
        </details>
    )

}

export default Question;