import { useRef } from "react";

const Educacion = ({children}) => {
  const sectionRef = useRef(null); 
  return (
    <section  ref={sectionRef}>
      {children}
    </section>
  )
}
export default Educacion