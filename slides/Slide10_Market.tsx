import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Icon } from '../components/Icon';
import { ParticleBackground } from '../components/ParticleBackground';
import { SlideHeader } from '../components/SlideHeader';

interface Phase {
  id: number;
  num: string;
  title: string;
  chinese: string;
  focus: string;
  color: 'green' | 'teal' | 'blue';
  icon: string;
  desc: string;
  hidden: string;
  business: string;
  metric: string;
  metricLabel: string;
}

const Slide10_Market: React.FC = () => {
  const [activePhase, setActivePhase] = useState(0);
  const [isHovering, setIsHovering] = useState<number | null>(null);

  useEffect(() => {
    if (isHovering !== null) return;
    const interval = setInterval(() => {
      setActivePhase(prev => (prev + 1) % 3);
    }, 4000);
    return () => clearInterval(interval);
  }, [isHovering]);

  const phases: Phase[] = [
    {
      id: 1,
      num: "01",
      title: "硬件锚点",
      chinese: "物理锚点",
      focus: "渗透",
      color: "green",
      icon: "monitor",
      desc: "解决'Alt-Tab地狱'。每台设备都是数据采集器。",
      hidden: "通过混合落地记录人机交互路径。",
      business: "硬件销售",
      metric: "DAA",
      metricLabel: "日活动作数"
    },
    {
      id: 2,
      num: "02",
      title: "工作流网络",
      chinese: "工作流网络",
      focus: "积累",
      color: "teal",
      icon: "database",
      desc: "10万用户 = 10万操作模式。上线宏商店。",
      hidden: "构建专有行为图谱——已验证的企业数据。",
      business: "SaaS + 30%抽成",
      metric: "图谱",
      metricLabel: "专有数据"
    },
    {
      id: 3,
      num: "03",
      title: "智能体标准",
      chinese: "Agent 标准",
      focus: "垄断",
      color: "blue",
      icon: "radio",
      desc: "OpenAI的选择：$$ 高风险视觉 或 ¢ Violoop API。",
      hidden: "成为所有AI智能体的默认 I/O 网关。",
      business: "API收费站",
      metric: "协议",
      metricLabel: "行业标准"
    }
  ];

  const colorMap = {
    green: { bg: 'bg-green-500', text: 'text-green-400', border: 'border-green-500', glow: 'shadow-[0_0_30px_rgba(34,197,94,0.4)]' },
    teal: { bg: 'bg-teal-500', text: 'text-teal-400', border: 'border-teal-500', glow: 'shadow-[0_0_30px_rgba(20,184,166,0.4)]' },
    blue: { bg: 'bg-blue-500', text: 'text-blue-400', border: 'border-blue-500', glow: 'shadow-[0_0_30px_rgba(59,130,246,0.4)]' }
  };

  return (
    <div className="w-full h-full flex flex-col relative overflow-hidden">
      {/* Particle Background */}
      <ParticleBackground opacity={0.35} particleCount={900} colorScheme="blue-green" />

      {/* Header */}
      <SlideHeader chapter={3} titleEn="Master Plan" titleZh="总体规划" badge="BUSINESS" />

      {/* Background */}
      <div className="absolute inset-0 z-[1]">
        <div className="absolute inset-0 bg-black/40" />
        {/* Gradient orbs for each phase */}
        <div className="absolute top-1/2 left-[16%] -translate-x-1/2 -translate-y-1/2 w-[200px] md:w-[300px] h-[200px] md:h-[300px] bg-green-500/5 blur-[100px] rounded-full" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[200px] md:w-[300px] h-[200px] md:h-[300px] bg-teal-500/5 blur-[100px] rounded-full" />
        <div className="absolute top-1/2 left-[84%] -translate-x-1/2 -translate-y-1/2 w-[200px] md:w-[300px] h-[200px] md:h-[300px] bg-blue-500/5 blur-[100px] rounded-full" />
      </div>

      {/* Main Content - Horizontal Timeline */}
      <div className="flex-1 flex flex-col justify-center items-center px-4 md:px-8 z-10 overflow-x-auto">
        {/* Timeline Track */}
        <div className="relative min-w-[600px] md:min-w-0 max-w-5xl w-full">
          {/* Background Track */}
          <div className="absolute top-[50px] md:top-[60px] left-0 right-0 h-1 bg-zinc-800">
            {/* Animated progress */}
            <motion.div
              className="h-full bg-gradient-to-r from-green-500 via-teal-500 to-blue-500"
              initial={{ width: '0%' }}
              animate={{ width: `${(activePhase + 1) * 33.33}%` }}
              transition={{ duration: 0.8, ease: "easeInOut" }}
            />
          </div>

          {/* Phase Cards */}
          <div className="flex justify-between">
            {phases.map((phase, i) => {
              const isActive = activePhase === i;
              const isPast = i < activePhase;
              const colors = colorMap[phase.color];

              return (
                <motion.div
                  key={phase.id}
                  className="flex-1 flex flex-col items-center cursor-pointer px-1 md:px-2"
                  onClick={() => setActivePhase(i)}
                  onMouseEnter={() => setIsHovering(i)}
                  onMouseLeave={() => setIsHovering(null)}
                  animate={{ y: isActive ? -8 : 0 }}
                  transition={{ duration: 0.5, ease: "easeInOut" }}
                >
                  {/* Node */}
                  <motion.div
                    className={`w-[80px] h-[80px] md:w-[120px] md:h-[120px] rounded-xl md:rounded-2xl flex flex-col items-center justify-center transition-all duration-300 ${isActive ? `${colors.bg} ${colors.glow}` : isPast ? 'bg-zinc-800' : 'bg-zinc-900 border-2 border-zinc-800'}`}
                    animate={{ scale: isActive ? 1.05 : 1 }}
                    transition={{ duration: 0.5, ease: "easeInOut" }}
                  >
                    <Icon name={phase.icon} size={24} className={`${isActive ? 'text-black' : isPast ? 'text-zinc-500' : 'text-zinc-600'} md:hidden`} />
                    <Icon name={phase.icon} size={32} className={`${isActive ? 'text-black' : isPast ? 'text-zinc-500' : 'text-zinc-600'} hidden md:block`} />
                    <span className={`text-xl md:text-2xl font-black mt-1 ${isActive ? 'text-black/80' : isPast ? 'text-zinc-500' : 'text-zinc-700'}`}>{phase.num}</span>
                  </motion.div>

                  {/* Connector dot on track */}
                  <div className={`w-3 h-3 md:w-4 md:h-4 rounded-full -mt-1.5 md:-mt-2 border-4 border-black z-10 ${isActive || isPast ? colors.bg : 'bg-zinc-700'}`} />

                  {/* Phase Info Card - Chinese */}
                  <motion.div
                    className={`mt-3 md:mt-4 w-full max-w-[180px] md:max-w-[280px] p-2 md:p-4 rounded-xl transition-all duration-300 ${isActive ? `bg-zinc-900 border ${colors.border}/50 ${colors.glow}` : 'bg-zinc-900/50 border border-zinc-800'}`}
                    animate={{ opacity: isActive ? 1 : 0.6 }}
                    transition={{ duration: 0.5, ease: "easeInOut" }}
                  >
                    {/* Header */}
                    <div className="flex items-center justify-between mb-1 md:mb-2">
                      <span className={`text-[8px] md:text-[10px] font-mono font-bold ${isActive ? colors.text : 'text-zinc-600'}`}>{phase.focus}</span>
                      <span className={`text-[10px] md:text-xs font-bold ${isActive ? colors.text : 'text-zinc-600'}`}>{phase.metric}</span>
                    </div>

                    {/* Title - Chinese */}
                    <h4 className={`text-sm md:text-lg font-bold mb-0.5 md:mb-1 ${isActive ? 'text-white' : 'text-zinc-500'}`}>{phase.title}</h4>
                    <p className={`text-[10px] md:text-xs mb-2 md:mb-3 ${isActive ? colors.text : 'text-zinc-600'}`}>{phase.chinese}</p>

                    {/* Description - Chinese */}
                    <p className={`text-[10px] md:text-xs leading-relaxed mb-2 md:mb-3 ${isActive ? 'text-zinc-300' : 'text-zinc-600'}`}>{phase.desc}</p>

                    {/* Hidden Goal - Chinese */}
                    {isActive && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        className={`p-1.5 md:p-2 rounded-lg bg-black/50 border ${colors.border}/30`}
                      >
                        <div className={`text-[8px] md:text-[9px] ${colors.text} uppercase mb-1 flex items-center gap-1`}>
                          <Icon name="eye" size={8} /> 隐藏目标
                        </div>
                        <p className="text-white text-[10px] md:text-[11px] font-medium">{phase.hidden}</p>
                      </motion.div>
                    )}

                    {/* Business Model - Chinese */}
                    <div className={`mt-2 md:mt-3 pt-1.5 md:pt-2 border-t ${isActive ? 'border-zinc-700' : 'border-zinc-800'}`}>
                      <div className="flex justify-between items-center">
                        <span className="text-[8px] md:text-[9px] text-zinc-500">商业模式</span>
                        <span className={`text-[10px] md:text-xs font-bold ${isActive ? colors.text : 'text-zinc-600'}`}>{phase.business}</span>
                      </div>
                    </div>
                  </motion.div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Bottom Quote - Chinese */}
      <div className="pt-3 md:pt-4 pb-16 md:pb-8 px-4 md:px-8 z-10">
        <div className="flex flex-col md:flex-row items-center justify-center gap-2 md:gap-4 p-3 md:p-4 bg-zinc-900/50 border border-zinc-800 rounded-xl max-w-3xl mx-auto">
          <span className="text-xl md:text-2xl">🚗</span>
          <p className="text-zinc-400 text-xs md:text-sm text-center md:text-left">
            "特斯拉卖车是为了建立能源网络。<span className="text-white font-bold">Violoop卖硬件是为了构建行为图谱。</span>"
          </p>
          <div className="flex items-center gap-2 md:gap-3 md:pl-4 md:border-l border-zinc-700">
            <span className="text-green-400 font-bold text-sm md:text-base">$100亿</span>
            <Icon name="arrowRight" size={14} className="text-zinc-600" />
            <span className="text-blue-400 font-bold text-sm md:text-base">$1000亿</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Slide10_Market;
