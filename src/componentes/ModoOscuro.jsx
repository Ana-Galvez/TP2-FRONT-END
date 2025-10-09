const ModoOscuro = ({toggleTheme, isDark}) => {
  return (
    <button onClick={toggleTheme}
      style={{
        backgroundColor: isDark ? "white" : "black",
        color: isDark ? "black" : "white",}}
    >Cambiar tema {isDark ? "Claro ☀️" : "Oscuro 🌙"}</button>
  )
}
export default ModoOscuro