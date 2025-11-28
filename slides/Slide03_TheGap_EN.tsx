import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Icon } from '../components/Icon';
import { SlideHeader } from '../components/SlideHeader';

const Slide03_TheGap: React.FC = () => {
  const [flowState, setFlowState] = useState(85);
  const [isDisrupted, setIsDisrupted] = useState(false);
  const [recoveryTime, setRecoveryTime] = useState(0);

  // Flow disruption cycle
  useEffect(() => {
    const triggerDisruption = () => {
      setIsDisrupted(true);
      setFlowState(15);
      setRecoveryTime(23);

      // Count down recovery (faster: 100ms per tick)
      let time = 23;
      const countdown = setInterval(() => {
        time -= 1;
        setRecoveryTime(time);
        setFlowState(prev => Math.min(prev + 3, 85));
        if (time <= 0) {
          clearInterval(countdown);
          setIsDisrupted(false);
        }
      }, 100);
    };

    // Initial disruption happens quickly (1.2s) so viewer sees the effect fast
    const initialTimeout = setTimeout(triggerDisruption, 1200);

    // Then cycle every 4.5 seconds
    const disruptionCycle = setInterval(triggerDisruption, 4500);

    return () => {
      clearTimeout(initialTimeout);
      clearInterval(disruptionCycle);
    };
  }, []);

  const apps = [
    { icon: 'messageSquare', label: "Slack", angle: 0, color: "#60a5fa", gradient: "from-blue-500/20" },
    { icon: 'fileText', label: "Jira", angle: 72, color: "#818cf8", gradient: "from-indigo-500/20" },
    { icon: 'mail', label: "Gmail", angle: 144, color: "#f472b6", gradient: "from-pink-500/20" },
    { icon: 'database', label: "ERP", angle: 216, color: "#2dd4bf", gradient: "from-teal-500/20" },
    { icon: 'terminal', label: "IDE", angle: 288, color: "#a3e635", gradient: "from-lime-500/20" }
  ];

  const actions = [
    { icon: 'scissors', label: "Copy" },
    { icon: 'keyboard', label: "Paste" },
    { icon: 'monitor', label: "Switch" }
  ];

  return (
    <div className="w-full h-full flex flex-col relative overflow-hidden">
      {/* Header */}
      <SlideHeader chapter={1} titleEn="The Gap" titleZh="鸿沟" badge="PROBLEM" />

      {/* Futuristic Grid Background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-zinc-900/80 via-black to-black" />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(34,197,94,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(34,197,94,0.03)_1px,transparent_1px)] bg-[size:60px_60px]" />
        {/* Scanning line effect */}
        <motion.div
          className="absolute left-0 right-0 h-px bg-gradient-to-r from-transparent via-green-500/50 to-transparent"
          animate={{ top: ['0%', '100%'] }}
          transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
        />
      </div>

      <div className="flex-1 flex flex-col md:flex-row items-center justify-center relative z-10 gap-6 md:gap-0 px-4 md:px-8">
        {/* LEFT SIDE: Neural Network Visualization */}
        <div className="flex-1 flex items-center justify-center relative">
          {/* Central Hub - The Human */}
          <div className="relative scale-75 md:scale-100">
            {/* Flow State Aura - pulses based on state */}
            <motion.div
              className={`absolute -inset-8 rounded-full blur-2xl transition-colors duration-500 ${isDisrupted ? 'bg-red-500/30' : 'bg-green-500/20'}`}
              animate={{
                scale: isDisrupted ? [1, 1.1, 1] : [1, 1.05, 1],
                opacity: isDisrupted ? [0.3, 0.6, 0.3] : [0.2, 0.4, 0.2]
              }}
              transition={{ duration: isDisrupted ? 0.5 : 2, repeat: Infinity }}
            />

            {/* Connection Lines to Apps (Neural Pathways) */}
            <svg className="absolute -inset-32 w-[400px] h-[400px] -translate-x-1/2 -translate-y-1/2 left-1/2 top-1/2" style={{ overflow: 'visible' }}>
              {apps.map((app, i) => {
                const radius = 140;
                const x = Math.cos((app.angle - 90) * Math.PI / 180) * radius;
                const y = Math.sin((app.angle - 90) * Math.PI / 180) * radius;
                return (
                  <g key={i}>
                    {/* Neural pathway line */}
                    <motion.line
                      x1="200" y1="200"
                      x2={200 + x} y2={200 + y}
                      stroke={isDisrupted ? "#ef4444" : app.color}
                      strokeWidth="1"
                      opacity="0.3"
                      initial={{ pathLength: 0 }}
                      animate={{ pathLength: 1 }}
                      transition={{ duration: 1, delay: i * 0.1 }}
                    />
                    {/* Data packets traveling */}
                    <motion.circle
                      r="3"
                      fill={app.color}
                      filter="url(#glow)"
                      animate={{
                        cx: [200, 200 + x],
                        cy: [200, 200 + y],
                        opacity: [0, 1, 1, 0]
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        delay: i * 0.4,
                        ease: "easeInOut"
                      }}
                    />
                    {/* Return packet */}
                    <motion.circle
                      r="2"
                      fill="#fff"
                      animate={{
                        cx: [200 + x, 200],
                        cy: [200 + y, 200],
                        opacity: [0, 0.8, 0.8, 0]
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        delay: i * 0.4 + 1,
                        ease: "easeInOut"
                      }}
                    />
                  </g>
                );
              })}
              <defs>
                <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
                  <feGaussianBlur stdDeviation="2" result="coloredBlur"/>
                  <feMerge>
                    <feMergeNode in="coloredBlur"/>
                    <feMergeNode in="SourceGraphic"/>
                  </feMerge>
                </filter>
              </defs>
            </svg>

            {/* App Nodes */}
            {apps.map((app, i) => {
              const radius = 140;
              const x = Math.cos((app.angle - 90) * Math.PI / 180) * radius;
              const y = Math.sin((app.angle - 90) * Math.PI / 180) * radius;
              return (
                <motion.div
                  key={i}
                  className="absolute w-14 h-14"
                  style={{
                    left: '50%',
                    top: '50%',
                    x: x - 28,
                    y: y - 28
                  }}
                  initial={{ scale: 0, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ delay: 0.3 + i * 0.1, type: "spring" }}
                >
                  <div className={`w-full h-full bg-zinc-900/90 backdrop-blur border border-zinc-700 rounded-xl flex flex-col items-center justify-center hover:border-zinc-500 transition-all hover:scale-110 ${isDisrupted ? 'border-red-500/50' : ''}`}>
                    <Icon name={app.icon} size={20} style={{ color: app.color }} />
                  </div>
                  <span className="absolute -bottom-5 left-1/2 -translate-x-1/2 text-[10px] font-mono text-zinc-500 whitespace-nowrap">{app.label}</span>
                </motion.div>
              );
            })}

            {/* Central Human Node */}
            <motion.div
              className={`relative w-32 h-32 rounded-full flex flex-col items-center justify-center border-2 transition-colors duration-300 ${isDisrupted ? 'bg-zinc-950 border-red-500' : 'bg-zinc-950 border-green-500/50'}`}
              animate={isDisrupted ? { x: [-2, 2, -2] } : {}}
              transition={{ duration: 0.1, repeat: isDisrupted ? Infinity : 0 }}
            >
              {/* Rotating ring */}
              <motion.div
                className={`absolute inset-1 rounded-full border border-dashed transition-colors duration-300 ${isDisrupted ? 'border-red-500/50' : 'border-green-500/30'}`}
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              />

              <Icon name="user" size={36} className={`transition-colors duration-300 ${isDisrupted ? 'text-red-400' : 'text-zinc-300'}`} />
              <span className={`text-[10px] font-mono mt-1 transition-colors duration-300 ${isDisrupted ? 'text-red-400' : 'text-green-400'}`}>
                {isDisrupted ? 'DISRUPTED' : 'ROUTING'}
              </span>
            </motion.div>

            {/* Orbiting Action Icons */}
            {actions.map((action, i) => (
              <motion.div
                key={i}
                className="absolute w-8 h-8 bg-zinc-800 border border-zinc-600 rounded-lg flex items-center justify-center"
                style={{ left: '50%', top: '50%' }}
                animate={{
                  x: Math.cos((Date.now() / 1000 + i * 2.1) % (Math.PI * 2)) * 70 - 16,
                  y: Math.sin((Date.now() / 1000 + i * 2.1) % (Math.PI * 2)) * 70 - 16,
                  rotate: [0, 360]
                }}
                transition={{
                  x: { duration: 6, repeat: Infinity, ease: "linear" },
                  y: { duration: 6, repeat: Infinity, ease: "linear" },
                  rotate: { duration: 8, repeat: Infinity, ease: "linear" }
                }}
              >
                <Icon name={action.icon} size={14} className="text-zinc-400" />
              </motion.div>
            ))}
          </div>
        </div>

        {/* RIGHT SIDE: Flow State Monitor */}
        <div className="w-full md:w-80 flex flex-col gap-4 md:gap-6">
          {/* Human Framing Quote */}
          <div className="bg-zinc-900/50 border border-zinc-800 rounded-xl p-4">
            <p className="text-zinc-300 text-sm leading-relaxed italic">
              "We've become <span className="text-red-400 font-semibold">human middleware</span>—<br/>
              copy, paste, switch tabs,<br/>
              translating for our AI."
            </p>
          </div>

          {/* Flow State Meter */}
          <div className="bg-zinc-900/80 border border-zinc-800 rounded-xl p-4 md:p-5">
            <div className="flex justify-between items-center mb-3">
              <span className="text-xs font-mono text-zinc-500 uppercase tracking-wider">FLOW STATE</span>
              <span className={`text-xs font-mono font-bold ${isDisrupted ? 'text-red-400' : 'text-green-400'}`}>
                {flowState}%
              </span>
            </div>

            {/* Flow bar */}
            <div className="h-3 bg-zinc-800 rounded-full overflow-hidden mb-4">
              <motion.div
                className={`h-full rounded-full transition-colors duration-300 ${isDisrupted ? 'bg-red-500' : 'bg-gradient-to-r from-green-500 to-emerald-400'}`}
                animate={{ width: `${flowState}%` }}
                transition={{ duration: 0.3 }}
              />
            </div>

            {/* Recovery Timer */}
            <AnimatePresence>
              {isDisrupted && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  className="border-t border-zinc-800 pt-4 mt-2"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <motion.div
                        className="w-2 h-2 bg-red-500 rounded-full"
                        animate={{ opacity: [1, 0.3, 1] }}
                        transition={{ duration: 0.5, repeat: Infinity }}
                      />
                      <span className="text-xs text-red-400 font-mono">CONTEXT SWITCH</span>
                    </div>
                    <span className="text-2xl font-bold text-red-400 font-mono">{recoveryTime}min</span>
                  </div>
                  <p className="text-[10px] text-zinc-500 mt-2">Time needed to regain focus...</p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* The 23-Minute Stat */}
          <motion.div
            className={`bg-gradient-to-br ${isDisrupted ? 'from-red-950/50 to-zinc-900' : 'from-zinc-900 to-zinc-900'} border ${isDisrupted ? 'border-red-500/50' : 'border-zinc-800'} rounded-xl p-4 md:p-5 transition-all duration-300`}
          >
            <div className="flex items-start gap-4">
              <div className={`p-3 rounded-lg ${isDisrupted ? 'bg-red-500/20 text-red-400' : 'bg-zinc-800 text-zinc-400'}`}>
                <Icon name="activity" size={24} />
              </div>
              <div>
                <div className="text-2xl md:text-3xl font-black text-white mb-1">23 Minutes</div>
                <div className="text-xs text-zinc-400 leading-relaxed">
                  Average time to regain <span className="text-green-400">flow state</span> after each disruption
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Bottom Stats Bar */}
      <div className="grid grid-cols-3 gap-2 md:gap-4 mt-4 md:mt-6 border-t border-zinc-900 pt-4 md:pt-5">
        <div className="flex items-center gap-2 md:gap-3 px-2 md:px-4">
          <div className="w-8 h-8 md:w-10 md:h-10 bg-zinc-900 border border-zinc-800 rounded-lg flex items-center justify-center">
            <Icon name="monitor" size={16} className="text-zinc-400 md:hidden" />
            <Icon name="monitor" size={18} className="text-zinc-400 hidden md:block" />
          </div>
          <div>
            <div className="text-lg md:text-xl font-bold text-white">300+</div>
            <div className="text-[8px] md:text-[10px] text-zinc-500 uppercase font-mono">Daily Window Switches</div>
          </div>
        </div>
        <div className="flex items-center gap-2 md:gap-3 px-2 md:px-4 border-l border-zinc-800">
          <div className="w-8 h-8 md:w-10 md:h-10 bg-zinc-900 border border-zinc-800 rounded-lg flex items-center justify-center">
            <Icon name="xCircle" size={16} className="text-red-400 md:hidden" />
            <Icon name="xCircle" size={18} className="text-red-400 hidden md:block" />
          </div>
          <div>
            <div className="text-lg md:text-xl font-bold text-red-400">90%</div>
            <div className="text-[8px] md:text-[10px] text-zinc-500 uppercase font-mono">Agent Context Lost</div>
          </div>
        </div>
        <div className="flex items-center gap-2 md:gap-3 px-2 md:px-4 border-l border-zinc-800">
          <div className="w-8 h-8 md:w-10 md:h-10 bg-zinc-900 border border-zinc-800 rounded-lg flex items-center justify-center">
            <Icon name="zap" size={16} className="text-yellow-400 md:hidden" />
            <Icon name="zap" size={18} className="text-yellow-400 hidden md:block" />
          </div>
          <div>
            <div className="text-lg md:text-xl font-bold text-yellow-400">4.6 Hours</div>
            <div className="text-[8px] md:text-[10px] text-zinc-500 uppercase font-mono">Daily Flow Loss</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Slide03_TheGap;
