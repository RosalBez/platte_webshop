import React, {useState} from 'react';
import './Newsletter.css'

function Newsletter() {
    const [email, setEmail] = useState('');

    const handleInputChange = (e) => {
        setEmail(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Verwerk hier de ingediende e-mail
        console.log('Ingediende e-mail:', email);
        // Reset het invoerveld
        setEmail('');
    };

    return (
        <div className="email-form">
            <h2 className='newsletter-name'>Op de hoogte blijven? Schrijf je in voor de nieuwsbrief:</h2>
            <form onSubmit={handleSubmit}>
                <input
                    type="email"
                    placeholder="Voer je e-mailadres in"
                    value={email}
                    onChange={handleInputChange}
                />
                <button type="submit">Inschrijven</button>
            </form>

        </div>

    );
}

export default Newsletter;
