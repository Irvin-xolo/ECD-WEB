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
  const [alergias, setAlergias] = useState('Sin alergias')
  const [diabetes, setDiabetes] = useState('No')
  const [discapacidad, setDiscapacidad] = useState('No')

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
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });

      if (!response.ok) throw new Error('No se pudo completar la solicitud')

      await response.json();
      alert("Registrado correctamente.")
      setNombre(''); setNacimiento(''); setNoSeguro(''); setTelefono(''); setEmail('');
      setNameEmergencia(''); setTelEmergencia('');
      setAlergias('Sin alergias'); setDiabetes('No'); setDiscapacidad('No');
      navigate("/Dashboard");
    } catch (error) {
      console.error('Error al enviar los datos:', error.message);
      alert('Hubo un problema al procesar la solicitud. Por favor, inténtalo de nuevo más tarde.');
    }
  }

  return (
    <div className="body-pacientes">
      <div className="registro">
        <h1 className="registro-title">Registrar paciente</h1>

        <form onSubmit={handleSubmit}>
          <div className="top">
            <div className="right">
              <div className="input">
                <label htmlFor="nombre">Nombre completo</label>
                <input type="text" id="nombre" placeholder="Nombre completo"
                  value={nombre} onChange={(e) => setNombre(e.target.value)} />
              </div>

              <div className="input">
                <label htmlFor="nacimiento">Fecha de nacimiento</label>
                <input type="date" id="nacimiento"
                  value={nacimiento} onChange={(e) => setNacimiento(e.target.value)} />
              </div>

              <div className="input">
                <label htmlFor="numero_social">Número de seguro social</label>
                <input type="text" id="numero_social" placeholder="Número de seguro social"
                  value={noSeguro} onChange={(e) => setNoSeguro(e.target.value)} />
              </div>

              <div className="input">
                <label htmlFor="telefono">Teléfono</label>
                <input type="tel" id="telefono" placeholder="Teléfono"
                  value={telefono} onChange={(e) => setTelefono(e.target.value)} />
              </div>

              <div className="input">
                <label htmlFor="email">E-mail</label>
                <input type="email" id="email" placeholder="E-mail"
                  value={email} onChange={(e) => setEmail(e.target.value)} />
              </div>
            </div>

            <div className="left">
              <div className="input">
                <label htmlFor="nombreContacto">Nombre del contacto de emergencia</label>
                <input type="text" id="nombreContacto" placeholder="Nombre"
                  value={nameEmergencia} onChange={(e) => setNameEmergencia(e.target.value)} />
              </div>

              <div className="input">
                <label htmlFor="telefonoContacto">Teléfono del contacto de emergencia</label>
                <input type="text" id="telefonoContacto" placeholder="Teléfono"
                  value={telEmergencia} onChange={(e) => setTelEmergencia(e.target.value)} />
              </div>

              <div className="input">
                <label htmlFor="alergias">Alergias</label>
                <select id="alergias" value={alergias} onChange={(e) => setAlergias(e.target.value)}>
                  <option>Sin alergias</option>
                  <option>Penicilina</option>
                  <option>Aspirina</option>
                  <option>Ibuprofeno</option>
                  <option>Latex</option>
                  <option>Mariscos</option>
                  <option>Nueces</option>
                  <option>Polen</option>
                  <option>Picaduras de insectos</option>
                  <option>Leche / lácteos</option>
                  <option>Gluten / trigo</option>
                </select>
              </div>

              <div className="input">
                <label htmlFor="diabetes">Diabetes</label>
                <select id="diabetes" value={diabetes} onChange={(e) => setDiabetes(e.target.value)}>
                  <option>No</option>
                  <option>Sí</option>
                </select>
              </div>

              <div className="input">
                <label htmlFor="discapacidad">Discapacidad</label>
                <select id="discapacidad" value={discapacidad} onChange={(e) => setDiscapacidad(e.target.value)}>
                  <option>No</option>
                  <option>Sí</option>
                </select>
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
  )
}
