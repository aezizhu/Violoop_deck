import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Icon } from '../components/Icon';
import { ParticleBackground } from '../components/ParticleBackground';
import { SlideHeader } from '../components/SlideHeader';

const Slide04_HardwareFailure: React.FC = () => {
  const [activeDevice, setActiveDevice] = useState<string | null>(null);
  const [showVioloop, setShowVioloop] = useState(false);

  useEffect(() => {
    // Cycle through devices to show their failures
    const sequence = async () => {
      await new Promise(r => setTimeout(r, 1000));
      setActiveDevice('desktop');
      await new Promise(r => setTimeout(r, 2500));
      setActiveDevice('mobile');
      await new Promise(r => setTimeout(r, 2500));
      setShowVioloop(true);
      setActiveDevice('violoop');
    };
    sequence();
  }, []);

  return (
    <div className="w-full h-full flex flex-col relative overflow-hidden">
      {/* Particle Background */}
      <ParticleBackground opacity={0.35} particleCount={800} colorScheme="purple-green" />

      {/* Header */}
      <SlideHeader chapter={1} titleEn="Hardware Failure" titleZh="硬件失败" badge="PROBLEM" />

      {/* Background - Architecture Blueprint Grid */}
      <div className="absolute inset-0 z-[1]">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(59,130,246,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,0.03)_1px,transparent_1px)] bg-[size:40px_40px]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-blue-950/20 via-transparent to-transparent" />
      </div>

      {/* Main Visual - Device Theater */}
      <div className="flex-1 flex items-start md:items-center md:justify-center relative z-[5] overflow-y-auto py-4 md:py-0 px-4 md:px-8">
        <div className="relative w-full max-w-5xl flex flex-col md:flex-row items-center md:items-end justify-center gap-6 md:gap-8">

          {/* DESKTOP - Left - English */}
          <motion.div
            className="relative flex flex-col items-center"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            {/* Desktop Device Illustration */}
            <div className="mb-4 relative">
              {/* Monitor */}
              <div className={`w-40 h-28 md:w-48 md:h-32 border-2 rounded-lg flex items-center justify-center transition-colors duration-300 ${activeDevice === 'desktop' ? 'border-red-500/50 bg-zinc-900/50' : 'border-zinc-700 bg-zinc-900/30'}`}>
                {/* Screen content */}
                <div className="w-[90%] h-[85%] bg-black/50 rounded flex items-center justify-center">
                  <div className="w-8 h-8 rounded bg-zinc-800/50 border border-zinc-700" />
                </div>
              </div>
              {/* Monitor Stand */}
              <div className="w-8 h-4 bg-zinc-800 mx-auto" />
              <div className="w-16 h-2 bg-zinc-700 rounded mx-auto" />
              {/* Green dot indicator */}
              <div className={`absolute bottom-8 right-2 w-2 h-2 rounded-full ${activeDevice === 'desktop' ? 'bg-red-500' : 'bg-green-500'}`} />
            </div>

            {/* Desktop Info Card - English */}
            <motion.div
              className={`p-3 rounded-xl border transition-all duration-300 w-44 md:w-56 ${activeDevice === 'desktop' ? 'bg-red-950/30 border-red-500/50' : 'bg-zinc-900/50 border-zinc-800'}`}
            >
              <div className="flex items-center gap-2 mb-2">
                <Icon name="monitor" size={16} className={activeDevice === 'desktop' ? 'text-red-400' : 'text-zinc-500'} />
                <span className="text-white font-bold text-sm">Desktop</span>
              </div>
              <div className="flex gap-2 mb-2 flex-wrap">
                <span className="px-2 py-0.5 bg-green-900/30 text-green-400 text-[9px] font-bold uppercase rounded">Compute ✓</span>
                <span className="px-2 py-0.5 bg-green-900/30 text-green-400 text-[9px] font-bold uppercase rounded">Control ✓</span>
              </div>
              <div className={`text-[11px] leading-relaxed mb-2 ${activeDevice === 'desktop' ? 'text-red-300' : 'text-zinc-500'}`}>
                Agent lives inside OS.<br />
                <span className="text-white font-semibold">Laptop sleeps → Agent dies</span>
              </div>
              <div className="flex items-center gap-2 pt-2 border-t border-zinc-800">
                <Icon name="xCircle" size={14} className="text-red-500" />
                <span className="text-red-400 text-[10px] font-mono font-bold">No persistence</span>
              </div>
            </motion.div>

            {/* Label below */}
            <span className="mt-3 text-[10px] font-mono text-zinc-600 uppercase tracking-wider">No external observer</span>
          </motion.div>

          {/* VIOLOOP - Center (The Solution) - English */}
          <motion.div
            className="relative flex flex-col items-center z-20"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: showVioloop ? 1 : 0.3, scale: showVioloop ? 1.05 : 0.95 }}
            transition={{ delay: 0.5, duration: 0.8, type: "spring" }}
          >
            {/* Glow Effect */}
            {showVioloop && (
              <motion.div
                className="absolute -inset-4 bg-green-500/20 rounded-full blur-2xl"
                animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
                transition={{ duration: 2, repeat: Infinity }}
              />
            )}

            {/* GOD MODE Badge */}
            {showVioloop && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="mb-2 px-3 py-1 bg-green-500 text-black text-[10px] font-bold uppercase rounded-full"
              >
                GOD MODE
              </motion.div>
            )}

            {/* Violoop Device Illustration */}
            <div className="mb-4 relative">
              <div className={`w-36 h-48 md:w-44 md:h-56 border-2 rounded-2xl flex flex-col items-center justify-center transition-all duration-500 ${showVioloop ? 'border-green-500 bg-green-950/30 shadow-[0_0_40px_rgba(34,197,94,0.3)]' : 'border-zinc-700 bg-zinc-900/30'}`}>
                {/* Eye/Observing icon */}
                <div className={`mb-2 transition-colors duration-500 ${showVioloop ? 'text-green-400' : 'text-zinc-600'}`}>
                  <Icon name="eye" size={32} />
                </div>
                <span className={`text-[10px] font-mono uppercase tracking-wider mb-4 transition-colors duration-500 ${showVioloop ? 'text-green-400' : 'text-zinc-600'}`}>
                  OBSERVING
                </span>
                {/* Control dial */}
                <div className={`w-16 h-16 rounded-full border-2 flex items-center justify-center transition-all duration-500 ${showVioloop ? 'border-green-500 bg-green-950/50' : 'border-zinc-700 bg-zinc-900'}`}>
                  <motion.div
                    className={`w-2 h-2 rounded-full ${showVioloop ? 'bg-green-400' : 'bg-zinc-600'}`}
                    animate={showVioloop ? { scale: [1, 1.5, 1] } : {}}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  />
                </div>
              </div>
            </div>

            {/* Violoop Info Card - English */}
            <motion.div
              className={`p-3 rounded-xl border transition-all duration-500 w-52 md:w-64 ${showVioloop ? 'bg-green-950/30 border-green-500/50 shadow-[0_0_30px_rgba(34,197,94,0.2)]' : 'bg-zinc-900/30 border-zinc-800/50'}`}
            >
              <div className="flex items-center gap-2 mb-2">
                <Icon name="layers" size={16} className={showVioloop ? 'text-green-400' : 'text-zinc-600'} />
                <span className={`font-bold text-sm ${showVioloop ? 'text-white' : 'text-zinc-600'}`}>Violoop</span>
              </div>
              <div className="flex flex-wrap gap-1.5 mb-2">
                <span className={`px-2 py-0.5 text-[9px] font-bold uppercase rounded ${showVioloop ? 'bg-green-500/20 text-green-400 border border-green-500/30' : 'bg-zinc-800 text-zinc-600'}`}>ORCHESTRATE</span>
                <span className={`px-2 py-0.5 text-[9px] font-bold uppercase rounded ${showVioloop ? 'bg-green-500/20 text-green-400 border border-green-500/30' : 'bg-zinc-800 text-zinc-600'}`}>PERSIST</span>
                <span className={`px-2 py-0.5 text-[9px] font-bold uppercase rounded ${showVioloop ? 'bg-green-500/20 text-green-400 border border-green-500/30' : 'bg-zinc-800 text-zinc-600'}`}>EXTERNAL</span>
                <span className={`px-2 py-0.5 text-[9px] font-bold uppercase rounded ${showVioloop ? 'bg-green-500/20 text-green-400 border border-green-500/30' : 'bg-zinc-800 text-zinc-600'}`}>VOICE</span>
              </div>
              <div className={`text-[11px] leading-relaxed mb-2 ${showVioloop ? 'text-green-100' : 'text-zinc-600'}`}>
                Mobile's independence + Desktop's control depth = <span className="font-bold text-white">Control Plane</span>
              </div>
              <div className="flex items-center gap-2 pt-2 border-t border-zinc-800">
                <Icon name="checkCircle" size={14} className={showVioloop ? 'text-green-500' : 'text-zinc-700'} />
                <span className={`text-[10px] font-mono font-bold ${showVioloop ? 'text-green-400' : 'text-zinc-700'}`}>External Observer</span>
              </div>
            </motion.div>
          </motion.div>

          {/* MOBILE - Right - English */}
          <motion.div
            className="relative flex flex-col items-center"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
          >
            {/* Mobile Device Illustration */}
            <div className="mb-4 relative">
              <div className={`w-24 h-40 md:w-28 md:h-48 border-2 rounded-2xl flex items-center justify-center transition-colors duration-300 ${activeDevice === 'mobile' ? 'border-red-500/50 bg-zinc-900/50' : 'border-zinc-700 bg-zinc-900/30'}`}>
                {/* Screen */}
                <div className="w-[85%] h-[90%] bg-black/50 rounded-xl flex items-center justify-center">
                  <div className="w-6 h-6 rounded bg-zinc-800/50 border border-zinc-700" />
                </div>
                {/* Notch */}
                <div className="absolute top-2 w-12 h-2 bg-black rounded-full" />
              </div>
            </div>

            {/* Mobile Info Card - English */}
            <motion.div
              className={`p-3 rounded-xl border transition-all duration-300 w-44 md:w-56 ${activeDevice === 'mobile' ? 'bg-red-950/30 border-red-500/50' : 'bg-zinc-900/50 border-zinc-800'}`}
            >
              <div className="flex items-center gap-2 mb-2">
                <Icon name="smartphone" size={16} className={activeDevice === 'mobile' ? 'text-red-400' : 'text-zinc-500'} />
                <span className="text-white font-bold text-sm">Mobile</span>
              </div>
              <div className="flex gap-2 mb-2 flex-wrap">
                <span className="px-2 py-0.5 bg-green-900/30 text-green-400 text-[9px] font-bold uppercase rounded">Portable ✓</span>
                <span className="px-2 py-0.5 bg-green-900/30 text-green-400 text-[9px] font-bold uppercase rounded">Always-on ✓</span>
              </div>
              <div className={`text-[11px] leading-relaxed mb-2 ${activeDevice === 'mobile' ? 'text-red-300' : 'text-zinc-500'}`}>
                Consumption only, no creation.<br />
                <span className="text-white font-semibold">Can't orchestrate complex tasks.</span>
              </div>
              <div className="flex items-center gap-2 pt-2 border-t border-zinc-800">
                <Icon name="xCircle" size={14} className="text-red-500" />
                <span className="text-red-400 text-[10px] font-mono font-bold">Limited I/O bandwidth</span>
              </div>
            </motion.div>

            {/* Label below */}
            <span className="mt-3 text-[10px] font-mono text-zinc-600 uppercase tracking-wider">Consumption only</span>
          </motion.div>
        </div>
      </div>

      {/* Bottom Insight - English */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: showVioloop ? 1 : 0, y: showVioloop ? 0 : 20 }}
        className="text-center pb-16 md:pb-8"
      >
        <div className="inline-flex flex-wrap items-center justify-center gap-2 md:gap-4 px-4 md:px-6 py-2 md:py-3 bg-zinc-900/80 border border-zinc-800 rounded-full">
          <span className="text-zinc-500 text-xs md:text-sm">The Missing Piece:</span>
          <span className="text-green-400 font-bold text-xs md:text-sm">External Observer</span>
          <span className="text-zinc-600">+</span>
          <span className="text-green-400 font-bold text-xs md:text-sm">Orchestration Hub</span>
          <span className="text-zinc-600">+</span>
          <span className="text-green-400 font-bold text-xs md:text-sm">GOD MODE</span>
        </div>
      </motion.div>
    </div>
  );
};

export default Slide04_HardwareFailure;
