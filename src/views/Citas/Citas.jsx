import React, { useEffect, useState } from "react";
import "./Citas.css";

export default function Citas() {
  const [nombrePaciente, setNombrePaciente] = useState("");
  const [idPaciente, setIdPaciente] = useState(null);
  const [sugerencias, setSugerencias] = useState([]);
  const [fecha, setFecha] = useState("");
  const [hora, setHora] = useState("");
  const [motivo, setMotivo] = useState("");
  const [observaciones, setObservaciones] = useState("");

  useEffect(() => {
    if (!nombrePaciente || nombrePaciente.trim().length < 2) {
      setSugerencias([]);
      return;
    }
    const ctrl = new AbortController();
    const t = setTimeout(async () => {
      try {
        const url = `https://ecd.up.railway.app/v1/pacientes/buscar?nombre=${encodeURIComponent(
          nombrePaciente.trim()
        )}`;
        const res = await fetch(url, { signal: ctrl.signal });
        if (!res.ok) {
          setSugerencias([]);
          return;
        }
        const data = await res.json();
        const lista = data?.rows?.[0] ?? [];
        setSugerencias(lista);
      } catch {
        setSugerencias([]);
      }
    }, 250);
    return () => {
      clearTimeout(t);
      ctrl.abort();
    };
  }, [nombrePaciente]);

  const handlePick = (p) => {
    setNombrePaciente(p.NombreCompleto);
    setIdPaciente(p.id_pacientes);
    setSugerencias([]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const fecha_cita = `${fecha} ${hora}:00`;
    const payload = {
      fecha_cita,
      motivo,
      estado: "Programada",
      observaciones,
      nombre_paciente: nombrePaciente,
    };
    if (idPaciente) payload.id_paciente = idPaciente;

    try {
      const res = await fetch("https://ecd.up.railway.app/v1/citas/", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      if (!res.ok) throw new Error();
      await res.json();
      alert("Cita registrada exitosamente");
      setNombrePaciente("");
      setIdPaciente(null);
      setFecha("");
      setHora("");
      setMotivo("");
      setObservaciones("");
    } catch {
      alert("No se pudo registrar la cita");
    }
  };

  const handleSalir = () => {
    window.location.href = "/dashboard";
  };

  return (
    <div className="citas-container">
      <div className="body-citas">
        <div className="form-citas">
          <h3 className="title-citas">Registrar una nueva cita</h3>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="nombrePaciente">Nombre del paciente</label>
              <div className="autocomplete">
                <input
                  type="text"
                  id="nombrePaciente"
                  placeholder="Ingrese el nombre del paciente"
                  value={nombrePaciente}
                  onChange={(e) => {
                    setNombrePaciente(e.target.value);
                    setIdPaciente(null);
                  }}
                  autoComplete="off"
                  required
                />
                {sugerencias.length > 0 && (
                  <ul className="suggestions">
                    {sugerencias.map((p) => (
                      <li key={p.id_pacientes} onClick={() => handlePick(p)}>
                        {p.NombreCompleto}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </div>

            <div className="form-row">
              <div className="form-group half">
                <label htmlFor="fecha">Fecha</label>
                <input
                  type="date"
                  id="fecha"
                  value={fecha}
                  onChange={(e) => setFecha(e.target.value)}
                  required
                />
              </div>
              <div className="form-group half">
                <label htmlFor="hora">Hora</label>
                <input
                  type="time"
                  id="hora"
                  value={hora}
                  onChange={(e) => setHora(e.target.value)}
                  required
                />
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="motivo">Motivo</label>
              <input
                type="text"
                id="motivo"
                placeholder="Ingrese el motivo de la cita"
                value={motivo}
                onChange={(e) => setMotivo(e.target.value)}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="observaciones">Observaciones</label>
              <textarea
                id="observaciones"
                placeholder="Agrega observaciones relevantes"
                value={observaciones}
                onChange={(e) => setObservaciones(e.target.value)}
              />
            </div>

            <div className="form-btn two">
              <button
                type="button"
                className="btn-outline"
                onClick={handleSalir}
              >
                Salir
              </button>
              <button type="submit">Registrar Cita</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
