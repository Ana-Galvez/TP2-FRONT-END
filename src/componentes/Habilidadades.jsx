import { useRef } from "react";
const Habilidadades = ({children}) => {
  const sectionRef = useRef(null);
  return (
    <section ref={sectionRef}>
      {children}
    </section>
  )
}
export default Habilidadades