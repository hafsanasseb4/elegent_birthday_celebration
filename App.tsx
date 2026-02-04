
import React, { useState, useEffect, useMemo } from 'react';
import Sparkles from './components/Sparkles';
import Balloon from './components/Balloon';
import Fireworks from './components/Fireworks';
import Cake from './components/Cake';
import FloatingHearts from './components/FloatingHearts';

const App: React.FC = () => {
  const [showContent, setShowContent] = useState(false);
  const [showSecondary, setShowSecondary] = useState(false);
  const [showSpecial, setShowSpecial] = useState(false);

  useEffect(() => {
    // Progressive reveal sequence
    const t1 = setTimeout(() => setShowContent(true), 800);
    const t2 = setTimeout(() => setShowSecondary(true), 2200);
    const t3 = setTimeout(() => setShowSpecial(true), 3800);
    
    return () => {
      [t1, t2, t3].forEach(clearTimeout);
    };
  }, []);

  // "bare bare golden balloons bhot ziada" - 120 massive golden balloons
  const balloons = useMemo(() => {
    return Array.from({ length: 120 }).map((_, i) => ({
      id: i,
      color: 'gold' as const,
      size: 250 + Math.random() * 400, // Even more massive sizes
      x: Math.random() * 120 - 10, 
      delay: Math.random() * 50,
    }));
  }, []);

  return (
    <div className="relative w-screen h-screen overflow-hidden bg-[#050505] flex flex-col items-center justify-center font-montserrat text-white select-none">
      
      {/* Interactive Canvas Fireworks */}
      <Fireworks />
      
      {/* Small Golden and White Floating Hearts */}
      <FloatingHearts />

      {/* Decorative Gold Dust Layer */}
      <div className="absolute inset-0 pointer-events-none opacity-40 mix-blend-screen z-0" 
           style={{ background: 'url("https://www.transparenttextures.com/patterns/dust.png")' }}></div>

      <Sparkles />

      {/* Massive Collection of Huge Golden Balloons */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        {balloons.map((b) => (
          <Balloon key={b.id} color={b.color} size={b.size} x={b.x} delay={b.delay} />
        ))}
      </div>

      {/* Main Content Area */}
      <div className="z-30 text-center px-6 max-w-5xl">
        <div className={`transition-all duration-[2000ms] transform ${showContent ? 'translate-y-0 opacity-100 scale-100' : 'translate-y-20 opacity-0 scale-95'}`}>
          <h1 className="font-playfair text-7xl md:text-9xl uppercase tracking-tighter leading-none gold-text mb-2 filter drop-shadow-2xl">
            Happy<br />Birthday
          </h1>
          <h2 className="font-script text-8xl md:text-[13rem] text-[#f9f295] drop-shadow-[0_0_50px_rgba(212,175,55,1)] mt-[-50px] animate-pulse">
            Armaan
          </h2>
        </div>

        {/* The Quote with Stylish Script Font */}
        <div className={`transition-all duration-1000 delay-700 transform ${showSecondary ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'} mt-10`}>
          <div className="relative inline-block px-16 py-8">
             <div className="absolute top-0 left-0 w-24 h-24 border-t-2 border-l-2 border-[#d4af37] opacity-40"></div>
             <div className="absolute bottom-0 right-0 w-24 h-24 border-b-2 border-r-2 border-[#d4af37] opacity-40"></div>
             <p className="text-4xl md:text-7xl text-[#f9f295] font-script tracking-wide drop-shadow-lg leading-tight">
               "May your year be as legendary as you are"
             </p>
          </div>
        </div>
      </div>

      {/* Cake and Decor */}
      <div className={`mt-20 flex items-end justify-center gap-12 md:gap-48 z-40 transition-all duration-[1500ms] ${showSpecial ? 'translate-y-0 opacity-100' : 'translate-y-32 opacity-0'}`}>
        <div className="hidden lg:flex flex-col items-center gap-4 mb-10">
            <div className="w-36 h-36 bg-[#1a1a1a] border border-[#d4af37] rounded-xl relative shadow-2xl transform -rotate-12">
                <div className="absolute left-1/2 -translate-x-1/2 w-4 h-full bg-[#d4af37]"></div>
                <div className="absolute top-1/2 -translate-y-1/2 w-full h-4 bg-[#d4af37]"></div>
            </div>
        </div>

        {/* The Luxury Cake */}
        <div className="transform scale-[1.6] md:scale-[2.4] hover:scale-[2.6] transition-transform duration-700 cursor-pointer drop-shadow-[0_40px_80px_rgba(0,0,0,1)]">
            <Cake />
        </div>

        <div className="hidden lg:flex flex-col items-center gap-4 mb-10">
            <div className="w-36 h-36 bg-[#0a0a0a] border border-[#d4af37] rounded-xl relative shadow-2xl transform rotate-12">
                <div className="absolute inset-5 border border-[#d4af37]/30 rounded"></div>
            </div>
        </div>
      </div>

      {/* Decorative Corner Frames */}
      <div className="fixed top-0 left-0 p-8 pointer-events-none opacity-50">
        <div className="w-64 h-64 border-t-8 border-l-8 border-[#d4af37] rounded-tl-[80px]"></div>
      </div>
      <div className="fixed bottom-0 right-0 p-8 pointer-events-none opacity-50">
        <div className="w-64 h-64 border-b-8 border-r-8 border-[#d4af37] rounded-br-[80px]"></div>
      </div>

      {/* Replay Button */}
      <div className="fixed bottom-12 right-12 z-50">
        <button 
          onClick={() => window.location.reload()}
          className="group relative flex items-center justify-center p-1 overflow-hidden rounded-full shadow-[0_0_50px_rgba(212,175,55,0.6)]"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-[#b8860b] via-[#f9f295] to-[#d4af37] animate-spin-slow"></div>
          <div className="relative bg-black px-14 py-6 rounded-full text-[#d4af37] font-bold uppercase tracking-[0.4em] text-sm hover:bg-transparent hover:text-black transition-all">
            Celebrate Armaan
          </div>
        </button>
      </div>

      <style>{`
        @keyframes floatUp {
          from { transform: translateY(120vh) rotate(0deg); }
          to { transform: translateY(-350vh) rotate(30deg); }
        }
        .animate-float-up {
          animation-name: floatUp;
          animation-timing-function: cubic-bezier(0.2, 0, 0.3, 1);
        }
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        .animate-spin-slow {
          animation: spin-slow 6s linear infinite;
        }
      `}</style>
    </div>
  );
};

export default App;
