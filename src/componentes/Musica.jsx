import { useRef } from "react";

const Musica = ({children}) => {
  const sectionRef = useRef(null); 
  return (
    <section ref={sectionRef}>
      {children}
    </section>
  )
}
export default Musica