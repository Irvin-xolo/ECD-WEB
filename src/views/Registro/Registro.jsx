import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import './Registro.css'

export default function Registro() {
    const navigate = useNavigate();
    const [nombre, setNombre] = useState('')
    const [cargo, setCargo] = useState('')
    const [codigo, setCodigo] = useState('')

    const handleSubmit = async (e) => {
        e.preventDefault()
        alert("Empleado registrado correctamente.");
        setNombre('');
        setCargo('');
        setCodigo('');
    }

    return (
        <div className="body-buscar">
            <main>
                <header>Registrar empleado</header>
                <div className="body-register">
                    <div className="form-register">
                        <form onSubmit={handleSubmit}>
                            <h3 className="title-register">Por favor, rellene los campos.</h3>
                            <div className="form-group">
                                <label htmlFor="nombre">Nombre</label>
                                <input
                                    type="text"
                                    name="nombre"
                                    id="nombre"
                                    placeholder='Nombre completo'
                                    value={nombre}
                                    onChange={e => setNombre(e.target.value)}
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="cargo">Cargo</label>
                                <input
                                    type="text"
                                    name="cargo"
                                    id="cargo"
                                    placeholder='Cargo'
                                    value={cargo}
                                    onChange={e => setCargo(e.target.value)}
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="codigo">Código</label>
                                <input
                                    type="text"
                                    name="codigo"
                                    id="codigo"
                                    placeholder='Código de empleado'
                                    value={codigo}
                                    onChange={e => setCodigo(e.target.value)}
                                />
                            </div>
                            <div className="form-btn">
                                <button type="submit">Registrar</button>
                            </div>
                        </form>
                        <div className="form-btn" style={{ marginTop: "1rem" }}>
                            <button
                                type="button"
                                className="btn soft"
                                onClick={() => navigate(-1)}
                            >
                                ← Regresar
                            </button>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    )
}
