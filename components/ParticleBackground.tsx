import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

interface ParticleBackgroundProps {
  opacity?: number;
  particleCount?: number;
  colorScheme?: 'purple-green' | 'blue' | 'green' | 'mono' | 'blue-green' | 'green-white';
}

interface ParticleData {
  velocity: {
    x: number;
    y: number;
    z: number;
  };
}

export const ParticleBackground: React.FC<ParticleBackgroundProps> = ({
  opacity = 0.4,
  particleCount = 1000,
  colorScheme = 'purple-green'
}) => {
  const canvasRef = useRef<HTMLDivElement>(null);

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

    const colorSchemes: Record<string, { core: { r: number; g: number; b: number }; edge: { r: number; g: number; b: number } }> = {
      'purple-green': {
        core: { r: 0.66, g: 0.33, b: 0.97 },
        edge: { r: 0.13, g: 0.77, b: 0.37 }
      },
      'blue': {
        core: { r: 0.2, g: 0.4, b: 0.9 },
        edge: { r: 0.4, g: 0.6, b: 1.0 }
      },
      'green': {
        core: { r: 0.1, g: 0.6, b: 0.4 },
        edge: { r: 0.13, g: 0.87, b: 0.51 }
      },
      'mono': {
        core: { r: 0.4, g: 0.4, b: 0.4 },
        edge: { r: 0.7, g: 0.7, b: 0.7 }
      },
      'blue-green': {
        core: { r: 0.23, g: 0.51, b: 0.96 },
        edge: { r: 0.13, g: 0.77, b: 0.37 }
      },
      'green-white': {
        core: { r: 0.13, g: 0.77, b: 0.37 },
        edge: { r: 0.9, g: 0.9, b: 0.9 }
      }
    };

    const colors = colorSchemes[colorScheme];

    const CONFIG = {
      particleCount,
      particleSize: 2,
      speed: 0.15,
      rotationSpeed: 0.0005,
      colorCore: colors.core,
      colorEdge: colors.edge
    };

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
      const particleColors: number[] = [];

      for (let i = 0; i < CONFIG.particleCount; i++) {
        const x = (Math.random() - 0.5) * 2000;
        const y = (Math.random() - 0.5) * 2000;
        const z = (Math.random() - 0.5) * 2000;
        positions.push(x, y, z);

        particlesData.push({
          velocity: {
            x: (Math.random() - 0.5) * CONFIG.speed,
            y: (Math.random() - 0.5) * CONFIG.speed,
            z: Math.random() * CONFIG.speed * 2 + 0.3
          }
        });
        particleColors.push(1, 1, 1);
      }

      geometry.setAttribute('position', new THREE.Float32BufferAttribute(positions, 3));
      geometry.setAttribute('color', new THREE.Float32BufferAttribute(particleColors, 3));

      const material = new THREE.PointsMaterial({
        size: CONFIG.particleSize,
        vertexColors: true,
        blending: THREE.AdditiveBlending,
        transparent: true,
        opacity: opacity,
        depthTest: false
      });

      particleSystem = new THREE.Points(geometry, material);
      scene.add(particleSystem);
    }

    function animate() {
      animationId = requestAnimationFrame(animate);

      if (!particleSystem) return;

      const positions = particleSystem.geometry.attributes.position.array as Float32Array;
      const particleColors = particleSystem.geometry.attributes.color.array as Float32Array;

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

        let depth = (z + 1500) / 2500;
        depth = Math.max(0, Math.min(1, depth));

        const r = CONFIG.colorCore.r + (CONFIG.colorEdge.r - CONFIG.colorCore.r) * depth;
        const g = CONFIG.colorCore.g + (CONFIG.colorEdge.g - CONFIG.colorCore.g) * depth;
        const b = CONFIG.colorCore.b + (CONFIG.colorEdge.b - CONFIG.colorCore.b) * depth;

        const fade = z > 600 ? 1 - ((z - 600) / 400) : 1;
        particleColors[i3] = r * fade;
        particleColors[i3 + 1] = g * fade;
        particleColors[i3 + 2] = b * fade;
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
  }, [opacity, particleCount, colorScheme]);

  return (
    <div
      ref={canvasRef}
      className="absolute inset-0 z-0"
      style={{ width: '100%', height: '100%' }}
    />
  );
};
