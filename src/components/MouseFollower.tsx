import { useEffect, useState } from 'react';

const MouseFollower = () => {
  const [pos, setPos] = useState({ x: -500, y: -500 });

  useEffect(() => {
    let targetX = -500, targetY = -500;
    let currentX = -500, currentY = -500;
    let raf: number;

    const handleMouse = (e: MouseEvent) => {
      targetX = e.clientX;
      targetY = e.clientY + window.scrollY;
    };

    const animate = () => {
      currentX += (targetX - currentX) * 0.08;
      currentY += (targetY - currentY) * 0.08;
      setPos({ x: currentX, y: currentY });
      raf = requestAnimationFrame(animate);
    };

    window.addEventListener('mousemove', handleMouse);
    raf = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener('mousemove', handleMouse);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <div
      className="pointer-events-none fixed inset-0 z-[1] hidden md:block"
      style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', overflow: 'hidden' }}
    >
      <div
        className="absolute rounded-full"
        style={{
          width: 400,
          height: 400,
          left: pos.x - 200,
          top: pos.y - 200,
          background: 'radial-gradient(circle, hsl(142 71% 45% / 0.1) 0%, hsl(271 91% 65% / 0.08) 50%, transparent 70%)',
          filter: 'blur(40px)',
          willChange: 'transform',
        }}
      />
    </div>
  );
};

export default MouseFollower;
