import React from 'react';
import { motion } from 'framer-motion';
import { Icon } from '../components/Icon';
import { SlideHeader } from '../components/SlideHeader';

const Slide02_TheParadox: React.FC = () => {
  return (
    <div className="w-full h-full flex flex-col relative px-4 md:px-8 overflow-y-auto md:overflow-hidden pb-24 md:pb-0">
      {/* Header */}
      <SlideHeader chapter={1} titleEn="The Paradox" titleZh="悖论" badge="PROBLEM" />

      {/* Karpathy Quote - Hero Statement - Chinese */}
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="text-center mb-6"
      >
        <p className="text-zinc-400 text-sm italic max-w-2xl mx-auto">
          "每当我与ChatGPT交谈时，我觉得自己像是在通过{' '}
          <span className="text-zinc-300 font-medium">终端</span>与一个{' '}
          <span className="text-purple-400 font-medium">操作系统</span>对话... 真正的图形界面还没有被发明出来。"
        </p>
        <p className="text-zinc-600 text-xs mt-2 font-mono">— Andrej Karpathy</p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-0 items-center h-auto md:h-[55vh] border border-zinc-800 rounded-2xl overflow-hidden bg-zinc-900/30 relative">

        {/* Left: The AI Brain (PURPLE - Raw Compute) */}
        <div className="h-[300px] md:h-full relative flex flex-col items-center justify-center md:border-r border-b md:border-b-0 border-zinc-800 overflow-hidden">
          <div className="absolute inset-0 bg-purple-900/10"></div>

          {/* Infinite bandwidth indicator - Chinese */}
          <div className="absolute top-4 left-4 px-2 py-1 bg-purple-950/50 border border-purple-500/30 rounded text-[10px] font-mono text-purple-400">
            ∞ 带宽
          </div>

          <div className="relative w-48 h-48 md:w-64 md:h-64 flex items-center justify-center">
            <div className="absolute inset-0 bg-purple-500/10 blur-[80px] rounded-full animate-pulse" />
            <motion.div animate={{ rotate: 360 }} transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
              className="absolute inset-0 border border-purple-500/20 rounded-full border-dashed" />
            <motion.div animate={{ scale: [1, 1.05, 1] }} transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}>
              <Icon name="brainCircuit" size={80} className="text-purple-400 relative z-10 md:hidden" strokeWidth={1} />
              <Icon name="brainCircuit" size={120} className="text-purple-400 relative z-10 hidden md:block" strokeWidth={1} />
            </motion.div>

            {/* Data Particles - more of them to show parallel processing */}
            <div className="absolute inset-0">
              {[...Array(12)].map((_, i) => (
                <motion.div key={i} className="absolute w-1.5 h-1.5 bg-purple-400 rounded-full" style={{ left: '50%', top: '50%' }}
                  animate={{ opacity: [0, 1, 0], scale: [0, 1.5, 0], x: (Math.random() - 0.5) * 200, y: (Math.random() - 0.5) * 200 }}
                  transition={{ duration: 1.5, repeat: Infinity, delay: i * 0.15 }} />
              ))}
            </div>
          </div>
          <h3 className="text-xl md:text-2xl font-bold text-purple-400 mt-6">软件3.0引擎</h3>
          <p className="text-purple-400/50 font-mono text-xs md:text-sm">高维度推理</p>
        </div>

        {/* Funnel/Bottleneck Visual - hidden on mobile */}
        <div className="hidden md:flex absolute left-1/2 top-0 bottom-0 -translate-x-1/2 z-10 pointer-events-none items-center">
          <svg width="60" height="100%" className="overflow-visible">
            <defs>
              <linearGradient id="funnelGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#a855f7" stopOpacity="0.4" />
                <stop offset="50%" stopColor="#ef4444" stopOpacity="0.6" />
                <stop offset="100%" stopColor="#71717a" stopOpacity="0.3" />
              </linearGradient>
            </defs>
            <motion.path
              d="M 0 30% Q 30 45% 60 50% Q 30 55% 0 70%"
              fill="none"
              stroke="url(#funnelGradient)"
              strokeWidth="2"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 1.5, delay: 0.5 }}
            />
          </svg>
        </div>

        {/* Right: The Chatbox - Chinese */}
        <div className="h-[350px] md:h-full relative flex flex-col items-center justify-center bg-black overflow-hidden">
          {/* Subtle grid background */}
          <div className="absolute inset-0 bg-[linear-gradient(rgba(113,113,122,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(113,113,122,0.03)_1px,transparent_1px)] bg-[size:20px_20px]" />

          {/* 40 WPM bottleneck indicator - Chinese */}
          <div className="absolute top-4 right-4 px-2 py-1 bg-red-950/50 border border-red-500/30 rounded text-[10px] font-mono text-red-400">
            40 字/分钟 限制
          </div>

          <div className="w-[280px] md:w-80 font-mono text-sm relative z-10">
            {/* Terminal header - Chinese */}
            <div className="border-b border-zinc-800 pb-2 mb-3 flex items-center gap-2">
              <div className="w-3 h-3 bg-red-500/60 rounded-full" />
              <div className="w-3 h-3 bg-yellow-500/60 rounded-full" />
              <div className="w-3 h-3 bg-green-500/60 rounded-full" />
              <span className="ml-2 text-zinc-600 text-xs">人工中间件.sh</span>
            </div>

            {/* Painful human middleware workflow - Chinese */}
            <div className="space-y-2 text-xs">
              {/* Step 1: Copy */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
                className="flex items-start gap-2"
              >
                <span className="text-zinc-600">$</span>
                <span className="text-zinc-500">从Slack复制上下文...</span>
                <span className="text-green-500/60">✓</span>
              </motion.div>

              {/* Step 2: Paste */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.0 }}
                className="flex items-start gap-2"
              >
                <span className="text-zinc-600">$</span>
                <span className="text-zinc-500">粘贴到ChatGPT...</span>
                <span className="text-green-500/60">✓</span>
              </motion.div>

              {/* Step 3: Format Error */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.5 }}
                className="flex items-start gap-2"
              >
                <span className="text-zinc-600">$</span>
                <span className="text-zinc-500">为Jira格式化响应...</span>
                <motion.span
                  animate={{ opacity: [1, 0.5, 1] }}
                  transition={{ duration: 1, repeat: Infinity }}
                  className="text-red-400"
                >错误</motion.span>
              </motion.div>

              {/* Step 4: Retry */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 2.0 }}
                className="flex items-start gap-2"
              >
                <span className="text-zinc-600">$</span>
                <span className="text-yellow-500/80">补充说明后重试...</span>
              </motion.div>

              {/* Step 5: Manual copy again */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 2.5 }}
                className="flex items-start gap-2"
              >
                <span className="text-zinc-600">$</span>
                <span className="text-zinc-500">复制输出，切换标签页...</span>
                <motion.span
                  animate={{ opacity: [0.3, 1, 0.3] }}
                  transition={{ duration: 0.5, repeat: Infinity }}
                  className="text-zinc-600"
                >|</motion.span>
              </motion.div>
            </div>

            {/* Slow typing indicator - Chinese */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 3 }}
              className="flex items-center gap-2 text-zinc-500 text-xs mt-4 pt-3 border-t border-zinc-800"
            >
              <Icon name="keyboard" size={12} className="text-zinc-600" />
              <span>打字速度 40 字/分钟...</span>
              <motion.span
                animate={{ opacity: [0.3, 1, 0.3] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="text-red-400 ml-auto font-bold"
              >瓶颈</motion.span>
            </motion.div>
          </div>

          <h3 className="text-xl md:text-2xl font-bold text-zinc-500 mt-6 relative z-10">硬件1.0</h3>
          <p className="text-zinc-600 font-mono text-xs md:text-sm relative z-10">串行字符流</p>
        </div>

        {/* The Crack/Barrier - Chinese - positioned between the two sections on mobile */}
        <div className="absolute left-1/2 -translate-x-1/2 z-20 top-[295px] md:top-1/2 md:-translate-y-1/2">
          <motion.div
            animate={{ scale: [1, 1.02, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="bg-black border-2 border-red-500 text-red-500 px-3 md:px-5 py-1.5 md:py-3 rounded-xl text-xs font-mono font-bold flex items-center gap-2 md:gap-3 shadow-[0_0_30px_rgba(239,68,68,0.4)]"
          >
            <Icon name="alertOctagon" size={14} className="md:hidden shrink-0" />
            <Icon name="alertOctagon" size={18} className="hidden md:block shrink-0" />
            <span className="text-xs md:text-sm whitespace-nowrap">维度不匹配</span>
          </motion.div>
        </div>
      </div>

      {/* Bottom labels - Chinese */}
      <div className="mt-4 md:mt-6 grid grid-cols-2 gap-4 md:gap-8 text-sm pb-14 md:pb-4">
        <div className="border-l-2 border-purple-500/50 pl-3 md:pl-4">
          <h4 className="text-white font-bold mb-1 flex flex-wrap items-center gap-2">
            软件3.0
            <span className="text-[10px] font-mono text-purple-400 bg-purple-950/50 px-1.5 py-0.5 rounded">高维</span>
          </h4>
          <p className="text-zinc-400 text-xs">高维意图与并行推理</p>
        </div>
        <div className="border-l-2 border-zinc-700 pl-3 md:pl-4">
          <h4 className="text-white font-bold mb-1 flex flex-wrap items-center gap-2">
            硬件1.0
            <span className="text-[10px] font-mono text-red-400 bg-red-950/50 px-1.5 py-0.5 rounded">一维</span>
          </h4>
          <p className="text-zinc-400 text-xs">串行字符流瓶颈（40字/分）</p>
        </div>
      </div>
    </div>
  );
};

export default Slide02_TheParadox;
