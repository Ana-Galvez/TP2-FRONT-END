import "../assets/styles/portada.css";
import { useRef } from "react";

const HeaderIntegrantes = ({children}) => {
  const headerRef = useRef(null); 
  return (
    <header className="header-portada-bitacora"  ref={headerRef}>
      {children}
    </header>
  )
}
export default HeaderIntegrantes