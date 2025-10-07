import FooterPortada from "../componentes/FooterPortada";
import HeaderPortadaBitacora from "../componentes/HeaderPortadaBitacora";
import Sidebar from "../componentes/Sidebar";
import AgregarBitacora from "../componentes/AgregarBitacora";

const Bitacora = () => {
    const bitacoraItems = [
    "Definimos usar el esquema principal para todas las páginas, aunque podemos hacer cambios. Esto fue lo que nos llevó un poco de tiempo decidir.",
    "Google Fonts generales: Inter, Press Start 2P y Space Mono.",
    "Uso de variables en CSS para colores.",
    "Uso de hover, transform, linear gradient, box-shadow, etc.",
    "Componentes reutilizables con y sin props",
    "Uso de useState y useEffect",
    "Utilización de React Router",
    "Funcionalidades de React como dar opción Modo Oscuro, filtro por integrantes, agregado de lista, alert, etc.",
    "Se agregó ícono de toda la página.",
    "Se utilizó para el fondo de uno de los perfiles el proyecto colaborativo 'hydra'.",
    "Agregamos sección con link al repositorio de GitHub.",
    "Implementación del proyecto en Vercel importando el repositorio de GitHub.",
  ];

  return (
    <div>
      <Sidebar/>
      <HeaderPortadaBitacora
       titulo="Bitácora"/>
      <AgregarBitacora itemsIniciales={bitacoraItems}/>
      <FooterPortada/>
    </div>
  )
}
export default Bitacora