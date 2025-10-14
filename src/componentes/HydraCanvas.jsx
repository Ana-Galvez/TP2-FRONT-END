import React, { useEffect, useRef } from 'react';

const HydraCanvas = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    // --- Cargar el script de Hydra dinámicamente ---
    const script = document.createElement('script');
    script.src = 'https://cdn.jsdelivr.net/npm/hydra-synth/dist/hydra-synth.js';
    script.onload = () => {
      // Una vez cargado, inicializar Hydra
      const canvas = canvasRef.current;
      if (!canvas) return;

      const hydra = new window.Hydra({
        canvas: canvas,
        detectAudio: false,
        width: window.innerWidth,
        height: window.innerHeight,
      });

      // --- Tu código visual de Hydra ---
      // Lo he mantenido global para que sea accesible desde la consola si quieres experimentar
      window.speed = 0.1;
      window.osc(100, -0.0018, 0.17)
        .diff(window.osc(20, 0.00008).rotate(Math.PI / 0.00003))
        .modulateScale(
          window.noise(3.5, 0.18).modulateScale(window.osc(13).rotate(() => Math.sin(window.time / 22))),
          3
        )
        .contrast(1.4)
        .add(window.src(window.o0).modulate(window.o0, 0.04), 0.6, 0.9)
        .brightness(0.0003, 2)
        .contrast(0.5, 2, 0.1, 2)
        .modulateScale(window.osc(2), -0.2, 2, 1, 0.3)
        .posterize(200)
        .rotate(1, 0.2, 0.01, 0.001)
        .contrast(0.18, 0.3, 0.1, 0.2, 0.03, 1)
        .brightness(0.0001, -1, 10)
        .color(0.8, 0, 1.5) 
        .saturate(1.8)      
        .contrast(1.6)     
        .out();

      // --- Ajuste responsive ---
      const handleResize = () => {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
        hydra.setResolution(window.innerWidth, window.innerHeight);
      };

      window.addEventListener('resize', handleResize);

      // Limpieza al desmontar el componente
      return () => {
        window.removeEventListener('resize', handleResize);
        // Podríamos intentar detener Hydra aquí si fuera necesario, pero por ahora está bien
      };
    };

    document.body.appendChild(script);

    // Limpieza del script al desmontar
    return () => {
      document.body.removeChild(script);
    };
  }, []); // El array vacío asegura que esto se ejecute solo una vez

  return <canvas id="hydra-canvas" ref={canvasRef} style={{ position: 'fixed', top: 0, left: 0, zIndex: -1, width: '100vw', height: '100vh' }}></canvas>;
};

export default HydraCanvas;
