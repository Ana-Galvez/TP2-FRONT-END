import { useRef } from "react";
import MostrarOcultar from "./MostrarOcultar";

const Habilidades = ({lista,children}) => {
  const sectionRef = useRef(null);
  return (
    <section ref={sectionRef}>
      <MostrarOcultar titulo="Habilidades"/>
      {lista}
      {children}
    </section>
  )
}
export default Habilidades