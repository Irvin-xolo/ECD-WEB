import React, { useState } from 'react';
import './Citas.css';

export default function Citas() {
    const [nombrePaciente, setNombrePaciente] = useState('');
    const [fecha, setFecha] = useState('');
    const [hora, setHora] = useState('');
    const [motivo, setMotivo] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log({
            nombrePaciente,
            fecha,
            hora,
            motivo,
        });
        alert('Cita registrada exitosamente');
        setNombrePaciente('');
        setFecha('');
        setHora('');
        setMotivo('');
    };

    const handleSalir = () => {
        // Redirige al usuario al Dashboard o cualquier otra página
        window.location.href = '/dashboard';
    };

    return (
        <div className="citas-container">
            <div className="body-citas">
                <div className="form-citas">
                    <h3 className="title-citas">Registrar una nueva cita</h3>
                    <form onSubmit={handleSubmit}>
                        <div className="form-group">
                            <label htmlFor="nombrePaciente">Nombre del paciente</label>
                            <input
                                type="text"
                                id="nombrePaciente"
                                placeholder="Ingrese el nombre del paciente"
                                value={nombrePaciente}
                                onChange={(e) => setNombrePaciente(e.target.value)}
                                required
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="fecha">Fecha</label>
                            <input
                                type="date"
                                id="fecha"
                                value={fecha}
                                onChange={(e) => setFecha(e.target.value)}
                                required
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="hora">Hora</label>
                            <input
                                type="time"
                                id="hora"
                                value={hora}
                                onChange={(e) => setHora(e.target.value)}
                                required
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="motivo">Motivo</label>
                            <textarea
                                id="motivo"
                                placeholder="Ingrese el motivo de la cita"
                                value={motivo}
                                onChange={(e) => setMotivo(e.target.value)}
                                required
                            ></textarea>
                        </div>
                        <div className="form-btn">
                            <button type="submit">Registrar Cita</button>
                            <button type="button" onClick={handleSalir} className="btn-salir">Salir</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}