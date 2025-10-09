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
    <footer className="footer" ref={footerRef}>
      {children}
{/* 
      <p>
        © 2025 Equipo Retro Front End Grupo 12 —{" "}
        <Link to="/paginas/bitacora">Bitacora</Link>
      </p>
      <p>Insert Coin 💾</p> */}
    </footer>
  );
};
export default Footer;
