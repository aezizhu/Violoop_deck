import React from 'react';
import { motion } from 'framer-motion';
import { Icon } from '../components/Icon';
import { VioloopDevice } from '../components/VioloopDevice';

const Slide13_Closing: React.FC = () => {
  return (
    <div className="w-full h-full flex flex-col justify-center items-center relative overflow-y-auto md:overflow-hidden bg-black">

      {/* Radial gradient overlay - green tinted - reduced opacity to show particles */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(34,197,94,0.08)_0%,transparent_50%,rgba(0,0,0,0.3)_100%)] z-[1]" />

      {/* Subtle grid */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(34,197,94,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(34,197,94,0.02)_1px,transparent_1px)] bg-[size:80px_80px] z-[1]" />

      {/* Ambient particles */}
      {[...Array(20)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 bg-green-500/30 rounded-full z-[2]"
          initial={{
            x: Math.random() * (typeof window !== 'undefined' ? window.innerWidth : 1000),
            y: Math.random() * (typeof window !== 'undefined' ? window.innerHeight : 800),
            opacity: 0
          }}
          animate={{
            opacity: [0, 0.6, 0],
            scale: [0, 1.5, 0]
          }}
          transition={{
            duration: Math.random() * 4 + 3,
            repeat: Infinity,
            delay: Math.random() * 3
          }}
        />
      ))}

      {/* Main Content */}
      <div className="relative z-10 text-center max-w-5xl px-4 md:px-8">
        {/* 3D Device */}
        <div className="mb-4 flex justify-center scale-75 md:scale-100">
          <VioloopDevice scale={0.8} />
        </div>

        {/* Main slogan - Chinese */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 1 }}
        >
          <h1 className="text-3xl md:text-4xl lg:text-6xl font-black text-white leading-tight mb-4 tracking-tight">
            构建
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 via-emerald-400 to-green-500">
              驾驶席
            </span>
            <br />
            迎接自主未来
          </h1>
        </motion.div>

        {/* Sub-tagline - Chinese */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.8 }}
          className="mb-6 md:mb-10"
        >
          <p className="text-zinc-400 text-base md:text-lg lg:text-xl font-light mb-4">
            软件3.0需要硬件3.0。
          </p>
          <p className="text-zinc-600 text-xs md:text-sm">
            与我们一起定义后鼠标时代。
          </p>
        </motion.div>

        {/* CTA area - Chinese */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5, duration: 0.8 }}
          className="flex flex-col items-center gap-4"
        >
          <div className="flex flex-col md:flex-row items-center gap-3 md:gap-6">
            <div className="flex items-center gap-2 px-3 md:px-4 py-2 bg-zinc-900/80 border border-zinc-800 rounded-full">
              <Icon name="mail" size={14} className="text-zinc-500" />
              <span className="text-zinc-400 text-xs md:text-sm">jaylen@bvio.ai</span>
            </div>
            <div className="flex items-center gap-2 px-3 md:px-4 py-2 bg-green-950/50 border border-green-500/30 rounded-full">
              <Icon name="zap" size={14} className="text-green-400" />
              <span className="text-green-400 text-xs md:text-sm font-medium">bvio.ai</span>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Bottom info - Chinese */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 0.8 }}
        className="absolute bottom-16 md:bottom-12 left-0 right-0 flex justify-center z-10"
      >
        <div className="flex items-center gap-3 md:gap-6 text-zinc-600 text-[10px] md:text-xs font-mono">
          <span>BVIO INC.</span>
          <span className="w-1 h-1 rounded-full bg-zinc-700" />
          <span>2025</span>
          <span className="w-1 h-1 rounded-full bg-zinc-700" />
          <span className="text-green-500/60">第三界面</span>
        </div>
      </motion.div>
    </div>
  );
};

export default Slide13_Closing;
