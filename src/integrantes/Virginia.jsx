import "../assets/styles/portada.css";
import "../assets/styles/vir.css";

import imgVirginia from "../assets/vir.png";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

import Sidebar from "../componentes/Sidebar";
import HeaderIntegrantes from "../componentes/HeaderIntegrantes";
import Footer from "../componentes/Footer";
import Habilidades from "../componentes/Habilidades";
import PeliculasFavoritas from "../componentes/PeliculasFavoritas";
import Musica from "../componentes/Musica";

const tags = [
  "HTML", "CSS", "JavaScript", "React", "Vite", "React Router"
];
const skills = [
  "React (hooks: useState, useEffect, useRef, useCallback)",
  "React Router (rutas, NavLink, params)",
  "Componentes reutilizables (props y children)",
  "Manejo de estado y renderizado condicional",
  "Consumo de APIs (fetch) + manejo de loading/error",
  "JSON local + .map() para render dinámico",
  "CSS responsive (Flex/Grid, variables, hover, sombras)",
  "Accesibilidad y HTML semántico básico",
  "Git/GitHub (ramas, commits, PR) y deploy en Vercel",
  "Vite + npm scripts (dev, build, preview)"
];
const peliculas = ["🎬 Back to the Future", "🎬 Tron", "🎬 Ready Player One"];
const canciones = [
  "🎵 Vangelis: Chariots Of Fire",
  "🎵 Electric Light Orchestra: Time",
  "🎵 Pet Shop Boys: Always On My Mind",
];

export default function Virginia() {
  // Pac-Mode: guardamos preferencia y togglamos clase en <body>
  const [pac, setPac] = useState(() => localStorage.getItem("vir-pac") === "1");

  useEffect(() => {
    const b = document.body;
    if (pac) b.classList.add("vir-pac");
    else b.classList.remove("vir-pac");
    localStorage.setItem("vir-pac", pac ? "1" : "0");
    return () => b.classList.remove("vir-pac");
  }, [pac]);

  return (
    <div className="portada-container vir-page">
      <Sidebar />

      {/* igual que Ana/Jessica */}
      <div className="main-content">
        {/* Header + avatar flotante */}
        <div className="vir-hero">
          <HeaderIntegrantes>
            <h1>Virginia</h1>
            <ul>
              <li>📍 Bahía Blanca</li>
              <li>🎂 41 años</li>
            </ul>

            <div className="vir-tags">
              {tags.map((t) => (
                <span key={t}>{t}</span>
              ))}
            </div>
          </HeaderIntegrantes>

          {/* Avatar que “muerde” el borde inferior derecho */}
          <img
            src={imgVirginia}
            alt="Avatar de Virginia"
            className="vir-avatar-floating"
          />
        </div>

        {/* Tarjetas tipo pixel (blancas en modo normal) */}
        <div className="vir-grid">
          <div className="pixel-card">

            <Habilidades>
              <h2>Habilidades</h2>
              <ul id="skills-list" className="skills-grid">
                {skills.map((s) => <li key={s}>{s}</li>)}
              </ul>
            </Habilidades>

          </div>

          <div className="pixel-card">
            <PeliculasFavoritas>
              <h2>Películas</h2>
              <ul id="peli-list">
                {peliculas.map((p) => (
                  <li key={p}>{p}</li>
                ))}
              </ul>
            </PeliculasFavoritas>
          </div>

          <div className="pixel-card">
            <Musica>
              <h2>Música</h2>
              <ul id="musica-list">
                {canciones.map((c) => (
                  <li key={c}>{c}</li>
                ))}
              </ul>
            </Musica>
          </div>
        </div>

        <Footer>
          <p>
            © 2025 Grupo 12 — <Link to="/paginas/bitacora">Bitácora</Link>
          </p>
        </Footer>
      </div>

      {/* Botón flotante Pac-Mode (no deforma el layout) */}
      <button
        type="button"
        className="pac-fab"
        aria-label="Alternar modo Pac-Man"
        title={pac ? "Salir Pac-Mode" : "Activar Pac-Mode"}
        onClick={() => setPac((v) => !v)}
      >
        {pac ? "🟡" : "⚪"}
      </button>
    </div>
  );
}
