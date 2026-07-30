'use client';

import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

const links = [
  { label: 'Work', href: '#work' },
  { label: 'About', href: '#about' },
  { label: 'Contact', href: '#contact', isContact: true },
];

export function Navbar() {
  return (
    <motion.header
      initial={{ y: -24, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
      className="fixed inset-x-0 top-0 z-50"
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 md:px-10">
        <a
          href="#"
          className="group relative flex h-10 w-10 items-center justify-center"
          aria-label="Maya Rivera — Home"
        >
          <span className="absolute inset-0 rounded-xl bg-primary/10 ring-1 ring-primary/30 transition-colors duration-300 group-hover:bg-primary/20" />
          <span className="font-display text-lg font-semibold tracking-tight text-foreground">
            M<span className="text-primary">.</span>
          </span>
        </a>

        <div className="hidden items-center gap-1 md:flex">
          {links.map((link) =>
            link.isContact ? (
              <a
                key={link.label}
                href={link.href}
                className="group relative ml-2 inline-flex items-center rounded-full border border-border px-5 py-2 text-sm font-medium text-foreground/80 transition-colors hover:border-primary/60 hover:text-foreground"
              >
                {link.label}
              </a>
            ) : (
              <a
                key={link.label}
                href={link.href}
                className="group relative px-4 py-2 text-sm font-medium text-foreground/80 transition-colors hover:text-foreground"
              >
                {link.label}
                <span className="absolute left-1/2 top-[calc(100%-2px)] h-1.5 w-1.5 -translate-x-1/2 scale-0 rounded-full bg-primary transition-transform duration-200 group-hover:scale-100" />
              </a>
            )
          )}
        </div>

        <a
          href="#contact"
          className="ml-2 inline-flex items-center rounded-full border border-border px-5 py-2 text-sm font-medium text-foreground/80 transition-colors hover:border-primary/60 hover:text-foreground md:hidden"
        >
          Contact
        </a>
      </nav>
    </motion.header>
  );
}
