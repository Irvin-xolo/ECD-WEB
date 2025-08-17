import { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import './Login.css'

export default function LoginPersonal(){
    const [nombre, setNombre] = useState('')
    const [codigo, setCodigo] = useState('')
    const navigate = useNavigate()

    const handleLogin = async (e) => {
        e.preventDefault()
        try {
            // Enviar datos como empleado
            const response = await axios.post('https://ecd.up.railway.app/v1/auth/login', {
                nombre: nombre,
                codigo: codigo,
                
            })
            localStorage.setItem("auth", "true")
            navigate('/dashboard')
        } catch (error) {
            alert('Por favor, verifica que las credenciales sean correctas.')
            console.error(error)
        }
    }

    return (
        <div className="container">
            <div className="content">
                <div className="right">
                    <img src="/src/assets/images/Enfermera.png" alt="" />
                </div>
                <div className="left">
                    <form onSubmit={handleLogin}>
                        <div className="form-info">
                            <p className='title'>Login</p>
                            <p className='parrafo'>Por favor, ingresa tus credenciales.</p>
                            <div className="input">
                                <label htmlFor="nombre">Nombre</label>
                                <input
                                    type="text"
                                    name="nombre"
                                    id="nombre"
                                    placeholder='Nombre del empleado'
                                    value={nombre}
                                    onChange={(event) => setNombre(event.target.value)}
                                />
                                <label htmlFor="codigo">Código</label>
                                <input
                                    type="text"
                                    name="codigo"
                                    id="codigo"
                                    placeholder='Código de empleado'
                                    value={codigo}
                                    onChange={(event) => setCodigo(event.target.value)}
                                />
                                <div className="button">
                                    <button type="submit">Ingresar</button>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}
