import React from 'react';
import { motion } from 'framer-motion';

interface SlideHeaderProps {
  chapter: number;
  titleEn: string;
  titleZh: string;
  badge?: string;
}

export const SlideHeader: React.FC<SlideHeaderProps> = ({ chapter, titleEn, titleZh, badge }) => {
  return (
    <motion.div
      className="w-full px-6 md:px-8 pt-4 md:pt-6 pb-3 z-20"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      {/* Chapter indicator */}
      <div className="flex items-center gap-2 mb-2">
        <span className="w-2 h-2 rounded-full bg-green-500" />
        <span className="text-zinc-500 text-xs font-mono uppercase tracking-wider">
          CHAPTER {chapter}
        </span>
      </div>

      {/* Title row */}
      <div className="flex items-center justify-between">
        <h1 className="text-2xl md:text-3xl font-black">
          <span className="text-white">{titleEn}</span>
          <span className="text-zinc-600 mx-3">/</span>
          <span className="text-green-400">{titleZh}</span>
        </h1>

        {badge && (
          <span className="px-3 py-1 bg-zinc-800 border border-zinc-700 rounded text-zinc-400 text-xs font-mono uppercase">
            {badge}
          </span>
        )}
      </div>

      {/* Divider line */}
      <div className="mt-3 h-px bg-gradient-to-r from-zinc-800 via-zinc-700 to-transparent" />
    </motion.div>
  );
};

export default SlideHeader;
