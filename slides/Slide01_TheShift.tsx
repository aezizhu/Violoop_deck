import React from 'react';
import { motion } from 'framer-motion';
import { Icon } from '../components/Icon';
import { ParticleBackground } from '../components/ParticleBackground';
import { SlideHeader } from '../components/SlideHeader';

const Slide01_TheShift: React.FC = () => {
  const stages = [
    {
      id: '1.0',
      title: '软件1.0',
      paradigm: '代码',
      input: '键盘',
      year: '1970年代',
      desc: '人类学习机器语言',
      icon: 'terminal',
      color: 'zinc',
      gradient: 'from-zinc-600 to-zinc-400'
    },
    {
      id: '2.0',
      title: '软件2.0',
      paradigm: '图形界面',
      input: '鼠标',
      year: '1990年代',
      desc: '点击式抽象交互',
      icon: 'mousePointer',
      color: 'blue',
      gradient: 'from-blue-600 to-blue-400'
    },
    {
      id: '3.0',
      title: '软件3.0',
      paradigm: '神经网络',
      input: '???',
      year: '现在',
      desc: '基于意图的交互',
      icon: 'brainCircuit',
      color: 'green',
      gradient: 'from-green-600 to-green-400'
    }
  ];

  return (
    <div className="w-full h-full flex flex-col relative overflow-hidden">
      {/* Particle Background */}
      <ParticleBackground opacity={0.4} particleCount={1000} colorScheme="purple-green" />

      {/* Header */}
      <SlideHeader chapter={1} titleEn="The Shift" titleZh="软件演进" badge="CONTEXT" />

      {/* Background curved path visualization */}
      <svg className="absolute inset-0 w-full h-full pointer-events-none z-[1]" viewBox="0 0 1200 600" preserveAspectRatio="xMidYMid slice">
        <defs>
          {/* Base gradient */}
          <linearGradient id="pathGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#71717a" />
            <stop offset="50%" stopColor="#3b82f6" />
            <stop offset="100%" stopColor="#22c55e" />
          </linearGradient>

          {/* Animated beam gradient - light traveling along path */}
          <linearGradient id="beamGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#22c55e" stopOpacity="0">
              <animate attributeName="offset" values="-0.2;1.2" dur="3s" repeatCount="indefinite" />
            </stop>
            <stop offset="5%" stopColor="#22c55e" stopOpacity="0.3">
              <animate attributeName="offset" values="-0.15;1.25" dur="3s" repeatCount="indefinite" />
            </stop>
            <stop offset="10%" stopColor="#22c55e" stopOpacity="1">
              <animate attributeName="offset" values="-0.1;1.3" dur="3s" repeatCount="indefinite" />
            </stop>
            <stop offset="15%" stopColor="#22c55e" stopOpacity="0.3">
              <animate attributeName="offset" values="-0.05;1.35" dur="3s" repeatCount="indefinite" />
            </stop>
            <stop offset="20%" stopColor="#22c55e" stopOpacity="0">
              <animate attributeName="offset" values="0;1.4" dur="3s" repeatCount="indefinite" />
            </stop>
          </linearGradient>

          {/* Glow filter */}
          <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="4" result="coloredBlur" />
            <feMerge>
              <feMergeNode in="coloredBlur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>

          {/* Strong glow for particles */}
          <filter id="particleGlow" x="-100%" y="-100%" width="300%" height="300%">
            <feGaussianBlur stdDeviation="6" result="coloredBlur" />
            <feMerge>
              <feMergeNode in="coloredBlur" />
              <feMergeNode in="coloredBlur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {/* Base path - subtle static line */}
        <motion.path
          d="M 100 450 Q 300 450 400 350 Q 500 250 600 250 Q 700 250 800 150 Q 900 50 1100 50"
          fill="none"
          stroke="url(#pathGradient)"
          strokeWidth="2"
          strokeLinecap="round"
          opacity="0.15"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 2, ease: "easeInOut" }}
        />

        {/* Soft outer glow */}
        <motion.path
          d="M 100 450 Q 300 450 400 350 Q 500 250 600 250 Q 700 250 800 150 Q 900 50 1100 50"
          fill="none"
          stroke="url(#pathGradient)"
          strokeWidth="16"
          strokeLinecap="round"
          opacity="0.08"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 2, ease: "easeInOut" }}
          style={{ filter: 'blur(12px)' }}
        />

        {/* Animated beam of light traveling along path */}
        <path
          d="M 100 450 Q 300 450 400 350 Q 500 250 600 250 Q 700 250 800 150 Q 900 50 1100 50"
          fill="none"
          stroke="url(#beamGradient)"
          strokeWidth="4"
          strokeLinecap="round"
          filter="url(#particleGlow)"
        />

        {/* Inner bright core of beam */}
        <path
          d="M 100 450 Q 300 450 400 350 Q 500 250 600 250 Q 700 250 800 150 Q 900 50 1100 50"
          fill="none"
          stroke="url(#beamGradient)"
          strokeWidth="2"
          strokeLinecap="round"
        />
      </svg>

      {/* Three Era Cards */}
      <div className="relative z-[5] flex flex-col md:flex-row justify-start md:justify-between items-center md:items-end px-4 md:px-8 h-full md:h-[70vh] gap-4 md:gap-0 py-8 md:py-0 overflow-y-auto md:overflow-visible">
        {/* Software 1.0 - Bottom Left */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="w-full md:w-[300px] md:mb-8"
        >
          <div className="bg-zinc-900/80 backdrop-blur border border-zinc-700 rounded-2xl p-4 md:p-6 relative group hover:border-zinc-500 transition-all">
            {/* Era badge */}
            <div className="absolute -top-3 left-6 px-3 py-1 bg-zinc-800 border border-zinc-600 rounded-full text-xs font-mono text-zinc-400">
              {stages[0].year}
            </div>

            {/* Icon */}
            <div className="w-12 h-12 md:w-16 md:h-16 rounded-2xl bg-zinc-800 border border-zinc-700 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
              <Icon name={stages[0].icon} size={24} className="text-zinc-400 md:hidden" />
              <Icon name={stages[0].icon} size={32} className="text-zinc-400 hidden md:block" />
            </div>

            {/* Content */}
            <div className="flex items-center gap-2 mb-2">
              <span className="text-xs font-mono px-2 py-0.5 rounded bg-zinc-800 text-zinc-500">{stages[0].id}</span>
              <h3 className="text-lg md:text-xl font-bold text-white">{stages[0].title}</h3>
            </div>
            <div className="text-zinc-400 font-mono text-sm mb-3">{stages[0].paradigm} → {stages[0].input}</div>
            <p className="text-zinc-500 text-sm">{stages[0].desc}</p>

            {/* Connection dot - hidden on mobile */}
            <div className="hidden md:flex absolute -right-3 top-1/2 w-6 h-6 rounded-full bg-zinc-800 border-2 border-zinc-600 items-center justify-center">
              <div className="w-2 h-2 rounded-full bg-zinc-500" />
            </div>
          </div>
        </motion.div>

        {/* Software 2.0 - Middle */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="w-full md:w-[300px] md:mb-32"
        >
          <div className="bg-zinc-900/80 backdrop-blur border border-blue-500/30 rounded-2xl p-4 md:p-6 relative group hover:border-blue-500/50 transition-all">
            {/* Era badge */}
            <div className="absolute -top-3 left-6 px-3 py-1 bg-blue-950 border border-blue-500/30 rounded-full text-xs font-mono text-blue-400">
              {stages[1].year}
            </div>

            {/* Icon */}
            <div className="w-12 h-12 md:w-16 md:h-16 rounded-2xl bg-blue-950/50 border border-blue-500/30 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
              <Icon name={stages[1].icon} size={24} className="text-blue-400 md:hidden" />
              <Icon name={stages[1].icon} size={32} className="text-blue-400 hidden md:block" />
            </div>

            {/* Content */}
            <div className="flex items-center gap-2 mb-2">
              <span className="text-xs font-mono px-2 py-0.5 rounded bg-blue-950 text-blue-400">{stages[1].id}</span>
              <h3 className="text-lg md:text-xl font-bold text-white">{stages[1].title}</h3>
            </div>
            <div className="text-blue-400 font-mono text-sm mb-3">{stages[1].paradigm} → {stages[1].input}</div>
            <p className="text-zinc-500 text-sm">{stages[1].desc}</p>

            {/* Connection dots - hidden on mobile */}
            <div className="hidden md:flex absolute -left-3 top-1/2 w-6 h-6 rounded-full bg-zinc-900 border-2 border-blue-500/50 items-center justify-center">
              <div className="w-2 h-2 rounded-full bg-blue-400" />
            </div>
            <div className="hidden md:flex absolute -right-3 top-1/3 w-6 h-6 rounded-full bg-zinc-900 border-2 border-blue-500/50 items-center justify-center">
              <div className="w-2 h-2 rounded-full bg-blue-400" />
            </div>
          </div>
        </motion.div>

        {/* Software 3.0 - Top Right */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9, duration: 0.6 }}
          className="w-full md:w-[320px] md:mb-56"
        >
          <div className="bg-zinc-900/80 backdrop-blur border border-green-500/50 rounded-2xl p-4 md:p-6 relative group hover:border-green-400 transition-all shadow-[0_0_30px_rgba(34,197,94,0.15)]">
            {/* Era badge with pulse */}
            <div className="absolute -top-3 left-6 px-3 py-1 bg-green-950 border border-green-500/50 rounded-full text-xs font-mono text-green-400 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
              {stages[2].year}
            </div>

            {/* Bottleneck alert */}
            <div className="absolute -top-3 right-6 px-2 py-1 bg-red-950 border border-red-500/50 rounded-full text-[10px] font-mono text-red-400 animate-pulse">
              瓶颈
            </div>

            {/* Icon with glow */}
            <div className="w-12 h-12 md:w-16 md:h-16 rounded-2xl bg-green-950/50 border border-green-500/50 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform relative">
              <div className="absolute inset-0 bg-green-500/20 rounded-2xl blur-xl" />
              <Icon name={stages[2].icon} size={24} className="text-green-400 relative z-10 md:hidden" />
              <Icon name={stages[2].icon} size={32} className="text-green-400 relative z-10 hidden md:block" />
            </div>

            {/* Content */}
            <div className="flex items-center gap-2 mb-2">
              <span className="text-xs font-mono px-2 py-0.5 rounded bg-green-950 text-green-400">{stages[2].id}</span>
              <h3 className="text-lg md:text-xl font-bold text-white">{stages[2].title}</h3>
            </div>
            <div className="text-green-400 font-mono text-sm mb-3">{stages[2].paradigm} → <span className="text-red-400">{stages[2].input}</span></div>
            <p className="text-zinc-500 text-sm mb-4">{stages[2].desc}</p>

            {/* Mismatch warning - Chinese */}
            <div className="p-3 bg-red-950/30 border border-red-900/50 rounded-lg flex items-center gap-3">
              <Icon name="zap" size={16} className="text-red-400" />
              <span className="text-xs text-red-300">超级计算机大脑，打字机界面</span>
            </div>

            {/* Connection dot - hidden on mobile */}
            <div className="hidden md:flex absolute -left-3 top-1/3 w-6 h-6 rounded-full bg-zinc-900 border-2 border-green-500 items-center justify-center">
              <div className="w-2 h-2 rounded-full bg-green-400" />
            </div>
          </div>
        </motion.div>
      </div>

      {/* Bottom insight bar - Chinese */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.2, duration: 0.6 }}
        className="absolute bottom-4 left-0 right-0 flex justify-center z-[5] px-4"
      >
        <div className="px-4 md:px-6 py-3 bg-zinc-900/80 backdrop-blur border border-zinc-800 rounded-full flex flex-wrap items-center justify-center gap-2 md:gap-4">
          <span className="text-zinc-500 text-sm">演进：</span>
          <div className="flex items-center gap-2">
            <span className="text-zinc-400 font-mono text-sm">逻辑</span>
            <Icon name="arrowRight" size={14} className="text-zinc-600" />
            <span className="text-blue-400 font-mono text-sm">图形</span>
            <Icon name="arrowRight" size={14} className="text-zinc-600" />
            <span className="text-green-400 font-mono text-sm">意图</span>
          </div>
          <div className="hidden md:block w-px h-4 bg-zinc-700" />
          <span className="text-red-400 text-sm font-medium">界面尚未进化</span>
        </div>
      </motion.div>
    </div>
  );
};

export default Slide01_TheShift;
