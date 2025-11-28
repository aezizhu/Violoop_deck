import React, { useState, useEffect, useCallback, useRef } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Icon } from './components/Icon';
import { LoginPage } from './components/LoginPage';
import { ParticleBackground } from './components/ParticleBackground';

// Import English slides
import Slide00_Cover_EN from './slides/Slide00_Cover_EN';
import Slide01_TheShift_EN from './slides/Slide01_TheShift_EN';
import Slide02_TheParadox_EN from './slides/Slide02_TheParadox_EN';
import Slide03_TheGap_EN from './slides/Slide03_TheGap_EN';
import Slide04_HardwareFailure_EN from './slides/Slide04_HardwareFailure_EN';
import Slide05_IntroducingVioloop_EN from './slides/Slide05_IntroducingVioloop_EN';
import Slide06_ProductDeepDive_EN from './slides/Slide06_ProductDeepDive_EN';
import Slide07_InterfaceComparison_EN from './slides/Slide07_InterfaceComparison_EN';
import Slide08_OperatorMode_EN from './slides/Slide08_OperatorMode_EN';
import Slide09_BusinessModel_EN from './slides/Slide09_BusinessModel_EN';
import Slide10_Market_EN from './slides/Slide10_Market_EN';
import Slide11_Roadmap_EN from './slides/Slide11_Roadmap_EN';
import Slide12_TheAsk_EN from './slides/Slide12_TheAsk_EN';
import Slide13_Closing_EN from './slides/Slide13_Closing_EN';
import Slide14_Appendix_EN from './slides/Slide14_Appendix_EN';

// Import Chinese slides (aliased from local filenames)
import Slide00_Cover_CN from './slides/Slide00_Cover';
import Slide01_TheShift_CN from './slides/Slide01_TheShift';
import Slide02_TheParadox_CN from './slides/Slide02_TheParadox';
import Slide03_TheGap_CN from './slides/Slide03_TheGap';
import Slide04_HardwareFailure_CN from './slides/Slide04_HardwareFailure';
import Slide05_IntroducingVioloop_CN from './slides/Slide05_IntroducingVioloop';
import Slide06_ProductDeepDive_CN from './slides/Slide06_ProductDeepDive';
import Slide07_InterfaceComparison_CN from './slides/Slide07_InterfaceComparison';
import Slide08_OperatorMode_CN from './slides/Slide08_OperatorMode';
import Slide09_BusinessModel_CN from './slides/Slide09_BusinessModel';
import Slide10_Market_CN from './slides/Slide10_Market';
import Slide11_Roadmap_CN from './slides/Slide11_Roadmap';
import Slide12_TheAsk_CN from './slides/Slide12_TheAsk';
import Slide13_Closing_CN from './slides/Slide13_Closing';
import Slide14_Appendix_CN from './slides/Slide14_Appendix';

type Language = 'EN' | 'CN';

// Slide configuration
const slidesEN = [
  { component: Slide00_Cover_EN, title: 'Cover - The Third Interface' },
  { component: Slide01_TheShift_EN, title: 'Software Evolution' },
  { component: Slide02_TheParadox_EN, title: 'The Paradox' },
  { component: Slide03_TheGap_EN, title: 'The Gap' },
  { component: Slide04_HardwareFailure_EN, title: 'Hardware Failure' },
  { component: Slide05_IntroducingVioloop_EN, title: 'Introducing Violoop' },
  { component: Slide06_ProductDeepDive_EN, title: 'Product Deep Dive' },
  { component: Slide07_InterfaceComparison_EN, title: 'Interface Comparison' },
  { component: Slide08_OperatorMode_EN, title: 'Operator Mode' },
  { component: Slide09_BusinessModel_EN, title: 'Business Model' },
  { component: Slide10_Market_EN, title: 'Master Plan' },
  { component: Slide11_Roadmap_EN, title: 'Market & Roadmap' },
  { component: Slide12_TheAsk_EN, title: 'Team' },
  { component: Slide13_Closing_EN, title: 'Closing' },
  { component: Slide14_Appendix_EN, title: 'Appendix' },
];

const slidesCN = [
  { component: Slide00_Cover_CN, title: '封面 - 第三界面' },
  { component: Slide01_TheShift_CN, title: '软件演进' },
  { component: Slide02_TheParadox_CN, title: '悖论' },
  { component: Slide03_TheGap_CN, title: '鸿沟' },
  { component: Slide04_HardwareFailure_CN, title: '硬件失败' },
  { component: Slide05_IntroducingVioloop_CN, title: '介绍Violoop' },
  { component: Slide06_ProductDeepDive_CN, title: '产品深度' },
  { component: Slide07_InterfaceComparison_CN, title: '界面对比' },
  { component: Slide08_OperatorMode_CN, title: '操作模式' },
  { component: Slide09_BusinessModel_CN, title: '商业模式' },
  { component: Slide10_Market_CN, title: '总体规划' },
  { component: Slide11_Roadmap_CN, title: '市场与路线' },
  { component: Slide12_TheAsk_CN, title: '团队' },
  { component: Slide13_Closing_CN, title: '结语' },
  { component: Slide14_Appendix_CN, title: '附录' },
];

const App: React.FC = () => {
  const [language, setLanguage] = useState<Language>('EN');
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [direction, setDirection] = useState(0);
  const [showNav, setShowNav] = useState(true);
  const [navVisible, setNavVisible] = useState(true);
  const hideTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const slides = language === 'EN' ? slidesEN : slidesCN;

  // Auto-hide navigation after inactivity
  const resetHideTimer = useCallback(() => {
    setNavVisible(true);
    if (hideTimeoutRef.current) {
      clearTimeout(hideTimeoutRef.current);
    }
    hideTimeoutRef.current = setTimeout(() => {
      setNavVisible(false);
    }, 3000); // Hide after 3 seconds of inactivity
  }, []);

  // Show nav on mouse move or touch
  useEffect(() => {
    if (!isAuthenticated) return;

    const handleActivity = () => {
      resetHideTimer();
    };

    window.addEventListener('mousemove', handleActivity);
    window.addEventListener('touchstart', handleActivity);
    window.addEventListener('click', handleActivity);

    // Initial timer
    resetHideTimer();

    return () => {
      window.removeEventListener('mousemove', handleActivity);
      window.removeEventListener('touchstart', handleActivity);
      window.removeEventListener('click', handleActivity);
      if (hideTimeoutRef.current) {
        clearTimeout(hideTimeoutRef.current);
      }
    };
  }, [resetHideTimer, isAuthenticated]);

  const goToSlide = useCallback((index: number) => {
    if (index >= 0 && index < slides.length) {
      setDirection(index > currentSlide ? 1 : -1);
      setCurrentSlide(index);
      resetHideTimer();
    }
  }, [currentSlide, resetHideTimer, slides.length]);

  const nextSlide = useCallback(() => {
    if (currentSlide < slides.length - 1) {
      setDirection(1);
      setCurrentSlide(prev => prev + 1);
      resetHideTimer();
    }
  }, [currentSlide, resetHideTimer, slides.length]);

  const prevSlide = useCallback(() => {
    if (currentSlide > 0) {
      setDirection(-1);
      setCurrentSlide(prev => prev - 1);
      resetHideTimer();
    }
  }, [currentSlide, resetHideTimer]);

  // Keyboard navigation
  useEffect(() => {
    if (!isAuthenticated) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight' || e.key === ' ') {
        e.preventDefault();
        nextSlide();
      } else if (e.key === 'ArrowLeft') {
        e.preventDefault();
        prevSlide();
      } else if (e.key === 'Escape') {
        setShowNav(prev => !prev);
      }
      resetHideTimer();
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [nextSlide, prevSlide, resetHideTimer, isAuthenticated]);

  // Touch/swipe navigation for mobile
  useEffect(() => {
    if (!isAuthenticated) return;

    let touchStartX = 0;
    let touchEndX = 0;

    const handleTouchStart = (e: TouchEvent) => {
      touchStartX = e.touches[0].clientX;
    };

    const handleTouchEnd = (e: TouchEvent) => {
      touchEndX = e.changedTouches[0].clientX;
      const diff = touchStartX - touchEndX;
      if (Math.abs(diff) > 50) {
        if (diff > 0) {
          nextSlide();
        } else {
          prevSlide();
        }
      }
    };

    window.addEventListener('touchstart', handleTouchStart);
    window.addEventListener('touchend', handleTouchEnd);
    return () => {
      window.removeEventListener('touchstart', handleTouchStart);
      window.removeEventListener('touchend', handleTouchEnd);
    };
  }, [nextSlide, prevSlide, isAuthenticated]);



  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? '100%' : '-100%',
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      x: direction > 0 ? '-100%' : '100%',
      opacity: 0,
    }),
  };

  // Combined visibility: showNav (toggle) AND navVisible (auto-hide)
  const isNavVisible = showNav && navVisible;

  const toggleLanguage = () => {
    setLanguage(prev => prev === 'EN' ? 'CN' : 'EN');
    resetHideTimer();
  };

  if (!isAuthenticated) {
    return <LoginPage onLogin={() => setIsAuthenticated(true)} />;
  }

  const getSlideConfig = (index: number) => {
    switch (index) {
      case 0: return { colorScheme: 'purple-green', opacity: 0.4, particleCount: 1000 };
      case 1: return { colorScheme: 'purple-green', opacity: 0.4, particleCount: 1000 };
      case 4: return { colorScheme: 'purple-green', opacity: 0.35, particleCount: 800 };
      case 7: return { colorScheme: 'blue-green', opacity: 0.35, particleCount: 900 };
      case 9: return { colorScheme: 'purple-green', opacity: 0.35, particleCount: 900 };
      case 10: return { colorScheme: 'blue-green', opacity: 0.35, particleCount: 900 };
      case 12: return { colorScheme: 'purple-green', opacity: 0.3, particleCount: 800 };
      case 13: return { colorScheme: 'green-white', opacity: 0.7, particleCount: 1500 };
      default: return { colorScheme: null, opacity: 0, particleCount: 0 };
    }
  };

  const bgConfig = getSlideConfig(currentSlide);

  return (
    <div className="w-screen h-[100dvh] bg-black overflow-hidden relative font-sans">
      {/* Global Particle Background */}
      <ParticleBackground
        opacity={bgConfig.opacity}
        particleCount={bgConfig.particleCount}
        colorScheme={bgConfig.colorScheme as any}
      />

      {/* Slide Container */}
      {/* Slide Container */}
      <AnimatePresence mode="wait" custom={direction}>
        <motion.div
          key={`${language}-${currentSlide}`}
          custom={direction}
          variants={slideVariants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{
            x: { type: 'tween', ease: 'easeInOut', duration: 0.5 },
            opacity: { duration: 0.3 },
          }}
          className="absolute inset-0"
        >
          {React.createElement(slides[currentSlide].component as any, {
            onNext: currentSlide === 0 ? nextSlide : undefined
          })}
        </motion.div>
      </AnimatePresence>




      {/* Navigation Controls - with auto-hide */}
      <motion.div
        initial={{ opacity: 1 }}
        animate={{ opacity: isNavVisible ? 1 : 0 }}
        transition={{ duration: 0.3 }}
        className={`${isNavVisible ? 'pointer-events-auto' : 'pointer-events-none'}`}
      >
        {showNav && (
          <>
            {/* Top Progress Bar */}
            <div className="absolute top-0 left-0 right-0 h-1 bg-zinc-900 z-50">
              <motion.div
                className="h-full bg-gradient-to-r from-green-500 to-emerald-400"
                initial={{ width: 0 }}
                animate={{ width: `${((currentSlide + 1) / slides.length) * 100}%` }}
                transition={{ duration: 0.3 }}
              />
            </div>

            {/* Top Right Controls: Slide Counter + Language Switcher */}
            <div className="absolute top-2 right-2 md:top-4 md:right-4 z-50 flex items-center gap-2 md:gap-3 scale-90 md:scale-100 origin-top-right">
              {/* Language Switcher */}
              <button
                onClick={toggleLanguage}
                className="flex items-center gap-2 bg-zinc-900/80 backdrop-blur-sm border border-zinc-800 rounded-full px-3 py-1.5 hover:bg-zinc-800 transition-colors group"
              >
                <Icon name="globe" size={14} className="text-zinc-400 group-hover:text-green-400 transition-colors" />
                <span className={`text-sm font-mono font-bold ${language === 'EN' ? 'text-green-400' : 'text-zinc-500'}`}>EN</span>
                <span className="text-zinc-600 text-sm">/</span>
                <span className={`text-sm font-mono font-bold ${language === 'CN' ? 'text-green-400' : 'text-zinc-500'}`}>CN</span>
              </button>

              {/* Slide Counter */}
              <div className="flex items-center gap-2 bg-zinc-900/80 backdrop-blur-sm border border-zinc-800 rounded-full px-3 py-1.5">
                <span className="text-green-400 font-mono text-sm font-bold">{String(currentSlide + 1).padStart(2, '0')}</span>
                <span className="text-zinc-600 font-mono text-sm">/</span>
                <span className="text-zinc-400 font-mono text-sm">{String(slides.length).padStart(2, '0')}</span>
              </div>
            </div>

            {/* Navigation Arrows */}
            <button
              onClick={prevSlide}
              disabled={currentSlide === 0}
              className={`absolute left-2 md:left-4 top-1/2 -translate-y-1/2 z-50 w-10 h-10 md:w-12 md:h-12 rounded-full flex items-center justify-center transition-all ${currentSlide === 0
                ? 'bg-zinc-900/30 text-zinc-700 cursor-not-allowed'
                : 'bg-zinc-900/80 backdrop-blur-sm border border-zinc-800 text-white hover:bg-zinc-800 hover:border-green-500/50'
                }`}
            >
              <Icon name="chevronLeft" size={20} />
            </button>

            <button
              onClick={nextSlide}
              disabled={currentSlide === slides.length - 1}
              className={`absolute right-2 md:right-4 top-1/2 -translate-y-1/2 z-50 w-10 h-10 md:w-12 md:h-12 rounded-full flex items-center justify-center transition-all ${currentSlide === slides.length - 1
                ? 'bg-zinc-900/30 text-zinc-700 cursor-not-allowed'
                : 'bg-zinc-900/80 backdrop-blur-sm border border-zinc-800 text-white hover:bg-zinc-800 hover:border-green-500/50'
                }`}
            >
              <Icon name="chevronRight" size={20} />
            </button>

            {/* Bottom Slide Dots */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-50 flex items-center gap-1.5 bg-zinc-900/80 backdrop-blur-sm border border-zinc-800 rounded-full px-3 py-2">
              {slides.map((slide, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`transition-all ${index === currentSlide
                    ? 'w-6 h-2 bg-green-500 rounded-full'
                    : 'w-2 h-2 bg-zinc-600 rounded-full hover:bg-zinc-400'
                    }`}
                  title={slide.title}
                />
              ))}
            </div>
          </>
        )}
      </motion.div>

      {/* Keyboard Hints (desktop only) - also auto-hide */}
      <motion.div
        className="hidden md:block absolute bottom-4 right-4 z-50 text-zinc-600 text-xs font-mono"
        initial={{ opacity: 1 }}
        animate={{ opacity: isNavVisible ? 1 : 0 }}
        transition={{ duration: 0.3 }}
      >
        <span className="px-1.5 py-0.5 bg-zinc-900 rounded border border-zinc-800 mr-1">←</span>
        <span className="px-1.5 py-0.5 bg-zinc-900 rounded border border-zinc-800 mr-2">→</span>
        {language === 'EN' ? 'Navigate' : '导航'}
        <span className="ml-3 px-1.5 py-0.5 bg-zinc-900 rounded border border-zinc-800 mr-1">ESC</span>
        {language === 'EN' ? 'Toggle UI' : '切换UI'}
      </motion.div>
    </div>
  );
};

export default App;
