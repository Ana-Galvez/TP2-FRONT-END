import FooterPortada from "../componentes/FooterPortada"
import HeaderPortadaBitacora from "../componentes/HeaderPortadaBitacora"
import Sidebar from "../componentes/Sidebar"

const Portada = () => {
    const portadaItems = [
    "Navegación clara con botones (Inicio / Bitácora / Cambiar tema).",
    "Diseño responsive con breakpoints en 400px, 900px y 1200px.",
    "Portada en index.html y páginas individuales por integrante.",
    "Sección Bitácora con decisiones, dificultades y cambios.",
    "Tipografías de Google Fonts y estilos consistentes.",
    "Interacción con JavaScript en portada y en cada página personal.",
  ];

  return (
    <>
    <Sidebar/>
    <HeaderPortadaBitacora
      titulo="Proyecto Web - Grupo 12 🎮"
      subtitulo="Características principales"
      descripcion="Somos el grupo 12, Virginia, Álvaro, Jessica, Tomás y Ana. Nuestro sitio trata de plasmar de una forma 'retro' nuestras habilidades sobre HTML, CSS y Javascript, creando una portada con enlaces a la página de cada uno de los integrante."
      items={portadaItems}
    />
    <FooterPortada/>
    </>
  )
}
export default Portada