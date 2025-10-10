import imgVirginia from "../assets/vir.png";
import { Link } from "react-router-dom";
import Sidebar from "../componentes/Sidebar";
import HeaderIntegrantes from "../componentes/HeaderIntegrantes";
import Footer from "../componentes/Footer";
import Habilidades from "../componentes/Habilidades";
import PeliculasFavoritas from "../componentes/PeliculasFavoritas";
import Musica from "../componentes/Musica";

const Virginia = () => {
  return (
    <>
      <Sidebar/>
      <HeaderIntegrantes>
          <h1>Virginia</h1>
          <ul>
            <li>📍 Bahía Blanca</li>
            <li>🎂 41 años</li>
          </ul>
          <div >
            <span >HTML</span>
            <span >CSS</span>
            <span >JavaScript</span>
            <span >Trabajo en equipo</span>
          </div>
          <img src={imgVirginia}alt="Avatar de Virginia"/>
      </HeaderIntegrantes>
      <Habilidades>
          <h2>Habilidades</h2>
          <ul id="skills-list">
            <li>HTML semántico</li>
            <li>CSS (responsive)</li>
            <li>JavaScript</li>
            <li>Trabajo en equipo</li>
          </ul>
      </Habilidades>
      <PeliculasFavoritas>
        <h2>Películas </h2>
        <ul id="peli-list">
          <li>🎬 Back to the Future</li>
          <li>🎬 Tron</li>
          <li>🎬 Ready Player One</li>
        </ul>
      </PeliculasFavoritas>
      <Musica>
        <h2>Música</h2>
        <ul id="musica-list">
          <li>🎵 Vangelis: Chariots Of Fire</li>
          <li>🎵 Electric Light Orchestra: Time</li>
          <li>🎵 Pet Shop Boys: Always On My Mind</li>
        </ul>
      </Musica>
      <Footer>
        <p>© 2025 Grupo 12 — <Link to="/paginas/bitacora">Bitacora</Link></p>
      </Footer>
    </>
  )
}
export default Virginia