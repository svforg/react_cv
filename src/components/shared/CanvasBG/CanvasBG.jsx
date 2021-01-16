import React, {useRef, useEffect} from 'react';


export function CanvasBG(props) {
  const canvasRef = useRef(null);

  const startAnimation = () => {

    window.requestAnimationFrame(startAnimation);
  };


  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas.getContext('2d');

    let time = 0;

    const color = (x, y, r, g, b) => {
      context.fillStyle = `rgb(${r}, ${g}, ${b})`;
      context.fillRect(x, y, 280, 280);
    };

    const R = (x, y, time) => Math.floor(192 + 64 * Math.cos((x * x - y * y) / 300 + time));

    const G = (x, y, time) => Math.floor(192 + 64 * Math.sin((x * x * Math.cos(time / 4) + y * y * Math.sin(time / 3)) / 300));

    const B = (x, y, time) => Math.floor(192 + 64 * Math.sin(5 * Math.sin(time / 9) + ((x - 100) * (x - 100) + (y - 100) * (y - 100)) / 1100));

    const startAnimation = () => {
      for (let x = 0; x <= 30; x++) {
        for (let y = 0; y <= 30; y++) {
          color(x, y, R(x, y, time), G(x, y, time), B(x, y, time));
        }
      }
      time = time + 0.03;
      window.requestAnimationFrame(startAnimation);
    };

    startAnimation();

    return () => {
      window.cancelAnimationFrame(startAnimation)
    }
    }, []);

  return <canvas ref={canvasRef} {...props}/>
}
