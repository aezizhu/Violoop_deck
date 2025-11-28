import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Icon } from '../components/Icon';
import { SlideHeader } from '../components/SlideHeader';

interface AgentTask {
  id: number;
  name: string;
  progress: number;
  status: 'running' | 'done' | 'pending';
}

const Slide05_IntroducingVioloop: React.FC = () => {
  const [activeFeature, setActiveFeature] = useState(0);
  const [agentTasks, setAgentTasks] = useState<AgentTask[]>([
    { id: 1, name: 'Searching docs...', progress: 0, status: 'running' },
    { id: 2, name: 'Analyzing code', progress: 100, status: 'done' },
    { id: 3, name: 'Generating fix', progress: 0, status: 'pending' }
  ]);
  const [showUndo, setShowUndo] = useState(false);

  // Simulate agent task progress
  useEffect(() => {
    const interval = setInterval(() => {
      setAgentTasks(prev => prev.map(task => {
        if (task.status === 'running' && task.progress < 100) {
          const newProgress = Math.min(task.progress + Math.random() * 15, 100);
          return {
            ...task,
            progress: newProgress,
            status: newProgress >= 100 ? 'done' : 'running'
          };
        }
        if (task.status === 'pending' && prev.find(t => t.id === task.id - 1)?.status === 'done') {
          return { ...task, status: 'running' };
        }
        return task;
      }));
    }, 300);
    return () => clearInterval(interval);
  }, []);

  // Cycle through features
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveFeature(prev => (prev + 1) % 4);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  // Simulate undo action periodically
  useEffect(() => {
    const undoInterval = setInterval(() => {
      setShowUndo(true);
      setTimeout(() => {
        setShowUndo(false);
        // Reset tasks
        setAgentTasks([
          { id: 1, name: 'Searching docs...', progress: 0, status: 'running' },
          { id: 2, name: 'Analyzing code', progress: 100, status: 'done' },
          { id: 3, name: 'Generating fix', progress: 0, status: 'pending' }
        ]);
      }, 1500);
    }, 10000);
    return () => clearInterval(undoInterval);
  }, []);

  const features = [
    { id: 0, label: "Voice Input", sub: "Natural language commands", icon: "mic", color: "green" },
    { id: 1, label: "Vision Layer", sub: "Screen understanding via accessibility tree", icon: "eye", color: "blue" },
    { id: 2, label: "HID Output", sub: "Keyboard & mouse control signals", icon: "keyboard", color: "purple" },
    { id: 3, label: "Hardware Control", sub: "Physical stop, undo, and state monitoring", icon: "shield", color: "red" },
  ];

  const colorClasses: Record<string, { bg: string; text: string; border: string; glow: string }> = {
    green: { bg: 'bg-green-500', text: 'text-green-400', border: 'border-green-500', glow: 'shadow-[0_0_20px_rgba(34,197,94,0.3)]' },
    blue: { bg: 'bg-blue-500', text: 'text-blue-400', border: 'border-blue-500', glow: 'shadow-[0_0_20px_rgba(59,130,246,0.3)]' },
    purple: { bg: 'bg-purple-500', text: 'text-purple-400', border: 'border-purple-500', glow: 'shadow-[0_0_20px_rgba(168,85,247,0.3)]' },
    red: { bg: 'bg-red-500', text: 'text-red-400', border: 'border-red-500', glow: 'shadow-[0_0_20px_rgba(239,68,68,0.3)]' }
  };

  return (
    <div className="w-full h-full flex flex-col relative overflow-hidden">
      {/* Header */}
      <SlideHeader chapter={2} titleEn="Introducing Violoop" titleZh="介绍Violoop" badge="SOLUTION" />

      {/* Background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-zinc-900/50 via-black to-black" />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(34,197,94,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(34,197,94,0.02)_1px,transparent_1px)] bg-[size:50px_50px]" />
      </div>

      <div className="flex-1 flex flex-col-reverse md:flex-row gap-4 md:gap-8 items-center relative z-10 py-4 md:py-0 overflow-y-auto px-4 md:px-8">
        {/* LEFT: Device with Dynamic Display - Hidden on mobile, show feature list instead */}
        <div className="hidden md:flex flex-1 items-center justify-center">
          <div className="relative scale-100">
            {/* Ambient glow */}
            <motion.div
              className="absolute -inset-12 bg-green-500/10 rounded-full blur-3xl"
              animate={{ scale: [1, 1.1, 1], opacity: [0.3, 0.5, 0.3] }}
              transition={{ duration: 4, repeat: Infinity }}
            />

            {/* Device Frame */}
            <div className="relative w-72 md:w-80 h-[420px] md:h-[480px] bg-zinc-950 rounded-[40px] border-2 border-zinc-800 shadow-2xl flex flex-col overflow-hidden">
              {/* Top Section - Mic Array & Camera */}
              <div className="flex items-center justify-center gap-3 py-4 border-b border-zinc-900">
                <div className="flex gap-1.5">
                  {[...Array(5)].map((_, i) => (
                    <motion.div
                      key={i}
                      className={`w-1.5 h-1.5 rounded-full ${activeFeature === 0 ? 'bg-green-500' : 'bg-zinc-700'}`}
                      animate={activeFeature === 0 ? { scale: [1, 1.3, 1], opacity: [0.5, 1, 0.5] } : {}}
                      transition={{ duration: 0.5, repeat: Infinity, delay: i * 0.1 }}
                    />
                  ))}
                </div>
                <div className={`w-3 h-3 rounded-full ${activeFeature === 1 ? 'bg-blue-500' : 'bg-zinc-800'} transition-colors`} />
              </div>

              {/* Main Screen - Dynamic Island Style */}
              <div className="flex-1 p-4 flex flex-col">
                {/* Dynamic Island - Agent Status - Chinese */}
                <motion.div
                  className={`mx-auto mb-4 rounded-full bg-black border transition-all duration-500 ${showUndo ? 'border-red-500 w-48' : 'border-zinc-800 w-40'}`}
                  animate={{ width: showUndo ? 200 : 160 }}
                >
                  <div className="px-4 py-2 flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      {showUndo ? (
                        <>
                          <motion.div
                            initial={{ rotate: 0 }}
                            animate={{ rotate: -360 }}
                            transition={{ duration: 0.5 }}
                          >
                            <Icon name="chevronLeft" size={14} className="text-red-400" />
                          </motion.div>
                          <span className="text-red-400 text-xs font-mono">UNDO</span>
                        </>
                      ) : (
                        <>
                          <motion.div
                            className="w-2 h-2 bg-green-500 rounded-full"
                            animate={{ scale: [1, 1.2, 1] }}
                            transition={{ duration: 1, repeat: Infinity }}
                          />
                          <span className="text-green-400 text-xs font-mono">AGENT LIVE</span>
                        </>
                      )}
                    </div>
                    <span className="text-zinc-600 text-[10px]">
                      {showUndo ? 'Reverting...' : '3 tasks'}
                    </span>
                  </div>
                </motion.div>

                {/* Task List with Progress Bars */}
                <div className="flex-1 bg-zinc-900/50 rounded-2xl border border-zinc-800 p-4 space-y-3">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-[10px] font-mono text-zinc-500 uppercase tracking-wider">RUNTIME MONITOR</span>
                    <span className="text-[10px] font-mono text-green-400">Live</span>
                  </div>

                  {agentTasks.map((task, i) => (
                    <motion.div
                      key={task.id}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.1 }}
                      className={`p-3 rounded-xl border transition-all ${
                        task.status === 'running' ? 'bg-green-950/30 border-green-500/30' :
                        task.status === 'done' ? 'bg-zinc-900 border-zinc-800' :
                        'bg-zinc-950 border-zinc-900 opacity-50'
                      }`}
                    >
                      <div className="flex items-center justify-between mb-2">
                        <div className="flex items-center gap-2">
                          {task.status === 'running' && (
                            <motion.div
                              className="w-2 h-2 bg-green-500 rounded-full"
                              animate={{ opacity: [1, 0.3, 1] }}
                              transition={{ duration: 0.5, repeat: Infinity }}
                            />
                          )}
                          {task.status === 'done' && <Icon name="checkCircle" size={12} className="text-green-500" />}
                          {task.status === 'pending' && <div className="w-2 h-2 bg-zinc-600 rounded-full" />}
                          <span className={`text-xs ${task.status === 'running' ? 'text-white' : 'text-zinc-500'}`}>
                            {task.name}
                          </span>
                        </div>
                        <span className="text-[10px] font-mono text-zinc-600">
                          {task.status === 'done' ? '✓' : task.status === 'pending' ? '—' : `${Math.round(task.progress)}%`}
                        </span>
                      </div>
                      {/* iOS-style progress bar */}
                      <div className="h-1 bg-zinc-800 rounded-full overflow-hidden">
                        <motion.div
                          className={`h-full rounded-full ${task.status === 'done' ? 'bg-green-500' : task.status === 'running' ? 'bg-green-400' : 'bg-zinc-700'}`}
                          initial={{ width: 0 }}
                          animate={{ width: `${task.progress}%` }}
                          transition={{ duration: 0.3 }}
                        />
                      </div>
                    </motion.div>
                  ))}
                </div>

                {/* Hardware Control Buttons */}
                <div className={`mt-4 flex gap-3 transition-all duration-300 ${activeFeature === 3 ? 'opacity-100' : 'opacity-60'}`}>
                  <motion.button
                    className="flex-1 py-3 bg-red-950/50 border border-red-500/30 rounded-xl flex items-center justify-center gap-2 hover:bg-red-900/50 transition-colors"
                    whileTap={{ scale: 0.95 }}
                    animate={activeFeature === 3 ? { borderColor: ['rgba(239,68,68,0.3)', 'rgba(239,68,68,0.8)', 'rgba(239,68,68,0.3)'] } : {}}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    <Icon name="xCircle" size={16} className="text-red-400" />
                    <span className="text-red-400 text-xs font-bold">STOP</span>
                  </motion.button>
                  <motion.button
                    className="flex-1 py-3 bg-yellow-950/50 border border-yellow-500/30 rounded-xl flex items-center justify-center gap-2 hover:bg-yellow-900/50 transition-colors"
                    whileTap={{ scale: 0.95 }}
                    animate={showUndo ? { scale: [1, 0.95, 1] } : {}}
                  >
                    <Icon name="chevronLeft" size={16} className="text-yellow-400" />
                    <span className="text-yellow-400 text-xs font-bold">UNDO</span>
                  </motion.button>
                </div>
              </div>

              {/* Bottom - Status Bar */}
              <div className="px-6 py-3 border-t border-zinc-900 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="w-1 h-1 bg-green-500 rounded-full" />
                  <span className="text-[10px] text-zinc-500 font-mono">Connected to Desktop</span>
                </div>
                <span className="text-[10px] text-zinc-600 font-mono">v1.0</span>
              </div>
            </div>
          </div>
        </div>

        {/* RIGHT: Feature Breakdown */}
        <div className="w-full md:w-[420px] flex flex-col justify-center">
          {/* Mobile-only fuller device preview */}
          <div className="md:hidden mb-4 mx-auto">
            <div className="relative">
              {/* Ambient glow */}
              <motion.div
                className="absolute -inset-6 bg-green-500/10 rounded-full blur-2xl"
                animate={{ scale: [1, 1.1, 1], opacity: [0.3, 0.5, 0.3] }}
                transition={{ duration: 4, repeat: Infinity }}
              />

              {/* Device Frame */}
              <div className="relative w-56 h-[320px] bg-zinc-950 rounded-[28px] border-2 border-zinc-800 shadow-2xl flex flex-col overflow-hidden">
                {/* Top Section - Mic Array & Camera */}
                <div className="flex items-center justify-center gap-2 py-2 border-b border-zinc-900">
                  <div className="flex gap-1">
                    {[...Array(5)].map((_, i) => (
                      <motion.div
                        key={i}
                        className={`w-1 h-1 rounded-full ${activeFeature === 0 ? 'bg-green-500' : 'bg-zinc-700'}`}
                        animate={activeFeature === 0 ? { scale: [1, 1.3, 1], opacity: [0.5, 1, 0.5] } : {}}
                        transition={{ duration: 0.5, repeat: Infinity, delay: i * 0.1 }}
                      />
                    ))}
                  </div>
                  <div className={`w-2 h-2 rounded-full ${activeFeature === 1 ? 'bg-blue-500' : 'bg-zinc-800'} transition-colors`} />
                </div>

                {/* Main Screen */}
                <div className="flex-1 p-3 flex flex-col">
                  {/* Dynamic Island - Agent Status */}
                  <motion.div
                    className={`mx-auto mb-3 rounded-full bg-black border transition-all duration-500 ${showUndo ? 'border-red-500' : 'border-zinc-800'}`}
                    animate={{ width: showUndo ? 160 : 130 }}
                  >
                    <div className="px-3 py-1.5 flex items-center justify-between">
                      <div className="flex items-center gap-1.5">
                        {showUndo ? (
                          <>
                            <motion.div
                              initial={{ rotate: 0 }}
                              animate={{ rotate: -360 }}
                              transition={{ duration: 0.5 }}
                            >
                              <Icon name="chevronLeft" size={10} className="text-red-400" />
                            </motion.div>
                            <span className="text-red-400 text-[9px] font-mono">UNDO</span>
                          </>
                        ) : (
                          <>
                            <motion.div
                              className="w-1.5 h-1.5 bg-green-500 rounded-full"
                              animate={{ scale: [1, 1.2, 1] }}
                              transition={{ duration: 1, repeat: Infinity }}
                            />
                            <span className="text-green-400 text-[9px] font-mono">AGENT LIVE</span>
                          </>
                        )}
                      </div>
                      <span className="text-zinc-600 text-[8px]">
                        {showUndo ? 'Reverting' : '3 tasks'}
                      </span>
                    </div>
                  </motion.div>

                  {/* Task List with Progress Bars */}
                  <div className="flex-1 bg-zinc-900/50 rounded-xl border border-zinc-800 p-2 space-y-2">
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-[8px] font-mono text-zinc-500 uppercase tracking-wider">RUNTIME MONITOR</span>
                      <span className="text-[8px] font-mono text-green-400">Live</span>
                    </div>

                    {agentTasks.map((task, i) => (
                      <motion.div
                        key={task.id}
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: i * 0.1 }}
                        className={`p-2 rounded-lg border transition-all ${
                          task.status === 'running' ? 'bg-green-950/30 border-green-500/30' :
                          task.status === 'done' ? 'bg-zinc-900 border-zinc-800' :
                          'bg-zinc-950 border-zinc-900 opacity-50'
                        }`}
                      >
                        <div className="flex items-center justify-between mb-1">
                          <div className="flex items-center gap-1.5">
                            {task.status === 'running' && (
                              <motion.div
                                className="w-1.5 h-1.5 bg-green-500 rounded-full"
                                animate={{ opacity: [1, 0.3, 1] }}
                                transition={{ duration: 0.5, repeat: Infinity }}
                              />
                            )}
                            {task.status === 'done' && <Icon name="checkCircle" size={10} className="text-green-500" />}
                            {task.status === 'pending' && <div className="w-1.5 h-1.5 bg-zinc-600 rounded-full" />}
                            <span className={`text-[9px] ${task.status === 'running' ? 'text-white' : 'text-zinc-500'}`}>
                              {task.name}
                            </span>
                          </div>
                          <span className="text-[8px] font-mono text-zinc-600">
                            {task.status === 'done' ? '✓' : task.status === 'pending' ? '—' : `${Math.round(task.progress)}%`}
                          </span>
                        </div>
                        {/* Progress bar */}
                        <div className="h-0.5 bg-zinc-800 rounded-full overflow-hidden">
                          <motion.div
                            className={`h-full rounded-full ${task.status === 'done' ? 'bg-green-500' : task.status === 'running' ? 'bg-green-400' : 'bg-zinc-700'}`}
                            initial={{ width: 0 }}
                            animate={{ width: `${task.progress}%` }}
                            transition={{ duration: 0.3 }}
                          />
                        </div>
                      </motion.div>
                    ))}
                  </div>

                  {/* Hardware Control Buttons */}
                  <div className={`mt-2 flex gap-2 transition-all duration-300 ${activeFeature === 3 ? 'opacity-100' : 'opacity-60'}`}>
                    <motion.button
                      className="flex-1 py-2 bg-red-950/50 border border-red-500/30 rounded-lg flex items-center justify-center gap-1.5"
                      whileTap={{ scale: 0.95 }}
                      animate={activeFeature === 3 ? { borderColor: ['rgba(239,68,68,0.3)', 'rgba(239,68,68,0.8)', 'rgba(239,68,68,0.3)'] } : {}}
                      transition={{ duration: 2, repeat: Infinity }}
                    >
                      <Icon name="xCircle" size={12} className="text-red-400" />
                      <span className="text-red-400 text-[9px] font-bold">STOP</span>
                    </motion.button>
                    <motion.button
                      className="flex-1 py-2 bg-yellow-950/50 border border-yellow-500/30 rounded-lg flex items-center justify-center gap-1.5"
                      whileTap={{ scale: 0.95 }}
                      animate={showUndo ? { scale: [1, 0.95, 1] } : {}}
                    >
                      <Icon name="chevronLeft" size={12} className="text-yellow-400" />
                      <span className="text-yellow-400 text-[9px] font-bold">UNDO</span>
                    </motion.button>
                  </div>
                </div>

                {/* Bottom - Status Bar */}
                <div className="px-4 py-2 border-t border-zinc-900 flex items-center justify-between">
                  <div className="flex items-center gap-1.5">
                    <div className="w-1 h-1 bg-green-500 rounded-full" />
                    <span className="text-[8px] text-zinc-500 font-mono">Connected to Desktop</span>
                  </div>
                  <span className="text-[8px] text-zinc-600 font-mono">v1.0</span>
                </div>
              </div>
            </div>
          </div>

          <h3 className="text-2xl md:text-3xl font-black text-white mb-2">Violoop Core</h3>
          <p className="text-zinc-500 text-sm mb-4 md:mb-8">The Hardware Control Plane for AI Agents</p>

          <div className="space-y-2 md:space-y-3">
            {features.map((f) => {
              const colors = colorClasses[f.color];
              const isActive = activeFeature === f.id;
              return (
                <motion.div
                  key={f.id}
                  onClick={() => setActiveFeature(f.id)}
                  className={`flex items-center gap-3 md:gap-4 p-2 md:p-4 rounded-xl border cursor-pointer transition-all duration-300 ${isActive ? `bg-zinc-900 ${colors.border}/50 ${colors.glow}` : 'bg-zinc-950 border-zinc-900 hover:border-zinc-800'}`}
                  animate={isActive ? { x: 4 } : { x: 0 }}
                >
                  <div className={`w-8 h-8 md:w-12 md:h-12 rounded-lg md:rounded-xl flex items-center justify-center transition-all shrink-0 ${isActive ? `${colors.bg}` : 'bg-zinc-900'}`}>
                    <Icon name={f.icon} size={16} className={`md:hidden ${isActive ? 'text-black' : 'text-zinc-600'}`} />
                    <Icon name={f.icon} size={20} className={`hidden md:block ${isActive ? 'text-black' : 'text-zinc-600'}`} />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className={`text-xs md:text-sm font-bold mb-0.5 ${isActive ? 'text-white' : 'text-zinc-500'}`}>{f.label}</div>
                    <div className={`text-[10px] md:text-xs truncate ${isActive ? colors.text : 'text-zinc-600'}`}>{f.sub}</div>
                  </div>
                  {isActive && (
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      className={`w-1.5 md:w-2 h-6 md:h-8 rounded-full shrink-0 ${colors.bg}`}
                    />
                  )}
                </motion.div>
              );
            })}
          </div>

          {/* Key Insight */}
          <div className="mt-3 md:mt-8 p-2 md:p-4 bg-zinc-900/50 border border-zinc-800 rounded-xl mb-2 md:mb-0">
            <div className="flex items-start gap-2 md:gap-3">
              <div className="p-1.5 md:p-2 bg-green-500/10 rounded-lg shrink-0">
                <Icon name="shield" size={14} className="text-green-400 md:hidden" />
                <Icon name="shield" size={16} className="text-green-400 hidden md:block" />
              </div>
              <div>
                <div className="text-xs md:text-sm font-bold text-white mb-0.5 md:mb-1">Physical Override</div>
                <div className="text-[10px] md:text-xs text-zinc-400 leading-relaxed">
                  Hardware buttons can't be hacked remotely. Stop any agent, anytime, or undo to last known state.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Tagline */}
      <div className="text-center py-2 md:py-5 border-t border-zinc-900 pb-14 md:pb-5 shrink-0">
        <p className="text-zinc-400 font-light text-[11px] md:text-lg">
          Give agents <span className="text-green-400 font-bold">eyes</span> and <span className="text-blue-400 font-bold">ears</span>. Keep <span className="text-red-400 font-bold">control</span> in your hands.
        </p>
      </div>
    </div>
  );
};

export default Slide05_IntroducingVioloop;
