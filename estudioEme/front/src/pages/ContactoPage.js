import React from "react";
import '../styles/components/pages/ContactoPage.css';
import { useState } from "react";
import axios from 'axios';

const ContactoPage = (props) => {

    const initialFrom = {
        nombre: '',
        email: '',
        mensaje: ''
    }

    const [sending, setSending] = useState(false);
    const [msg, setMsg] = useState('');
    const [formData, setFormData] = useState(initialFrom);

    const handleChange = e => {
        const { name, value } = e.target;
        setFormData(oldData => ({
            ...oldData,
            [name]: value
        }));
    }

    const handleSubmit = async e => {
        e.preventDefault();
        setMsg('');
        setSending(true);
        const response = await axios.post('http://localhost:3000/api/contacto', formData);
        setSending(false);
        setMsg(response.data.message);
        if (response.data.error === false) {
            setFormData(initialFrom)
        }
    }

    return (
        <main class="holder contacto" style={{ marginTop: 15 + 'px' }}>
            <div>
                <h2>Contactanos!</h2>
                <form action="/contacto" method="post" onSubmit={handleSubmit} class="formulario">
                    <p>
                        <label for="nombre">Nombre:</label>
                        <input type="text" name="nombre" value={formData.nombre} onChange={handleChange} />
                    </p>
                    <p>
                        <label for="email">Email:</label>
                        <input type="text" name="email" value={formData.email} onChange={handleChange} />
                    </p>
                    <p>
                        <label for="mensaje">Mensaje:</label>
                        <textarea name="mensaje" value={formData.mensaje} onChange={handleChange}></textarea>
                    </p>
                    <p class="acciones"><input type="submit" value="Enviar" /></p>
                </form>
                {sending ? <p>Enviando..</p> : null}
                {msg ? <p>{msg}</p> : null}
            </div>
        </main>
    );
}

export default ContactoPage;