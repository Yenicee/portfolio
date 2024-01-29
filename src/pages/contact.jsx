import React, { useState } from 'react';


const Contact = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleNombreChange = (event) => {
        setName(event.target.value);
    };

    const handleEmailChange = (event) => {
        setEmail(event.target.value);
    };

    const handleMensajeChange = (event) => {
        setMessage(event.target.value);
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        setIsSubmitting(true);

        // Guardar los datos en el localStorage
        localStorage.setItem('name', name);
        localStorage.setItem('email', email);
        localStorage.setItem('message', message);

        setEmail('');
        setName('');
        setMessage('');

        setIsSubmitting(false);
    };

    return (
        <div className="form">
            <h1>Got a project?Let's talk</h1>
            <form onSubmit={handleSubmit}>
                <label>
                    <input
                        type="text"
                        placeholder="Name"
                        value={name}
                        onChange={handleNombreChange}
                    />
                </label>
                <label>
                    <input
                        placeholder="Email"
                        type="email"
                        value={email}
                        onChange={handleEmailChange}
                    />
                </label>
                <textarea
                    value={message}
                    onChange={handleMensajeChange}
                    name=""
                    id=""
                    cols="30"
                    rows="10"
                >
                    Leave me a message
                </textarea>

                <button className="learn-more" type="submit" disabled={isSubmitting}>
                    {isSubmitting ? 'Enviando...' : 'Enviar'}
                </button>
            </form>
        </div>
    );
};

export default Contact;