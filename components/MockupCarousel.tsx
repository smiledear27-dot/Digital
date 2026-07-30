'use client';

import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { projects } from '@/components/mockups';

const INTERVAL = 3000;

export function MockupCarousel() {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(1);

  useEffect(() => {
    const id = setInterval(() => {
      setDirection(1);
      setIndex((i) => (i + 1) % projects.length);
    }, INTERVAL);
    return () => clearInterval(id);
  }, []);

  const goTo = (i: number) => {
    setDirection(i > index ? 1 : -1);
    setIndex(i);
  };

  const project = projects[index];

  const slideVariants = {
    enter: (dir: number) => ({
      x: dir > 0 ? '12%' : '-12%',
      opacity: 0,
      scale: 0.96,
      filter: 'blur(6px)',
    }),
    center: { x: 0, opacity: 1, scale: 1, filter: 'blur(0px)' },
    exit: (dir: number) => ({
      x: dir > 0 ? '-12%' : '12%',
      opacity: 0,
      scale: 0.96,
      filter: 'blur(6px)',
    }),
  };

  return (
    <div className="relative w-full">
      {/* Ambient glow */}
      <div
        className="absolute -inset-8 -z-10 rounded-[40px] opacity-40 blur-3xl transition-colors duration-700"
        style={{ background: `radial-gradient(circle at 50% 50%, ${project.accent}40, transparent 70%)` }}
      />

      <div className="relative overflow-hidden px-2">
        <AnimatePresence custom={direction} mode="wait" initial={false}>
          <motion.div
            key={index}
            custom={direction}
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{
              x: { type: 'spring', stiffness: 260, damping: 30 },
              opacity: { duration: 0.4 },
              scale: { duration: 0.5 },
              filter: { duration: 0.4 },
            }}
          >
            <project.Mockup />
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Label + progress dots */}
      <div className="mt-6 flex items-center justify-between px-2">
        <div className="flex items-center gap-2.5">
          <span
            className="h-2 w-2 rounded-full transition-colors duration-500"
            style={{ backgroundColor: project.accent }}
          />
          <div className="flex flex-col">
            <span className="text-sm font-semibold text-foreground">{project.name}</span>
            <span className="text-xs text-muted-foreground">{project.category}</span>
          </div>
        </div>

        <div className="flex items-center gap-1.5">
          {projects.map((p, i) => (
            <button
              key={p.name}
              onClick={() => goTo(i)}
              aria-label={`View ${p.name}`}
              className="group relative h-1.5 rounded-full bg-foreground/15 transition-all duration-300"
              style={{ width: i === index ? 24 : 6 }}
            >
              {i === index && (
                <motion.span
                  layoutId="active-dot"
                  className="absolute inset-0 rounded-full"
                  style={{ backgroundColor: project.accent }}
                  transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                />
              )}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
