import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Icon } from '../components/Icon';
import { SlideHeader } from '../components/SlideHeader';

const Slide12_TheAsk: React.FC = () => {
  const [hoveredMember, setHoveredMember] = useState<string | null>(null);

  return (
    <div className="w-full h-full flex flex-col relative overflow-y-auto md:overflow-hidden px-4 md:px-8">
      {/* Particle Background */}


      {/* Header */}
      <SlideHeader chapter={4} titleEn="The Team" titleZh="团队" badge="TEAM" />

      {/* Background */}
      <div className="absolute inset-0 z-[1]">
        <div className="absolute inset-0 bg-black/40" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-zinc-900/50 via-black/50 to-black/50" />
        {/* Dual glow for two founders */}
        <motion.div
          animate={{ opacity: [0.05, 0.15, 0.05] }}
          transition={{ duration: 4, repeat: Infinity }}
          className="absolute left-1/4 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[250px] md:w-[400px] h-[250px] md:h-[400px] bg-amber-500/20 blur-[150px] rounded-full"
        />
        <motion.div
          animate={{ opacity: [0.05, 0.15, 0.05] }}
          transition={{ duration: 4, repeat: Infinity, delay: 2 }}
          className="absolute right-1/4 top-1/2 translate-x-1/2 -translate-y-1/2 w-[250px] md:w-[400px] h-[250px] md:h-[400px] bg-blue-500/20 blur-[150px] rounded-full"
        />
      </div>

      {/* Main Content - Two Founders */}
      <div className="flex-1 flex flex-col md:flex-row gap-4 md:gap-8 p-4 md:p-6 z-10 overflow-hidden">
        {/* LEFT: Jaylen He - CEO - Chinese */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2 }}
          className="flex-1 flex flex-col"
          onMouseEnter={() => setHoveredMember('jaylen')}
          onMouseLeave={() => setHoveredMember(null)}
        >
          <div className={`flex-1 bg-zinc-900/50 border rounded-2xl p-4 md:p-6 transition-all duration-500 ${hoveredMember === 'jaylen' ? 'border-amber-500/50 shadow-[0_0_40px_rgba(245,158,11,0.15)]' : 'border-zinc-800'}`}>
            {/* Avatar & Title */}
            <div className="flex items-start gap-3 md:gap-4 mb-4 md:mb-6">
              <div className="relative">
                <div className={`w-14 h-14 md:w-20 md:h-20 rounded-xl md:rounded-2xl bg-gradient-to-br from-amber-500/20 to-orange-500/20 border-2 flex items-center justify-center transition-all ${hoveredMember === 'jaylen' ? 'border-amber-500' : 'border-amber-500/30'}`}>
                  <span className="text-2xl md:text-4xl">🌍</span>
                </div>
                <div className="absolute -bottom-1 -right-1 px-1.5 md:px-2 py-0.5 bg-amber-500 rounded text-[8px] md:text-[10px] font-bold text-black">CEO</div>
              </div>
              <div>
                <h3 className="text-xl md:text-2xl font-black text-white">Jaylen He</h3>
                <p className="text-amber-400 font-mono text-xs md:text-sm">系统黑客</p>
                <div className="flex flex-wrap gap-1 md:gap-2 mt-1 md:mt-2">
                  <span className="px-1.5 md:px-2 py-0.5 bg-zinc-800 rounded text-[8px] md:text-[10px] text-zinc-400">愿景者</span>
                  <span className="px-1.5 md:px-2 py-0.5 bg-zinc-800 rounded text-[8px] md:text-[10px] text-zinc-400">0→1操盘手</span>
                  <span className="px-1.5 md:px-2 py-0.5 bg-zinc-800 rounded text-[8px] md:text-[10px] text-zinc-400">跨文化</span>
                </div>
              </div>
            </div>

            {/* Key Narrative Points - Chinese */}
            <div className="space-y-3 md:space-y-4">
              <div className="flex gap-2 md:gap-3">
                <div className="w-6 h-6 md:w-8 md:h-8 rounded-lg bg-amber-500/10 border border-amber-500/30 flex items-center justify-center shrink-0">
                  <Icon name="crosshair" size={14} className="text-amber-400" />
                </div>
                <div>
                  <div className="text-white font-bold text-xs md:text-sm">全球模式匹配者</div>
                  <div className="text-zinc-500 text-[10px] md:text-xs">中国 → 津巴布韦 → 美国。在必要中学会了攻破不同系统。</div>
                </div>
              </div>

              <div className="flex gap-2 md:gap-3">
                <div className="w-6 h-6 md:w-8 md:h-8 rounded-lg bg-amber-500/10 border border-amber-500/30 flex items-center justify-center shrink-0">
                  <Icon name="user" size={14} className="text-amber-400" />
                </div>
                <div>
                  <div className="text-white font-bold text-xs md:text-sm">社区建设者</div>
                  <div className="text-zinc-500 text-[10px] md:text-xs">建立数千人学生社区。通过物联网技术完成100+房产交易。</div>
                </div>
              </div>

              <div className="flex gap-2 md:gap-3">
                <div className="w-6 h-6 md:w-8 md:h-8 rounded-lg bg-amber-500/10 border border-amber-500/30 flex items-center justify-center shrink-0">
                  <Icon name="eye" size={14} className="text-amber-400" />
                </div>
                <div>
                  <div className="text-white font-bold text-xs md:text-sm">为什么是Violoop？</div>
                  <div className="text-zinc-500 text-[10px] md:text-xs">看到软件3.0已经崩坏——AI困在孤岛，人类卡在翻译。设计了桥梁。</div>
                </div>
              </div>
            </div>

            {/* Superpower - Chinese */}
            <div className="mt-3 md:mt-4 pt-3 md:pt-4 border-t border-zinc-800">
              <div className="text-[9px] md:text-[10px] text-zinc-600 uppercase tracking-wider mb-1">超能力</div>
              <div className="text-amber-400 font-mono text-xs md:text-sm mb-2 md:mb-3">"我攻破人类系统和市场。"</div>
              <p className="text-zinc-500 text-[10px] md:text-[11px] leading-relaxed">
                <span className="text-zinc-400">UCSD计算机 · YC19。</span> 构建海外资产平台管理<span className="text-amber-400/80">$2.5亿+房地产</span>，使用物联网、SaaS和AI礼宾服务100+建筑。深厚的美国创业生态、营销和硬件部署经验。
              </p>
            </div>
          </div>
        </motion.div>

        {/* Center Connector - hidden on mobile */}
        <div className="hidden md:flex flex-col items-center justify-center">
          <div className="w-px h-16 bg-gradient-to-b from-transparent via-zinc-700 to-transparent" />
          <motion.div
            animate={{ scale: [1, 1.1, 1], rotate: [0, 180, 360] }}
            transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
            className="w-12 h-12 md:w-16 md:h-16 rounded-full border border-zinc-700 bg-zinc-900 flex items-center justify-center my-4"
          >
            <div className="text-xl md:text-2xl">⚡</div>
          </motion.div>
          <div className="text-zinc-600 text-[9px] md:text-[10px] font-mono text-center mb-2">1 + 1 = 10</div>
          <div className="w-px h-16 bg-gradient-to-b from-transparent via-zinc-700 to-transparent" />
        </div>

        {/* RIGHT: King Zhu - CTO - Chinese */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.4 }}
          className="flex-1 flex flex-col"
          onMouseEnter={() => setHoveredMember('king')}
          onMouseLeave={() => setHoveredMember(null)}
        >
          <div className={`flex-1 bg-zinc-900/50 border rounded-2xl p-4 md:p-6 transition-all duration-500 ${hoveredMember === 'king' ? 'border-blue-500/50 shadow-[0_0_40px_rgba(59,130,246,0.15)]' : 'border-zinc-800'}`}>
            {/* Avatar & Title */}
            <div className="flex items-start gap-3 md:gap-4 mb-4 md:mb-6">
              <div className="relative">
                <div className={`w-14 h-14 md:w-20 md:h-20 rounded-xl md:rounded-2xl bg-gradient-to-br from-blue-500/20 to-cyan-500/20 border-2 flex items-center justify-center transition-all ${hoveredMember === 'king' ? 'border-blue-500' : 'border-blue-500/30'}`}>
                  <span className="text-2xl md:text-4xl">🔧</span>
                </div>
                <div className="absolute -bottom-1 -right-1 px-1.5 md:px-2 py-0.5 bg-blue-500 rounded text-[8px] md:text-[10px] font-bold text-black">CTO</div>
              </div>
              <div>
                <h3 className="text-xl md:text-2xl font-black text-white">King Zhu</h3>
                <p className="text-blue-400 font-mono text-xs md:text-sm">技术架构师</p>
                <div className="flex flex-wrap gap-1 md:gap-2 mt-1 md:mt-2">
                  <span className="px-1.5 md:px-2 py-0.5 bg-zinc-800 rounded text-[8px] md:text-[10px] text-zinc-400">MIT EECS</span>
                  <span className="px-1.5 md:px-2 py-0.5 bg-zinc-800 rounded text-[8px] md:text-[10px] text-zinc-400">微软</span>
                  <span className="px-1.5 md:px-2 py-0.5 bg-zinc-800 rounded text-[8px] md:text-[10px] text-zinc-400">深度技术</span>
                </div>
              </div>
            </div>

            {/* Key Narrative Points - Chinese */}
            <div className="space-y-3 md:space-y-4">
              <div className="flex gap-2 md:gap-3">
                <div className="w-6 h-6 md:w-8 md:h-8 rounded-lg bg-blue-500/10 border border-blue-500/30 flex items-center justify-center shrink-0">
                  <Icon name="terminal" size={14} className="text-blue-400" />
                </div>
                <div>
                  <div className="text-white font-bold text-xs md:text-sm">硬核工程</div>
                  <div className="text-zinc-500 text-[10px] md:text-xs">MIT EECS + ADI。从最深层理解物理信号。</div>
                </div>
              </div>

              <div className="flex gap-2 md:gap-3">
                <div className="w-6 h-6 md:w-8 md:h-8 rounded-lg bg-blue-500/10 border border-blue-500/30 flex items-center justify-center shrink-0">
                  <Icon name="monitor" size={14} className="text-blue-400" />
                </div>
                <div>
                  <div className="text-white font-bold text-xs md:text-sm">消费硬件专家</div>
                  <div className="text-zinc-500 text-[10px] md:text-xs">前微软Xbox和HoloLens工程师。打造数百万人喜爱的产品。</div>
                </div>
              </div>

              <div className="flex gap-2 md:gap-3">
                <div className="w-6 h-6 md:w-8 md:h-8 rounded-lg bg-blue-500/10 border border-blue-500/30 flex items-center justify-center shrink-0">
                  <Icon name="brainCircuit" size={14} className="text-blue-400" />
                </div>
                <div>
                  <div className="text-white font-bold text-xs md:text-sm">为什么是Violoop？</div>
                  <div className="text-zinc-500 text-[10px] md:text-xs">将愿景转化为严谨的工程。模拟电路和AI芯片专利。</div>
                </div>
              </div>
            </div>

            {/* Superpower - Chinese */}
            <div className="mt-3 md:mt-4 pt-3 md:pt-4 border-t border-zinc-800">
              <div className="text-[9px] md:text-[10px] text-zinc-600 uppercase tracking-wider mb-1">超能力</div>
              <div className="text-blue-400 font-mono text-xs md:text-sm mb-2 md:mb-3">"我攻破物理和代码。"</div>
              <p className="text-zinc-500 text-[10px] md:text-[11px] leading-relaxed">
                <span className="text-zinc-400">MIT EECS本硕。</span> <span className="text-blue-400/80">ADI</span>（高速ADC）· <span className="text-blue-400/80">微软</span> Xbox & HoloLens。模拟电路和AI芯片多项专利。企业级系统软件专长。
              </p>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Bottom Synergy Statement - Chinese */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8 }}
        className="mx-4 md:mx-6 mb-16 md:mb-8 p-3 md:p-4 bg-gradient-to-r from-amber-950/30 via-zinc-900 to-blue-950/30 border border-zinc-800 rounded-xl z-10"
      >
        <div className="flex items-center justify-center gap-2 md:gap-4">
          <div className="w-6 h-6 md:w-8 md:h-8 rounded-full bg-amber-500/20 flex items-center justify-center">
            <span className="text-amber-400 font-bold text-xs md:text-sm">J</span>
          </div>
          <div className="text-center">
            <p className="text-zinc-300 text-xs md:text-sm">
              <span className="text-amber-400 font-bold">Jaylen</span> 定义 <span className="text-white font-bold">"让人类繁荣的条件"</span>。
              <span className="text-blue-400 font-bold ml-1 md:ml-2">King</span> 定义 <span className="text-white font-bold">"机器如何交付"</span>。
            </p>
            <p className="text-zinc-500 text-[10px] md:text-xs mt-1">共同构建AI时代缺失的桥梁。</p>
          </div>
          <div className="w-6 h-6 md:w-8 md:h-8 rounded-full bg-blue-500/20 flex items-center justify-center">
            <span className="text-blue-400 font-bold text-xs md:text-sm">K</span>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Slide12_TheAsk;
