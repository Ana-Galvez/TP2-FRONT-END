import imgAlvaro from "../assets/alvaro.png"
import Sidebar from "../componentes/Sidebar";
import HeaderIntegrantes from "../componentes/HeaderIntegrantes";
import Habilidades from "../componentes/Habilidades";
import Idiomas from "../componentes/Idiomas";
import Educacion from "../componentes/Educacion";
import Footer from "../componentes/Footer";

const Alvaro = () => {
  return (
    <>
      <Sidebar/>
      <HeaderIntegrantes>
          <h1>Alvaro Coronel Castellani</h1>
          <p> Ubicación: Córdoba, Argentina | Edad: 30</p>
          <img src={imgAlvaro} alt="Avatar Alvaro" id="alvaro-avatar"></img>
      </HeaderIntegrantes>
      <Habilidades>
        <h3>Habilidades</h3>
        <div>
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
      <Educacion>
        <h3>Educación</h3>
        <div>
          <ul>
              <li>
                  <h4>Licenciatura en Biotecnología</h4>
                  <p>Universidad Nacional de Córdoba - Facultad de Ciencias Químicas</p>
              </li>
              <li>
                  <h4>Tecnicatura Superior en Nvas. Tecnologías Aplicadas al Agro</h4>
                  <p>Instituto Superiro Politécnico de Córdoba</p>
              </li>
              <li>
                  <h4>Tecnicatura Superior en Ciencia de Datos e Inteligencia Artificial</h4>
                  <p>Instituto Superiro Politécnico de Córdoba</p>
              </li>
              <li>
                  <h4>Tecnicatura Superior en Desarrollo de Software</h4>
                  <p>Instituto de Formación Tecnica Superiro N°29 - Argentina</p>
              </li>
              <li>
                  <h4>Diplomatura en Desarrollo Full-Stack</h4>
                  <p>Digital House - Argentina</p>
              </li>
              <li>
                  <h4>Diplomatura en Innovación Agropecuaria</h4>
                  <p>Universidad Nacional de Córdoba - Facultad de Ciencias Agropecuarias</p>
              </li>
              <li>
                  <h4>Data Analyst Path</h4>
                  <p>Universidad Nacional de Córdoba - Facultad de Ciencias Exactas</p>
              </li>
              <li>
                  <h4>Operador Analista de Datos</h4>
                  <p>Instituto de Formación Tecnica Superiro N°16 - Argentina</p>
              </li>
          </ul>
      </div>
      </Educacion>
      <Footer>
        <p>© 2025 Alvaro Facundo Coronel - Proyecto de presentación</p>
      </Footer>
    </>
  )
}
export default Alvaro