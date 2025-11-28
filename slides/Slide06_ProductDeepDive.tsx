import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Icon } from '../components/Icon';
import { SlideHeader } from '../components/SlideHeader';

interface Scenario {
  id: string;
  title: string;
  subtitle: string;
  value: string;
  valueIcon: string;
  color: 'green' | 'teal' | 'purple';
  scene: {
    context: string;
    action: string;
    result: string;
  };
  visual: 'code' | 'meeting' | 'remote';
}

const Slide06_ProductDeepDive: React.FC = () => {
  const [activeScenario, setActiveScenario] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);

  const scenarios: Scenario[] = [
    {
      id: 'orchestrator',
      title: '协调者',
      subtitle: '旁路副驾 / Sidecar',
      value: '零上下文切换',
      valueIcon: 'zap',
      color: 'green',
      scene: {
        context: '全屏编码会话',
        action: '"Violoop，查找 Stripe webhook 验证的 API 文档"',
        result: '文档已获取并总结。双手无需离开键盘。',
      },
      visual: 'code'
    },
    {
      id: 'arbiter',
      title: '仲裁者',
      subtitle: '任务塔台 / Mission Control',
      value: '并行处理',
      valueIcon: 'radio',
      color: 'teal',
      scene: {
        context: '设计评审会议',
        action: '"Violoop，导出 Figma 原型并发邮件给客户"',
        result: '后台执行。前台注意力得以释放。',
      },
      visual: 'meeting'
    },
    {
      id: 'bridge',
      title: '桥梁',
      subtitle: '代理桥梁 / Agentic Avatar',
      value: '空间解耦',
      valueIcon: 'fingerprint',
      color: 'purple',
      scene: {
        context: '咖啡馆，仅手机',
        action: '"Violoop，在我家工作站上启动渲染任务"',
        result: '算力在家。控制随处。状态持续。',
      },
      visual: 'remote'
    }
  ];

  // Auto-cycle scenarios
  useEffect(() => {
    if (!isPlaying) return;
    const interval = setInterval(() => {
      setActiveScenario(prev => (prev + 1) % scenarios.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [isPlaying, scenarios.length]);

  const current = scenarios[activeScenario];
  const colorMap = {
    green: { bg: 'bg-green-500', text: 'text-green-400', border: 'border-green-500', glow: 'rgba(34,197,94,0.3)' },
    teal: { bg: 'bg-teal-500', text: 'text-teal-400', border: 'border-teal-500', glow: 'rgba(20,184,166,0.3)' },
    purple: { bg: 'bg-purple-500', text: 'text-purple-400', border: 'border-purple-500', glow: 'rgba(168,85,247,0.3)' }
  };
  const colors = colorMap[current.color];

  return (
    <div className="w-full h-full flex flex-col relative overflow-hidden">
      {/* Header */}
      <SlideHeader chapter={2} titleEn="Product Deep Dive" titleZh="产品深度" badge="PRODUCT" />

      {/* Cinematic Background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-black" />
        {/* Dynamic gradient based on scenario */}
        <motion.div
          key={current.id}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className={`absolute inset-0 bg-gradient-to-br ${current.color === 'green' ? 'from-green-950/30' : current.color === 'teal' ? 'from-teal-950/30' : 'from-purple-950/30'} via-transparent to-transparent`}
        />
        {/* Subtle grid */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:80px_80px]" />
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col md:flex-row relative z-10">
        {/* LEFT: Scenario Visualization */}
        <div className="flex-1 flex items-center justify-center p-4 md:p-8">
          <AnimatePresence mode="wait">
            <motion.div
              key={current.id}
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 30 }}
              transition={{ duration: 0.5 }}
              className="relative w-full max-w-lg"
            >
              {/* Scene Container - Cinematic Frame */}
              <div className={`relative bg-zinc-950 rounded-2xl border ${colors.border}/30 overflow-hidden`} style={{ boxShadow: `0 0 60px ${colors.glow}` }}>
                {/* Scene Header - Chinese */}
                <div className="flex items-center justify-between px-4 py-2 border-b border-zinc-800 bg-zinc-900/50">
                  <div className="flex items-center gap-2">
                    <div className={`w-2 h-2 rounded-full ${colors.bg} animate-pulse`} />
                    <span className="text-[10px] font-mono text-zinc-500 uppercase tracking-wider">实时场景</span>
                  </div>
                  <span className="text-[10px] font-mono text-zinc-600">{current.scene.context}</span>
                </div>

                {/* Scene Visual */}
                <div className="h-40 md:h-48 relative overflow-hidden">
                  {current.visual === 'code' && (
                    <div className="absolute inset-0 p-4 font-mono text-xs">
                      {/* Code editor with API integration - Chinese */}
                      <div className="flex gap-4 h-full">
                        {/* Line numbers */}
                        <div className="text-zinc-700 text-right select-none">
                          {[...Array(10)].map((_, i) => <div key={i}>{i + 1}</div>)}
                        </div>
                        {/* Code */}
                        <div className="flex-1 overflow-hidden">
                          <div className="text-zinc-500">// Stripe webhook 处理器</div>
                          <div className="text-blue-400">const</div>
                          <div className="text-zinc-300">  verifyWebhook = (req) =&gt; {'{'}</div>
                          <motion.div
                            className="text-yellow-400 bg-yellow-500/10 px-1 -mx-1"
                            animate={{ opacity: [1, 0.6, 1] }}
                            transition={{ duration: 1.5, repeat: Infinity }}
                          >
                                  // 如何验证签名？
                          </motion.div>
                          <div className="text-zinc-600">    const sig = req.headers[...];</div>
                          <div className="text-zinc-600">    // 需要 API 文档...</div>
                          <div className="text-zinc-600">  {'}'}</div>
                        </div>
                      </div>
                      {/* Voice command overlay - Chinese */}
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 1 }}
                        className="absolute bottom-4 left-4 right-4 bg-green-950/90 border border-green-500/50 rounded-lg p-3 backdrop-blur"
                      >
                        <div className="flex items-center gap-2">
                          <motion.div animate={{ scale: [1, 1.2, 1] }} transition={{ duration: 1, repeat: Infinity }}>
                            <Icon name="mic" size={16} className="text-green-400" />
                          </motion.div>
                          <span className="text-green-300 text-xs">"查找 Stripe webhook 验证文档"</span>
                        </div>
                      </motion.div>
                    </div>
                  )}

                  {current.visual === 'meeting' && (
                    <div className="absolute inset-0 p-4">
                      {/* Design review meeting - Chinese */}
                      <div className="flex gap-3 h-full">
                        {/* Left: Video call participants */}
                        <div className="w-1/2 grid grid-cols-2 gap-1.5">
                          {[1, 2, 3, 4].map(i => (
                            <div key={i} className="bg-zinc-800 rounded-lg flex items-center justify-center relative overflow-hidden">
                              <Icon name="user" size={16} className="text-zinc-600" />
                              {i === 1 && (
                                <div className="absolute bottom-0.5 left-0.5 px-1 py-0.5 bg-teal-500 text-black text-[6px] font-bold rounded">你</div>
                              )}
                              {i === 2 && (
                                <div className="absolute bottom-0.5 left-0.5 px-1 py-0.5 bg-zinc-700 text-zinc-300 text-[6px] rounded">客户</div>
                              )}
                            </div>
                          ))}
                        </div>
                        {/* Right: Figma preview */}
                        <div className="w-1/2 bg-zinc-900 rounded-lg border border-zinc-700 p-2 flex flex-col">
                          <div className="flex items-center gap-1 mb-2">
                            <div className="w-2 h-2 rounded-sm bg-purple-500" />
                            <span className="text-[8px] text-zinc-500">Figma</span>
                          </div>
                          <div className="flex-1 bg-zinc-800 rounded flex items-center justify-center">
                            <motion.div
                              animate={{ scale: [1, 1.02, 1] }}
                              transition={{ duration: 2, repeat: Infinity }}
                              className="text-center"
                            >
                              <Icon name="layers" size={20} className="text-purple-400 mx-auto mb-1" />
                              <div className="text-[8px] text-zinc-500">应用原型 v2</div>
                            </motion.div>
                          </div>
                        </div>
                      </div>
                      {/* Voice command overlay - Chinese */}
                      <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 1 }}
                        className="absolute bottom-4 left-4 right-4 bg-teal-950/90 border border-teal-500/50 rounded-lg p-3 backdrop-blur"
                      >
                        <div className="flex items-center gap-2">
                          <motion.div animate={{ scale: [1, 1.2, 1] }} transition={{ duration: 1, repeat: Infinity }}>
                            <Icon name="mic" size={16} className="text-teal-400" />
                          </motion.div>
                          <span className="text-teal-300 text-xs">"导出 Figma 原型，发邮件给客户"</span>
                        </div>
                      </motion.div>
                    </div>
                  )}

                  {current.visual === 'remote' && (
                    <div className="absolute inset-0 p-4 flex items-center justify-center">
                      {/* Remote connection visualization - Chinese */}
                      <div className="flex items-center gap-4 md:gap-8">
                        {/* Phone */}
                        <div className="flex flex-col items-center">
                          <div className="w-10 h-16 md:w-12 md:h-20 bg-zinc-800 rounded-xl border border-zinc-700 flex items-center justify-center">
                            <Icon name="smartphone" size={16} className="text-purple-400 md:hidden" />
                            <Icon name="smartphone" size={20} className="text-purple-400 hidden md:block" />
                          </div>
                          <span className="text-[8px] md:text-[10px] text-zinc-500 mt-2">咖啡馆</span>
                        </div>

                        {/* Connection beam */}
                        <div className="relative w-20 md:w-32">
                          <div className="h-px bg-purple-500/30 w-full" />
                          <motion.div
                            className="absolute top-0 left-0 h-px w-6 md:w-8 bg-gradient-to-r from-transparent via-purple-400 to-transparent"
                            animate={{ x: [0, 80, 0] }}
                            transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                          />
                          <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                            <Icon name="radio" size={14} className="text-purple-400" />
                          </div>
                        </div>

                        {/* Desktop */}
                        <div className="flex flex-col items-center">
                          <div className="w-16 h-12 md:w-20 md:h-14 bg-zinc-800 rounded-lg border border-zinc-700 flex items-center justify-center">
                            <motion.div
                              animate={{ opacity: [0.5, 1, 0.5] }}
                              transition={{ duration: 2, repeat: Infinity }}
                            >
                              <Icon name="monitor" size={20} className="text-purple-400 md:hidden" />
                              <Icon name="monitor" size={24} className="text-purple-400 hidden md:block" />
                            </motion.div>
                          </div>
                          <div className="w-4 md:w-6 h-2 md:h-3 bg-zinc-800 mx-auto" />
                          <span className="text-[8px] md:text-[10px] text-zinc-500 mt-1">家庭工作站</span>
                        </div>
                      </div>
                      {/* Voice command overlay - Chinese */}
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 1 }}
                        className="absolute bottom-4 left-4 right-4 bg-purple-950/90 border border-purple-500/50 rounded-lg p-3 backdrop-blur"
                      >
                        <div className="flex items-center gap-2">
                          <motion.div animate={{ scale: [1, 1.2, 1] }} transition={{ duration: 1, repeat: Infinity }}>
                            <Icon name="mic" size={16} className="text-purple-400" />
                          </motion.div>
                          <span className="text-purple-300 text-xs">"在家庭电脑上启动渲染任务"</span>
                        </div>
                      </motion.div>
                    </div>
                  )}
                </div>

                {/* Result Banner - Chinese */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 2 }}
                  className={`px-4 py-3 ${current.color === 'green' ? 'bg-green-950/50' : current.color === 'teal' ? 'bg-teal-950/50' : 'bg-purple-950/50'} border-t ${colors.border}/20`}
                >
                  <div className="flex items-center gap-2">
                    <Icon name="checkCircle" size={14} className={colors.text} />
                    <span className={`text-xs ${colors.text}`}>{current.scene.result}</span>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* RIGHT: Scenario Info - Chinese */}
        <div className="w-full md:w-96 flex flex-col justify-center p-4 md:p-8 border-t md:border-t-0 md:border-l border-zinc-900">
          <AnimatePresence mode="wait">
            <motion.div
              key={current.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
            >
              {/* Scenario Badge */}
              <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full ${current.color === 'green' ? 'bg-green-950 border-green-500/30' : current.color === 'teal' ? 'bg-teal-950 border-teal-500/30' : 'bg-purple-950 border-purple-500/30'} border mb-4`}>
                <span className={`text-xs font-mono ${colors.text}`}>{current.subtitle}</span>
              </div>

              {/* Title */}
              <h3 className="text-2xl md:text-3xl font-black text-white mb-4 md:mb-6">{current.title}</h3>

              {/* Scenario Steps - Chinese */}
              <div className="space-y-3 md:space-y-4 mb-6 md:mb-8">
                <div className="flex gap-3">
                  <div className="w-6 h-6 rounded-full bg-zinc-800 flex items-center justify-center shrink-0 mt-0.5">
                    <span className="text-xs text-zinc-500">1</span>
                  </div>
                  <div>
                    <div className="text-xs text-zinc-500 uppercase tracking-wider mb-1">场景</div>
                    <div className="text-sm text-zinc-300">{current.scene.context}</div>
                  </div>
                </div>
                <div className="flex gap-3">
                  <div className={`w-6 h-6 rounded-full ${colors.bg}/20 flex items-center justify-center shrink-0 mt-0.5`}>
                    <span className={`text-xs ${colors.text}`}>2</span>
                  </div>
                  <div>
                    <div className="text-xs text-zinc-500 uppercase tracking-wider mb-1">语音命令</div>
                    <div className={`text-sm ${colors.text} font-medium`}>{current.scene.action}</div>
                  </div>
                </div>
                <div className="flex gap-3">
                  <div className={`w-6 h-6 rounded-full ${colors.bg} flex items-center justify-center shrink-0 mt-0.5`}>
                    <Icon name="check" size={12} className="text-black" />
                  </div>
                  <div>
                    <div className="text-xs text-zinc-500 uppercase tracking-wider mb-1">结果</div>
                    <div className="text-sm text-white font-medium">{current.scene.result}</div>
                  </div>
                </div>
              </div>

              {/* Value Proposition - Chinese */}
              <div className={`p-4 rounded-xl border ${colors.border}/30 ${current.color === 'green' ? 'bg-green-950/30' : current.color === 'teal' ? 'bg-teal-950/30' : 'bg-purple-950/30'}`}>
                <div className="flex items-center gap-3">
                  <div className={`p-2 rounded-lg ${colors.bg}/20`}>
                    <Icon name={current.valueIcon} size={20} className={colors.text} />
                  </div>
                  <div>
                    <div className="text-xs text-zinc-500 uppercase tracking-wider">核心价值</div>
                    <div className={`text-lg font-bold ${colors.text}`}>{current.value}</div>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* Bottom Navigation - Chinese */}
      <div className="flex flex-wrap items-center justify-center gap-2 md:gap-6 py-4 px-4 border-t border-zinc-900">
        {scenarios.map((scenario, i) => (
          <button
            key={scenario.id}
            onClick={() => { setActiveScenario(i); setIsPlaying(false); }}
            className={`flex items-center gap-2 md:gap-3 px-3 md:px-4 py-2 rounded-lg transition-all ${i === activeScenario ? `${colorMap[scenario.color].border}/50 bg-zinc-900 border` : 'border border-transparent hover:bg-zinc-900/50'}`}
          >
            <div className={`w-7 h-7 md:w-8 md:h-8 rounded-lg flex items-center justify-center ${i === activeScenario ? colorMap[scenario.color].bg + '/20' : 'bg-zinc-800'}`}>
              <Icon name={scenario.valueIcon} size={14} className={i === activeScenario ? colorMap[scenario.color].text : 'text-zinc-500'} />
            </div>
            <div className="text-left hidden md:block">
              <div className={`text-sm font-bold ${i === activeScenario ? 'text-white' : 'text-zinc-500'}`}>{scenario.title}</div>
              <div className="text-[10px] text-zinc-600">{scenario.value}</div>
            </div>
            {i === activeScenario && (
              <motion.div
                className={`w-1 h-6 md:h-8 rounded-full ${colorMap[scenario.color].bg}`}
                layoutId="activeIndicator"
              />
            )}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Slide06_ProductDeepDive;
