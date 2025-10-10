import imgAlvaro from "../assets/alvaro.png"
import Sidebar from "../componentes/Sidebar";
import HeaderIntegrantes from "../componentes/HeaderIntegrantes";
import Habilidades from "../componentes/Habilidades";
import Idiomas from "../componentes/Idiomas";
import Footer from "../componentes/Footer";

const Alvaro = () => {
  return (
    <>
      <Sidebar/>
      <HeaderIntegrantes>
          <h1 class="typewriter">Alvaro Coronel Castellani</h1>
          <p> Ubicación: Córdoba, Argentina | Edad: 30</p>
          <img src={imgAlvaro} alt="Avatar Alvaro" class="avatar-right" id="alvaro-avatar"></img>
      </HeaderIntegrantes>
      <Habilidades>
        <h3>Habilidades</h3>
        <div class="dropdown-content">
            <ul>
                <li>Python (Avanzado)</li>
                <li>SQL (Medio)</li>
                <li>JavaScript (Medio)</li>
                <li>C# (Básico)</li>
                <li>Node.js y Express</li>
                <li>Poetry y PySpark</li>
                <li>Cypress</li>
                <li>Playwright</li>
                <li>Selenium</li>
                <li>Appium</li>
                <li>Postman</li>
                <li>Swagger UI</li>
                <li>AWS Cloud Practitioner</li>
                <li>Operador de Agrotecnologías</li>
                <li>Data Analytics</li>
            </ul>
        </div>
      </Habilidades>
      <Idiomas>
        <h3>Idiomas</h3>
        <div>
          <ul>
            <li>Español (Nativo)</li>
            <li>Inglés (B1)</li>
          </ul>
        </div>
      </Idiomas>
      <Footer>
        <p>© 2025 Alvaro Facundo Coronel - Proyecto de presentación</p>
      </Footer>
    </>
  )
}
export default Alvaro