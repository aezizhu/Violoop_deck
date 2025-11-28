import React from 'react';
import { motion } from 'framer-motion';
import { Icon } from '../components/Icon';
import { SlideHeader } from '../components/SlideHeader';

const Slide11_Roadmap: React.FC = () => {
  return (
    <div className="w-full h-full flex flex-col relative overflow-hidden">
      {/* Header */}
      <SlideHeader chapter={4} titleEn="Market & Roadmap" titleZh="市场与路线" badge="VISION" />

      {/* Background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-black" />
        <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-green-500/5 to-transparent" />
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col md:flex-row z-10 px-4 md:px-8 py-2 md:py-4 overflow-hidden">
        {/* LEFT: Visual Funnel */}
        <div className="w-full md:w-2/5 flex flex-col justify-center items-center relative mb-4 md:mb-0">
          {/* Funnel Visual */}
          <div className="relative w-full max-w-[260px] md:max-w-[300px]">
            {/* TAM - Widest - Chinese */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, ease: "easeInOut" }}
              className="relative mb-2"
            >
              <div className="h-14 md:h-20 bg-gradient-to-r from-blue-500/20 via-blue-500/30 to-blue-500/20 rounded-t-2xl md:rounded-t-3xl border border-blue-500/30 flex items-center justify-between px-4 md:px-6">
                <div>
                  <div className="text-blue-400 font-bold text-xs md:text-sm">TAM</div>
                  <div className="text-zinc-500 text-[9px] md:text-[10px]">知识型员工</div>
                </div>
                <div className="text-2xl md:text-3xl font-black text-blue-400">12亿</div>
              </div>
            </motion.div>

            {/* SAM - Medium - Chinese */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.15, duration: 0.6, ease: "easeInOut" }}
              className="relative mb-2 mx-4 md:mx-6"
            >
              <div className="h-14 md:h-20 bg-gradient-to-r from-teal-500/20 via-teal-500/30 to-teal-500/20 border border-teal-500/30 flex items-center justify-between px-4 md:px-6">
                <div>
                  <div className="text-teal-400 font-bold text-xs md:text-sm">SAM</div>
                  <div className="text-zinc-500 text-[9px] md:text-[10px]">重度用户</div>
                </div>
                <div className="text-2xl md:text-3xl font-black text-teal-400">5千万</div>
              </div>
            </motion.div>

            {/* SOM - Narrowest - Chinese */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3, duration: 0.6, ease: "easeInOut" }}
              className="relative mx-8 md:mx-12"
            >
              <div className="h-14 md:h-20 bg-gradient-to-r from-green-500/30 via-green-500/50 to-green-500/30 rounded-b-2xl md:rounded-b-3xl border border-green-500/50 flex items-center justify-between px-4 md:px-5 shadow-[0_0_40px_rgba(34,197,94,0.2)]">
                <div>
                  <div className="text-green-400 font-bold text-xs md:text-sm">SOM</div>
                  <div className="text-zinc-500 text-[9px] md:text-[10px]">AI原生用户</div>
                </div>
                <div className="text-2xl md:text-3xl font-black text-green-400">1千万</div>
              </div>
              <div className="absolute -bottom-5 md:-bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center">
                <Icon name="chevronRight" size={16} className="text-green-500 animate-bounce rotate-90" />
                <span className="text-green-400 text-[9px] md:text-[10px] font-bold">入口</span>
              </div>
            </motion.div>
          </div>

          {/* Market proof - Chinese */}
          <div className="mt-8 md:mt-12 flex gap-2 md:gap-3">
            <div className="px-2 md:px-3 py-1 md:py-1.5 bg-zinc-900 border border-zinc-800 rounded-lg text-center">
              <div className="text-white font-bold text-xs md:text-sm">1亿+</div>
              <div className="text-zinc-500 text-[8px] md:text-[9px]">GitHub开发者</div>
            </div>
            <div className="px-2 md:px-3 py-1 md:py-1.5 bg-zinc-900 border border-zinc-800 rounded-lg text-center">
              <div className="text-white font-bold text-xs md:text-sm">3.5亿+</div>
              <div className="text-zinc-500 text-[8px] md:text-[9px]">M365用户</div>
            </div>
          </div>
        </div>

        {/* CENTER: Divider */}
        <div className="hidden md:flex flex-col items-center justify-center px-6">
          <div className="h-full w-px bg-gradient-to-b from-transparent via-zinc-700 to-transparent" />
        </div>

        {/* RIGHT: Business Model - Chinese */}
        <div className="w-full md:w-3/5 flex flex-col justify-center">
          <div className="mb-4 md:mb-6">
            <div className="text-zinc-500 text-xs font-mono mb-1">商业模式</div>
            <h4 className="text-xl md:text-2xl font-black text-white">三级火箭 🚀</h4>
          </div>

          {/* Horizontal Revenue Stages - Chinese */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-2 md:gap-4 mb-4 md:mb-6 overflow-y-auto max-h-[40vh] md:max-h-none pr-2 md:pr-0">
            {/* Stage 1: Hardware */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6, ease: "easeInOut" }}
              className="bg-zinc-900 border border-zinc-800 rounded-xl p-2 md:p-4 hover:border-blue-500/50 transition-colors group"
            >
              <div className="flex items-center gap-1 md:gap-2 mb-2 md:mb-3">
                <div className="w-6 h-6 md:w-8 md:h-8 rounded-lg bg-blue-500 flex items-center justify-center">
                  <span className="text-black font-black text-sm md:text-base">1</span>
                </div>
                <div className="text-blue-400 text-[9px] md:text-xs font-mono">硬件</div>
              </div>
              <div className="text-white font-bold text-xs md:text-base mb-0.5 md:mb-1">特洛伊木马</div>
              <div className="text-zinc-500 text-[9px] md:text-xs mb-2 md:mb-3">占领桌面。建立信任。</div>
              <div className="pt-2 md:pt-3 border-t border-zinc-800">
                <div className="text-lg md:text-2xl font-black text-white">$299</div>
                <div className="text-zinc-600 text-[9px] md:text-[10px]">&gt;40% 毛利</div>
              </div>
            </motion.div>

            {/* Stage 2: SaaS - Chinese */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.35, duration: 0.6, ease: "easeInOut" }}
              className="bg-zinc-900 border border-zinc-800 rounded-xl p-2 md:p-4 hover:border-green-500/50 transition-colors group"
            >
              <div className="flex items-center gap-1 md:gap-2 mb-2 md:mb-3">
                <div className="w-6 h-6 md:w-8 md:h-8 rounded-lg bg-green-500 flex items-center justify-center">
                  <span className="text-black font-black text-sm md:text-base">2</span>
                </div>
                <div className="text-green-400 text-[9px] md:text-xs font-mono">订阅</div>
              </div>
              <div className="text-white font-bold text-xs md:text-base mb-0.5 md:mb-1">经常性核心</div>
              <div className="text-zinc-500 text-[9px] md:text-xs mb-2 md:mb-3">云同步。高级AI路由。</div>
              <div className="pt-2 md:pt-3 border-t border-zinc-800">
                <div className="text-lg md:text-2xl font-black text-green-400">$15<span className="text-sm md:text-lg">/月</span></div>
                <div className="text-zinc-600 text-[9px] md:text-[10px]">Violoop Pro</div>
              </div>
            </motion.div>

            {/* Stage 3: Marketplace - Chinese */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.6, ease: "easeInOut" }}
              className="bg-zinc-900 border border-zinc-800 rounded-xl p-2 md:p-4 hover:border-purple-500/50 transition-colors group"
            >
              <div className="flex items-center gap-1 md:gap-2 mb-2 md:mb-3">
                <div className="w-6 h-6 md:w-8 md:h-8 rounded-lg bg-purple-500 flex items-center justify-center">
                  <span className="text-black font-black text-sm md:text-base">3</span>
                </div>
                <div className="text-purple-400 text-[9px] md:text-xs font-mono">市场</div>
              </div>
              <div className="text-white font-bold text-xs md:text-base mb-0.5 md:mb-1">指数级杠杆</div>
              <div className="text-zinc-500 text-[9px] md:text-xs mb-2 md:mb-3">用户生成工作流。</div>
              <div className="pt-2 md:pt-3 border-t border-zinc-800">
                <div className="text-lg md:text-2xl font-black text-purple-400">30%</div>
                <div className="text-zinc-600 text-[9px] md:text-[10px]">平台抽成</div>
              </div>
            </motion.div>
          </div>

          {/* LTV Calculation - Chinese */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7, duration: 0.6, ease: "easeInOut" }}
            className="bg-gradient-to-r from-zinc-900 via-zinc-900 to-transparent border border-zinc-800 rounded-xl p-3 md:p-4"
          >
            <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-2">
              <div className="flex flex-col md:flex-row items-start md:items-center gap-2 md:gap-4">
                <div className="text-zinc-500 text-xs md:text-sm">3年客户价值：</div>
                <div className="flex items-center gap-1 md:gap-2 flex-wrap">
                  <span className="text-zinc-400 text-xs md:text-sm">$299</span>
                  <span className="text-zinc-600">+</span>
                  <span className="text-zinc-400 text-xs md:text-sm">$540</span>
                  <span className="text-zinc-600">+</span>
                  <span className="text-zinc-400 text-xs md:text-sm">市场</span>
                  <span className="text-zinc-600">=</span>
                </div>
              </div>
              <div className="text-2xl md:text-3xl font-black text-white">$800<span className="text-green-400">+</span></div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Bottom Tagline - Chinese */}
      <div className="pt-3 md:pt-4 pb-16 md:pb-8 border-t border-zinc-900 z-10 px-4">
        <div className="flex flex-wrap items-center justify-center gap-2 md:gap-3 text-center">
          <span className="text-zinc-500 text-xs md:text-sm">硬件铺路。</span>
          <span className="text-white font-bold text-xs md:text-sm">生态收费。</span>
          <span className="text-zinc-600 hidden md:inline">|</span>
          <span className="text-zinc-400 text-xs md:text-sm">AI时代的苹果 + Peloton战略。</span>
        </div>
      </div>
    </div>
  );
};

export default Slide11_Roadmap;
