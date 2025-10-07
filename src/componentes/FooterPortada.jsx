import { Link } from "react-router-dom";
import { useEffect } from 'react';

const FooterPortada = () => {

  // Función para activar el modo secreto
  useEffect(() => {
    const handleFooterClick = () => {
      alert("🎮 ¡Modo secreto activado! Gracias por visitar nuestra web. 😁");
    };

    const footerElemento = document.querySelector("footer");
    
    if (footerElemento) {
      footerElemento.addEventListener("click", handleFooterClick);
      
      // Función para limpiar el useEffect
      return () => {
        footerElemento.removeEventListener("click", handleFooterClick);
      };
    }
  }, []);

  return (
<footer className="footer">
  <p>
    © 2025 Equipo Retro Front End Grupo 12 —{" "}
    <Link to="/paginas/bitacora">Bitacora</Link>
  </p>
  <p>Insert Coin 💾</p>
</footer>
  )
}
export default FooterPortada