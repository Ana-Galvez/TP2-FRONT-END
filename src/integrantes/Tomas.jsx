import imgTomas from "../assets/tomas.png";
import Sidebar from "../componentes/Sidebar";
import HeaderIntegrantes from "../componentes/HeaderIntegrantes";
import Habilidades from "../componentes/Habilidades";
import Idiomas from "../componentes/Idiomas";
import Footer from "../componentes/Footer";

const Tomas = () => {
  return (
    <>
      <Sidebar/>
      <HeaderIntegrantes>
        <h1>Tomas Julian</h1>
        <p>Ubicación: Ciudad Autonoma de Buenos Aires | Edad: 22</p>
        <img src={imgTomas} alt="Avatar Tomas" class="avatar-right" id="tomas-avatar"></img>
      </HeaderIntegrantes>
      <Habilidades>
        <h3>Habilidades</h3>
        <div>
            <ul>
                <li>Python (Avanzado) </li>
                <li>SQL (Intermedio) </li>
                <li>Administración de sistemas (Linux y Windows) </li>
                <li>Diagnóstico y reparación de hardware </li>
                <li>Análisis y visualización de datos </li>
                <li>Evaluación de motores de búsqueda </li>
                <li>Soporte a sistemas de TI </li>
            </ul>
        </div>
      </Habilidades>
      <Idiomas>
        <h3>Idiomas</h3>
        <div>
            <ul>
                <li>Español (Nativo) </li>
                <li>Inglés (C1) </li>
                <li>Portugués (B1) </li>
            </ul>
        </div>
      </Idiomas>
      <Footer/>
    </>
  )
}
export default Tomas