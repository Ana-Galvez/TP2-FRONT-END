import { useState } from "react";
import ModoOscuro from "../componentes/ModoOscuro";
import Sidebar from "../componentes/Sidebar";
import FooterPortada from "../componentes/FooterPortada";

const DiagramaCarpetas = () => {

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
      <h1>Diagrama de Carpetas</h1>
      <FooterPortada/>
    </div>
  )
}
export default DiagramaCarpetas