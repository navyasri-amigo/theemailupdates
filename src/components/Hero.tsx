import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { ArrowRightIcon, StarIcon } from 'lucide-react';
import { HeroVisual } from './HeroVisual';

const ease = [0.23, 1, 0.32, 1] as const;

export function Hero() {
  const reduce = useReducedMotion();
  const enter = (delay: number) => ({
    initial: reduce ? { opacity: 0 } : { opacity: 0, y: 16 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.3, delay, ease }
  });

  return (
    <section id="home" className="relative overflow-hidden bg-cream">
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <div className="animate-drift absolute -left-[10%] -top-[25%] h-[60vh] w-[60vh] rounded-full bg-peach/70 blur-3xl" />
        <div className="absolute inset-0 bg-[radial-gradient(rgba(30,27,75,0.08)_1px,transparent_1px)] bg-[size:22px_22px] [mask-image:linear-gradient(to_bottom,black,transparent_85%)]" />
      </div>

      <div className="relative mx-auto grid min-h-[100svh] max-w-7xl items-center gap-12 px-5 pb-16 pt-28 sm:px-8 lg:grid-cols-[1fr_1.05fr] lg:gap-10 lg:pb-12 lg:pt-24">
        <div className="max-w-xl">
          <motion.h1
            {...enter(0)}
            className="font-display text-[46px] font-extrabold leading-[0.98] tracking-[-0.04em] text-ink sm:text-6xl lg:text-[80px]">
            
            Email That Moves Business{' '}
            <span className="relative inline-block text-coral">
              Forward.
              <svg
                aria-hidden="true"
                viewBox="0 0 200 12"
                className="absolute -bottom-2 left-0 h-3 w-full text-ink"
                preserveAspectRatio="none">
                
                <motion.path
                  d="M2 8 Q 50 2 100 6 T 198 4"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="3"
                  strokeLinecap="round"
                  initial={{ pathLength: reduce ? 1 : 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: 0.3, delay: 0.35, ease }} />
                
              </svg>
            </span>
          </motion.h1>

          <motion.p {...enter(0.08)} className="mt-8 text-lg text-muted sm:text-xl">
            Smarter campaigns. Better connections. Powerful results.
          </motion.p>

          <motion.div {...enter(0.16)} className="mt-10 flex flex-col gap-3 sm:flex-row">
            <a
              href="#services"
              className="group inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full bg-ink px-7 py-4 font-semibold text-white transition-[box-shadow,transform,background-color] duration-150 ease-out hover:-translate-y-0.5 hover:bg-indigo hover:shadow-card active:translate-y-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-coral focus-visible:ring-offset-2">
              
              Explore Our Solutions
              <span className="grid h-6 w-6 place-items-center rounded-full bg-coral text-ink transition-transform duration-150 ease-out group-hover:translate-x-0.5">
                <ArrowRightIcon className="h-3.5 w-3.5" />
              </span>
            </a>
            <a
              href="#contact"
              className="inline-flex items-center justify-center whitespace-nowrap rounded-full bg-coral px-7 py-4 font-semibold text-ink transition-[box-shadow,transform] duration-150 ease-out hover:-translate-y-0.5 hover:shadow-coral-lg active:translate-y-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ink focus-visible:ring-offset-2">
              
              Get Started
            </a>
          </motion.div>

          <motion.div {...enter(0.24)} className="mt-12 flex items-center gap-4">
            <div className="flex -space-x-2">
              {['bg-ink', 'bg-coral', 'bg-indigo', 'bg-peach'].map((c) =>
              <span key={c} className={`h-9 w-9 rounded-full border-2 border-cream ${c}`} />
              )}
            </div>
            <div>
              <div className="flex gap-0.5 text-coral" aria-label="Rated 5 out of 5">
                {Array.from({ length: 5 }).map((_, i) =>
                <StarIcon key={i} className="h-3.5 w-3.5 fill-current" aria-hidden="true" />
                )}
              </div>
              <p className="mt-0.5 text-sm text-muted">
                <span className="font-semibold text-ink">120M+</span> emails delivered
              </p>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={reduce ? { opacity: 0 } : { opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.3, delay: 0.1, ease }}>
          
          <HeroVisual />
        </motion.div>
      </div>
    </section>);

}