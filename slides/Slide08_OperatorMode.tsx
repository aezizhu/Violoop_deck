import React from 'react';
import { motion } from 'framer-motion';
import { Icon } from '../components/Icon';
import { SlideHeader } from '../components/SlideHeader';

const Slide08_OperatorMode: React.FC = () => {
  return (
    <div className="w-full h-full flex flex-col relative overflow-hidden">
      {/* Header */}
      <SlideHeader chapter={2} titleEn="Operator Mode" titleZh="操作模式" badge="PRODUCT" />

      {/* Background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-red-950/20 via-black to-black" />
      </div>

      {/* Main Content */}
      <div className="flex-1 flex justify-center px-4 z-10 overflow-y-auto">
        <div className="w-full max-w-5xl flex flex-col md:flex-row gap-4 md:gap-8">
        {/* LEFT: The Vision Problem - Chinese */}
        <div className="flex-1 flex flex-col max-w-lg">
          <div className="flex-1 bg-zinc-900/80 border border-red-500/30 rounded-2xl overflow-hidden flex flex-col">
            {/* Visual: Blurry pixel scanning */}
            <div className="flex-1 relative bg-black/50 flex items-center justify-center overflow-hidden min-h-[160px]">
              {/* Simulated screen with pixel grid */}
              <div className="absolute inset-3 md:inset-4 bg-zinc-900 rounded-lg overflow-hidden">
                {/* Pixel grid effect */}
                <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:8px_8px]" />

                {/* Mock UI elements as blurry shapes */}
                <div className="absolute top-2 md:top-4 left-2 md:left-4 right-2 md:right-4 h-6 md:h-8 bg-zinc-800/50 rounded blur-[1px]" />
                <div className="absolute top-10 md:top-16 left-2 md:left-4 w-16 md:w-24 h-20 md:h-32 bg-zinc-800/30 rounded blur-[1px]" />
                <div className="absolute top-10 md:top-16 left-20 md:left-32 right-2 md:right-4 bottom-10 md:bottom-16 bg-zinc-800/20 rounded blur-[1px]">
                  {/* Target button - blurry */}
                  <motion.div
                    className="absolute bottom-2 md:bottom-4 right-2 md:right-4 w-16 md:w-20 h-6 md:h-8 bg-blue-500/30 rounded blur-[2px]"
                    animate={{ opacity: [0.3, 0.6, 0.3] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  />
                </div>

                {/* Scanning cursor - wandering */}
                <motion.div
                  className="absolute w-6 h-6 md:w-8 md:h-8"
                  animate={{
                    x: [50, 100, 75, 140, 110, 50],
                    y: [40, 60, 90, 70, 50, 40]
                  }}
                  transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                >
                  <div className="w-full h-full border-2 border-red-500 rounded-lg flex items-center justify-center bg-red-500/10">
                    <Icon name="search" size={12} className="text-red-400" />
                  </div>
                  <motion.div
                    className="absolute -inset-2 border border-red-500/50 rounded-xl"
                    animate={{ scale: [1, 1.2, 1], opacity: [0.5, 0, 0.5] }}
                    transition={{ duration: 1, repeat: Infinity }}
                  />
                </motion.div>
              </div>

              {/* "Thinking" indicator - Chinese */}
              <motion.div
                className="absolute bottom-2 md:bottom-4 left-2 md:left-4 right-2 md:right-4 bg-red-950/80 border border-red-500/30 rounded-lg px-2 md:px-3 py-1.5 md:py-2"
                animate={{ opacity: [0.7, 1, 0.7] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                <div className="flex items-center gap-2">
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                  >
                    <Icon name="activity" size={12} className="text-red-400" />
                  </motion.div>
                  <span className="text-[9px] md:text-[10px] text-red-300 font-mono">分析像素中... 2.3秒</span>
                </div>
              </motion.div>
            </div>

            {/* Info Panel - Chinese */}
            <div className="p-3 md:p-4 bg-zinc-950 border-t border-red-500/20">
              <div className="flex items-center gap-2 mb-2 md:mb-3">
                <Icon name="xCircle" size={16} className="text-red-400" />
                <span className="text-red-400 font-bold text-sm">纯视觉 (VLM)</span>
              </div>
              <div className="grid grid-cols-2 gap-2 md:gap-3 text-xs">
                <div className="bg-zinc-900 rounded-lg p-2">
                  <div className="text-zinc-500 mb-1 text-[10px]">速度</div>
                  <div className="text-red-400 font-mono font-bold text-xs">2-5 秒/动作</div>
                </div>
                <div className="bg-zinc-900 rounded-lg p-2">
                  <div className="text-zinc-500 mb-1 text-[10px]">准确率</div>
                  <div className="text-red-400 font-mono font-bold text-xs">~70-80%</div>
                </div>
                <div className="bg-zinc-900 rounded-lg p-2">
                  <div className="text-zinc-500 mb-1 text-[10px]">成本</div>
                  <div className="text-red-400 font-mono font-bold text-xs">$$$$ / 千次</div>
                </div>
                <div className="bg-zinc-900 rounded-lg p-2">
                  <div className="text-zinc-500 mb-1 text-[10px]">本质</div>
                  <div className="text-red-400 font-mono font-bold text-xs">概率性</div>
                </div>
              </div>
            </div>
          </div>

          {/* Problems List - Chinese */}
          <div className="mt-3 md:mt-4 space-y-1.5 md:space-y-2">
            {[
              "UI主题变化 = 模型崩溃",
              "截图 → 上传 → 推理 = 慢",
              "黑盒：无法解释点击"
            ].map((problem, i) => (
              <div key={i} className="flex items-center gap-2 text-xs md:text-sm text-zinc-400">
                <Icon name="xCircle" size={12} className="text-red-500 shrink-0" />
                <span>{problem}</span>
              </div>
            ))}
          </div>
        </div>

        {/* RIGHT: The Structure Solution - Chinese */}
        <div className="flex-1 flex flex-col max-w-lg">
          <div className="flex-1 bg-zinc-900/80 border border-green-500/30 rounded-2xl overflow-hidden flex flex-col shadow-[0_0_40px_rgba(34,197,94,0.1)]">
            {/* Visual: Clean Accessibility Tree */}
            <div className="flex-1 relative bg-black/50 p-3 md:p-4 overflow-hidden min-h-[160px]">
              {/* Grid background */}
              <div className="absolute inset-0 bg-[linear-gradient(rgba(34,197,94,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(34,197,94,0.05)_1px,transparent_1px)] bg-[size:20px_20px]" />

              {/* Accessibility Tree - Chinese */}
              <div className="relative h-full flex flex-col items-center justify-center scale-90 md:scale-100">
                {/* Root Node */}
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="px-3 md:px-4 py-1.5 md:py-2 bg-green-950 border border-green-500 rounded-lg text-green-400 font-mono text-xs md:text-sm mb-3 md:mb-4"
                >
                  窗口 [应用: Figma]
                </motion.div>

                {/* Connection lines */}
                <svg className="absolute top-[56px] md:top-[72px] left-1/2 -translate-x-1/2 w-40 md:w-48 h-6 md:h-8" style={{overflow: 'visible'}}>
                  <line x1="80" y1="0" x2="30" y2="24" stroke="rgba(34,197,94,0.4)" strokeWidth="1" />
                  <line x1="80" y1="0" x2="80" y2="24" stroke="rgba(34,197,94,0.4)" strokeWidth="1" />
                  <line x1="80" y1="0" x2="130" y2="24" stroke="rgba(34,197,94,0.4)" strokeWidth="1" />
                </svg>

                {/* Child Nodes - Chinese */}
                <div className="flex gap-2 md:gap-3 mt-3 md:mt-4">
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 0.6 }}
                    transition={{ delay: 0.2 }}
                    className="px-2 md:px-3 py-1 md:py-1.5 bg-green-950/50 border border-green-500/30 rounded text-green-400/60 font-mono text-[10px] md:text-xs"
                  >
                    工具栏
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 0.6 }}
                    transition={{ delay: 0.3 }}
                    className="px-2 md:px-3 py-1 md:py-1.5 bg-green-950/50 border border-green-500/30 rounded text-green-400/60 font-mono text-[10px] md:text-xs"
                  >
                    画布
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.4 }}
                    className="px-2 md:px-3 py-1 md:py-1.5 bg-green-950 border border-green-500 rounded text-green-400 font-mono text-[10px] md:text-xs"
                  >
                    面板
                  </motion.div>
                </div>

                {/* Target Element - Chinese */}
                <svg className="absolute top-[100px] md:top-[130px] right-[70px] md:right-[85px] w-6 md:w-8 h-5 md:h-6" style={{overflow: 'visible'}}>
                  <line x1="12" y1="0" x2="12" y2="16" stroke="rgba(34,197,94,0.4)" strokeWidth="1" />
                </svg>

                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.6 }}
                  className="mt-3 md:mt-4 relative"
                >
                  <div className="px-3 md:px-4 py-1.5 md:py-2 bg-green-500 text-black font-mono text-xs md:text-sm font-bold rounded-lg flex items-center gap-2 shadow-[0_0_20px_rgba(34,197,94,0.4)]">
                    <Icon name="mousePointer" size={12} />
                    按钮 [导出]
                  </div>
                  {/* Target indicator */}
                  <motion.div
                    className="absolute -inset-2 border-2 border-green-400 rounded-xl"
                    animate={{ opacity: [1, 0.5, 1] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  />
                  <Icon name="crosshair" className="text-green-400 absolute -top-1 -right-1" size={10} />
                </motion.div>

                {/* Instant action indicator - Chinese */}
                <motion.div
                  className="absolute bottom-1 md:bottom-2 left-1 md:left-2 right-1 md:right-2 bg-green-950/80 border border-green-500/30 rounded-lg px-2 md:px-3 py-1.5 md:py-2"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.8 }}
                >
                  <div className="flex items-center gap-2">
                    <Icon name="zap" size={12} className="text-green-400" />
                    <span className="text-[9px] md:text-[10px] text-green-300 font-mono">目标锁定: 12毫秒</span>
                  </div>
                </motion.div>
              </div>
            </div>

            {/* Info Panel - Chinese */}
            <div className="p-3 md:p-4 bg-zinc-950 border-t border-green-500/20">
              <div className="flex items-center gap-2 mb-2 md:mb-3">
                <Icon name="checkCircle" size={16} className="text-green-400" />
                <span className="text-green-400 font-bold text-sm">结构化落地</span>
              </div>
              <div className="grid grid-cols-2 gap-2 md:gap-3 text-xs">
                <div className="bg-zinc-900 rounded-lg p-2">
                  <div className="text-zinc-500 mb-1 text-[10px]">速度</div>
                  <div className="text-green-400 font-mono font-bold text-xs">&lt;50毫秒/动作</div>
                </div>
                <div className="bg-zinc-900 rounded-lg p-2">
                  <div className="text-zinc-500 mb-1 text-[10px]">准确率</div>
                  <div className="text-green-400 font-mono font-bold text-xs">100%</div>
                </div>
                <div className="bg-zinc-900 rounded-lg p-2">
                  <div className="text-zinc-500 mb-1 text-[10px]">成本</div>
                  <div className="text-green-400 font-mono font-bold text-xs">~$0 / 千次</div>
                </div>
                <div className="bg-zinc-900 rounded-lg p-2">
                  <div className="text-zinc-500 mb-1 text-[10px]">本质</div>
                  <div className="text-green-400 font-mono font-bold text-xs">确定性</div>
                </div>
              </div>
            </div>
          </div>

          {/* Benefits List - Chinese */}
          <div className="mt-3 md:mt-4 space-y-1.5 md:space-y-2 pb-4 md:pb-0">
            {[
              "主题无关：读代码，非像素",
              "直接 OS API = 即时响应",
              "可解释：每次点击都有原因"
            ].map((benefit, i) => (
              <div key={i} className="flex items-center gap-2 text-xs md:text-sm text-zinc-400">
                <Icon name="check" size={12} className="text-green-500 shrink-0" />
                <span>{benefit}</span>
              </div>
            ))}
          </div>
        </div>
        </div>
      </div>

      {/* Bottom Insight - Chinese */}
      <div className="text-center pt-2 md:pt-4 pb-16 md:pb-6 border-t border-zinc-900 mt-2 md:mt-4">
        <p className="text-zinc-500 text-xs md:text-sm">
          <span className="text-white font-bold">"像素是给人类看的。</span> 结构是给智能体用的。"
        </p>
      </div>
    </div>
  );
};

export default Slide08_OperatorMode;
