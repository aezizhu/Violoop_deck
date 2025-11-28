import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import * as THREE from 'three';
import { Icon } from '../components/Icon';
import { VioloopDevice } from '../components/VioloopDevice';

interface Slide00Props {
  onNext?: () => void;
}

interface ParticleData {
  velocity: {
    x: number;
    y: number;
    z: number;
  };
}

const Slide00_Cover: React.FC<Slide00Props> = ({ onNext }) => {
  const canvasRef = useRef<HTMLDivElement>(null);

  // Three.js Particle Animation
  useEffect(() => {
    if (!canvasRef.current) return;

    const container = canvasRef.current;
    let scene: THREE.Scene;
    let camera: THREE.PerspectiveCamera;
    let renderer: THREE.WebGLRenderer;
    let particleSystem: THREE.Points;
    const particlesData: ParticleData[] = [];
    let animationId: number;
    let isInitialized = false;

    const CONFIG = {
      particleCount: 2000,
      particleSize: 2.5,
      speed: 0.2,
      rotationSpeed: 0.0008,
      colorCore: { r: 0.66, g: 0.33, b: 0.97 }, // Purple
      colorEdge: { r: 0.13, g: 0.77, b: 0.37 }  // Green
    };

    // Delay initialization to ensure container has dimensions
    const initTimeout = setTimeout(() => {
      if (!isInitialized) {
        initThree();
      }
    }, 100);

    function initThree() {
      if (isInitialized) return;
      isInitialized = true;

      const width = container.clientWidth || window.innerWidth;
      const height = container.clientHeight || window.innerHeight;

      scene = new THREE.Scene();
      scene.fog = new THREE.FogExp2(0x000000, 0.0008);

      camera = new THREE.PerspectiveCamera(75, width / height, 1, 2000);
      camera.position.z = 1000;

      renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
      renderer.setSize(width, height);
      renderer.setClearColor(0x000000, 0);
      container.appendChild(renderer.domElement);

      createParticles();
      animate();
    }

    function createParticles() {
      const geometry = new THREE.BufferGeometry();
      const positions: number[] = [];
      const colors: number[] = [];

      for (let i = 0; i < CONFIG.particleCount; i++) {
        const x = (Math.random() - 0.5) * 2000;
        const y = (Math.random() - 0.5) * 2000;
        const z = (Math.random() - 0.5) * 2000;
        positions.push(x, y, z);

        particlesData.push({
          velocity: {
            x: (Math.random() - 0.5) * CONFIG.speed,
            y: (Math.random() - 0.5) * CONFIG.speed,
            z: Math.random() * CONFIG.speed * 2 + 0.5
          }
        });
        colors.push(1, 1, 1);
      }

      geometry.setAttribute('position', new THREE.Float32BufferAttribute(positions, 3));
      geometry.setAttribute('color', new THREE.Float32BufferAttribute(colors, 3));

      const material = new THREE.PointsMaterial({
        size: CONFIG.particleSize,
        vertexColors: true,
        blending: THREE.AdditiveBlending,
        transparent: true,
        opacity: 0.8,
        depthTest: false
      });

      particleSystem = new THREE.Points(geometry, material);
      scene.add(particleSystem);
    }

    function animate() {
      animationId = requestAnimationFrame(animate);

      if (!particleSystem) return;

      const positions = particleSystem.geometry.attributes.position.array as Float32Array;
      const colors = particleSystem.geometry.attributes.color.array as Float32Array;

      particleSystem.rotation.x += CONFIG.rotationSpeed * 0.3;
      particleSystem.rotation.y += CONFIG.rotationSpeed;

      for (let i = 0; i < CONFIG.particleCount; i++) {
        const i3 = i * 3;
        let z = positions[i3 + 2];

        z += particlesData[i].velocity.z;
        positions[i3] += particlesData[i].velocity.x;
        positions[i3 + 1] += particlesData[i].velocity.y;

        if (z > 1000 || z < -1500) {
          z = -1500 + Math.random() * 500;
          positions[i3] = (Math.random() - 0.5) * 200;
          positions[i3 + 1] = (Math.random() - 0.5) * 200;
        }
        positions[i3 + 2] = z;

        // Color gradient: purple (far) to green (near)
        let depth = (z + 1500) / 2500;
        depth = Math.max(0, Math.min(1, depth));

        const r = CONFIG.colorCore.r + (CONFIG.colorEdge.r - CONFIG.colorCore.r) * depth;
        const g = CONFIG.colorCore.g + (CONFIG.colorEdge.g - CONFIG.colorCore.g) * depth;
        const b = CONFIG.colorCore.b + (CONFIG.colorEdge.b - CONFIG.colorCore.b) * depth;

        const fade = z > 600 ? 1 - ((z - 600) / 400) : 1;
        colors[i3] = r * fade;
        colors[i3 + 1] = g * fade;
        colors[i3 + 2] = b * fade;
      }

      particleSystem.geometry.attributes.position.needsUpdate = true;
      particleSystem.geometry.attributes.color.needsUpdate = true;
      renderer.render(scene, camera);
    }

    const handleResize = () => {
      if (!camera || !renderer) return;
      const width = container.clientWidth || window.innerWidth;
      const height = container.clientHeight || window.innerHeight;
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
      renderer.setSize(width, height);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      clearTimeout(initTimeout);
      window.removeEventListener('resize', handleResize);
      if (animationId) cancelAnimationFrame(animationId);
      if (renderer && renderer.domElement && container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
        renderer.dispose();
      }
    };
  }, []);

  return (
    <div className="w-full h-full flex flex-col justify-center items-center relative overflow-hidden bg-black">
      {/* Three.js Particle Canvas */}
      <div ref={canvasRef} className="absolute inset-0 z-0" style={{ width: '100%', height: '100%', minHeight: '100vh' }} />

      {/* Radial gradient overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,rgba(0,0,0,0.3)_50%,rgba(0,0,0,0.7)_100%)] z-[1]" />

      {/* Subtle grid */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.015)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.015)_1px,transparent_1px)] bg-[size:60px_60px] z-[1]" />

      {/* Main Content */}
      <div className="relative z-10 text-center max-w-4xl px-8">
        {/* 3D Device */}
        <div className="mb-6 flex justify-center">
          <VioloopDevice scale={0.75} />
        </div>

        {/* Logo/Brand */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8, ease: "easeInOut" }}
          className="mb-6"
        >
          <h1 className="text-5xl md:text-8xl font-black tracking-tight">
            <span className="text-white">VIOLO</span>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-emerald-500">O</span>
            <span className="text-white">P</span>
          </h1>
        </motion.div>

        {/* Tagline */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.8, ease: "easeInOut" }}
        >
          <h2 className="text-xl md:text-3xl font-light text-zinc-300 mb-4 tracking-wide">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-zinc-200 to-green-400 font-medium">The Third Interface</span>
          </h2>
          <p className="text-zinc-500 text-sm md:text-lg tracking-widest uppercase font-light">
            Beyond Keyboard & Mouse — For the Age of Agents
          </p>
        </motion.div>

        {/* Interface evolution indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.8, ease: "easeInOut" }}
          className="mt-12 flex items-center justify-center gap-3 flex-wrap"
        >
          <div className="flex items-center gap-2 px-3 py-1.5 bg-zinc-900/50 border border-zinc-800 rounded-full">
            <span className="text-zinc-600 text-xs font-mono">1.0</span>
            <Icon name="terminal" size={12} className="text-zinc-600" />
          </div>
          <Icon name="arrowRight" size={14} className="text-zinc-700" />
          <div className="flex items-center gap-2 px-3 py-1.5 bg-zinc-900/50 border border-zinc-800 rounded-full">
            <span className="text-zinc-600 text-xs font-mono">2.0</span>
            <Icon name="mousePointer" size={12} className="text-zinc-600" />
          </div>
          <Icon name="arrowRight" size={14} className="text-zinc-700" />
          <div className="flex items-center gap-2 px-3 py-1.5 bg-green-950/50 border border-green-500/30 rounded-full">
            <span className="text-green-400 text-xs font-mono">3.0</span>
            <Icon name="brainCircuit" size={12} className="text-green-400" />
          </div>
        </motion.div>
      </div>

      {/* Bottom decoration */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.8, ease: "easeInOut" }}
        className="absolute bottom-8 left-0 right-0 flex justify-center z-10"
      >
        <div className="flex items-center gap-4 text-zinc-600 text-xs font-mono">
          <span>BVIO INC.</span>
          <span className="w-1 h-1 rounded-full bg-zinc-700" />
          <span>2025</span>
          <span className="w-1 h-1 rounded-full bg-zinc-700" />
          <span>CONFIDENTIAL</span>
        </div>
      </motion.div>

      {/* Start button */}
      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.8, duration: 0.8, ease: "easeInOut" }}
        onClick={onNext}
        className="absolute bottom-16 left-1/2 -translate-x-1/2 z-10 group cursor-pointer"
      >
        <div className="flex flex-col items-center gap-3">
          <span className="text-zinc-500 text-xs uppercase tracking-widest group-hover:text-zinc-300 transition-colors">
            Click or Press → to begin
          </span>
          <motion.div
            animate={{ x: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            className="flex items-center gap-2 px-6 py-3 bg-zinc-900/80 border border-zinc-700 rounded-full group-hover:border-green-500/50 group-hover:bg-zinc-800/80 transition-all"
          >
            <span className="text-zinc-400 text-sm font-medium group-hover:text-white transition-colors">Enter Deck</span>
            <Icon name="arrowRight" size={18} className="text-green-500" />
          </motion.div>
        </div>
      </motion.button>
    </div>
  );
};

export default Slide00_Cover;
