import imgTomas from "../assets/tomas.png";
import Sidebar from "../componentes/Sidebar";
import HeaderIntegrantes from "../componentes/HeaderIntegrantes";
import Habilidades from "../componentes/Habilidades";
import Idiomas from "../componentes/Idiomas";
import Footer from "../componentes/Footer";
import Educacion from "../componentes/Educacion";

const Tomas = () => {
  return (
    <>
      <Sidebar/>
      <HeaderIntegrantes>
        <h1>Tomas Julian</h1>
        <p>Ubicación: Ciudad Autonoma de Buenos Aires | Edad: 22</p>
        <img src={imgTomas} alt="Avatar Tomas" id="tomas-avatar"></img>
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
      <Educacion>
        <h3>Educación</h3>
        <div>
            <ul>
                <li>
                    <h4>Licenciatura en Ciberdefensa</h4>
                    <p>Universidad de la Defensa Nacional - Argentina</p>
                </li>
                <li>
                    <h4>Técnicatura Superior en Software Libre</h4>
                    <p>Universidad Nacional del Litoral - Argentina</p>
                </li>
                <li>
                    <h4>Técnicatura Superior en Desarrollo de Software</h4>
                    <p>Instituto de Formación Técnica Superior N° 29 - Argentina</p>
                </li>
            </ul>
        </div>
      </Educacion>
      <Footer/>
    </>
  )
}
export default Tomas