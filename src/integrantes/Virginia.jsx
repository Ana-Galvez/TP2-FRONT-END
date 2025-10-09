import imgVirginia from "../assets/vir.png";
import { Link } from "react-router-dom";
import Sidebar from "../componentes/Sidebar";
import HeaderIntegrantes from "../componentes/HeaderIntegrantes";
import Footer from "../componentes/Footer";
import Habilidadades from "../componentes/Habilidadades";

const Virginia = () => {
  return (
    <>
      <Sidebar/>
      <HeaderIntegrantes>
          <h1>Virginia</h1>
          <ul class="facts">
            <li>📍 Bahía Blanca</li>
            <li>🎂 41 años</li>
          </ul>
          <div class="badges mt-2">
            <span class="badge c1">HTML</span>
            <span class="badge c2">CSS</span>
            <span class="badge c3">JavaScript</span>
            <span class="badge c4">Trabajo en equipo</span>
          </div>
          <img src={imgVirginia}alt="Avatar de Virginia" class="avatar-right" />
      </HeaderIntegrantes>
      <Habilidadades>
          <h2>Habilidades</h2>
          <ul id="skills-list" class="skills">
            <li>HTML semántico</li>
            <li>CSS (responsive)</li>
            <li>JavaScript</li>
            <li>Trabajo en equipo</li>
          </ul>
      </Habilidadades>
      <Footer>
        <p>© 2025 Grupo 12 — <Link to="/paginas/bitacora">Bitacora</Link></p>
      </Footer>
    </>
  )
}
export default Virginia