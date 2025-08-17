import React from "react";
import { useNavigate } from "react-router-dom";
import "./LandingPage.css";


export default function LandingPage() {
  const navigate = useNavigate();

  return (
    <div className="landing">
      {/* Header */}
      <header className="topbar">
        <div className="brand">
          <span className="brand-mark">🩺</span>
          <br></br>
        </div>
        <nav className="nav">
          <a href="#features">Funciones</a>
          <a href="#how">Cómo funciona</a>
          <a href="#pricing">Precios</a>
          <a href="#faq">FAQ</a>
        </nav>
        <div className="topbar-cta">
          <button className="btn ghost" onClick={() => navigate("/loginpersonal")}>
            Entrar
          </button>
          <button className="btn primary" onClick={() => navigate("/pacientes/Registrarse")}>
            Registrarse
          </button>
        </div>
      </header>
      {/* Hero */}
      <section className="hero">
        <div className="hero-text">
          <h1>Expedientes digitales y gestión de pacientes — sin fricción</h1>
          <p>
            Centraliza historiales, reportes, citas y métricas en un panel seguro y fácil de usar.
            Diseñado para clínicas modernas con foco en productividad y experiencia del paciente.
          </p>
          <div className="hero-actions">
            <button
              className="btn primary"
              onClick={() => navigate("/pacientes/Registrarse")}
            >
              Probar el dashboard
            </button>
            <a className="btn soft" href="#features">Ver funciones</a>
          </div>
          <ul className="hero-bullets">
            <li>✔️ Cumplimiento y privacidad por diseño</li>
            <li>✔️ Recordatorios automáticos de citas</li>
            <li>✔️ Reportes listos para compartir</li>
          </ul>
        </div>
        <div className="hero-media">
          <img
            src="https://images.unsplash.com/photo-1504439468489-c8920d796a29?auto=format&fit=crop&w=600&q=80"
            alt="Equipo médico utilizando un sistema digital"
            className="hero-img"
          />
          <div className="hero-glass">
            <div>
              <span className="kpi-title">Citas hoy</span>
              <span className="kpi-value">28</span>
            </div>
            <div>
              <span className="kpi-title">Pacientes activos</span>
              <span className="kpi-value">1,240</span>
            </div>
            <div>
              <span className="kpi-title">Satisfacción</span>
              <span className="kpi-value">98%</span>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section id="features" className="section">
        <h2 className="section-title">Todo lo que tu clínica necesita</h2>
        <p className="section-subtitle">
          Un ecosistema completo para equipos clínicos: rápido, seguro y hermoso.
        </p>

        <div className="grid cards-3">
          <Feature
            icon={<IconFile />}
            title="Expedientes digitales"
            desc="Historial clínico unificado, adjuntos, alergias, diagnósticos, tratamientos y evolución."
            img="https://images.unsplash.com/photo-1588776814546-ec7e1b1b1b1b?auto=format&fit=crop&w=600&q=80"
          />
          <Feature
            icon={<IconCalendar />}
            title="Gestión de citas"
            desc="Agenda inteligente, confirmaciones por correo/SMS y control de salas."
            img="https://images.unsplash.com/photo-1511174511562-5f7f18b874f8?auto=format&fit=crop&w=600&q=80"
          />
          <Feature
            icon={<IconShield />}
            title="Seguridad y privacidad"
            desc="Roles, control de acceso y auditoría. Cifrado en tránsito y en reposo."
            img="https://images.unsplash.com/photo-1465101178521-c1a4c8a0f8f3?auto=format&fit=crop&w=600&q=80"
          />
        </div>
      </section>

      {/* How it works */}
      <section id="how" className="section soft">
        <h2 className="section-title">Cómo funciona</h2>
        <div className="grid steps">
          <Step n="1" title="Crea tu cuenta" desc="Configura tu clínica, doctores y horarios en minutos." />
          <Step n="2" title="Migra tus datos" desc="Importa pacientes y expedientes desde Excel u otro sistema." />
          <Step n="3" title="Opera y mide" desc="Agenda, consulta, adjunta reportes y monitorea métricas." />
        </div>
      </section>

      {/* Testimonials */}
      <section className="section">
        <h2 className="section-title">Lo que dicen nuestros clientes</h2>
        <div className="grid cards-3">
          <Testimonial
            quote="Reducimos 40% el tiempo administrativo y mejoramos la puntualidad."
            author="Dra. Anjani Sharma"
            role="Cardióloga"
            avatar="https://images.unsplash.com/photo-1520880867055-1e30d1cb001c?auto=format&fit=crop&w=200&q=80"
          />
          <Testimonial
            quote="Nuestros pacientes aman los recordatorios y la app es muy intuitiva."
            author="Dr. Sushant Seth"
            role="Dentista"
            avatar="https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=crop&w=200&q=80"
          />
          <Testimonial
            quote="Los reportes clínicos ahora se comparten en segundos, con seguridad."
            author="Dra. V. Gupta"
            role="Radióloga"
            avatar="https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?auto=format&fit=crop&w=200&q=80"
          />
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="section soft">
        <h2 className="section-title">Precios simples</h2>
        <div className="grid cards-3 price-grid">
          <Plan
            name="Básico"
            price="USD 100/mes"
            bullets={["Hasta 2 doctores", "1000 pacientes", "Soporte por email"]}
          />
          <Plan
            name="Pro"
            price="USD 300/mes"
            highlight
            bullets={[
              "Hasta 10 doctores",
              "Pacientes ilimitados",
              "Recordatorios y reportes",
              "Soporte prioritario"
            ]}
          />
          <Plan
            name="Enterprise"
            price="A consultar"
            bullets={[
              "SSO / Auditoría avanzada",
              "Soporte 24/7",
              "Integraciones HL7/FHIR"
            ]}
          />
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="section">
        <h2 className="section-title">Preguntas frecuentes</h2>
        <div className="faq">
          <details>
            <summary>¿Puedo importar mis pacientes desde Excel?</summary>
            <p>Sí, contamos con importador guiado y plantillas descargables.</p>
          </details>
          <details>
            <summary>¿Cómo protegen la información?</summary>
            <p>Cifrado TLS en tránsito y AES en reposo, control de accesos por rol y bitácoras.</p>
          </details>
          <details>
            <summary>¿Hay contrato mínimo?</summary>
            <p>No. Puedes cancelar en cualquier momento.</p>
          </details>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-grid">
          <div>
            <div className="brand">
              <span className="brand-mark">🩺</span>
              <span className="brand-name">PractoCare</span>
            </div>
            <p className="muted">Plataforma moderna para gestionar tu clínica de principio a fin.</p>
          </div>
          <div>
            <h4>Producto</h4>
            <ul><li>Funciones</li><li>Precios</li><li>Seguridad</li></ul>
          </div>
          <div>
            <h4>Recursos</h4>
            <ul><li>Guías</li><li>API</li><li>Soporte</li></ul>
          </div>
          <div>
            <h4>Contacto</h4>
            <ul><li>hola@practocare.app</li><li>+52 55 0000 0000</li></ul>
          </div>
        </div>
        <div className="copyright">
          © 2025 PractoCare — Todos los derechos reservados.
          <br />
          <a
            href="/aviso-privacidad"
            style={{
              color: "#2fb7a1",
              textDecoration: "underline",
              marginTop: "0.5rem",
              display: "inline-block"
            }}
          >
            Aviso de Privacidad y Términos y Condiciones
          </a>
        </div>
      </footer>
    </div>
  );
}

/* ----- Pieces ----- */

function Feature({ icon, title, desc, img }) {
  return (
    <article className="card feature">
      <div style={{ width: "100%", height: "180px", overflow: "hidden", borderRadius: "12px", background: "#f4f7ff", marginBottom: "1rem", display: "flex", alignItems: "center", justifyContent: "center" }}>
        <img
          className="feature-img"
          src={img}
          alt={title}
          style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
        />
      </div>
      <div className="feature-body">
        <div className="feature-icon">{icon}</div>
        <h3>{title}</h3>
        <p className="muted">{desc}</p>
      </div>
    </article>
  );
}

function Step({ n, title, desc }) {
  return (
    <div className="step">
      <div className="step-badge">{n}</div>
      <div>
        <h3>{title}</h3>
        <p className="muted">{desc}</p>
      </div>
    </div>
  );
}

function Testimonial({ quote, author, role, avatar }) {
  return (
    <article className="card testimonial">
      <div className="testi-head">
        <img src={avatar} alt={author} />
        <div>
          <strong>{author}</strong>
          <div className="muted">{role}</div>
        </div>
      </div>
      <p>“{quote}”</p>
    </article>
  );
}

function Plan({ name, price, bullets, highlight }) {
  return (
    <article className={`card plan ${highlight ? "plan-highlight" : ""}`}>
      <h3>{name}</h3>
      <div className="price">{price}</div>
      <ul className="plan-list">
        {bullets.map((b) => <li key={b}>✔ {b}</li>)}
      </ul>
      <a href="#demo" className="btn primary wide">Comenzar</a>
    </article>
  );
}

/* ----- Inline icons ----- */
function IconFile() {
  return (
    <svg viewBox="0 0 24 24" width="22" height="22" aria-hidden="true">
      <path fill="currentColor" d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
      <path fill="#ffffff" opacity=".6" d="M14 2v6h6"/>
    </svg>
  );
}
function IconCalendar() {
  return (
    <svg viewBox="0 0 24 24" width="22" height="22" aria-hidden="true">
      <rect x="3" y="4" width="18" height="16" rx="2" fill="currentColor"/>
      <rect x="3" y="8" width="18" height="2" fill="#ffffff" opacity=".7"/>
    </svg>
  );
}
function IconShield() {
  return (
    <svg viewBox="0 0 24 24" width="22" height="22" aria-hidden="true">
      <path fill="currentColor" d="M12 2l8 4v6c0 5-3.5 9-8 10-4.5-1-8-5-8-10V6z"/>
      <path fill="#ffffff" opacity=".7" d="M10 12l2 2 4-4"/>
    </svg>
  );
}
