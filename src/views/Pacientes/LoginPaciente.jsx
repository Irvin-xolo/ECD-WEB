import { useState } from 'react'
import { useNavigate } from "react-router-dom";
import './Paciente.css'

export default function LoginPaciente(){
    const navigate = useNavigate();
    const [nombre, setNombre] = useState('')
    const [nacimiento, setNacimiento] = useState('')
    const [noSeguro, setNoSeguro] = useState('')
    const [telefono, setTelefono] = useState('')
    const [email, setEmail] = useState('')
    const [nameEmergencia, setNameEmergencia] = useState('')
    const [telEmergencia, setTelEmergencia] = useState('')
    const [alergias, setAlergias] = useState('')
    const [diabetes, setDiabetes] = useState('')
    const [discapacidad, setDiscapacidad] = useState('')
    const [error, setError] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault()

        const formData = {
            NombreCompleto: nombre,
            FechaNacimiento: nacimiento,
            NumSeguroSoc: noSeguro,
            Telefono: telefono,
            Email: email,
            ContactoEmergenciaNombre: nameEmergencia,
            ContactoEmergenciaTelefono: telEmergencia,
            Alergias: alergias,
            Diabetes: diabetes,
            Discapacidad: discapacidad
        }

        try {
            const response = await fetch('https://ecd.up.railway.app/v1/pacientes', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData)
            });

            if (!response.ok) {
                throw new Error('No se pudo completar la solicitud')
            }

            const data = await response.json();
            if (response.status === 200) {
                alert("Registrado correctamente.")
                setNombre('')
                setNacimiento('')
                setNoSeguro('')
                setTelefono('')
                setEmail('')
                setNameEmergencia('')
                setTelEmergencia('')
                setAlergias('')
                setDiabetes('')
                setDiscapacidad('')
                navigate("/Dashboard");
            }
        } catch (error) {
            console.error('Error al enviar los datos:', error.message);
            alert('Hubo un problema al procesar la solicitud. Por favor, inténtalo de nuevo más tarde.');
        }
    }

    return (
        <>
            <h1 style={{ color: "#2fb7a1", margin: "2.5rem 0 1.5rem 0", textAlign: "center" }}>Registrar paciente</h1>
            <div className="body-pacientes">
                <div className="registro">
                    <form onSubmit={handleSubmit}>
                        <div className="top">
                            <div className="right">
                                <div className="input">
                                    <label htmlFor="nombre">Nombre completo</label>
                                    <input type="text" name="nombre" id="nombre" placeholder="Nombre completo" value={nombre} onChange={(event) => setNombre(event.target.value)} />
                                </div>
                                <div className="input">
                                    <label htmlFor="nacimiento">Fecha de nacimiento</label>
                                    <input type="date" name="nacimiento" id="nacimiento" value={nacimiento} onChange={(event) => setNacimiento(event.target.value)} />
                                </div>
                                <div className="input">
                                    <label htmlFor="numero_social">Número de seguro social</label>
                                    <input type="text" name="numero_social" id="numero_social" placeholder="Número de seguro social" value={noSeguro} onChange={(event) => setNoSeguro(event.target.value)} />
                                </div>
                                <div className="input">
                                    <label htmlFor="telefono">Teléfono</label>
                                    <input type="tel" name="telefono" id="telefono" placeholder="Teléfono" value={telefono} onChange={(event) => setTelefono(event.target.value)} />
                                </div>
                                <div className="input">
                                    <label htmlFor="email">E-mail</label>
                                    <input type="email" name="email" id="email" placeholder="E-mail" value={email} onChange={(event) => setEmail(event.target.value)} />
                                </div>
                            </div>
                            <div className="left">
                                <div className="input">
                                    <label htmlFor="nombreContacto">Nombre del contacto de emergencia</label>
                                    <input type="text" name="nombreContacto" id="nombreContacto" placeholder="Nombre" value={nameEmergencia} onChange={(event) => setNameEmergencia(event.target.value)} />
                                </div>
                                <div className="input">
                                    <label htmlFor="telefonoContacto">Télefono del contacto de emergencia</label>
                                    <input type="text" name="telefonoContacto" id="telefonoContacto" placeholder="Télefono" value={telEmergencia} onChange={(event) => setTelEmergencia(event.target.value)} />
                                </div>
                                <div className="input">
                                    <label htmlFor="alergias">Alergias</label>
                                    <input type="text" name="alergias" id="alergias" placeholder="Alergias" value={alergias} onChange={(event) => setAlergias(event.target.value)} />
                                </div>
                                <div className="input">
                                    <label htmlFor="diabetes">Diabetes</label>
                                    <input type="text" name="diabetes" id="diabetes" placeholder="Diabetes" value={diabetes} onChange={(event) => setDiabetes(event.target.value)} />
                                </div>
                                <div className="input">
                                    <label htmlFor="discapacidad">Discapacidad</label>
                                    <input type="text" name="discapacidad" id="discapacidad" placeholder="Discapacidad" value={discapacidad} onChange={(event) => setDiscapacidad(event.target.value)} />
                                </div>
                            </div>
                        </div>
                        <div className="button">
                            <a href="/Dashboard">Regresar</a>
                            <button type="submit">Registrar</button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}