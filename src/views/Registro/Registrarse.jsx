import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Registro.css";

export default function Registrarse() {
  const navigate = useNavigate();
  const [nombre, setNombre] = useState("");
  const [cargo, setCargo] = useState("");
  const [codigo, setCodigo] = useState("");
  const [error, setError] = useState("");
  const [aceptaTerminos, setAceptaTerminos] = useState(false);
  const [registroExitoso, setRegistroExitoso] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!nombre || !cargo || !codigo) {
      setError("Completa todos los campos.");
      setRegistroExitoso(null);
      return;
    }
    if (!aceptaTerminos) {
      setError("Debes aceptar los términos y condiciones.");
      setRegistroExitoso(null);
      return;
    }
    setError("");
    const formData = { nombre, cargo, codigo };

    try {
      const response = await fetch("https://ecd.up.railway.app/v1/auth/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      const data = await response.json();
      if (response.ok) {
        setRegistroExitoso(true);
        setError("");
        setNombre("");
        setCargo("");
        setCodigo("");
      } else {
        setRegistroExitoso(false);
        setError(data.message || "No se pudo registrar correctamente.");
      }
    } catch {
      setError("Error de conexión con el servidor.");
      setRegistroExitoso(false);
    }
  };

  return (
    <div className="rc-page">
      <main className="rc-main">
        <h1 className="rc-title">Registrar consultorio</h1>

        <div className="rc-body">
          <form className="rc-form" onSubmit={handleSubmit}>
            <h3 className="rc-subtitle">Crear cuenta</h3>

            <div className="rc-group">
              <label className="rc-label" htmlFor="nombre">Nombre completo</label>
              <input
                className="rc-input"
                id="nombre"
                type="text"
                placeholder="Nombre completo"
                value={nombre}
                onChange={(e) => setNombre(e.target.value)}
              />
            </div>

            <div className="rc-group">
              <label className="rc-label" htmlFor="cargo">Cargo</label>
              <input
                className="rc-input"
                id="cargo"
                type="text"
                placeholder="Cargo"
                value={cargo}
                onChange={(e) => setCargo(e.target.value)}
              />
            </div>

            <div className="rc-group">
              <label className="rc-label" htmlFor="codigo">Código</label>
              <input
                className="rc-input"
                id="codigo"
                type="text"
                placeholder="Código"
                value={codigo}
                onChange={(e) => setCodigo(e.target.value)}
              />
            </div>

            <div className="rc-check">
              <input
                className="rc-check-input"
                id="aceptaTerminos"
                type="checkbox"
                checked={aceptaTerminos}
                onChange={(e) => setAceptaTerminos(e.target.checked)}
              />
              <label className="rc-check-label" htmlFor="aceptaTerminos">
                Acepto los{" "}
                <span className="rc-link" onClick={() => navigate("/aviso-privacidad")}>
                  Términos y Condiciones
                </span>
              </label>
            </div>

            {error && <div className="rc-msg rc-msg-error">{error}</div>}
            {registroExitoso === true && (
              <div className="rc-msg rc-msg-ok">Registrado correctamente.</div>
            )}
            {registroExitoso === false && !error && (
              <div className="rc-msg rc-msg-error">No se pudo registrar correctamente.</div>
            )}

            <div className="rc-actions">
              <button type="button" className="rc-btn rc-btn--outline" onClick={() => navigate(-1)}>
                ← Regresar
              </button>
              <button type="submit" className="rc-btn">Registrarse</button>
            </div>
          </form>
        </div>
      </main>
    </div>
  );
}
