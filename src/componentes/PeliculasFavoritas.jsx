import { useRef } from "react";

const PeliculasFavoritas = ({children}) => {
  const sectionRef = useRef(null); 
  return (
    <section className="footer" ref={sectionRef}>
      {children}
    </section>
  )
}
export default PeliculasFavoritas