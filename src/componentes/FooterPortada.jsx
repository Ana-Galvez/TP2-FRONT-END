import { Link } from "react-router-dom"

const FooterPortada = () => {
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