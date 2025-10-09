import imgJessica from "../assets/jes.png";
import Sidebar from "../componentes/Sidebar";
import HeaderIntegrantes from "../componentes/HeaderIntegrantes";
import Footer from "../componentes/Footer";

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
      <Footer>
        <p>© 2025 Jessica Oleszuk | Grupo 12 - Front End</p>
      </Footer>
    </>
  )
}
export default Jessica