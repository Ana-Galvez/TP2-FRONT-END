import imgJessica from "../assets/jes.png";
import Sidebar from "../componentes/Sidebar";
import HeaderIntegrantes from "../componentes/HeaderIntegrantes";
import Footer from "../componentes/Footer";
import PeliculasFavoritas from "../componentes/PeliculasFavoritas";

const Jessica = () => {
  return (
    <>
      <Sidebar/>
      <HeaderIntegrantes>
        <img src={imgJessica} alt="Avatar Jessica" class="avatar" />
        <h1>Jessica Oleszuk</h1>
        <p class="info"> Tucumán | Edad: 38 </p>
      </HeaderIntegrantes>
      <HeaderIntegrantes>
        <h2>Habilidades</h2>
        <ul id="skills-list">
          <li>HTML5</li>
          <li>CSS3</li>
          <li>JavaScript</li>
          <li>Trabajo en equipo</li>
        </ul>
        <button>Mostrar/Ocultar</button>
      </HeaderIntegrantes>
      <PeliculasFavoritas>
        <h2>Películas favoritas</h2>
        <ul id="Movies-list">
          <li>En busca de la felicidad</li>
          <li>La vida es bella</li>
          <li>Cadena de favores</li>
        </ul>
        <button>Mostrar/Ocultar</button>
      </PeliculasFavoritas>
      <Footer>
        <p>© 2025 Jessica Oleszuk | Grupo 12 - Front End</p>
      </Footer>
    </>
  )
}
export default Jessica