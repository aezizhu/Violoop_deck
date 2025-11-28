import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Icon } from '../components/Icon';
import { ParticleBackground } from '../components/ParticleBackground';
import { SlideHeader } from '../components/SlideHeader';

interface Layer {
  id: number;
  name: string;
  subtitle: string;
  coverage: string;
  accuracy: string;
  latency: string;
  color: 'blue' | 'green' | 'yellow';
  icon: string;
  description: string;
  examples: string[];
  visual: 'cli' | 'tree' | 'vision';
}

// CLI Visual Component
const commands = [
  { cmd: '$ git status', result: 'Modified: src/app.ts' },
  { cmd: '$ docker ps', result: 'Container: api_prod running' },
  { cmd: '$ npm test', result: '✓ 42 tests passed' },
];

const CLIVisual: React.FC = () => {
  const [commandIndex, setCommandIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCommandIndex(prev => (prev + 1) % commands.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full h-full flex items-center justify-center">
      <div className="absolute inset-0 bg-[linear-gradient(rgba(59,130,246,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,0.03)_1px,transparent_1px)] bg-[size:16px_16px]" />
      <div className="w-64 bg-zinc-950 border border-blue-500/30 rounded-lg font-mono text-xs p-3">
        <div className="flex items-center gap-2 mb-2 pb-2 border-b border-zinc-800">
          <div className="w-2 h-2 rounded-full bg-red-500" />
          <div className="w-2 h-2 rounded-full bg-yellow-500" />
          <div className="w-2 h-2 rounded-full bg-green-500" />
        </div>
        <motion.div
          key={commandIndex}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-blue-400"
        >
          {commands[commandIndex].cmd}
        </motion.div>
        <motion.div
          key={`result-${commandIndex}`}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="text-green-400 mt-1"
        >
          {commands[commandIndex].result}
        </motion.div>
      </div>
      <motion.div
        className="absolute bottom-4 right-4 text-blue-400 text-xs"
        animate={{ opacity: [0.5, 1, 0.5] }}
        transition={{ duration: 1, repeat: Infinity }}
      >
        Direct Protocol Access ⚡
      </motion.div>
    </div>
  );
};

const Slide07_InterfaceComparison: React.FC = () => {
  const [activeLayer, setActiveLayer] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveLayer(prev => (prev + 1) % 3);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const layers: Layer[] = [
    {
      id: 0,
      name: "Layer 1: CLI / API",
      subtitle: "Direct Protocol Access",
      coverage: "30%",
      accuracy: "100%",
      latency: "<10ms",
      color: "blue",
      icon: "terminal",
      description: "For apps that support CLI/API (Git, Docker, databases), we bypass the UI entirely.",
      examples: ["Terminal Commands", "REST APIs", "Database Queries", "Git Operations"],
      visual: "cli"
    },
    {
      id: 1,
      name: "Layer 2: Accessibility Tree",
      subtitle: "System-level Semantic Access",
      coverage: "60%",
      accuracy: "100%",
      latency: "<50ms",
      color: "green",
      icon: "layers",
      description: "macOS AX API / Windows UIA / Browser DOM. We read the UI as structured data.",
      examples: ["Native Apps", "Web Browsers", "System Dialogs", "Form Inputs"],
      visual: "tree"
    },
    {
      id: 2,
      name: "Layer 3: Vision Fallback",
      subtitle: "Computer Use (Last Resort)",
      coverage: "10%",
      accuracy: "~85%",
      latency: "2-5s",
      color: "yellow",
      icon: "eye",
      description: "Only for edge cases: games, canvas apps, custom rendered UI.",
      examples: ["Game Interfaces", "Canvas Editors", "Legacy Software", "Custom Controls"],
      visual: "vision"
    }
  ];

  const colorClasses = {
    blue: { bg: 'bg-blue-500', text: 'text-blue-400', border: 'border-blue-500', glow: 'shadow-[0_0_30px_rgba(59,130,246,0.3)]' },
    green: { bg: 'bg-green-500', text: 'text-green-400', border: 'border-green-500', glow: 'shadow-[0_0_30px_rgba(34,197,94,0.3)]' },
    yellow: { bg: 'bg-yellow-500', text: 'text-yellow-400', border: 'border-yellow-500', glow: 'shadow-[0_0_30px_rgba(234,179,8,0.3)]' }
  };

  const current = layers[activeLayer];
  const colors = colorClasses[current.color];

  return (
    <div className="w-full h-full flex flex-col relative overflow-y-auto md:overflow-hidden px-4 md:px-8">
      {/* Particle Background */}
      <ParticleBackground opacity={0.35} particleCount={900} colorScheme="blue-green" />

      {/* Header */}
      <SlideHeader chapter={2} titleEn="Interface Comparison" titleZh="界面对比" badge="PRODUCT" />

      {/* Background */}
      <div className="absolute inset-0 z-[1]">
        <div className="absolute inset-0 bg-black/50" />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:40px_40px]" />
      </div>

      {/* Main Content */}
      <div className="flex-1 flex justify-center px-4 z-10 overflow-hidden">
        <div className="w-full max-w-5xl flex flex-col md:flex-row gap-4 md:gap-6">
          {/* LEFT: Layer Stack Visualization */}
          <div className="flex-1 flex flex-col justify-center max-w-md">
            <div className="relative">
              {/* Stack Layers */}
              {layers.map((layer, i) => {
                const layerColors = colorClasses[layer.color];
                const isActive = activeLayer === i;

                return (
                  <motion.div
                    key={layer.id}
                    onClick={() => setActiveLayer(i)}
                    className="relative cursor-pointer transition-all duration-300 mb-2 md:mb-3"
                    animate={{
                      x: isActive ? 16 : 0,
                      scale: isActive ? 1.02 : 1
                    }}
                  >
                    <div className={`p-3 md:p-4 rounded-xl border-2 transition-all duration-300 ${isActive ? `${layerColors.border} ${layerColors.glow} bg-zinc-900` : 'border-zinc-800 bg-zinc-950'}`}>
                      <div className="flex items-center justify-between mb-2">
                        <div className="flex items-center gap-2 md:gap-3">
                          <div className={`w-8 h-8 md:w-10 md:h-10 rounded-lg flex items-center justify-center ${isActive ? layerColors.bg : 'bg-zinc-800'}`}>
                            <Icon name={layer.icon} size={16} className={isActive ? 'text-black' : 'text-zinc-500'} />
                          </div>
                          <div>
                            <div className={`text-sm md:text-base font-bold ${isActive ? 'text-white' : 'text-zinc-500'}`}>{layer.name}</div>
                            <div className={`text-xs ${isActive ? layerColors.text : 'text-zinc-600'}`}>{layer.subtitle}</div>
                          </div>
                        </div>
                        <div className={`text-xl md:text-2xl font-black ${isActive ? layerColors.text : 'text-zinc-700'}`}>{layer.coverage}</div>
                      </div>

                      {/* Progress bar showing coverage */}
                      <div className="h-1 md:h-1.5 bg-zinc-800 rounded-full overflow-hidden">
                        <motion.div
                          className={`h-full rounded-full ${layerColors.bg}`}
                          initial={{ width: 0 }}
                          animate={{ width: layer.coverage }}
                          transition={{ duration: 0.5 }}
                        />
                      </div>
                    </div>

                    {/* Active indicator */}
                    {isActive && (
                      <motion.div
                        layoutId="activeLayerIndicator"
                        className={`absolute left-0 top-1/2 -translate-y-1/2 -translate-x-2 w-1 h-10 md:h-12 rounded-full ${layerColors.bg}`}
                      />
                    )}
                  </motion.div>
                );
              })}
            </div>

            {/* Fallback Chain indicator */}
            <div className="flex items-center justify-center gap-2 mt-3 md:mt-4 text-zinc-600">
              <div className="h-px flex-1 bg-gradient-to-r from-transparent via-zinc-700 to-transparent" />
              <div className="flex items-center gap-1.5 px-3 py-1 bg-zinc-900/50 border border-zinc-800 rounded-full">
                <Icon name="chevronRight" size={12} className="rotate-90" />
                <span className="text-[10px] font-mono">Fallback Chain</span>
              </div>
              <div className="h-px flex-1 bg-gradient-to-r from-transparent via-zinc-700 to-transparent" />
            </div>

            {/* Key insight */}
            <div className="mt-4 md:mt-6 p-3 md:p-4 bg-zinc-900/50 border border-zinc-800 rounded-xl">
              <div className="flex items-start gap-3">
                <div className="p-2 bg-green-500/10 rounded-lg shrink-0">
                  <Icon name="zap" size={16} className="text-green-400" />
                </div>
                <div>
                  <div className="text-sm font-bold text-white mb-1">Semantic Wrapper</div>
                  <div className="text-xs text-zinc-400">
                    We turn every GUI app into an API. Developers don't modify any code.
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT: Layer Details */}
          <div className="flex-1 flex flex-col max-w-lg">
            <AnimatePresence mode="wait">
              <motion.div
                key={current.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                className="flex-1 flex flex-col"
              >
                {/* Visual Demo */}
                <div className={`flex-1 min-h-[200px] md:min-h-0 bg-zinc-900 border ${colors.border}/30 rounded-2xl overflow-hidden ${colors.glow}`}>
                  <div className="h-full p-3 md:p-4 flex flex-col">
                    {/* Layer Visual */}
                    <div className="flex-1 bg-black/50 rounded-xl relative overflow-hidden flex items-center justify-center min-h-[120px]">
                      {current.visual === 'cli' && <CLIVisual />}

                      {current.visual === 'tree' && (
                        <div className="relative w-full h-full flex items-center justify-center">
                          <div className="absolute inset-0 bg-[linear-gradient(rgba(34,197,94,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(34,197,94,0.03)_1px,transparent_1px)] bg-[size:16px_16px]" />

                          {/* Tree structure */}
                          <div className="flex flex-col items-center scale-90 md:scale-100">
                            <div className="px-3 py-1.5 bg-green-950 border border-green-500 rounded text-green-400 font-mono text-xs">AXApplication</div>
                            <div className="w-px h-4 bg-green-500/30" />
                            <div className="flex gap-4">
                              <div className="flex flex-col items-center">
                                <div className="px-2 py-1 bg-green-900/30 border border-green-500/30 rounded text-green-400/60 font-mono text-[10px]">AXWindow</div>
                                <div className="w-px h-3 bg-green-500/30" />
                                <div className="flex gap-2">
                                  <div className="px-2 py-1 bg-green-900/20 border border-green-500/20 rounded text-green-400/40 font-mono text-[10px]">AXMenu</div>
                                  <motion.div
                                    className="px-2 py-1 bg-green-500 text-black font-mono text-[10px] font-bold rounded"
                                    animate={{ scale: [1, 1.05, 1] }}
                                    transition={{ duration: 1.5, repeat: Infinity }}
                                  >
                                    AXButton
                                  </motion.div>
                                </div>
                              </div>
                            </div>
                          </div>

                          <motion.div
                            className="absolute bottom-4 right-4 text-green-400 text-xs"
                            animate={{ opacity: [0.5, 1, 0.5] }}
                            transition={{ duration: 1, repeat: Infinity }}
                          >
                            Semantic Access ⚡
                          </motion.div>
                        </div>
                      )}

                      {current.visual === 'vision' && (
                        <div className="relative w-full h-full">
                          <div className="absolute inset-4 bg-zinc-800 rounded-lg overflow-hidden">
                            {/* Blurry screenshot representation */}
                            <div className="w-full h-full bg-gradient-to-br from-zinc-700 to-zinc-900 flex items-center justify-center">
                              <motion.div
                                className="w-14 h-14 md:w-16 md:h-16 border-2 border-yellow-500 rounded-lg flex items-center justify-center"
                                animate={{
                                  x: [-20, 20, -10, 15, 0],
                                  y: [-10, 15, -15, 10, 0]
                                }}
                                transition={{ duration: 4, repeat: Infinity }}
                              >
                                <Icon name="scanEye" size={20} className="text-yellow-400" />
                              </motion.div>
                            </div>
                          </div>

                          <motion.div
                            className="absolute bottom-4 right-4 text-yellow-400 text-xs"
                            animate={{ opacity: [0.5, 1, 0.5] }}
                            transition={{ duration: 1, repeat: Infinity }}
                          >
                            Vision Fallback 🔍
                          </motion.div>
                        </div>
                      )}
                    </div>

                    {/* Description */}
                    <div className="mt-3 md:mt-4">
                      <p className={`text-xs md:text-sm ${colors.text} mb-2 md:mb-3`}>{current.description}</p>
                      <div className="flex flex-wrap gap-1.5 md:gap-2">
                        {current.examples.map((ex, i) => (
                          <span key={i} className="px-2 py-1 bg-zinc-800 rounded text-[9px] md:text-[10px] text-zinc-400 font-mono">{ex}</span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Stats */}
                <div className="grid grid-cols-3 gap-2 md:gap-3 mt-3 md:mt-4">
                  <div className={`p-2 md:p-3 rounded-xl border ${colors.border}/30 bg-zinc-900/50`}>
                    <div className="text-[9px] md:text-[10px] text-zinc-500 uppercase mb-1">Accuracy</div>
                    <div className={`text-lg md:text-xl font-black ${colors.text}`}>{current.accuracy}</div>
                  </div>
                  <div className={`p-2 md:p-3 rounded-xl border ${colors.border}/30 bg-zinc-900/50`}>
                    <div className="text-[9px] md:text-[10px] text-zinc-500 uppercase mb-1">Latency</div>
                    <div className={`text-lg md:text-xl font-black ${colors.text}`}>{current.latency}</div>
                  </div>
                  <div className={`p-2 md:p-3 rounded-xl border ${colors.border}/30 bg-zinc-900/50`}>
                    <div className="text-[9px] md:text-[10px] text-zinc-500 uppercase mb-1">Coverage</div>
                    <div className={`text-lg md:text-xl font-black ${colors.text}`}>{current.coverage}</div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>

      {/* Bottom: Total Coverage */}
      <div className="py-3 md:py-4 border-t border-zinc-900 mt-3 md:mt-4 z-10">
        <div className="flex flex-wrap items-center justify-center gap-4 md:gap-8 px-4">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded bg-blue-500" />
            <span className="text-xs text-zinc-400">CLI/API 30%</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded bg-green-500" />
            <span className="text-xs text-zinc-400">Accessibility 60%</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded bg-yellow-500" />
            <span className="text-xs text-zinc-400">Vision 10%</span>
          </div>
          <div className="text-sm text-white font-bold md:ml-4">= 100% Coverage</div>
        </div>
      </div>
    </div>
  );
};

export default Slide07_InterfaceComparison;
