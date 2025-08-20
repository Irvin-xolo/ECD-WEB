import React, { useEffect, useMemo, useState } from 'react';
import './CitasLista.css';

export default function CitasLista() {
  const [citas, setCitas] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [query, setQuery] = useState('');

  const fetchCitas = async () => {
    setLoading(true);
    setError('');
    try {
      const res = await fetch('https://ecd.up.railway.app/v1/citas/', { headers: { Accept: 'application/json' } });
      const data = await res.json().catch(() => null);
      if (!res.ok) throw new Error(typeof data === 'string' ? data : (data?.message || 'Error al cargar citas'));
      let list = [];
      if (Array.isArray(data)) list = data;
      else if (Array.isArray(data?.rows?.[0])) list = data.rows[0];
      else if (Array.isArray(data?.rows)) list = data.rows;
      else if (Array.isArray(data?.data)) list = data.data;
      else if (data) list = [data];
      setCitas(list);
    } catch (e) {
      setError(e.message || 'Error al cargar citas');
      setCitas([]);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => { fetchCitas(); }, []);

  const filtradas = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return citas;
    return citas.filter(c =>
      [c.paciente, c.motivo, c.estado, c.observaciones]
        .filter(Boolean)
        .join(' ')
        .toLowerCase()
        .includes(q)
    );
  }, [citas, query]);

  const fmtFecha = (s) => {
    if (!s) return '';
    const d = new Date(s);
    if (isNaN(d)) return s;
    return d.toLocaleDateString('es-MX', { day: '2-digit', month: '2-digit', year: 'numeric' });
  };

  const fmtHora = (s) => {
    if (!s) return '';
    const d = new Date(s);
    if (isNaN(d)) return '';
    return d.toLocaleTimeString('es-MX', { hour: '2-digit', minute: '2-digit' });
  };

  const claseEstado = (estado) => {
    const s = String(estado || '').toLowerCase();
    if (s.includes('cancel')) return 'badge badge-cancelada';
    if (s.includes('complet')) return 'badge badge-completada';
    return 'badge badge-programada';
  };

  return (
    <div className="citas-list-container">
      <div className="citas-card">
        <h1 className="citas-title">Citas</h1>

        <div className="toolbar">
          <input
            type="text"
            placeholder="Buscar por paciente, motivo, estado u observaciones"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
          <div className="toolbar-actions">
            <a className="btn btn-outline" href="/Dashboard">Regresar</a>
            <button className="btn" onClick={fetchCitas} disabled={loading}>{loading ? 'Cargando...' : 'Recargar'}</button>
          </div>
        </div>

        {error && <div className="alert">{error}</div>}

        <div className="table-wrap">
          <table className="citas-table">
            <thead>
              <tr>
                <th>ID</th>
                <th>Paciente</th>
                <th>Fecha</th>
                <th>Hora</th>
                <th>Motivo</th>
                <th>Estado</th>
                <th>Observaciones</th>
                <th>Min restantes</th>
              </tr>
            </thead>
            <tbody>
              {!loading && filtradas.length === 0 && (
                <tr>
                  <td colSpan="8" className="empty">Sin resultados</td>
                </tr>
              )}
              {filtradas.map((c) => (
                <tr key={c.id_cita ?? `${c.paciente}-${c.fecha_cita}`}>
                  <td>{c.id_cita ?? '—'}</td>
                  <td>{c.paciente ?? '—'}</td>
                  <td>{fmtFecha(c.fecha_cita)}</td>
                  <td>{fmtHora(c.fecha_cita)}</td>
                  <td className="cell-wrap">{c.motivo ?? '—'}</td>
                  <td><span className={claseEstado(c.estado)}>{c.estado ?? '—'}</span></td>
                  <td className="cell-wrap">{c.observaciones ?? '—'}</td>
                  <td>{typeof c.minutos_restantes === 'number' ? c.minutos_restantes : '—'}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
