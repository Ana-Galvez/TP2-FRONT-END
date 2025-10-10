import imgJessica from "../assets/jes.png";
import Sidebar from "../componentes/Sidebar";
import HeaderIntegrantes from "../componentes/HeaderIntegrantes";
import Habilidades from "../componentes/Habilidades";
import Footer from "../componentes/Footer";
import PeliculasFavoritas from "../componentes/PeliculasFavoritas";
import Musica from "../componentes/Musica";

const Jessica = () => {
  return (
    <>
      <Sidebar/>
      <HeaderIntegrantes>
        <img src={imgJessica} alt="Avatar Jessica"/>
        <h1>Jessica Oleszuk</h1>
        <p> Tucumán | Edad: 38 </p>
      </HeaderIntegrantes>
      <Habilidades>
        <h2>Habilidades</h2>
        <ul id="skills-list">
          <li>HTML5</li>
          <li>CSS3</li>
          <li>JavaScript</li>
          <li>Trabajo en equipo</li>
        </ul>
        <button>Mostrar/Ocultar</button>
      </Habilidades>
      <PeliculasFavoritas>
        <h2>Películas favoritas</h2>
        <ul id="Movies-list">
          <li>En busca de la felicidad</li>
          <li>La vida es bella</li>
          <li>Cadena de favores</li>
        </ul>
        <button>Mostrar/Ocultar</button>
      </PeliculasFavoritas>
      <Musica>
        <h2>Música favorita</h2>
        <ul id="Music-list">
          <li>Maria Becerra</li>
          <li>Tan Bionica</li>
          <li>Miranda</li>
        </ul>
        <button>Mostrar/Ocultar</button>
      </Musica>
      <Footer>
        <p>© 2025 Jessica Oleszuk | Grupo 12 - Front End</p>
      </Footer>
    </>
  )
}
export default Jessica