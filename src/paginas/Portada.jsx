import imagen from "../assets/icon-github.png";
import alvaroImg from "../assets/alvaro.png";
import anaImg from "../assets/ana.PNG";
import jessicaImg from "../assets/jes.png";
import tomasImg from "../assets/tomas.png";
import virginiaImg from "../assets/vir.png";
import { useState } from "react";
import ModoOscuro from "../componentes/ModoOscuro";
import Sidebar from "../componentes/Sidebar";
import HeaderPortadaBitacora from "../componentes/HeaderPortadaBitacora";
import TarjetaIntegrante from "../componentes/TarjetaIntegrante";
import FooterPortada from "../componentes/FooterPortada";

const Portada = () => {
  const portadaItems = [
    "Navegación clara con Sidebar (Portada / Bitácora / Datos JSON / Datos API / Árbol de renderizado / Diagrama de Carpetas / Integrantes (Ana/ Virginia/ Tomás/ Jessica/ Álvaro)).",
    "Diseño responsive con breakpoints en 400px, 900px y 1200px.",
    "Portada en Portada.jsx, carpeta integrantes donde hablamos de cada uno, carpeta componenetes donde se encuentran componentes reutilizables y carpeta paginas donde se encuentran todos los jsx que aparecen en el Sidebar.",
    "Sección Bitácora con decisiones, dificultades y cambios.",
    "Tipografías de Google Fonts y estilos consistentes.",
  ];
  
  // Estado del Modo
  const [isDark, setIsDark] = useState(false);
    const toggleTheme = () => {
    setIsDark(prevIsDark => !prevIsDark);
  };
    const themeStyles = {
    backgroundColor: isDark ? 'black' : 'white',
    color: isDark ? 'white' : 'black',
  };

  // Estado del filtro
  const [filtro, setFiltro] = useState("");

  // Normaliza texto (quita tildes y pasa a minúscula)
  const normalizar = (texto) =>
    texto
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .toLowerCase();

  const integrantes = [
    { nombre: "Álvaro", imagen: alvaroImg, ruta: "/integrantes/alvaro" },
    { nombre: "Ana", imagen: anaImg, ruta: "/integrantes/ana" },
    { nombre: "Jessica", imagen: jessicaImg, ruta: "/integrantes/jessica" },
    { nombre: "Tomás", imagen: tomasImg, ruta: "/integrantes/tomas" },
    { nombre: "Virginia", imagen: virginiaImg, ruta: "/integrantes/virginia" },
  ];

  const filtrados = integrantes.filter((integrante) =>
    normalizar(integrante.nombre).startsWith(normalizar(filtro))
  );

  return (
    <div style={themeStyles}>
      <ModoOscuro toggleTheme={toggleTheme} isDark={isDark}/>
      <Sidebar />
      <HeaderPortadaBitacora
        titulo="Proyecto Web - Grupo 12 🎮"
        subtitulo="Características principales"
        descripcion="Somos el grupo 12, Virginia, Álvaro, Jessica, Tomás y Ana. Nuestro sitio trata de plasmar de una forma 'retro' nuestras habilidades sobre React, intentando usar las mejores prácticas sobre esta librería, creando una portada con un menú lateral hacia todas las páginas."
        items={portadaItems}
      />
      <section className="">
        <h2 className="">GitHub</h2>
        Ver proyecto/repositorio{" "}
        <a href="https://github.com/Ana-Galvez/TP2-FRONT-END" target="_blank">
          <img src={imagen} width="30" />
        </a>
      </section>

      <section className="mt-5">
        <h2>Integrantes</h2>

        <div className="mt-3">
          <input
            type="search"
            placeholder="Filtrar integrantes…"
            value={filtro}
            onChange={(e) => setFiltro(e.target.value)}
            style={{
              padding: "8px 12px",
              border: "1px solid #ccc",
              borderRadius: "6px",
              fontSize: "1rem",
              marginTop: "8px",
            }}
          />
        </div>

        <div
          className="team mt-2"
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: "16px",
            marginTop: "20px",
          }}
        >
          {filtrados.map((integrante) => (
            <TarjetaIntegrante key={integrante.nombre} {...integrante} />
          ))}

          {filtrados.length === 0 && (
            <p style={{ marginTop: "10px" }}>No se encontraron integrantes.</p>
          )}
        </div>
      </section>
      <FooterPortada />
    </div>
  );
};
export default Portada;
