import { useEffect, useRef } from "react";

const Footer = ({children}) => {

  const footerRef = useRef(null); 
  // Función para activar el modo secreto
  useEffect(() => {
    const handleFooterClick = () => {
      alert("🎮 ¡Modo secreto activado! Gracias por visitar nuestra web. 😁");
    };

    const footerElemento = footerRef.current;

    if (footerElemento) {
      footerElemento.addEventListener("click", handleFooterClick);

      // Función para limpiar el useEffect
      return () => {
        footerElemento.removeEventListener("click", handleFooterClick);
      };
    }
  }, []);

  return (
    <footer style={{textAlign:"center", color:"#475569",fontSize:"14px",marginTop:"auto"}}>
      {children}
    </footer>
  );
};
export default Footer;
