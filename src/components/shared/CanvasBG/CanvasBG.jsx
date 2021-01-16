import React, {useRef, useEffect} from 'react';

export function CanvasBG(props) {

  const canvasRef = useRef(null);

  function Pixel(x, y) {
    this.x = x;
    this.y = y;
    this.hue = Math.floor(Math.random() * 360);
    let direction = Math.random() > 0.5 ? -1 : 1;
    this.velocity = (Math.random() * 30 + 20) * 0.01 * direction;
  }

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas.getContext('2d');
    Pixel.prototype.update = function () {
      this.hue += this.velocity;
    };

    Pixel.prototype.render = function (ctx) {
      let hue = Math.round(this.hue);
      ctx.fillStyle = 'hsl(' + hue + ', 100%, 50% )';
      ctx.fillRect(this.x, this.y, 1, 1);
    };

    let pixels = [
      new Pixel(0, 0),
      new Pixel(1, 0),
      new Pixel(0, 1),
      new Pixel(1, 1),
    ];

    const startAnimation = () => {
      pixels.forEach(function (pixel) {
        pixel.update();
        pixel.render(context);
      });
      window.requestAnimationFrame(startAnimation);
    };

    startAnimation();

    return () => window.cancelAnimationFrame(startAnimation);
  }, []);

  return <canvas width="2" height="2" ref={canvasRef} {...props}/>
}
