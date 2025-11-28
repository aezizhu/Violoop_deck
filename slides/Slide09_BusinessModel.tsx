import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Icon } from '../components/Icon';
import { ParticleBackground } from '../components/ParticleBackground';
import { SlideHeader } from '../components/SlideHeader';

interface Step {
  id: number;
  title: string;
  desc: string;
  icon: string;
  color: 'blue' | 'green' | 'purple';
  progress: string;
}

const Slide09_BusinessModel: React.FC = () => {
  const [activeStep, setActiveStep] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveStep(prev => (prev + 1) % 3);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const steps: Step[] = [
    { id: 0, title: "演示学习", desc: "展示一次，永久自动化", icon: "eye", color: "blue", progress: "33%" },
    { id: 1, title: "图谱合成", desc: "转化为确定性逻辑", icon: "gitBranch", color: "green", progress: "66%" },
    { id: 2, title: "发布分享", desc: "人人可用的动态工作流", icon: "share", color: "purple", progress: "100%" }
  ];

  const colorClasses = {
    blue: { bg: 'bg-blue-500', border: 'border-blue-500', text: 'text-blue-400', glow: 'shadow-[0_0_30px_rgba(59,130,246,0.3)]' },
    green: { bg: 'bg-green-500', border: 'border-green-500', text: 'text-green-400', glow: 'shadow-[0_0_30px_rgba(34,197,94,0.3)]' },
    purple: { bg: 'bg-purple-500', border: 'border-purple-500', text: 'text-purple-400', glow: 'shadow-[0_0_30px_rgba(168,85,247,0.3)]' }
  };

  const currentColors = colorClasses[steps[activeStep].color];

  return (
    <div className="w-full h-full flex flex-col relative overflow-hidden">
      {/* Particle Background */}
      <ParticleBackground opacity={0.35} particleCount={900} colorScheme="purple-green" />

      {/* Header */}
      <SlideHeader chapter={3} titleEn="Business Model" titleZh="商业模式" badge="BUSINESS" />

      {/* Background */}
      <div className="absolute inset-0 z-[1]">
        <div className="absolute inset-0 bg-black/50" />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(34,197,94,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(34,197,94,0.02)_1px,transparent_1px)] bg-[size:40px_40px]" />
      </div>

      {/* Main Content */}
      <div className="flex-1 flex justify-center px-4 z-10 overflow-hidden">
        <div className="w-full max-w-5xl flex flex-col md:flex-row gap-4 md:gap-6">
        {/* LEFT: Steps Stack - Chinese */}
        <div className="flex-1 flex flex-col justify-center max-w-md">
          <div className="relative">
            {steps.map((step, i) => {
              const colors = colorClasses[step.color];
              const isActive = activeStep === i;

              return (
                <motion.div
                  key={step.id}
                  onClick={() => setActiveStep(i)}
                  className="relative cursor-pointer transition-all duration-300 mb-2 md:mb-3"
                  animate={{ x: isActive ? 16 : 0, scale: isActive ? 1.02 : 1 }}
                >
                  <div className={`p-3 md:p-4 rounded-xl border-2 transition-all duration-300 ${isActive ? `${colors.border} ${colors.glow} bg-zinc-900` : 'border-zinc-800 bg-zinc-950'}`}>
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center gap-2 md:gap-3">
                        <div className={`w-8 h-8 md:w-10 md:h-10 rounded-lg flex items-center justify-center ${isActive ? colors.bg : 'bg-zinc-800'}`}>
                          <Icon name={step.icon} size={16} className={isActive ? 'text-black' : 'text-zinc-500'} />
                        </div>
                        <div>
                          <div className="flex items-center gap-2">
                            <span className={`text-xs font-mono ${isActive ? colors.text : 'text-zinc-600'}`}>{i + 1}.</span>
                            <span className={`text-sm md:text-base font-bold ${isActive ? 'text-white' : 'text-zinc-500'}`}>{step.title}</span>
                          </div>
                          <div className={`text-xs ${isActive ? colors.text : 'text-zinc-600'}`}>{step.desc}</div>
                        </div>
                      </div>
                    </div>
                    <div className="h-1 md:h-1.5 bg-zinc-800 rounded-full overflow-hidden">
                      <motion.div className={`h-full rounded-full ${colors.bg}`} initial={{ width: 0 }} animate={{ width: isActive ? step.progress : '0%' }} transition={{ duration: 0.5 }} />
                    </div>
                  </div>
                  {isActive && <motion.div layoutId="activeStepIndicator" className={`absolute left-0 top-1/2 -translate-y-1/2 -translate-x-2 w-1 h-10 md:h-12 rounded-full ${colors.bg}`} />}
                </motion.div>
              );
            })}
          </div>

          {/* Key insight - Chinese */}
          <div className="mt-4 md:mt-6 p-3 md:p-4 bg-zinc-900/50 border border-zinc-800 rounded-xl">
            <div className="flex items-start gap-3">
              <div className="p-2 bg-green-500/10 rounded-lg shrink-0"><Icon name="zap" size={16} className="text-green-400" /></div>
              <div>
                <div className="text-white font-bold text-sm">语义封装器</div>
                <div className="text-zinc-500 text-xs">每个工作流都变成确定性逻辑。无脆弱像素匹配。</div>
              </div>
            </div>
          </div>
        </div>

        {/* RIGHT: Visual Demo Panel - Chinese */}
        <div className="flex-1 flex flex-col max-w-lg">
          <AnimatePresence mode="wait">
            <motion.div key={activeStep} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} className="flex-1 flex flex-col">
              <div className={`flex-1 min-h-[200px] md:min-h-0 bg-zinc-900 border ${currentColors.border}/30 rounded-2xl overflow-hidden ${currentColors.glow}`}>
                <div className="h-full p-3 md:p-4 flex flex-col">
                  <div className="flex-1 bg-black/50 rounded-xl relative overflow-hidden flex items-center justify-center">
                    {activeStep === 0 && (
                      <div className="w-full h-full relative">
                        <div className="absolute top-2 left-2 right-2 flex items-center justify-between px-2 md:px-3 py-1.5 md:py-2 bg-zinc-900 border border-zinc-800 rounded-lg">
                          <div className="flex items-center gap-2">
                            <motion.div className="w-2 h-2 md:w-2.5 md:h-2.5 bg-red-500 rounded-full" animate={{ opacity: [1, 0.3, 1] }} transition={{ duration: 1, repeat: Infinity }} />
                            <span className="text-red-400 text-[10px] md:text-xs font-mono">录制中</span>
                          </div>
                          <span className="text-zinc-500 text-[10px] md:text-xs">学习: "导出发票"</span>
                        </div>
                        <div className="absolute inset-4 md:inset-8 top-10 md:top-14 bg-zinc-800 rounded-lg overflow-hidden">
                          <div className="h-5 md:h-6 bg-zinc-700 flex items-center px-2 gap-1.5">
                            <div className="w-2 h-2 rounded-full bg-red-500/60" />
                            <div className="w-2 h-2 rounded-full bg-yellow-500/60" />
                            <div className="w-2 h-2 rounded-full bg-green-500/60" />
                            <span className="text-[8px] md:text-[9px] text-zinc-500 ml-2">发票管理器</span>
                          </div>
                          <div className="p-2 md:p-3 space-y-2">
                            <div className="h-3 md:h-4 bg-zinc-700/50 rounded w-3/4" />
                            <div className="h-2 md:h-3 bg-zinc-700/30 rounded w-1/2" />
                            <div className="h-8 md:h-12 bg-zinc-700/20 rounded mt-2 md:mt-3" />
                          </div>
                          <motion.div className="absolute bottom-2 md:bottom-3 right-2 md:right-3 px-2 md:px-3 py-1 md:py-1.5 bg-blue-500 rounded text-white text-[8px] md:text-[10px] font-bold" animate={{ scale: [1, 0.95, 1] }} transition={{ delay: 2, duration: 0.2, repeat: Infinity, repeatDelay: 2.8 }}>导出 PDF</motion.div>
                          <motion.div className="absolute w-3 h-3 md:w-4 md:h-4" initial={{ x: 20, y: 20 }} animate={{ x: [20, 60, 100], y: [20, 40, 60] }} transition={{ duration: 2.5, repeat: Infinity }}>
                            <svg viewBox="0 0 24 24" fill="white" className="w-2 h-2 md:w-3 md:h-3 drop-shadow-lg"><path d="M4 4l16 8-8 3-3 8z" /></svg>
                          </motion.div>
                        </div>
                        <motion.div className="absolute bottom-2 right-2 text-blue-400 text-[10px] md:text-xs" animate={{ opacity: [0.5, 1, 0.5] }} transition={{ duration: 1, repeat: Infinity }}>录制中 ⚡</motion.div>
                      </div>
                    )}
                    {activeStep === 1 && (
                      <div className="w-full h-full relative flex">
                        <div className="flex-1 flex items-center justify-center relative">
                          <div className="absolute inset-0 bg-[linear-gradient(rgba(34,197,94,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(34,197,94,0.03)_1px,transparent_1px)] bg-[size:16px_16px]" />
                          <motion.div animate={{ scale: [1, 1.05, 1] }} transition={{ duration: 2, repeat: Infinity }} className="w-10 h-10 md:w-14 md:h-14 bg-green-500/20 border-2 border-green-500 rounded-full flex items-center justify-center z-10">
                            <Icon name="share" className="text-green-400" size={20} />
                          </motion.div>
                          {[0, 1, 2, 3].map((i) => (
                            <motion.div key={i} className="absolute w-5 h-5 md:w-7 md:h-7 bg-zinc-800 border border-green-500/50 rounded-lg flex items-center justify-center" style={{ left: `calc(50% + ${Math.cos((i * 90 - 45) * Math.PI / 180) * 45}px - 10px)`, top: `calc(50% + ${Math.sin((i * 90 - 45) * Math.PI / 180) * 45}px - 10px)` }} initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ delay: 0.2 + i * 0.15 }}>
                              <Icon name={['mousePointer', 'activity', 'fileText', 'check'][i]} size={10} className="text-green-400" />
                            </motion.div>
                          ))}
                          {[0, 1, 2, 3].map((i) => (
                            <motion.div key={`packet-${i}`} className="absolute w-1.5 h-1.5 md:w-2 md:h-2 bg-green-400 rounded-full" style={{ left: '50%', top: '50%' }} animate={{ x: [0, Math.cos((i * 90 - 45) * Math.PI / 180) * 45], y: [0, Math.sin((i * 90 - 45) * Math.PI / 180) * 45], opacity: [1, 0] }} transition={{ duration: 1.2, repeat: Infinity, delay: i * 0.3 }} />
                          ))}
                        </div>
                        <div className="w-32 md:w-44 bg-black/80 border-l border-zinc-800 p-2 md:p-3 font-mono text-[7px] md:text-[8px] overflow-hidden">
                          <div className="text-zinc-500 mb-2 flex items-center gap-1"><Icon name="code" size={8} /> workflow.json</div>
                          <div className="space-y-0.5 text-green-400">
                            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.1 }}>{`{`}</motion.div>
                            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }} className="pl-1"><span className="text-purple-400">"name"</span>: <span className="text-amber-400">"导出发票"</span>,</motion.div>
                            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3 }} className="pl-1"><span className="text-purple-400">"version"</span>: <span className="text-blue-400">1.2</span>,</motion.div>
                            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.4 }} className="pl-1"><span className="text-purple-400">"steps"</span>: [</motion.div>
                            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 }} className="pl-2 text-zinc-500">{`{ "click": "导出" }`}</motion.div>
                            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.6 }} className="pl-2 text-zinc-500">{`{ "wait": 200 }`}</motion.div>
                            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.7 }} className="pl-2 text-zinc-500">{`{ "select": "PDF" }`}</motion.div>
                            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.8 }} className="pl-1">],</motion.div>
                            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.9 }} className="pl-1"><span className="text-purple-400">"确定性"</span>: <span className="text-blue-400">true</span></motion.div>
                            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.0 }}>{`}`}</motion.div>
                          </div>
                          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.2 }} className="mt-2 pt-2 border-t border-zinc-800 text-green-400 flex items-center gap-1">
                            <Icon name="check" size={8} /> <span>已编译</span>
                          </motion.div>
                        </div>
                        <motion.div className="absolute bottom-2 left-2 text-green-400 text-[10px] md:text-xs" animate={{ opacity: [0.5, 1, 0.5] }} transition={{ duration: 1, repeat: Infinity }}>合成中 ⚡</motion.div>
                      </div>
                    )}
                    {activeStep === 2 && (
                      <div className="w-full h-full p-2 flex flex-col">
                        {/* Header with stats - Chinese */}
                        <div className="flex items-center justify-between mb-2 pb-2 border-b border-zinc-800">
                          <div className="flex items-center gap-2"><Icon name="layers" size={12} className="text-purple-400" /><span className="text-white text-[10px] md:text-xs font-bold">工作流中心</span></div>
                          <div className="flex items-center gap-2 md:gap-3">
                            <div className="text-center"><div className="text-white text-[10px] md:text-xs font-bold">12.4k</div><div className="text-zinc-600 text-[6px] md:text-[7px]">工作流</div></div>
                            <div className="text-center"><div className="text-white text-[10px] md:text-xs font-bold">3.2k</div><div className="text-zinc-600 text-[6px] md:text-[7px]">创作者</div></div>
                          </div>
                        </div>
                        {/* Workflow list - Chinese */}
                        <div className="flex-1 space-y-1 md:space-y-1.5 overflow-hidden">
                          {[
                            { name: "导出发票为 PDF", author: "Sarah K.", uses: "2.3k", apps: ["QB", "Chrome"] },
                            { name: "Figma → Slack 更新", author: "Mike D.", uses: "1.8k", apps: ["Figma", "Slack"] },
                            { name: "每日站会记录", author: "Acme团队", uses: "956", apps: ["Zoom", "Notion"] },
                            { name: "GitHub PR 审核流程", author: "DevOps Inc", uses: "2.1k", apps: ["GitHub", "Linear"] },
                          ].map((w, i) => (
                            <motion.div key={i} initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: i * 0.1 }} className="flex items-center gap-2 p-1 md:p-1.5 bg-zinc-800/50 border border-zinc-700 rounded-lg hover:border-purple-500/30 transition-colors">
                              <div className="w-5 h-5 md:w-6 md:h-6 bg-purple-500/20 rounded flex items-center justify-center shrink-0"><Icon name="zap" size={8} className="text-purple-400" /></div>
                              <div className="flex-1 min-w-0">
                                <div className="text-white text-[8px] md:text-[9px] font-medium truncate">{w.name}</div>
                                <div className="text-zinc-500 text-[6px] md:text-[7px]">{w.author} • {w.uses} 次使用</div>
                              </div>
                              <div className="flex gap-0.5 shrink-0">
                                {w.apps.map((app, j) => <div key={j} className="px-1 py-0.5 bg-zinc-700 rounded text-[5px] md:text-[6px] text-zinc-400">{app}</div>)}
                              </div>
                            </motion.div>
                          ))}
                        </div>
                        {/* Bottom stats - Chinese */}
                        <div className="mt-2 pt-2 border-t border-zinc-800 flex items-center justify-between">
                          <div className="flex items-center gap-2 md:gap-3 text-[7px] md:text-[8px]">
                            <span className="text-zinc-500">今日:</span>
                            <span className="text-green-400">+47 新增</span>
                            <span className="text-blue-400">89k 运行</span>
                          </div>
                          <motion.div className="flex items-center gap-1 text-purple-400 text-[8px] md:text-[9px]" animate={{ opacity: [0.5, 1, 0.5] }} transition={{ duration: 1.5, repeat: Infinity }}>
                            发布你的工作流
                          </motion.div>
                        </div>
                      </div>
                    )}
                  </div>
                  {/* Description - Chinese */}
                  <div className="mt-2 md:mt-3 p-2 md:p-3 bg-black/30 rounded-lg border border-zinc-800">
                    <p className="text-zinc-400 text-xs">{steps[activeStep].desc}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
        </div>
      </div>

      {/* Bottom Stats Bar - Chinese */}
      <div className="flex flex-wrap justify-center gap-4 md:gap-8 py-3 md:py-4 border-t border-zinc-900 z-10 px-4">
        <div className="flex items-center gap-4 md:gap-6">
          {[
            { label: '录制', color: 'bg-blue-500' },
            { label: '合成', color: 'bg-green-500' },
            { label: '分享', color: 'bg-purple-500' }
          ].map((item, i) => (
            <div key={i} className="flex items-center gap-2">
              <div className={`w-2 h-2 rounded-full ${item.color} ${activeStep === i ? 'opacity-100' : 'opacity-30'}`} />
              <span className={`text-xs ${activeStep === i ? 'text-white' : 'text-zinc-600'}`}>{item.label}</span>
            </div>
          ))}
        </div>
        <div className="hidden md:block w-px bg-zinc-800" />
        <p className="text-zinc-500 text-xs">每个工作流都变成一个<span className="text-white font-bold">可复用应用</span></p>
      </div>
    </div>
  );
};

export default Slide09_BusinessModel;
