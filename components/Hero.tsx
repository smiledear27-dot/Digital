'use client';

import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { GlowBackground } from '@/components/GlowBackground';
import { MockupCarousel } from '@/components/MockupCarousel';
import { useCountUp } from '@/lib/use-count-up';

const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.12, delayChildren: 0.1 },
  },
};

const item = {
  hidden: { opacity: 0, y: 18 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] as const },
  },
};

function Stat({
  target,
  suffix,
  label,
}: {
  target: number;
  suffix: string;
  label: string;
}) {
  const { ref, display } = useCountUp(target, { suffix });
  return (
    <div className="flex flex-col">
      <span
        ref={ref}
        className="font-display text-2xl font-semibold tracking-tight text-foreground md:text-3xl"
      >
        {display}
      </span>
      <span className="mt-0.5 text-xs text-muted-foreground">{label}</span>
    </div>
  );
}

export function Hero() {
  return (
    <section className="relative min-h-screen w-full overflow-hidden bg-background">
      {/* Ambient background layers */}
      <GlowBackground />
      <div
        className="pointer-events-none absolute -left-40 top-1/4 h-[500px] w-[500px] rounded-full bg-primary/10 blur-[120px]"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute right-0 top-0 h-[400px] w-[400px] rounded-full bg-accent/5 blur-[100px]"
        aria-hidden
      />
      <div className="grain pointer-events-none absolute inset-0 z-0 opacity-[0.04]" aria-hidden />

      <div className="relative z-10 mx-auto flex min-h-screen max-w-7xl flex-col justify-center px-6 pt-28 pb-16 md:px-10 lg:flex-row lg:items-center lg:gap-12 lg:pt-20">
        {/* Left column */}
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="flex w-full flex-col lg:w-1/2 lg:max-w-xl"
        >
          {/* Availability tag */}
          <motion.div variants={item}>
            <span className="inline-flex items-center gap-2 rounded-full border border-border bg-card/50 py-1.5 pl-2 pr-3.5 text-sm text-foreground/80 backdrop-blur-sm">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-primary" />
              </span>
              Available for projects
            </span>
          </motion.div>

          {/* Heading */}
          <motion.h1
            variants={item}
            className="mt-6 font-display text-4xl font-semibold leading-[1.05] tracking-tight text-foreground text-balance sm:text-5xl md:text-6xl"
          >
            I craft websites that{' '}
            <span className="relative inline-block">
              <span className="wave-text font-semibold italic" style={{ backgroundImage: 'linear-gradient(90deg, #ff6b4a, #ffb24a, #5fb987, #ff6b4a)' }}>
                tell your story
              </span>
              <svg
                className="absolute -bottom-1 left-0 w-full"
                viewBox="0 0 300 12"
                fill="none"
                preserveAspectRatio="none"
                aria-hidden
              >
                <motion.path
                  d="M2 8 C 60 3, 120 3, 180 6 S 280 8, 298 4"
                  stroke="hsl(14 85% 61%)"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ delay: 0.8, duration: 1.1, ease: 'easeInOut' }}
                />
              </svg>
            </span>
          </motion.h1>

          {/* Subtext */}
          <motion.p
            variants={item}
            className="mt-6 max-w-md text-base leading-relaxed text-muted-foreground md:text-lg"
          >
            Every pixel matters. I build fast, responsive, and conversion-optimized websites for brands that want to stand out.
          </motion.p>

          {/* Stats row */}
          <motion.div
            variants={item}
            className="mt-10 flex items-center gap-8 border-l-2 border-primary/30 pl-5"
          >
            <Stat target={5} suffix="+" label="Years" />
            <div className="h-8 w-px bg-border" />
            <Stat target={120} suffix="" label="Projects" />
            <div className="h-8 w-px bg-border" />
            <Stat target={98} suffix="%" label="Satisfaction" />
          </motion.div>

          {/* CTA */}
          <motion.div variants={item} className="mt-10">
            <a
              href="#work"
              className="group relative inline-flex items-center gap-2 overflow-hidden rounded-full bg-primary px-7 py-3.5 text-sm font-semibold text-primary-foreground transition-transform duration-300 hover:scale-[1.02]"
            >
              <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
              <span className="relative">See My Work</span>
              <ArrowRight className="relative h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </a>
          </motion.div>
        </motion.div>

        {/* Right column */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="mt-14 w-full lg:mt-0 lg:w-1/2"
        >
          <div className="animate-float">
            <MockupCarousel />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
