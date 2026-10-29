import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { PaletteIcon, SmartphoneIcon, TrophyIcon } from 'lucide-react';
import { Reveal } from './Reveal';
import { TiltCard } from './TiltCard';

const ease = [0.23, 1, 0.32, 1] as const;

export function WhyUs() {
  const reduce = useReducedMotion();

  return (
    <section id="about" className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <Reveal>
          <h2 className="max-w-xl font-display text-4xl font-extrabold tracking-[-0.03em] text-ink sm:text-5xl">
            Why brands choose us
          </h2>
        </Reveal>

        <div className="mt-14 grid gap-5 lg:grid-cols-[1.2fr_1fr] lg:grid-rows-2">
          {/* Creative Design — primary */}
          <Reveal className="lg:row-span-2">
            <TiltCard max={4} className="flex h-full flex-col overflow-hidden rounded-[36px] bg-ink p-8 sm:p-10">
              <div className="flex items-center gap-3">
                <span className="grid h-10 w-10 place-items-center rounded-xl bg-coral text-ink">
                  <PaletteIcon className="h-5 w-5" aria-hidden="true" />
                </span>
                <h3 className="font-display text-2xl font-bold text-white">Creative Design</h3>
              </div>
              <p className="mt-3 text-white/75">On-brand visuals that stop the scroll.</p>

              <div aria-hidden="true" className="relative mt-10 flex flex-1 items-center justify-center py-6">
                <div className="relative h-56 w-full max-w-sm">
                  {[
                  { c: 'bg-indigo', r: -10, x: '-30%' },
                  { c: 'bg-coral', r: 0, x: '0%' },
                  { c: 'bg-peach', r: 10, x: '30%' }].
                  map((card, i) =>
                  <motion.div
                    key={card.c}
                    className="absolute left-1/2 top-0 -ml-20 h-56 w-40 rounded-2xl bg-white p-3 shadow-card"
                    initial={{ rotate: 0, x: '0%' }}
                    whileInView={{ rotate: card.r, x: card.x }}
                    viewport={{ once: true }}
                    transition={{ duration: reduce ? 0 : 0.3, delay: 0.1 + i * 0.05, ease }}
                    style={{ zIndex: i === 1 ? 2 : 1 }}>
                    
                      <div className={`h-24 rounded-xl ${card.c}`} />
                      <span className="mt-3 block h-2 w-3/4 rounded-full bg-ink/80" />
                      <span className="mt-2 block h-1.5 w-full rounded-full bg-ink/10" />
                      <span className="mt-1.5 block h-1.5 w-2/3 rounded-full bg-ink/10" />
                      <span className="mt-4 block h-5 w-16 rounded-full bg-ink" />
                    </motion.div>
                  )}
                </div>
              </div>
            </TiltCard>
          </Reveal>

          {/* Responsive Emails */}
          <Reveal delay={0.05}>
            <TiltCard
              max={5}
              className="flex h-full flex-col gap-6 overflow-hidden rounded-[36px] bg-peach p-8 sm:flex-row sm:items-center">
              
              <div className="flex-1">
                <div className="flex items-center gap-3">
                  <SmartphoneIcon className="h-5 w-5 text-ink" aria-hidden="true" />
                  <h3 className="font-display text-xl font-bold text-ink">Responsive Emails</h3>
                </div>
                <p className="mt-2 text-muted">Flawless on every screen and client.</p>
              </div>
              <div aria-hidden="true" className="flex items-end gap-3">
                <div className="h-28 w-40 rounded-xl border-4 border-ink bg-white p-2">
                  <div className="h-8 rounded-md bg-coral" />
                  <span className="mt-2 block h-1.5 w-3/4 rounded-full bg-ink/15" />
                  <span className="mt-1 block h-1.5 w-1/2 rounded-full bg-ink/15" />
                </div>
                <div className="h-32 w-16 rounded-xl border-4 border-ink bg-white p-1.5">
                  <div className="h-8 rounded bg-coral" />
                  <span className="mt-1.5 block h-1 w-full rounded-full bg-ink/15" />
                  <span className="mt-1 block h-1 w-2/3 rounded-full bg-ink/15" />
                  <span className="mt-2 block h-3 w-full rounded-full bg-ink" />
                </div>
              </div>
            </TiltCard>
          </Reveal>

          {/* Campaign Excellence */}
          <Reveal delay={0.1}>
            <TiltCard
              max={5}
              className="flex h-full flex-col gap-6 overflow-hidden rounded-[36px] bg-lilac p-8 sm:flex-row sm:items-center">
              
              <div className="flex-1">
                <div className="flex items-center gap-3">
                  <TrophyIcon className="h-5 w-5 text-ink" aria-hidden="true" />
                  <h3 className="font-display text-xl font-bold text-ink">Campaign Excellence</h3>
                </div>
                <p className="mt-2 text-muted">Data-led sends that keep improving.</p>
              </div>
              <div aria-hidden="true" className="w-full sm:w-48">
                <p className="font-display text-4xl font-extrabold text-ink">
                  3.4<span className="text-coral-deep">×</span>
                </p>
                <p className="text-xs text-muted">average ROI lift</p>
                <div className="mt-3 flex h-12 items-end gap-1.5">
                  {[30, 42, 38, 55, 64, 78, 100].map((h, i) =>
                  <motion.span
                    key={i}
                    className={`flex-1 rounded-sm ${i === 6 ? 'bg-coral' : 'bg-ink/20'}`}
                    initial={{ height: reduce ? `${h}%` : 0 }}
                    whileInView={{ height: `${h}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: i * 0.04, ease }} />

                  )}
                </div>
              </div>
            </TiltCard>
          </Reveal>
        </div>
      </div>
    </section>);

}