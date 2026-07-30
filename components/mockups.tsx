import { cn } from '@/lib/utils';

export type Project = {
  name: string;
  category: string;
  accent: string;
  Mockup: () => JSX.Element;
};

export const projects: Project[] = [
  {
    name: 'Lumen Studio',
    category: 'Creative Agency',
    accent: '#ff6b4a',
    Mockup: LumenMockup,
  },
  {
    name: 'Verdant',
    category: 'Skincare Brand',
    accent: '#5fb987',
    Mockup: VerdantMockup,
  },
  {
    name: 'Northwind',
    category: 'Specialty Coffee',
    accent: '#d9a066',
    Mockup: NorthwindMockup,
  },
];

function LaptopFrame({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={cn('relative w-full', className)}>
      {/* Screen */}
      <div className="relative rounded-[14px] border border-white/10 bg-[#0a0a0b] p-2 shadow-[0_0_0_1px_rgba(255,255,255,0.04),0_30px_60px_-15px_rgba(0,0,0,0.8)]">
        {/* Browser chrome */}
        <div className="flex items-center gap-1.5 px-2 py-1.5">
          <span className="h-2 w-2 rounded-full bg-[#ff5f57]" />
          <span className="h-2 w-2 rounded-full bg-[#febc2e]" />
          <span className="h-2 w-2 rounded-full bg-[#28c840]" />
          <div className="ml-2 flex h-4 flex-1 items-center rounded-sm bg-white/5 px-2 text-[8px] text-white/30">
            lumen-studio.com
          </div>
        </div>
        {/* Screen content */}
        <div className="overflow-hidden rounded-[8px] bg-white" style={{ aspectRatio: '16 / 10' }}>
          {children}
        </div>
        {/* Camera notch */}
        <div className="absolute left-1/2 top-1.5 h-1 w-1 -translate-x-1/2 rounded-full bg-white/10" />
      </div>
      {/* Hinge */}
      <div className="mx-auto h-[6px] w-[103%] -translate-x-[1.5%] rounded-b-xl bg-gradient-to-b from-[#1c1c1f] to-[#101012]" />
      {/* Base */}
      <div className="mx-auto h-[10px] w-[86%] rounded-b-xl bg-gradient-to-b from-[#101012] to-[#060608]">
        <div className="mx-auto h-[3px] w-1/3 rounded-b-lg bg-black/60" />
      </div>
    </div>
  );
}

/* ---------- Mockup 1: Lumen Studio — Creative Agency ---------- */
function LumenMockup() {
  return (
    <LaptopFrame>
      <div className="flex h-full flex-col bg-[#0f0e0d] text-white">
        {/* Nav */}
        <div className="flex items-center justify-between px-5 py-2.5">
          <div className="flex items-center gap-1.5">
            <div className="h-3 w-3 rounded-full bg-[#ff6b4a]" />
            <span className="text-[9px] font-semibold tracking-tight">Lumen</span>
          </div>
          <div className="flex gap-2.5 text-[7px] text-white/50">
            <span>Work</span><span>Studio</span><span>Contact</span>
          </div>
        </div>
        {/* Hero */}
        <div className="relative flex flex-1 flex-col justify-center px-5">
          <div className="absolute right-4 top-2 h-16 w-16 rounded-full bg-gradient-to-br from-[#ff6b4a] to-[#ffb24a] opacity-80 blur-[2px]" />
          <div className="absolute right-12 top-10 h-8 w-8 rounded-full border border-white/20" />
          <div className="relative space-y-1.5">
            <div className="inline-block rounded-full bg-[#ff6b4a]/15 px-2 py-0.5 text-[6px] font-medium text-[#ff8a6a]">
              Design Studio · EST 2019
            </div>
            <h3 className="font-serif text-[15px] font-semibold leading-[1.05] tracking-tight">
              We craft<br />brands that<br />
              <span className="italic text-[#ff8a6a]">glow.</span>
            </h3>
            <div className="flex gap-1.5 pt-1">
              <div className="rounded-full bg-[#ff6b4a] px-2.5 py-1 text-[6px] font-semibold text-white">
                View Work →
              </div>
              <div className="rounded-full border border-white/20 px-2.5 py-1 text-[6px] text-white/70">
                Our Story
              </div>
            </div>
          </div>
        </div>
        {/* Logos row */}
        <div className="flex items-center justify-between border-t border-white/5 px-5 py-2 opacity-50">
          <span className="text-[6px] font-semibold tracking-widest">CLIENTS</span>
          {['FIGMA', 'ARC', 'NOVA', 'ZEN'].map((n) => (
            <span key={n} className="text-[6px] font-bold tracking-tight">{n}</span>
          ))}
        </div>
      </div>
    </LaptopFrame>
  );
}

/* ---------- Mockup 2: Verdant — Skincare Brand ---------- */
function VerdantMockup() {
  return (
    <LaptopFrame>
      <div className="flex h-full bg-[#f4f1ea] text-[#1a2e22]">
        {/* Left */}
        <div className="flex w-1/2 flex-col justify-between p-4">
          <div className="flex items-center gap-1.5">
            <div className="h-3 w-3 rounded-sm bg-[#3d7d5c]" />
            <span className="text-[9px] font-bold tracking-tight">Verdant</span>
            <span className="ml-auto text-[6px] text-[#3d7d5c]">SHOP · ABOUT · JOURNAL</span>
          </div>
          <div className="space-y-1.5">
            <div className="text-[6px] font-medium uppercase tracking-[0.15em] text-[#3d7d5c]">
              Clean · Botanical · Cold-pressed
            </div>
            <h3 className="font-serif text-[16px] font-medium leading-[1.05] tracking-tight">
              Skin care,<br />rooted in <em className="text-[#3d7d5c]">nature.</em>
            </h3>
            <div className="flex items-center gap-1.5 pt-0.5">
              <div className="rounded-full bg-[#3d7d5c] px-2.5 py-1 text-[6px] font-semibold text-white">
                Shop the ritual
              </div>
              <div className="flex items-center gap-0.5 text-[5px] text-[#1a2e22]/50">
                ★★★★★ <span>4.9</span>
              </div>
            </div>
          </div>
          <div className="flex gap-1.5">
            {['Serum', 'Cleanser', 'Oil'].map((p, i) => (
              <div key={p} className="flex flex-1 flex-col gap-0.5">
                <div className={`h-7 rounded-md ${i === 0 ? 'bg-[#3d7d5c]' : i === 1 ? 'bg-[#a8c9b5]' : 'bg-[#dde8df]'}`} />
                <span className="text-[5px] font-medium">{p}</span>
              </div>
            ))}
          </div>
        </div>
        {/* Right image panel */}
        <div className="relative w-1/2 overflow-hidden bg-gradient-to-br from-[#c9dccf] to-[#8fb3a0]">
          <div className="absolute inset-0 opacity-30" style={{ backgroundImage: 'radial-gradient(circle at 30% 40%, #3d7d5c 0%, transparent 50%)' }} />
          <div className="absolute left-3 top-4 h-20 w-16 rounded-xl bg-gradient-to-b from-[#e8d9c0] to-[#c9a86c] shadow-lg" />
          <div className="absolute left-6 top-7 h-14 w-9 rounded-lg bg-white/40 backdrop-blur-sm" />
          <div className="absolute left-7 top-9 text-[5px] font-bold tracking-wide text-[#3d7d5c]">
            VERDANT<br />N°2
          </div>
          <div className="absolute bottom-3 left-3 rounded-full bg-white/90 px-2 py-0.5 text-[5px] font-semibold text-[#1a2e22]">
            $48 — New
          </div>
        </div>
      </div>
    </LaptopFrame>
  );
}

/* ---------- Mockup 3: Northwind — Specialty Coffee ---------- */
function NorthwindMockup() {
  return (
    <LaptopFrame>
      <div className="flex h-full flex-col bg-[#1c130d] text-[#f0e6d8]">
        {/* Nav */}
        <div className="flex items-center justify-between border-b border-[#f0e6d8]/10 px-4 py-2">
          <div className="flex items-center gap-1">
            <div className="h-2.5 w-2.5 rounded-full border border-[#d9a066]" />
            <span className="font-serif text-[9px] font-semibold italic">Northwind</span>
          </div>
          <div className="flex gap-2 text-[6px] text-[#f0e6d8]/60">
            <span>Menu</span><span>Roasters</span><span>Visit</span>
          </div>
          <div className="rounded-full border border-[#d9a066]/40 px-2 py-0.5 text-[5px] text-[#d9a066]">Order</div>
        </div>
        {/* Body */}
        <div className="flex flex-1">
          <div className="flex w-3/5 flex-col justify-center gap-1.5 p-4">
            <div className="text-[5px] font-semibold uppercase tracking-[0.2em] text-[#d9a066]">
              Single Origin · Roasted Weekly
            </div>
            <h3 className="font-serif text-[14px] font-medium italic leading-[1.1]">
              Coffee with a<br />sense of <span className="not-italic text-[#d9a066]">place.</span>
            </h3>
            <div className="mt-1 flex items-center gap-2">
              <div className="rounded-md bg-[#d9a066] px-2.5 py-1 text-[6px] font-semibold text-[#1c130d]">
                Shop beans
              </div>
              <div className="text-[5px] text-[#f0e6d8]/50">Free shipping over $35</div>
            </div>
            <div className="mt-1.5 flex gap-1.5">
              {[
                { n: 'Ethiopia', s: 'Floral · Bright' },
                { n: 'Colombia', s: 'Cocoa · Smooth' },
                { n: 'Sumatra', s: 'Earthy · Bold' },
              ].map((b) => (
                <div key={b.n} className="flex-1 rounded-md border border-[#f0e6d8]/10 bg-[#f0e6d8]/5 p-1">
                  <div className="text-[5px] font-bold">{b.n}</div>
                  <div className="text-[4px] text-[#f0e6d8]/50">{b.s}</div>
                </div>
              ))}
            </div>
          </div>
          <div className="relative w-2/5 overflow-hidden bg-gradient-to-br from-[#3a2818] to-[#6b4a2f]">
            <div className="absolute right-3 top-3 h-16 w-16 rounded-full bg-[#d9a066]/30 blur-md" />
            <div className="absolute left-1/2 top-1/2 h-12 w-12 -translate-x-1/2 -translate-y-1/2 rounded-full border-2 border-[#d9a066]/60" />
            <div className="absolute left-1/2 top-1/2 h-7 w-7 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#d9a066]/80" />
            <div className="absolute bottom-2 left-2 right-2 rounded-md bg-black/30 px-2 py-1 backdrop-blur-sm">
              <div className="text-[5px] font-semibold text-[#d9a066]">Featured roast</div>
              <div className="text-[5px] text-[#f0e6d8]/70">Yirgacheffe · $22/lb</div>
            </div>
          </div>
        </div>
      </div>
    </LaptopFrame>
  );
}
