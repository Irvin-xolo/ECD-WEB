import './Login.css'
import { useNavigate } from "react-router-dom";
import { useState } from "react";

export default function Login(){
    const navigate = useNavigate();
    const [codigo, setCodigo] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        // Aquí podrías validar el código si lo necesitas
        navigate("/dashboard");
    };

    return(
        <>
            <div className="container">
                <div className="content">
                    <div className="right">
                        <img src="/src/assets/images/Enfermera.png" alt="" />
                    </div>
                    <div className="left">
                        <form onSubmit={handleSubmit}>
                            <div className="form-info">
                                <p className='title'>Login</p>
                                <p className='parrafo'>Por favor, ingresa tu código de acceso.</p>
                                <div className="input">
                                    <label htmlFor="codigo">Código</label>
                                    <input
                                        type="password"
                                        name="codigo"
                                        id="codigo"
                                        placeholder='Código de acceso'
                                        value={codigo}
                                        onChange={e => setCodigo(e.target.value)}
                                    />
                                    <div className="button">
                                        <button type="submit">Continuar</button>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}