import React, { useState } from 'react'; // Importamos useState
import imgTomas from "../assets/tomas.png";

// Componentes de Layout y Estructura
import Sidebar from "../componentes/Sidebar";
import Footer from "../componentes/Footer";
import HydraCanvas from '../componentes/HydraCanvas';
import Dropdown from '../componentes/Dropdown'; 

// Estilos
import "../assets/styles/integrante.css"; 

const Tomas = () => {
  // 1. Creamos un único estado para controlar todos los dropdowns
  const [dropdownsOpen, setDropdownsOpen] = useState(false);

  // 2. Creamos una función para cambiar ese estado
  const toggleDropdowns = () => {
    setDropdownsOpen(prevState => !prevState);
  };

  return (
    <div className="integrante-container">
      <HydraCanvas />
      <Sidebar />
      
      <main className="integrante-content">
        <section>
          <h1>Tomas Julian</h1>
          <p>Ubicación: Ciudad Autónoma de Buenos Aires | Edad: 22</p>
          <img src={imgTomas} alt="Avatar Tomas" id="tomas-avatar" />
        </section>

        <section>
          <h2>Sobre mí</h2>
          <p>Soy Tomas Julian Resquin, trabajo en el área de la educación técnica y en el desarrollo de sistemas para la gestión educativa. Estoy aprendiendo y formándome en programación, bases de datos, ciberseguridad y software libre, con el objetivo de integrar estas temáticas en distintos proyectos laborales y personales. Mi meta es seguir creciendo y optimizando mis métodos de trabajo, combinando práctica y tecnología de manera sencilla y útil.</p>
        </section>

        <section>
          <h2>Proyectos finalizados</h2>
          <ul id="finalized-projects">
            <li>Sistema de acceso web a base de datos educativa.</li>
            <li>Sistema automático de envío de información de materias pendientes.</li>
            <li>Implementación de scripts en App Script para su uso en oficina.</li>
          </ul>
        </section>
        
        <section className="dropdown-section">
          {/* 3. Pasamos el estado y la función a cada Dropdown */}
          <Dropdown title="Habilidades" isOpen={dropdownsOpen} onClick={toggleDropdowns}>
            <ul>
              <li>Python (Avanzado)</li>
              <li>SQL (Intermedio)</li>
              <li>Administración de sistemas (Linux y Windows)</li>
              <li>Diagnóstico y reparación de hardware</li>
              <li>Análisis y visualización de datos</li>
              <li>Evaluación de motores de búsqueda</li>
              <li>Soporte a sistemas de TI</li>
            </ul>
          </Dropdown>

          <Dropdown title="Idiomas" isOpen={dropdownsOpen} onClick={toggleDropdowns}>
            <ul>
              <li>Español (Nativo)</li>
              <li>Inglés (C1)</li>
              <li>Portugués (B1)</li>
            </ul>
          </Dropdown>

          <Dropdown title="Educación" isOpen={dropdownsOpen} onClick={toggleDropdowns}>
            <ul>
              <li>
                <h4>Licenciatura en Ciberdefensa</h4>
                <p>Universidad de la Defensa Nacional - Argentina</p>
              </li>
              <li>
                <h4>Tecnicatura Superior en Software Libre</h4>
                <p>Universidad Nacional del Litoral - Argentina</p>
              </li>
              <li>
                <h4>Tecnicatura Superior en Desarrollo de Software</h4>
                <p>Instituto de Formación Técnica Superior N° 29 - Argentina</p>
              </li>
            </ul>
          </Dropdown>
        </section>
        
        <Footer />
      </main>
    </div>
  );
};

export default Tomas;

