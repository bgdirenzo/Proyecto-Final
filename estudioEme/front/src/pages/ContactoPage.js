import React from "react";
import '../styles/components/pages/ContactoPage.css';


const ContactoPage = (props) => {
    return (
        <main class="holder contacto" style={{marginTop: 15 + 'px'}}>
        <div>
            <h2>Contactanos!</h2>
            <form action="" method="" class="formulario">
                <p>
                    <label for="nombre">Nombre:</label>
                    <input type="text" name="" />
                </p>
                <p>
                    <label for="email">Email:</label>
                    <input type="text" name="" />
                </p>
                <p>
                    <label for="mensaje">Mensaje:</label>
                    <textarea name=""></textarea>
                </p>
                <p class="acciones"><input type="submit" value="Enviar" /></p>
            </form>
        </div>
    </main>
    );
}

export default ContactoPage;