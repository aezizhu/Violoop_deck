import React from 'react';
import { motion } from 'framer-motion';

interface VioloopDeviceProps {
  scale?: number;
}

export const VioloopDevice: React.FC<VioloopDeviceProps> = ({ scale = 1 }) => {
  return (
    <div
      className="relative"
      style={{
        perspective: '1000px',
        transform: `scale(${scale})`
      }}
    >
      {/* Device Container - Horizontal Wireframe */}
      <motion.div
        initial={{ opacity: 0, y: 30, rotateY: -10, rotateX: 5 }}
        animate={{ opacity: 1, y: 0, rotateY: -10, rotateX: 5 }}
        whileHover={{ rotateY: 0, rotateX: 0, scale: 1.02 }}
        transition={{ duration: 0.6 }}
        style={{
          width: '420px',
          height: '260px',
          background: 'rgba(255, 255, 255, 0.03)',
          border: '1px solid rgba(255, 255, 255, 0.2)',
          borderRadius: '20px',
          boxShadow: '0 20px 50px rgba(0, 0, 0, 0.5), inset 0 0 0 1px rgba(255, 255, 255, 0.05)',
          backdropFilter: 'blur(5px)'
        }}
        className="relative cursor-pointer"
      >
        {/* Screen Area */}
        <div
          className="absolute rounded-xl overflow-hidden flex justify-center items-center"
          style={{
            top: '15px',
            bottom: '15px',
            left: '15px',
            right: '50px',
            border: '1px solid rgba(255, 255, 255, 0.2)',
            background: 'rgba(0, 0, 0, 0.3)'
          }}
        >
          {/* Abstract Graph Content */}
          <div className="relative w-full h-full opacity-60">
            {/* Scan Line Animation */}
            <motion.div
              className="absolute left-0 w-full h-[2px] z-10"
              style={{
                background: 'linear-gradient(90deg, transparent, #00dc82, transparent)'
              }}
              animate={{
                top: ['0%', '100%'],
                opacity: [0, 0.8, 0.8, 0]
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: 'linear'
              }}
            />

            {/* Node 1 */}
            <motion.div
              className="absolute rounded-full"
              style={{
                width: '4px',
                height: '4px',
                background: '#fff',
                boxShadow: '0 0 5px #fff',
                top: '30%',
                left: '20%'
              }}
              animate={{
                scale: [1, 1.5, 1],
                opacity: [0.5, 1, 0.5]
              }}
              transition={{ duration: 2, repeat: Infinity }}
            />

            {/* Node 2 */}
            <motion.div
              className="absolute rounded-full"
              style={{
                width: '4px',
                height: '4px',
                background: '#fff',
                boxShadow: '0 0 5px #fff',
                top: '60%',
                left: '50%'
              }}
              animate={{
                scale: [1, 1.5, 1],
                opacity: [0.5, 1, 0.5]
              }}
              transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
            />

            {/* Node 3 */}
            <motion.div
              className="absolute rounded-full"
              style={{
                width: '4px',
                height: '4px',
                background: '#fff',
                boxShadow: '0 0 5px #fff',
                top: '40%',
                left: '80%'
              }}
              animate={{
                scale: [1, 1.5, 1],
                opacity: [0.5, 1, 0.5]
              }}
              transition={{ duration: 2, repeat: Infinity, delay: 1 }}
            />

            {/* Connector Line 1 */}
            <div
              className="absolute"
              style={{
                height: '1px',
                background: 'linear-gradient(90deg, rgba(255,255,255,0.1), rgba(255,255,255,0.4), rgba(255,255,255,0.1))',
                top: '31%',
                left: '21%',
                width: '33%',
                transform: 'rotate(25deg)',
                transformOrigin: 'left center'
              }}
            />

            {/* Connector Line 2 */}
            <div
              className="absolute"
              style={{
                height: '1px',
                background: 'linear-gradient(90deg, rgba(255,255,255,0.1), rgba(255,255,255,0.4), rgba(255,255,255,0.1))',
                top: '61%',
                left: '51%',
                width: '32%',
                transform: 'rotate(-20deg)',
                transformOrigin: 'left center'
              }}
            />
          </div>
        </div>

        {/* Side Knob Area */}
        <div className="absolute right-0 top-0 bottom-0 w-[50px] flex justify-center items-center">
          <motion.div
            className="rounded"
            style={{
              width: '8px',
              height: '60px',
              border: '1px solid #00dc82',
              background: 'rgba(0, 220, 130, 0.1)',
              boxShadow: '0 0 15px #00dc82',
              opacity: 0.8
            }}
            animate={{
              boxShadow: ['0 0 15px #00dc82', '0 0 25px #00dc82', '0 0 15px #00dc82']
            }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        </div>

        {/* Bottom Reflection Glow */}
        <motion.div
          className="absolute rounded-full"
          style={{
            bottom: '-20px',
            left: '10%',
            width: '80%',
            height: '20px',
            background: '#00dc82',
            filter: 'blur(30px)',
            transform: 'rotateX(90deg)'
          }}
          animate={{
            opacity: [0.15, 0.3, 0.15]
          }}
          transition={{ duration: 3, repeat: Infinity }}
        />
      </motion.div>
    </div>
  );
};
