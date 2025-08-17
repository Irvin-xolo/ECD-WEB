import { Routes, Route } from "react-router-dom";
import LandingPage from "./views/LandingPage/LandingPage";
import Dashboard from "./views/Dashboard/Dashboard";
import LoginPaciente from "./views/Pacientes/LoginPaciente";
import Diagnostico from "./views/Diagnostico/Diagnostico";
import Buscar from "./views/Buscar/Buscar";
import Historial from "./views/Historial/Historial";
import Registro from "./views/Registro/Registro";
import Citas from "./views/Citas/Citas";
import AvisoPrivacidad from "./views/AvisoDePrivacidad/Avisodeprivacidad";
import Registrarse from "./views/Registro/Registrarse";
import LoginPersonal from "./views/LoginPersonal/Login";

function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/pacientes/login" element={<LoginPaciente />} />
      <Route path="/pacientes/diagnostico" element={<Diagnostico />} />
      <Route path="/pacientes/buscar" element={<Buscar />} />
      <Route path="/pacientes/historial" element={<Historial />} />
      <Route path="/pacientes/registro" element={<Registro />} />
      <Route path="/pacientes/citas" element={<Citas />} />
      <Route path="/aviso-privacidad" element={<AvisoPrivacidad />} />
      <Route path="/pacientes/registrarse" element={<Registrarse />} />
      <Route path="/loginpersonal" element={<LoginPersonal />} />
      <Route path="*" element={<LandingPage />} />
    </Routes>
  );
}

export default App;
