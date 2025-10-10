import { useRef } from "react";

const Proyectos = ({children}) => {
  const sectionRef = useRef(null);
  return (
    <section ref={sectionRef}>
      {children}
    </section>
  )
}
export default Proyectos