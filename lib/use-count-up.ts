'use client';

import { useEffect, useRef, useState } from 'react';
import { useInView } from 'framer-motion';

export function useCountUp(
  target: number,
  { duration = 1800, suffix = '', startOnView = true }: { duration?: number; suffix?: string; startOnView?: boolean } = {}
) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: '-40px' });
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (startOnView && !inView) return;
    let raf = 0;
    const start = performance.now();
    const tick = (now: number) => {
      const progress = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setValue(target * eased);
      if (progress < 1) raf = requestAnimationFrame(tick);
      else setValue(target);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [inView, target, duration, startOnView]);

  const display =
    target % 1 === 0 ? Math.round(value).toString() : value.toFixed(1);

  return { ref, display: `${display}${suffix}` };
}
