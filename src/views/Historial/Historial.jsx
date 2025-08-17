import { useState } from 'react';
import * as XLSX from 'xlsx';
import "./Historial.css";

export default function Historial() {
    const [buscar, setBuscar] = useState('');
    const [paciente, setPaciente] = useState(null);
    const [diagnosticos, setDiagnosticos] = useState([]);
    const [diagnosticoVisibles, setDiagnosticoVisibles] = useState([]);

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            const response = await fetch(`https://ecd.up.railway.app/v1/pacientes/nombre/${buscar}`);
            const data = await response.json();
            if (data.rows && data.rows.length > 0) {
                const pacienteData = data.rows[0][0];
                const diagnosticosData = data.rows[1].slice(0);
                setPaciente(pacienteData);
                setDiagnosticos(diagnosticosData);
                setDiagnosticoVisibles(new Array(diagnosticosData.length).fill(false));
            } else {
                setPaciente(null);
                setDiagnosticos([]);
                setDiagnosticoVisibles([]);
            }
        } catch (error) {
            console.error(error);
        }
    };

    const toggleDiagnostico = (index) => {
        setDiagnosticoVisibles(prev => {
            const newVisibles = [...prev];
            newVisibles[index] = !newVisibles[index];
            return newVisibles;
        });
    };

    const descargarExcel = (paciente, diagnostico) => {
        try {
            const wsData = [
                ["Nombre", paciente.NombreCompleto],
                ["Temperatura", diagnostico.Temperatura],
                ["Altura", diagnostico.Altura],
                ["Peso", diagnostico.Peso],
                ["Presión Arterial", diagnostico.PresionArterial],
                ["Oxigenación", diagnostico.Oxigenacion],
                ["Latidos por minuto", diagnostico.LatidosPorMinuto],
                ["Respiración por minuto", diagnostico.RespiracionPorMinuto],
                ["Fecha", diagnostico.FechaHora.slice(0, 10)],
                ["Observaciones", diagnostico.Observaciones],
                ["Alergias", paciente.Alergias],
                ["Discapacidades", paciente.Discapacidad],
                ["Diabetes", paciente.Diabetes],
            ];

            const ws = XLSX.utils.aoa_to_sheet(wsData);
            const wb = XLSX.utils.book_new();
            XLSX.utils.book_append_sheet(wb, ws, "Historial");
            XLSX.writeFile(wb, `historial_${paciente.NombreCompleto}.xlsx`);
        } catch (error) {
            console.error('Error al generar el historial:', error);
        }
    };

    return (
        <div className="historial-container">
            <h2>Generar Historial</h2>
            <form onSubmit={handleSubmit} style={{ width: "100%", display: "flex", gap: "0.8rem", marginBottom: "1.5rem" }}>
                <input
                    type="text"
                    placeholder='Nombre del paciente'
                    value={buscar}
                    onChange={(e) => setBuscar(e.target.value)}
                />
                <button className="btn primary" type="submit">Buscar</button>
            </form>

            <div className="historial-list">
                {paciente && diagnosticos.length > 0 ? (
                    diagnosticos.map((diagnostico, index) => (
                        <div key={index} className="historial-item">
                            <div
                                style={{ cursor: "pointer", display: "flex", alignItems: "center", gap: "0.5rem" }}
                                onClick={() => toggleDiagnostico(index)}
                            >
                                <span className="detalle">Diagnóstico {index + 1}</span>
                                <span className="fecha">{diagnostico.FechaHora.slice(0, 10)}</span>
                                <span>
                                    <i className={`bx ${diagnosticoVisibles[index] ? 'bx-chevron-up' : 'bx-chevron-down'}`}></i>
                                </span>
                            </div>

                            {diagnosticoVisibles[index] && (
                                <div className="content-diagnostico">
                                    <div className="right">
                                        <p>Temperatura</p>
                                        <input type="text" value={diagnostico.Temperatura} disabled />
                                        <p>Altura</p>
                                        <input type="text" value={diagnostico.Altura} disabled />
                                        <p>Peso</p>
                                        <input type="text" value={diagnostico.Peso} disabled />
                                        <p>Presión arterial</p>
                                        <input type="text" value={diagnostico.PresionArterial} disabled />
                                        <p>Oxigenación</p>
                                        <input type="text" value={diagnostico.Oxigenacion} disabled />
                                        <p>Latidos por minuto</p>
                                        <input type="text" value={diagnostico.LatidosPorMinuto} disabled />
                                    </div>

                                    <div className="left">
                                        <p>Respiración por minuto</p>
                                        <input type="text" value={diagnostico.RespiracionPorMinuto} disabled />
                                        <p>Fecha</p>
                                        <input type="text" value={diagnostico.FechaHora.slice(0, 10)} disabled />
                                        <p>Observaciones</p>
                                        <input type="text" value={diagnostico.Observaciones} disabled />
                                        <p>Alergias</p>
                                        <input type="text" value={paciente.Alergias} disabled />
                                        <p>Discapacidades</p>
                                        <input type="text" value={paciente.Discapacidad} disabled />
                                        <p>Diabetes</p>
                                        <input type="text" value={paciente.Diabetes} disabled />
                                    </div>
                                </div>
                            )}

                            <div className="btn-download">
                                <button
                                    onClick={(e) => { e.preventDefault(); descargarExcel(paciente, diagnostico); }}
                                    style={{ paddingInline: 40, paddingBlock: 10, fontSize: 14, border: "none", background: "#1e1e1e", color: "#fff", cursor: "pointer", marginTop: 15 }}
                                >
                                    Descargar historial
                                </button>
                            </div>
                        </div>
                    ))
                ) : (
                    <p style={{ marginLeft: 20 }}>No se encontró ningún diagnóstico para el paciente.</p>
                )}
            </div>

            <button
                className="btn soft"
                style={{ marginTop: "2rem" }}
                onClick={() => window.history.back()}
            >
                ← Regresar
            </button>
        </div>
    );
}
