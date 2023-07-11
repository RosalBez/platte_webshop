import React from 'react';
import './Contact.css'


function Contact() {
    const [emailValue, setEmailValue] = React.useState('');
    const [nameValue, setNameValue] = React.useState('')
    const [messageValue, setMessageValue] = React.useState('')

    function handleSubmit(e) {
        e.preventDefault();

        console.log(`
    Naam: ${nameValue},
    Email: ${emailValue},
    Bericht: ${messageValue}
  `);
        e.target.reset();
        setNameValue('');
        setEmailValue('');
        setMessageValue('');

        console.log(`${nameValue}, ${emailValue}, ${messageValue}`);
    }


    return (
        <>

            <form onSubmit={handleSubmit} className='contact-form'>

                <label htmlFor='name' className='label'>
                    naam:
                    <input
                        className='label-input'
                        type='name'
                        id='form-name'
                        name='name'
                        value={nameValue}
                        onChange={(e) => setNameValue(e.target.value)}
                    />
                </label>

                <label htmlFor='form-email' className='label'>
                    email:
                    <input
                        className='label-input'
                        type='email'
                        id='form-email'
                        name='email'
                        value={emailValue}
                        onChange={(e) => setEmailValue(e.target.value)}
                    />
                </label>

                <label htmlFor='message' className='label-message'>
                    bericht:
                    <textarea
                        className='label-input'
                        id='form-message'
                        name='message'
                        value={messageValue}
                        rows={8}
                        cols={50}
                        onChange={(e) => setMessageValue(e.target.value)}
                    />
                </label>
                <span className='button'>

                <button type="submit">Verzend</button>
                </span>

            </form>
        </>

    )
        ;
}

export default Contact;