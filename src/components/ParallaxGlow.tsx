import { useEffect, useState } from 'react';

export const ParallaxGlow = () => {
  const [mousePos, setMousePos] = useState({ x: 50, y: 30 });
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const x = Math.round((e.clientX / window.innerWidth) * 100);
      const y = Math.round((e.clientY / window.innerHeight) * 100);
      setMousePos({ x, y });
      setIsHovering(true);
    };

    const handleMouseLeave = () => {
      setIsHovering(false);
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    document.body.addEventListener('mouseleave', handleMouseLeave);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.body.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden" aria-hidden="true">
      {/* Deep Obsidian Black to Midnight Purple Canvas Gradient */}
      <div
        className="absolute inset-0 bg-[#06040d]"
        style={{
          backgroundImage: `
            radial-gradient(ellipse 90% 60% at 50% -10%, rgba(124, 58, 237, 0.35) 0%, rgba(76, 29, 149, 0.15) 50%, transparent 85%),
            radial-gradient(ellipse 80% 50% at 85% 60%, rgba(147, 51, 234, 0.18) 0%, rgba(59, 7, 100, 0.08) 55%, transparent 80%),
            radial-gradient(ellipse 70% 60% at 15% 80%, rgba(139, 92, 246, 0.16) 0%, rgba(88, 28, 135, 0.06) 50%, transparent 75%),
            linear-gradient(180deg, #07050e 0%, #0d081c 40%, #080512 75%, #05030a 100%)
          `,
        }}
      />

      {/* DYNAMIC MOUSE FOLLOWER: Luminous Light-toned Dynamic Glow with Breathing Texture (鼠标滑过的浅色动态呼吸光晕) */}
      <div
        className="absolute transition-transform duration-500 ease-out"
        style={{
          left: `${mousePos.x}%`,
          top: `${mousePos.y}%`,
          transform: 'translate(-50%, -50%)',
          opacity: isHovering ? 1 : 0.6,
        }}
      >
        {/* Core light glow - soft luminous white-lilac with breathing pulse */}
        <div
          className="w-[380px] sm:w-[520px] h-[380px] sm:h-[520px] rounded-full blur-[80px] sm:blur-[110px] animate-breathe-glow"
          style={{
            background: 'radial-gradient(circle, rgba(255, 255, 255, 0.32) 0%, rgba(233, 213, 255, 0.28) 25%, rgba(192, 132, 252, 0.22) 50%, rgba(147, 51, 234, 0.08) 72%, transparent 85%)',
          }}
        />

        {/* Expansive soft purple halo */}
        <div
          className="absolute inset-[-120px] rounded-full blur-[140px] opacity-60"
          style={{
            background: 'radial-gradient(circle, rgba(168, 85, 247, 0.25) 0%, rgba(126, 34, 206, 0.14) 45%, transparent 75%)',
          }}
        />
      </div>

      {/* Static Ambient Atmospheric Breathing Blooms for cinematic spatial depth */}
      <div
        className="absolute -top-[15%] left-[10%] w-[750px] h-[750px] rounded-full blur-[160px] opacity-40 animate-breathe-glow"
        style={{
          background: 'radial-gradient(circle, rgba(168, 85, 247, 0.35) 0%, rgba(124, 58, 237, 0.15) 50%, transparent 75%)',
          animationDuration: '6s',
        }}
      />

      <div
        className="absolute top-[45%] -right-[10%] w-[800px] h-[800px] rounded-full blur-[180px] opacity-30 animate-breathe-glow"
        style={{
          background: 'radial-gradient(circle, rgba(147, 51, 234, 0.3) 0%, rgba(88, 28, 135, 0.12) 55%, transparent 75%)',
          animationDuration: '8s',
          animationDelay: '1.5s',
        }}
      />

      <div
        className="absolute top-[80%] -left-[10%] w-[900px] h-[900px] rounded-full blur-[200px] opacity-35 animate-breathe-glow"
        style={{
          background: 'radial-gradient(circle, rgba(139, 92, 246, 0.28) 0%, rgba(76, 29, 149, 0.12) 55%, transparent 75%)',
          animationDuration: '7s',
          animationDelay: '3s',
        }}
      />

      {/* Subtle architectural dot matrix for depth and grain texture */}
      <div
        className="absolute inset-0 opacity-[0.05]"
        style={{
          backgroundImage: `radial-gradient(rgba(216, 180, 254, 0.9) 1px, transparent 1px)`,
          backgroundSize: '32px 32px',
        }}
      />
    </div>
  );
};
