import { useRef } from "react";
const Habilidades = ({children}) => {
  const sectionRef = useRef(null);
  return (
    <section ref={sectionRef}>
      {children}
    </section>
  )
}
export default Habilidades