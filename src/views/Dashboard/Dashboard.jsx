import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Dashboard.css";

/**
 * Dashboard estilo Practo (imagen de referencia)
 * - Sidebar vertical con iconos
 * - Topbar con búsqueda y perfil
 * - Tarjetas: Paciente, Health Reports, Medical History, Upcoming Tests
 * - Calendario compacto, Lista de Doctores, Gráfica de estadísticas
 */
export default function Dashboard({ onExit }) {
  const navigate = useNavigate();
  return (
    <div
      className="dash"
      style={{
        backgroundImage: 'url("/src/assets/images/1.jpg")',
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        minHeight: "100vh"
      }}
    >
      {/* Sidebar */}
      <aside className="side">
        <div className="side-brand">
          <span className="brand-mark small">🩺</span>
          <span>PractoCare</span>
        </div>
        <nav className="side-nav">
          <Link to="/" className="active">{icon("dashboard")} Panel</Link>
          <Link to="/pacientes/buscar">{icon("overview")} Buscar Paciente</Link>
          <Link to="/pacientes/citas">{icon("calendar")} Registrar Citas</Link>
          <Link to="/pacientes/diagnostico">{icon("report")} Diagnóstico</Link>
          <Link to="/pacientes/historial">{icon("history")} Histórico</Link>
          <Link to="/pacientes/login">{icon("lab")} Registrar Paciente</Link>
          <Link to="/pacientes/registro">{icon("note")} Registrar Empleado</Link>
        </nav>
        <button
          className="btn soft wide mt-auto"
          onClick={() => navigate("/")}
        >
          ← Cerrar sesión
        </button>
        <div className="side-settings">{icon("settings")} Ajustes</div>
      </aside>

      {/* Main */}
      <main className="main">
        {/* Topbar */}
        <div className="dash-top">
          <div className="search">
            <input placeholder="Buscar paciente por nombre o ID" />
            <span className="search-ico">⌕</span>
          </div>
          <div className="top-actions">
            <button className="icon-btn" title="Notificaciones">🔔</button>
            <div className="user">
              <img
                src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?q=80&w=200&auto=format&fit=crop"
                alt="Doctor"
              />
              <div>
                <strong>Dr. Sushant Seth</strong>
                <div className="muted small">Cardiólogo</div>
              </div>
              <span>▾</span>
            </div>
          </div>
        </div>

        {/* Información adicional arriba del grid */}
        <div style={{
          margin: "2rem 0",
          padding: "1.5rem 2rem",
          background: "#fff",
          borderRadius: "16px",
          boxShadow: "0 4px 16px rgba(47,183,161,0.07)",
          display: "flex",
          flexDirection: "column",
          gap: "1.2rem"
        }}>
          <h2 style={{ color: "#2fb7a1", marginBottom: "0.5rem" }}>Bienvenido al Panel de Control</h2>
          <p style={{ color: "#214a67", fontSize: "1.1rem" }}>
            Aquí puedes gestionar pacientes, citas, diagnósticos y consultar el historial médico. Utiliza las opciones del menú lateral para navegar entre las funciones principales.
          </p>
          <div style={{ display: "flex", gap: "2rem", flexWrap: "wrap", alignItems: "center" }}>
            <div style={{ textAlign: "center" }}>
              <img src="https://cdn-icons-png.flaticon.com/512/2921/2921222.png" alt="Buscar Paciente" style={{ width: 56, marginBottom: 8 }} />
              <div className="muted small">Buscar Paciente</div>
            </div>
            <div style={{ textAlign: "center" }}>
              <img src="https://cdn-icons-png.flaticon.com/512/2921/2921290.png" alt="Registrar Citas" style={{ width: 56, marginBottom: 8 }} />
              <div className="muted small">Registrar Citas</div>
            </div>
            <div style={{ textAlign: "center" }}>
              <img src="https://cdn-icons-png.flaticon.com/512/2921/2921336.png" alt="Diagnóstico" style={{ width: 56, marginBottom: 8 }} />
              <div className="muted small">Diagnóstico</div>
            </div>
            <div style={{ textAlign: "center" }}>
              <img src="https://cdn-icons-png.flaticon.com/512/2921/2921357.png" alt="Histórico" style={{ width: 56, marginBottom: 8 }} />
              <div className="muted small">Histórico</div>
            </div>
          </div>
        </div>

        {/* Grid principal */}
        <div className="dash-grid">
          {/* Patient Card */}
          <section className="card patient">
            <div className="patient-head">
              <img
                src="https://images.unsplash.com/photo-1618498082410-b4aa22193b38?q=80&w=200&auto=format&fit=crop"
                alt="Paciente"
              />
              <div>
                <h3>Señor Kunal Shah</h3>
                <div className="muted">62 años | masculino</div>
                <div className="muted">ID del paciente: 83947</div>
              </div>
            </div>
            <div className="patient-meta">
              <Meta label="Grupo sanguíneo" value="O+" />
              <Meta label="IMC" value="24.8" />
              <Meta label="Altura" value="5,8 pies" />
              <Meta label="Peso" value="55 kilos" />
              <Meta label="Contacto" value="84534854445" />
            </div>
            {/* Nueva sección de funciones */}
            <div style={{ marginTop: "1.5rem" }}>
              <h4 style={{ color: "#2fb7a1", marginBottom: "0.7rem" }}>Funciones principales</h4>
              <div style={{ display: "flex", gap: "1.2rem", flexWrap: "wrap" }}>
                <div style={{ textAlign: "center" }}>
                  <img src="https://cdn-icons-png.flaticon.com/512/2921/2921222.png" alt="Buscar Paciente" style={{ width: 48, marginBottom: 6 }} />
                  <div className="muted small">Buscar Paciente</div>
                </div>
                <div style={{ textAlign: "center" }}>
                  <img src="https://cdn-icons-png.flaticon.com/512/2921/2921290.png" alt="Registrar Citas" style={{ width: 48, marginBottom: 6 }} />
                  <div className="muted small">Registrar Citas</div>
                </div>
                <div style={{ textAlign: "center" }}>
                  <img src="https://cdn-icons-png.flaticon.com/512/2921/2921336.png" alt="Diagnóstico" style={{ width: 48, marginBottom: 6 }} />
                  <div className="muted small">Diagnóstico</div>
                </div>
                <div style={{ textAlign: "center" }}>
                  <img src="https://cdn-icons-png.flaticon.com/512/2921/2921357.png" alt="Histórico" style={{ width: 48, marginBottom: 6 }} />
                  <div className="muted small">Histórico</div>
                </div>
              </div>
            </div>
          </section>

          {/* Health Reports */}
          <section className="card wide">
            <div className="card-title">
              <h3>Informes de salud</h3>
              <a className="muted small">Ver todo</a>
            </div>
            <ul className="files">
              {[
                ["Informe de revisión médica.pdf", "2 MB"],
                ["Informe de hemograma.docx", "5 MB"],
                ["Informe de ECG cardíaco.docx", "10 MB"],
                ["Informe de resonancia magnética cerebral.png", "25,8 MB"],
              ].map(([name, size]) => (
                <li key={name}>
                  <span className="file-ico">📄</span>
                  <div className="file-info">
                    <strong>{name}</strong>
                    <div className="muted small">{size}</div>
                  </div>
                  <div className="file-actions">
                    <button className="icon-btn">⬇</button>
                    <button className="icon-btn">🔗</button>
                    <button className="icon-btn">⋯</button>
                  </div>
                </li>
              ))}
            </ul>
          </section>

          {/* Medical History */}
          <section className="card">
            <div className="card-title">
              <h3>Historial médico</h3>
              <a className="muted small">Ver todo</a>
            </div>
            <ul className="timeline">
              {[
                ["COVID-19", "Dra. Anjani Sharma"],
                ["Cirugía para la apendicitis", "Dr. Sushant Seth"],
                ["Inspección de pranina", "Dra. Nilam Kumawat"],
                ["Fractura de tobillo", "Dra. Vasishta Gupta"],
              ].map(([txt, doc]) => (
                <li key={txt}>
                  <span className="dot" />
                  <div>
                    <strong>{txt}</strong>
                    <div className="muted small">{doc}</div>
                  </div>
                  <button className="icon-btn ml-auto">⋯</button>
                </li>
              ))}
            </ul>
          </section>

          {/* Upcoming Test */}
          <section className="card">
            <div className="card-title">
              <h3>Próxima prueba</h3>
              <a className="muted small">Ver todo</a>
            </div>
            <ul className="tests">
              {[
                ["Prueba de ECG", "Cada mes", "20/04/24", "🫀"],
                ["Análisis de sangre", "Cada mes", "20/04/24", "🩸"],
                ["Prueba de diagnóstico", "Cada mes", "20/04/24", "🧪"],
                ["Prueba de orina", "Cada mes", "20/04/24", "🧫"],
              ].map(([name, freq, date, ico]) => (
                <li key={name}>
                  <span className="test-ico">{ico}</span>
                  <div className="test-info">
                    <strong>{name}</strong>
                    <div className="muted small">{freq}</div>
                  </div>
                  <div className="muted small">{date}</div>
                </li>
              ))}
            </ul>
          </section>

          {/* Calendar */}
          <section className="card">
            <div className="card-title">
              <h3>Calendario</h3>
              <div className="chip-row">
                <span className="chip active">Hoy</span>
                <span className="chip">Últimos 8 días</span>
                <span className="chip">Mes pasado</span>
              </div>
            </div>
            <Calendar />
            <div className="row gap">
              <button className="btn ghost small">Claro</button>
              <button className="btn primary small ml-auto">Aplicar</button>
            </div>
          </section>

          {/* Doctors */}
          <section className="card">
            <div className="card-title">
              <h3>Doctores</h3>
              <a className="muted small">Ver todo</a>
            </div>
            <ul className="doctors">
              {[
                ["Dentista", "Dra. Anjani Sharma", "13:00 - 15:00"],
                ["Cardiólogo", "Dr. Sushant Seth", "15:00 - 18:00"],
                ["Neumólogo", "Dra. Nilam Kumawat", "11:00 - 14:00"],
              ].map(([spec, name, time]) => (
                <li key={name}>
                  <img
                    src="https://images.unsplash.com/photo-1550831107-1553da8c8464?q=80&w=200&auto=format&fit=crop"
                    alt={name}
                  />
                  <div>
                    <strong>{spec}</strong>
                    <div className="muted small">{name}</div>
                  </div>
                  <span className="muted small ml-auto">{time}</span>
                </li>
              ))}
            </ul>
          </section>

          {/* Statistics */}
          <section className="card wide">
            <div className="card-title">
              <h3>Estadística</h3>
              <div className="muted small">Enero de 2024 • Intervalo de 5 días</div>
            </div>
            <Chart />
            <div className="legend">
              <span className="dot teal"></span> Calorías
              <span className="dot green"></span> Carbohidrato
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}

/* ---------- Components ---------- */

function Meta({ label, value }) {
  return (
    <div className="meta">
      <span className="muted small">{label} :</span>
      <strong>{value}</strong>
    </div>
  );
}

function Calendar() {
  const days = ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"];
  const grid = Array.from({ length: 35 }, (_, i) => i + 1);
  return (
    <div className="calendar">
      <div className="cal-head">
        <button className="icon-btn">‹</button>
        <strong>March 2024</strong>
        <button className="icon-btn">›</button>
      </div>
      <div className="cal-week">
        {days.map((d) => (
          <span key={d} className="muted small">
            {d}
          </span>
        ))}
      </div>
      <div className="cal-grid">
        {grid.map((n) => (
          <span
            key={n}
            className={`cal-cell ${n === 14 || n === 15 ? "selected" : ""}`}
          >
            {n}
          </span>
        ))}
      </div>
    </div>
  );
}

function Chart() {
  const w = 560,
    h = 200,
    p = 20;
  const a = [60, 80, 65, 90, 70, 95, 130, 110];
  const b = [30, 35, 40, 38, 42, 45, 50, 55];
  const maxY = 140;
  const to = (arr) =>
    arr
      .map((v, i) => {
        const x = p + (i * (w - 2 * p)) / (arr.length - 1);
        const y = h - p - (v / maxY) * (h - 2 * p);
        return `${x},${y}`;
      })
      .join(" ");
  return (
    <svg
      className="chart"
      viewBox={`0 0 ${w} ${h}`}
      preserveAspectRatio="none"
    >
      <defs>
        <linearGradient id="g1" x1="0" x2="0" y1="0" y2="1">
          <stop offset="0%" stopColor="var(--teal)" stopOpacity="0.25" />
          <stop offset="100%" stopColor="var(--teal)" stopOpacity="0" />
        </linearGradient>
      </defs>
      <polyline
        fill="none"
        stroke="var(--green)"
        strokeWidth="3"
        points={to(a)}
      />
      <polyline
        fill="none"
        stroke="var(--teal)"
        strokeWidth="3"
        points={to(b)}
      />
      <polygon
        fill="url(#g1)"
        points={`${to(b)} ${w - p},${h - p} ${p},${h - p}`}
      />
    </svg>
  );
}

function icon(name) {
  const map = {
    dashboard: "📊",
    overview: "🗂️",
    calendar: "📅",
    report: "📄",
    history: "🕘",
    lab: "🧪",
    note: "📝",
    settings: "⚙️",
  };
  return (
    <span className="nav-ico" aria-hidden>
      {map[name]}
    </span>
  );
}
