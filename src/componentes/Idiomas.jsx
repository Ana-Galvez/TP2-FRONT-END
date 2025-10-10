import { useRef } from "react";

const Idiomas = ({children}) => {
  const sectionRef = useRef(null); 
  return (
    <section  ref={sectionRef}>
      {children}
    </section>
  )
}
export default Idiomas