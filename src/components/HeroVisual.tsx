import React, { useEffect, useRef } from 'react';
import {
  motion,
  useMotionValue,
  useReducedMotion,
  useScroll,
  useSpring,
  useTransform } from
'framer-motion';
import { BellIcon, CheckIcon, MailOpenIcon, SendIcon, SparklesIcon, TrendingUpIcon } from 'lucide-react';

const particles = Array.from({ length: 14 }, (_, i) => ({
  left: 10 + i * 37 % 80,
  top: 10 + i * 53 % 80,
  size: 3 + i % 3 * 2,
  delay: i % 7 * 0.6,
  duration: 6 + i % 4,
  color: i % 3 === 0 ? 'bg-coral' : i % 3 === 1 ? 'bg-peach' : 'bg-white'
}));

const inboxRows = [
{ from: 'Spring Launch', w: 'w-24', unread: true },
{ from: 'Weekly Digest', w: 'w-20', unread: true },
{ from: 'Product Update', w: 'w-28', unread: false },
{ from: 'VIP Offer', w: 'w-16', unread: false }];


export function HeroVisual() {
  const reduce = useReducedMotion();
  const ref = useRef<HTMLDivElement>(null);
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const smx = useSpring(mx, { stiffness: 80, damping: 18 });
  const smy = useSpring(my, { stiffness: 80, damping: 18 });
  const rotateY = useTransform(smx, [-0.5, 0.5], [-10, 10]);
  const rotateX = useTransform(smy, [-0.5, 0.5], [8, -8]);
  const shiftX = useTransform(smx, [-0.5, 0.5], [-14, 14]);
  const shiftY = useTransform(smy, [-0.5, 0.5], [-10, 10]);

  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] });
  const scrollY = useTransform(scrollYProgress, [0, 1], [0, reduce ? 0 : -60]);
  const scrollYFast = useTransform(scrollYProgress, [0, 1], [0, reduce ? 0 : -140]);

  useEffect(() => {
    if (reduce) return;
    const onMove = (e: PointerEvent) => {
      if (e.pointerType !== 'mouse') return;
      mx.set(e.clientX / window.innerWidth - 0.5);
      my.set(e.clientY / window.innerHeight - 0.5);
    };
    window.addEventListener('pointermove', onMove);
    return () => window.removeEventListener('pointermove', onMove);
  }, [reduce, mx, my]);

  const float = (amp: number, dur: number, delay = 0) =>
  reduce ?
  {} :
  {
    animate: { y: [0, -amp, 0] },
    transition: { duration: dur, repeat: Infinity, ease: 'easeInOut' as const, delay }
  };

  return (
    <div
      ref={ref}
      aria-hidden="true"
      className="relative mx-auto aspect-square w-full max-w-[580px] select-none"
      style={{ perspective: 1400 }}>
      
      {/* Indigo stage */}
      <div className="absolute inset-[6%] overflow-hidden rounded-[44px] bg-ink shadow-soft">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.06)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.06)_1px,transparent_1px)] bg-[size:40px_40px]" />
        <div className="absolute left-1/2 top-1/2 h-2/3 w-2/3 -translate-x-1/2 -translate-y-1/2 rounded-full bg-coral/30 blur-3xl" />
        <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-indigo blur-2xl" />
        {!reduce &&
        particles.map((p, i) =>
        <motion.span
          key={i}
          className={`absolute rounded-full ${p.color}`}
          style={{ left: `${p.left}%`, top: `${p.top}%`, width: p.size, height: p.size }}
          animate={{ y: [0, -24, 0], opacity: [0.15, 0.8, 0.15] }}
          transition={{ duration: p.duration, repeat: Infinity, ease: 'easeInOut', delay: p.delay }} />

        )}
      </div>

      <motion.div
        className="absolute inset-0"
        style={{ rotateX, rotateY, transformStyle: 'preserve-3d', y: scrollY }}>
        
        {/* Back inbox panel */}
        <div
          className="absolute left-[16%] top-[13%] w-[60%] rounded-3xl border border-white/15 bg-white/10 p-4 backdrop-blur-xl sm:p-5"
          style={{ transform: 'translateZ(-50px) rotate(-6deg)' }}>
          
          <div className="mb-3 flex items-center gap-1.5">
            <span className="h-2.5 w-2.5 rounded-full bg-coral" />
            <span className="h-2.5 w-2.5 rounded-full bg-peach/70" />
            <span className="h-2.5 w-2.5 rounded-full bg-white/40" />
          </div>
          <div className="space-y-2">
            {inboxRows.map((row) =>
            <div key={row.from} className="flex items-center gap-3 rounded-xl bg-white/10 px-3 py-2">
                <span className={`h-7 w-7 shrink-0 rounded-full ${row.unread ? 'bg-coral/40' : 'bg-white/15'}`} />
                <div className="min-w-0 flex-1">
                  <p className="truncate text-[11px] font-semibold text-white">{row.from}</p>
                  <span className={`mt-1 block h-1.5 rounded-full bg-white/20 ${row.w}`} />
                </div>
                {row.unread && <span className="h-2 w-2 rounded-full bg-coral" />}
              </div>
            )}
          </div>
        </div>

        {/* Central envelope */}
        <motion.div
          className="absolute left-1/2 top-1/2 w-[50%]"
          style={{ x: '-50%', translateY: '-38%', z: 80, transformStyle: 'preserve-3d' }}>
          
          <motion.div {...float(14, 5)}>
            <div className="relative aspect-[4/3] w-full">
              <motion.div
                className="absolute inset-x-[9%] -top-[34%] h-[80%] rounded-2xl bg-white p-4 shadow-card"
                {...reduce ?
                {} :
                {
                  animate: { y: [0, -10, 0] },
                  transition: { duration: 5, repeat: Infinity, ease: 'easeInOut', delay: 0.4 }
                }}>
                
                <div className="flex items-center gap-2">
                  <span className="grid h-6 w-6 place-items-center rounded-lg bg-ink">
                    <SparklesIcon className="h-3.5 w-3.5 text-coral" />
                  </span>
                  <span className="h-2 w-16 rounded-full bg-ink/80" />
                </div>
                <span className="mt-3 block h-2 w-[85%] rounded-full bg-ink/10" />
                <span className="mt-2 block h-2 w-[65%] rounded-full bg-ink/10" />
                <span className="mt-3 block h-5 w-20 rounded-full bg-coral" />
              </motion.div>
              <div className="absolute inset-0 rounded-[22px] bg-coral shadow-[0_30px_60px_-20px_rgba(255,107,87,0.7)]" />
              <div
                className="absolute inset-0 rounded-[22px] bg-[#FF8A78]"
                style={{ clipPath: 'polygon(0 30%, 50% 68%, 100% 30%, 100% 100%, 0 100%)' }} />
              
              <div
                className="absolute inset-0 rounded-[22px] bg-peach/40"
                style={{ clipPath: 'polygon(0 100%, 50% 62%, 100% 100%)' }} />
              
              <div className="absolute inset-x-[6%] bottom-[8%] h-[2px] rounded-full bg-white/50" />
            </div>
          </motion.div>
        </motion.div>

        {/* Notification pill */}
        <motion.div className="absolute right-0 top-[16%]" style={{ z: 140, x: shiftX, y: scrollYFast }}>
          <motion.div
            {...float(8, 4, 0.6)}
            className="flex items-center gap-3 rounded-2xl bg-white py-2.5 pl-2.5 pr-4 shadow-card">
            
            <span className="grid h-9 w-9 place-items-center rounded-xl bg-peach text-coral-deep">
              <CheckIcon className="h-4 w-4" strokeWidth={2.5} />
            </span>
            <div>
              <p className="text-xs font-semibold text-ink">Campaign sent</p>
              <p className="text-[11px] text-muted">48,210 delivered</p>
            </div>
          </motion.div>
        </motion.div>

        {/* Open-rate card */}
        <motion.div className="absolute bottom-[4%] left-0" style={{ z: 120, x: shiftX, y: shiftY }}>
          <motion.div {...float(10, 5.5, 1)} className="w-44 rounded-2xl bg-white p-4 shadow-card">
            <div className="flex items-center justify-between">
              <p className="text-[11px] font-medium text-muted">Open rate</p>
              <TrendingUpIcon className="h-3.5 w-3.5 text-coral-deep" />
            </div>
            <p className="mt-1 font-display text-2xl font-extrabold text-ink">64.2%</p>
            <div className="mt-3 flex h-10 items-end gap-1.5">
              {[35, 50, 42, 68, 58, 82, 95].map((h, i) =>
              <motion.span
                key={i}
                className={`flex-1 rounded-sm ${i === 6 ? 'bg-coral' : 'bg-ink/15'}`}
                initial={{ height: reduce ? `${h}%` : 0 }}
                animate={{ height: `${h}%` }}
                transition={{ duration: 0.3, delay: 0.6 + i * 0.05, ease: [0.23, 1, 0.32, 1] }} />

              )}
            </div>
          </motion.div>
        </motion.div>

        {/* Floating icon bubbles */}
        <motion.div className="absolute left-[2%] top-[28%]" style={{ z: 160 }}>
          <motion.div
            {...float(12, 4.5, 0.2)}
            className="relative grid h-12 w-12 place-items-center rounded-2xl bg-white text-ink shadow-card">
            
            <BellIcon className="h-5 w-5" />
            <span className="absolute -right-1 -top-1 grid h-5 w-5 place-items-center rounded-full bg-coral text-[10px] font-bold text-ink">
              3
            </span>
          </motion.div>
        </motion.div>

        <motion.div className="absolute bottom-[20%] right-[3%]" style={{ z: 100 }}>
          <motion.div
            {...float(9, 5, 1.4)}
            className="grid h-12 w-12 place-items-center rounded-2xl bg-coral text-ink shadow-coral">
            
            <SendIcon className="h-5 w-5" />
          </motion.div>
        </motion.div>

        <motion.div className="absolute right-[26%] top-[2%]" style={{ z: 60 }}>
          <motion.div
            {...float(7, 6, 0.8)}
            className="grid h-10 w-10 place-items-center rounded-xl bg-peach text-ink shadow-card">
            
            <MailOpenIcon className="h-4 w-4" />
          </motion.div>
        </motion.div>
      </motion.div>
    </div>);

}