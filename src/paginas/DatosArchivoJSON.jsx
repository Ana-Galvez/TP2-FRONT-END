import { useState } from "react";
import ModoOscuro from "../componentes/ModoOscuro";
import Sidebar from "../componentes/Sidebar";
import FooterPortada from "../componentes/FooterPortada";

const DatosArchivoJSON = () => {
  // Estado del Modo
const [isDark, setIsDark] = useState(false);
  const toggleTheme = () => {
  setIsDark(prevIsDark => !prevIsDark);
};
  const themeStyles = {
  backgroundColor: isDark ? 'black' : 'white',
  color: isDark ? 'white' : 'black',
};

  return (
    <div style={themeStyles}>
      <ModoOscuro toggleTheme={toggleTheme} isDark={isDark}/>
      <Sidebar/>
      <h1>Datos del Archivo JSON</h1>
      <FooterPortada/>
    </div>
  )
}
export default DatosArchivoJSON