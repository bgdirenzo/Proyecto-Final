import React from "react";
import '../styles/components/pages/ServiciosPage.css';


const ServiciosPage = (props) => {
    return (
        <main class="holder caja" style={{ marginTop: 15 + 'px' }}>
            <div class="contenedor">
                <div class="item">
                    <h2>Manejo de libros contables</h2>
                    <p>
                        Recolectar y registrar operaciones financieras que se vinculan con las cuentas del activo, pasivo, patrimonio, gastos e ingresos
                    </p>
                </div>
                <div class="item">
                    <h2>Control de estados financieros</h2>
                    <p>
                        Elaboración de reportes y documentos contables con el fin de agrupar datos y estudiar el balance general de operaciones.
                    </p>
                </div>
                <div class="item">
                    <h2>Cumplimiento de obligaciones fiscales</h2>
                    <p>
                        Lleva a cabo la declaración de impuestos, revisa registros fiscales y presenta proyecciones en materia tributaria
                    </p>
                </div>
                <div class="item">
                    <h2>Transacciones contables</h2>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi in dicta delectus impedit molestiae
                        odit numquam quidem, iure modi vitae?
                    </p>
                </div>
                <div class="item">
                    <h2>Asesoría</h2>
                    <p>
                        Implementa estrategias para impulsar la productividad económica.Revisar y auditar procedimientos contables o financieros que incumplan con la normativa profesional.
                    </p>
                </div>
                <div class="item">
                    <h2>Consultoría General</h2>
                    <p>
                        Información sobre actualización de impuestos y otras leyes. Presentar adecuadamente las declaraciones juradas en el pago de impuestos.
                    </p>
                </div>
            </div>
        </main>
    );
}

export default ServiciosPage;