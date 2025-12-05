// SnowfallAnimation.jsx
import React, { useEffect, useRef } from "react";

const SnowfallAnimation = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const snowflakes = [];
    const maxFlakes = 50; // subtle number

    for (let i = 0; i < maxFlakes; i++) {
      snowflakes.push({
        x: Math.random() * width,
        y: Math.random() * height,
        r: Math.random() * 1.5 + 0.5, // very small dots
        d: Math.random() + 0.2,
        opacity: Math.random() * 0.5 + 0.2, // light and subtle
      });
    }

    let angle = 0;

    const draw = () => {
      ctx.clearRect(0, 0, width, height);
      for (let i = 0; i < maxFlakes; i++) {
        const f = snowflakes[i];
        ctx.beginPath();
        ctx.fillStyle = `rgba(255,255,255,${f.opacity})`;
        ctx.arc(f.x, f.y, f.r, 0, Math.PI * 2);
        ctx.fill();
      }
      move();
    };

    const move = () => {
      angle += 0.002;
      for (let i = 0; i < maxFlakes; i++) {
        const f = snowflakes[i];
        f.y += Math.pow(f.d, 2) * 0.3;
        f.x += Math.sin(angle) * 0.3;

        if (f.y > height) {
          f.y = -5;
          f.x = Math.random() * width;
        }
      }
    };

    const animate = () => {
      draw();
      requestAnimationFrame(animate);
    };

    animate();

    const handleResize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        pointerEvents: "none",
        zIndex: 9999,
      }}
    />
  );
};

export default SnowfallAnimation;
