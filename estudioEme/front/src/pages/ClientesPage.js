import React, { useState, useEffect } from "react";
import axios from 'axios';
import ClienteItem from '../components/clientes/clienteItem';
import '../styles/components/pages/ClientesPage.css';


const ClientesPage = (props) => {
    const [loading, setLoading] = useState(false);
    const [clientes, setClientes] = useState([]);

    useEffect(() => {
        const cargarClientes = async () => {
            setLoading(true);
            const response = await axios.get('http://localhost:3000/api/clientes');
            setClientes(response.data);
            setLoading(false);
        };

        cargarClientes();
    }, []);

    return (
        <section className="holder" style={{ marginTop: 15 + 'px' }}>
            <div className="row">
                <h2>Clientes</h2>
                {loading ? (
                    <p>Cargando..</p>
                ) : (
                    clientes.map(item => <ClienteItem key={item.id}
                        name={item.nomApellido} cuit={item.nroCuit} email={item.email} />)
                )}
            </div>
        </section>
    );

}

export default ClientesPage;