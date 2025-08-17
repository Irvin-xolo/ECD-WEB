import { useEffect, useState } from 'react'
import './Diagnostico.css'

export default function Diagnostico(){
    const [pacientes, setPacientes] = useState([])
    const [nombre, setNombre] = useState('');
    const [temperatura, setTemperatura] = useState('')
    const [altura, setAltura] = useState('')
    const [peso, setPeso] = useState('')
    const [presion, setPresion] = useState('')
    const [oxigenacion, setOxigenacion] = useState('')
    const [latidos, setLatidos] = useState('')
    const [respiracion, setRespiracion] = useState('')
    const [observaciones, setObservaciones] = useState('')

    // Diagnóstico buscado
    const [diagnosticosBuscados, setDiagnosticosBuscados] = useState([]);
    const [buscarDiagnostico, setBuscarDiagnostico] = useState('');

    // Estado para mostrar/ocultar resultados de diagnóstico
    const [mostrarResultados, setMostrarResultados] = useState(false);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('http://ecd.up.railway.app/v1/pacientes')
                if (!response.ok) {
                    throw new Error('No se pudo obtener los datos del usuario')
                }
                const data = await response.json()
                const pacientesData = data.rows[0].map(row => ({
                    id: row.id_pacientes,
                    NombreCompleto: row.NombreCompleto
                }));
                setPacientes(pacientesData);
            } catch (error) {
                console.error('Error al obtener los datos: ', error.message)
            }
        }
        fetchData()
    }, [])

    // Buscar diagnóstico por nombre
    const handleBuscarDiagnostico = async (e) => {
        e.preventDefault();
        if (!buscarDiagnostico) return;
        try {
            const response = await fetch(`https://ecd.up.railway.app/v1/diagnostico/nombre/${encodeURIComponent(buscarDiagnostico)}`);
            if (!response.ok) throw new Error('No se pudo obtener el diagnóstico');
            const data = await response.json();
            // El endpoint regresa data.rows[0] como array de diagnósticos
            const resultados = Array.isArray(data.rows) && Array.isArray(data.rows[0]) ? data.rows[0] : [];
            setDiagnosticosBuscados(resultados);
            setMostrarResultados(resultados.length > 0);
        } catch (error) {
            setDiagnosticosBuscados([]);
            setMostrarResultados(false);
            alert('No se encontró diagnóstico o hubo un error.');
        }
    }

    // Registrar diagnóstico
    const handleSubmit = async (e) => {
        e.preventDefault()
        const now = new Date();
        const year = now.getFullYear();
        const month = String(now.getMonth() + 1).padStart(2, '0');
        const day = String(now.getDate()).padStart(2, '0');
        const fecha = `${year}/${month}/${day}`;

        const formData = {
            NombreCompleto: nombre,
            Temperatura: temperatura,
            Altura: altura, 
            Peso: peso, 
            PresionArterial: presion, 
            Oxigenacion: oxigenacion, 
            LatidosPorMinuto: latidos,
            RespiracionPorMinuto: respiracion, 
            FechaHora: fecha, 
            Observaciones: observaciones
        }

        try{
            const response = await fetch('https://ecd.up.railway.app/v1/diagnostico/', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData)
            });

            if(!response.ok){
                throw new Error('No se pudo completar la solicitud')
            }

            const data = await response.json();
            if(response.status === 200){
                alert("Diagnóstico registrado correctamente.")
                setTemperatura('')
                setAltura('')
                setPeso('')
                setPresion('')
                setOxigenacion('')
                setLatidos('')
                setRespiracion('')
                setObservaciones('')
            }
        }catch(error){
            console.error('Error al enviar los datos:', error.message);
            alert('Hubo un problema al procesar la solicitud. Por favor, inténtalo de nuevo más tarde.');
        }
    }

    return (
        <>
            <div className="body-diagnostico">
                <div className="registro-diagnostico">
                    <h1 style={{ color: "#2fb7a1", marginBottom: "1.5rem", textAlign: "center" }}>Diagnósticos</h1>
                    
                    {/* Buscar diagnóstico */}
                    <div className="search" style={{ marginBottom: "2rem" }}>
                        <form onSubmit={handleBuscarDiagnostico}>
                            <input
                                type="text"
                                name="buscarDiagnostico"
                                id="buscarDiagnostico"
                                placeholder="Buscar diagnóstico por nombre"
                                value={buscarDiagnostico}
                                onChange={e => setBuscarDiagnostico(e.target.value)}
                            />
                            <button type="submit">Buscar diagnóstico</button>
                        </form>
                    </div>

                    {/* Resultados de diagnóstico sobrepuestos */}
                    {mostrarResultados && diagnosticosBuscados.length > 0 && (
                        <div
                            style={{
                                position: "fixed",
                                top: 0,
                                left: 0,
                                width: "100vw",
                                height: "100vh",
                                background: "rgba(244,247,255,0.95)",
                                zIndex: 1000,
                                display: "flex",
                                justifyContent: "center",
                                alignItems: "center"
                            }}
                        >
                            <div style={{
                                background: "#fff",
                                borderRadius: "16px",
                                boxShadow: "0 4px 16px rgba(47,183,161,0.13)",
                                padding: "2.5rem 2rem",
                                maxWidth: "500px",
                                width: "90vw",
                                position: "relative"
                            }}>
                                <h3 style={{ color: "#2fb7a1", marginBottom: "1rem", textAlign: "center" }}>Resultado de diagnóstico</h3>
                                <ul style={{ listStyle: "none", padding: 0 }}>
                                    <li style={{ background: "#f9fcff", borderRadius: "10px", padding: "1rem", marginBottom: "1rem" }}>
                                        <strong>Paciente:</strong> {diagnosticosBuscados[0]?.NombreCompleto || nombre}<br />
                                        <strong>Temperatura:</strong> {diagnosticosBuscados[0]?.Temperatura}<br />
                                        <strong>Altura:</strong> {diagnosticosBuscados[0]?.Altura}<br />
                                        <strong>Peso:</strong> {diagnosticosBuscados[0]?.Peso}<br />
                                        <strong>Presión arterial:</strong> {diagnosticosBuscados[0]?.PresionArterial}<br />
                                        <strong>Oxigenación:</strong> {diagnosticosBuscados[0]?.Oxigenacion}<br />
                                        <strong>Latidos por minuto:</strong> {diagnosticosBuscados[0]?.LatidosPorMinuto}<br />
                                        <strong>Respiración por minuto:</strong> {diagnosticosBuscados[0]?.RespiracionPorMinuto}<br />
                                        <strong>Fecha:</strong> {diagnosticosBuscados[0]?.FechaHora}<br />
                                        <strong>Observaciones:</strong> {diagnosticosBuscados[0]?.Observaciones}
                                    </li>
                                </ul>
                                <button
                                    className="btn soft"
                                    style={{ marginTop: "1rem", width: "100%" }}
                                    onClick={() => {
                                        setMostrarResultados(false);
                                        setDiagnosticosBuscados([]);
                                        setBuscarDiagnostico("");
                                    }}
                                >
                                    ← Regresar a diagnóstico
                                </button>
                            </div>
                        </div>
                    )}

                    {/* Registrar diagnóstico */}
                    {!mostrarResultados && (
                        <form onSubmit={handleSubmit}>
                            <div className="top">
                                <div className="right">
                                    <div className="input">
                                        <label htmlFor="nombre">Nombre completo</label>
                                        <input
                                            type="text"
                                            name="nombre"
                                            id="nombre"
                                            placeholder="Nombre completo"
                                            value={nombre}
                                            onChange={event => setNombre(event.target.value)}
                                        />
                                    </div>
                                    <div className="input">
                                        <label htmlFor="temperatura">Temperatura</label>
                                        <input type="text" name="temperatura" id="temperatura" placeholder="Temperatura" value={temperatura} onChange={(event) => setTemperatura(event.target.value)} />
                                    </div>
                                    <div className="input">
                                        <label htmlFor="altura">Altura</label>
                                        <input type="text" name="altura" id="altura" placeholder="Altura" value={altura} onChange={(event) => setAltura(event.target.value)} />
                                    </div>
                                    <div className="input">
                                        <label htmlFor="peso">Peso</label>
                                        <input type="tel" name="peso" id="peso" placeholder="Peso" value={peso} onChange={(event) => setPeso(event.target.value)} />
                                    </div>
                                    <div className="input">
                                        <label htmlFor="presion_arterial">Presión arterial</label>
                                        <input type="text" name="presion_arterial" id="presion_arterial" placeholder="Presión arterial" value={presion} onChange={(event) => setPresion(event.target.value)} />
                                    </div>
                                </div>
                                <div className="left">
                                    <div className="input">
                                        <label htmlFor="oxigenacion">Oxigenación</label>
                                        <input type="text" name="oxigenacion" id="oxigenacion" placeholder="Oxigenación" value={oxigenacion} onChange={(event) => setOxigenacion(event.target.value)} />
                                    </div>
                                    <div className="input">
                                        <label htmlFor="latidos">Latidos por minuto</label>
                                        <input type="text" name="latidos" id="latidos" placeholder="Latidos" value={latidos} onChange={(event) => setLatidos(event.target.value)} />
                                    </div>
                                    <div className="input">
                                        <label htmlFor="respiracion">Respiración por minuto</label>
                                        <input type="text" name="respiracion" id="respiracion" placeholder="Respiración" value={respiracion} onChange={(event) => setRespiracion(event.target.value)} />
                                    </div>
                                    <div className="input">
                                        <label htmlFor="observaciones">Observaciones</label>
                                        <textarea name="observaciones" id="observaciones" rows="4" placeholder="Observaciones" value={observaciones} onChange={(event) => setObservaciones(event.target.value)}></textarea>
                                    </div>
                                </div>
                            </div>
                            <div className="button">
                                <a href="/Dashboard">Regresar</a>
                                <button type="submit">Registrar diagnóstico</button>
                            </div>
                        </form>
                    )}
                </div>
            </div>
        </>
    )
}
