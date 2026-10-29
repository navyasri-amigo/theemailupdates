import React, { useRef } from 'react';
import { ArrowLeftIcon, ArrowRightIcon } from 'lucide-react';
import { templates } from '../data/templates';
import { Reveal } from './Reveal';

export function Showcase() {
  const trackRef = useRef<HTMLUListElement>(null);

  function scrollBy(dir: 1 | -1) {
    const track = trackRef.current;
    if (!track) return;
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    track.scrollBy({ left: dir * track.clientWidth * 0.7, behavior: reduce ? 'auto' : 'smooth' });
  }

  return (
    <section id="showcase" className="overflow-hidden bg-lilac py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <Reveal className="flex items-end justify-between gap-6">
          <div>
            <h2 className="font-display text-4xl font-extrabold tracking-[-0.03em] text-ink sm:text-5xl">
              Creative showcase
            </h2>
            <p className="mt-3 text-lg text-muted">A few inboxes we've made unforgettable.</p>
          </div>
          <div className="hidden gap-2 sm:flex">
            <button
              type="button"
              onClick={() => scrollBy(-1)}
              aria-label="Previous templates"
              className="grid h-12 w-12 place-items-center rounded-full border border-ink/15 bg-white text-ink transition-[border-color,background-color] duration-150 hover:border-ink/40 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-coral">
              
              <ArrowLeftIcon className="h-5 w-5" />
            </button>
            <button
              type="button"
              onClick={() => scrollBy(1)}
              aria-label="Next templates"
              className="grid h-12 w-12 place-items-center rounded-full bg-ink text-white transition-[background-color] duration-150 hover:bg-indigo focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-coral focus-visible:ring-offset-2">
              
              <ArrowRightIcon className="h-5 w-5" />
            </button>
          </div>
        </Reveal>
      </div>

      <Reveal delay={0.05}>
        <ul
          ref={trackRef}
          className="no-scrollbar mt-12 flex snap-x snap-mandatory gap-5 overflow-x-auto scroll-px-5 px-5 pb-8 pt-2 sm:scroll-px-8 sm:px-8 xl:px-[max(2rem,calc((100vw-80rem)/2+2rem))]"
          aria-label="Email template gallery">
          
          {templates.map((t) =>
          <li key={t.name} className="w-[72vw] shrink-0 snap-start sm:w-[320px]">
              <a
              href="#contact"
              className="group block rounded-[28px] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-coral focus-visible:ring-offset-4 focus-visible:ring-offset-lilac">
              
                <div className="relative aspect-[3/4] overflow-hidden rounded-[28px] bg-white p-2 shadow-soft transition-[transform,box-shadow] duration-200 ease-out group-hover:-translate-y-2 group-hover:rotate-[-1deg] group-hover:shadow-card">
                  <div className="relative h-full overflow-hidden rounded-[22px]">
                    <img
                    src={t.image}
                    alt={`${t.name} email template preview`}
                    loading="lazy"
                    decoding="async"
                    className="h-full w-full object-cover object-top transition-transform duration-300 ease-out group-hover:scale-[1.04]" />
                  
                    <span className="absolute bottom-3 right-3 grid h-11 w-11 translate-y-2 place-items-center rounded-full bg-coral text-ink opacity-0 transition-[opacity,transform] duration-200 ease-out group-hover:translate-y-0 group-hover:opacity-100 group-focus-visible:translate-y-0 group-focus-visible:opacity-100">
                      <ArrowRightIcon className="h-5 w-5" aria-hidden="true" />
                    </span>
                  </div>
                </div>
                <div className="mt-4 flex items-baseline justify-between gap-3 px-1">
                  <h3 className="font-display font-bold text-ink">{t.name}</h3>
                  <p className="whitespace-nowrap text-xs font-medium text-muted">{t.category}</p>
                </div>
              </a>
            </li>
          )}
        </ul>
      </Reveal>
    </section>);

}