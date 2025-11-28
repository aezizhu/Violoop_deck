import React from 'react';
import { motion } from 'framer-motion';
import { Icon } from '../components/Icon';
import { VioloopDevice } from '../components/VioloopDevice';

interface Slide00Props {
  onNext?: () => void;
}



const Slide00_Cover: React.FC<Slide00Props> = ({ onNext }) => {


  return (
    <div className="w-full h-full flex flex-col justify-center items-center relative overflow-hidden bg-black">


      {/* Radial gradient overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,rgba(0,0,0,0.3)_50%,rgba(0,0,0,0.7)_100%)] z-[1]" />

      {/* Subtle grid */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.015)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.015)_1px,transparent_1px)] bg-[size:60px_60px] z-[1]" />

      {/* Main Content */}
      <div className="relative z-10 text-center max-w-4xl px-8 pt-20 md:pt-0">
        {/* 3D Device */}
        <div className="mb-6 flex justify-center">
          <VioloopDevice scale={0.75} />
        </div>

        {/* Logo/Brand */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8, ease: "easeInOut" }}
          className="mb-6"
        >
          <h1 className="text-5xl md:text-8xl font-black tracking-tight">
            <span className="text-white">VIOLO</span>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-emerald-500">O</span>
            <span className="text-white">P</span>
          </h1>
        </motion.div>

        {/* Tagline - Chinese */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.8, ease: "easeInOut" }}
        >
          <h2 className="text-lg md:text-2xl font-light text-zinc-300 mb-3">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-zinc-300 to-green-400 font-semibold">第三界面</span>
          </h2>
          <p className="text-zinc-500 text-sm md:text-base tracking-wide">
            超越键盘与鼠标 — 为智能体时代而生
          </p>
        </motion.div>

        {/* Interface evolution indicator - Chinese */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.8, ease: "easeInOut" }}
          className="mt-12 flex items-center justify-center gap-3 flex-wrap"
        >
          <div className="flex items-center gap-2 px-3 py-1.5 bg-zinc-900/50 border border-zinc-800 rounded-full">
            <span className="text-zinc-600 text-xs font-mono">1.0</span>
            <Icon name="terminal" size={12} className="text-zinc-600" />
          </div>
          <Icon name="arrowRight" size={14} className="text-zinc-700" />
          <div className="flex items-center gap-2 px-3 py-1.5 bg-zinc-900/50 border border-zinc-800 rounded-full">
            <span className="text-zinc-600 text-xs font-mono">2.0</span>
            <Icon name="mousePointer" size={12} className="text-zinc-600" />
          </div>
          <Icon name="arrowRight" size={14} className="text-zinc-700" />
          <div className="flex items-center gap-2 px-3 py-1.5 bg-green-950/50 border border-green-500/30 rounded-full">
            <span className="text-green-400 text-xs font-mono">3.0</span>
            <Icon name="brainCircuit" size={12} className="text-green-400" />
          </div>
        </motion.div>
      </div>

      {/* Bottom decoration - Chinese */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.8, ease: "easeInOut" }}
        className="absolute bottom-20 left-0 right-0 flex justify-center z-10"
      >
        <div className="flex items-center gap-4 text-zinc-600 text-xs font-mono">
          <span>BVIO INC.</span>
          <span className="w-1 h-1 rounded-full bg-zinc-700" />
          <span>2025</span>
          <span className="w-1 h-1 rounded-full bg-zinc-700" />
          <span>机密</span>
        </div>
      </motion.div>

      {/* Start button - Chinese */}
      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.8, duration: 0.8, ease: "easeInOut" }}
        onClick={onNext}
        className="absolute bottom-28 left-1/2 -translate-x-1/2 z-10 group cursor-pointer"
      >
        <div className="flex flex-col items-center gap-3">
          <span className="text-zinc-500 text-xs uppercase tracking-widest group-hover:text-zinc-300 transition-colors">
            点击或按 → 开始
          </span>
          <motion.div
            animate={{ x: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            className="flex items-center gap-2 px-6 py-3 bg-zinc-900/80 border border-zinc-700 rounded-full group-hover:border-green-500/50 group-hover:bg-zinc-800/80 transition-all"
          >
            <span className="text-zinc-400 text-sm font-medium group-hover:text-white transition-colors">进入演示</span>
            <Icon name="arrowRight" size={18} className="text-green-500" />
          </motion.div>
        </div>
      </motion.button>
    </div>
  );
};

export default Slide00_Cover;
