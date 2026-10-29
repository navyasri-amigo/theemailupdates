import React from 'react';
import { ArrowRightIcon, MailIcon, SendIcon } from 'lucide-react';
import { Reveal } from './Reveal';

export function FinalCta() {
  return (
    <section id="contact" className="bg-white px-5 pb-24 sm:px-8 sm:pb-32">
      <Reveal className="relative mx-auto max-w-7xl overflow-hidden rounded-[44px] bg-ink px-6 py-20 text-center sm:px-12 sm:py-28">
        <div aria-hidden="true" className="pointer-events-none absolute inset-0">
          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:48px_48px]" />
          <div className="animate-drift absolute -bottom-32 left-1/2 h-80 w-[36rem] -translate-x-1/2 rounded-full bg-coral/30 blur-3xl" />
          <span className="absolute left-[8%] top-[20%] hidden h-16 w-16 -rotate-12 place-items-center rounded-2xl bg-coral text-ink md:grid">
            <MailIcon className="h-7 w-7" />
          </span>
          <span className="absolute bottom-[18%] right-[9%] hidden h-14 w-14 rotate-12 place-items-center rounded-2xl bg-peach text-ink md:grid">
            <SendIcon className="h-6 w-6" />
          </span>
        </div>

        <div className="relative">
          <h2 className="mx-auto max-w-3xl font-display text-4xl font-extrabold leading-[1.02] tracking-[-0.04em] text-white sm:text-6xl">
            Ready to Make Every Email <span className="text-coral">Count?</span>
          </h2>
          <p className="mx-auto mt-5 max-w-md text-lg text-white/75">Let's build your next great campaign.</p>
          <a
            href="mailto:hello@themailupdates.com"
            className="group mt-10 inline-flex items-center gap-2 whitespace-nowrap rounded-full bg-coral px-8 py-4 font-semibold text-ink shadow-coral transition-[box-shadow,transform] duration-150 ease-out hover:-translate-y-0.5 hover:shadow-coral-lg active:translate-y-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-ink">
            
            Get Started
            <ArrowRightIcon className="h-4 w-4 transition-transform duration-150 ease-out group-hover:translate-x-0.5" />
          </a>
        </div>
      </Reveal>
    </section>);

}