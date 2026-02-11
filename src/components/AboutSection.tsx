import { motion } from 'framer-motion';
import { useEffect, useRef } from 'react';

const WireframeCanvas = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    canvas.width = 400;
    canvas.height = 400;
    let angle = 0;

    const drawWireframe = () => {
      ctx.clearRect(0, 0, 400, 400);
      const cx = 200, cy = 200, r = 130;

      // Generate sphere points with more divisions
      const latCount = 20;
      const lonCount = 28;
      const points: [number, number, number][] = [];

      for (let lat = 0; lat < latCount; lat++) {
        for (let lon = 0; lon < lonCount; lon++) {
          const theta = (lat / (latCount - 1)) * Math.PI;
          const phi = (lon / (lonCount - 1)) * Math.PI * 2 + angle;
          const x = r * Math.sin(theta) * Math.cos(phi);
          const y = r * Math.cos(theta);
          const z = r * Math.sin(theta) * Math.sin(phi);
          points.push([x, y, z]);
        }
      }

      ctx.shadowColor = 'hsl(142 71% 45% / 0.35)';
      ctx.shadowBlur = 5;

      // Draw latitude lines
      for (let lat = 0; lat < latCount; lat++) {
        const depth = Math.abs(lat - latCount / 2) / (latCount / 2);
        ctx.strokeStyle = `hsl(142 71% 45% / ${0.15 + depth * 0.45})`;
        ctx.lineWidth = 0.5 + depth * 0.4;
        ctx.beginPath();
        for (let lon = 0; lon < lonCount; lon++) {
          const idx = lat * lonCount + lon;
          const [x, y] = points[idx];
          if (lon === 0) ctx.moveTo(cx + x, cy + y);
          else ctx.lineTo(cx + x, cy + y);
        }
        ctx.stroke();
      }

      // Draw longitude lines
      for (let lon = 0; lon < lonCount; lon++) {
        ctx.strokeStyle = 'hsl(142 71% 45% / 0.35)';
        ctx.lineWidth = 0.5;
        ctx.beginPath();
        for (let lat = 0; lat < latCount; lat++) {
          const idx = lat * lonCount + lon;
          const [x, y] = points[idx];
          if (lat === 0) ctx.moveTo(cx + x, cy + y);
          else ctx.lineTo(cx + x, cy + y);
        }
        ctx.stroke();
      }

      // Draw diagonal cross-hatch lines for extra intricacy
      ctx.strokeStyle = 'hsl(271 91% 65% / 0.15)';
      ctx.lineWidth = 0.3;
      ctx.shadowColor = 'hsl(271 91% 65% / 0.2)';
      ctx.shadowBlur = 4;
      for (let i = 0; i < latCount - 1; i += 2) {
        ctx.beginPath();
        for (let j = 0; j < lonCount - 1; j++) {
          const idx1 = i * lonCount + j;
          const idx2 = (i + 1) * lonCount + ((j + 1) % lonCount);
          const [x1, y1] = points[idx1];
          const [x2, y2] = points[idx2];
          ctx.moveTo(cx + x1, cy + y1);
          ctx.lineTo(cx + x2, cy + y2);
        }
        ctx.stroke();
      }

      // Accent dots at intersections
      ctx.shadowColor = 'hsl(142 71% 45% / 0.5)';
      ctx.shadowBlur = 3;
      for (let lat = 0; lat < latCount; lat += 3) {
        for (let lon = 0; lon < lonCount; lon += 4) {
          const idx = lat * lonCount + lon;
          const [x, y, z] = points[idx];
          const brightness = (z + r) / (2 * r);
          ctx.fillStyle = `hsl(142 71% 45% / ${0.2 + brightness * 0.6})`;
          ctx.beginPath();
          ctx.arc(cx + x, cy + y, 1 + brightness * 1.2, 0, Math.PI * 2);
          ctx.fill();
        }
      }

      angle += 0.004;
      requestAnimationFrame(drawWireframe);
    };

    const raf = requestAnimationFrame(drawWireframe);
    return () => cancelAnimationFrame(raf);
  }, []);

  return <canvas ref={canvasRef} className="w-full max-w-[400px] h-auto mx-auto" />;
};

const AboutSection = () => {
  return (
    <section id="about" className="relative py-32">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <p className="font-mono text-sm tracking-[0.3em] uppercase text-neon-purple mb-4">About Us</p>
            <h2 className="font-mono text-4xl md:text-5xl font-bold text-foreground mb-6 leading-tight" style={{ textShadow: '0 0 30px hsl(271 91% 65% / 0.15)' }}>
              We build what others{' '}
              <span className="text-neon-green">can't imagine</span> yet.
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-6 font-body">
              Aetnios is a collective of senior engineers, architects, and strategists who thrive at the intersection of emerging technology and real-world impact. We don't just ship code — we engineer systems that redefine what's possible.
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed font-body">
              From pre-seed startups to enterprise transformations, we bring deep technical expertise with the strategic thinking to match. Every engagement is treated as a partnership, not a transaction.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="flex justify-center"
          >
            <WireframeCanvas />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
