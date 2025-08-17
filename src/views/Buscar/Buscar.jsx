// src/views/Buscar/index.jsx
import React, { useState } from "react";
import "./Buscar.css";

const Buscar = () => {
  const [query, setQuery] = useState("");
  const [resultados, setResultados] = useState([]);
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setResultados([]);
    if (!query) return setError("Ingresa un nombre para buscar.");
    try {
      const res = await fetch(`https://ecd.up.railway.app/v1/pacientes/nombre/${encodeURIComponent(query)}`);
      const data = await res.json();
      if (data.rows && data.rows.length > 0) {
        setResultados(data.rows[0]);z
      } else {
        setError("No se encontraron pacientes.");
      }
    } catch (error) {
      setError("Error en la búsqueda.");
      console.error("Error en la búsqueda:", error);
    }
  };

  return (
    <div className="buscar-container">
      <h2>Buscar Paciente</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Buscar..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <button type="submit">Buscar</button>
      </form>
      {error && <div style={{ color: "red", marginTop: "1rem" }}>{error}</div>}
      {resultados.length > 0 && (
        <div style={{ marginTop: "2rem" }}>
          <h3>Resultados:</h3>
          <ul>
            {resultados.map((paciente, idx) => (
              <li key={idx} style={{ marginBottom: "1.2rem", background: "#f9fcff", borderRadius: "10px", padding: "1rem", boxShadow: "0 2px 8px rgba(47,183,161,0.07)" }}>
                <strong>Nombre:</strong> {paciente.NombreCompleto}<br />
                <strong>Fecha de nacimiento:</strong> {paciente.FechaNacimiento ? paciente.FechaNacimiento.slice(0,10) : ""}<br />
                <strong>Número de seguro social:</strong> {paciente.NumSeguroSoc}<br />
                <strong>Alergias:</strong> {paciente.Alergias}<br />
                <strong>Diabetes:</strong> {paciente.Diabetes}<br />
                <strong>Discapacidad:</strong> {paciente.Discapacidad}
              </li>
            ))}
          </ul>
        </div>
      )}
      <button
        className="btn soft"
        style={{ marginTop: "1.5rem" }}
        onClick={() => window.history.back()}
      >
        ← Regresar
      </button>
    </div>
  );
};

export default Buscar;
