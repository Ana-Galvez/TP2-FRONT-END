import imgTomas from "../assets/tomas.png";
import Sidebar from "../componentes/Sidebar";
import HeaderIntegrantes from "../componentes/HeaderIntegrantes";
import Footer from "../componentes/Footer";
import Habilidadades from "../componentes/Habilidadades";

const Tomas = () => {
  return (
    <>
      <Sidebar/>
      <HeaderIntegrantes>
        <h1>Tomas Julian</h1>
        <p>Ubicación: Ciudad Autonoma de Buenos Aires | Edad: 22</p>
        <img src={imgTomas} alt="Avatar Tomas" class="avatar-right" id="tomas-avatar"></img>
      </HeaderIntegrantes>
      <Habilidadades>
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
      </Habilidadades>
      <Footer/>
    </>
  )
}
export default Tomas