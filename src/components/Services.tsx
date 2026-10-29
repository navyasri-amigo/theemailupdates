import React from "react";
import { ArrowUpRightIcon, Code2Icon, LayoutTemplateIcon, SendIcon, BoxIcon } from "lucide-react";
import { services } from "../data/services";
import { Reveal } from "./Reveal";
const icons: Record<(typeof services)[number]['icon'], BoxIcon> = {
  send: SendIcon,
  layout: LayoutTemplateIcon,
  code: Code2Icon
};
export function Services() {
  return <section id="services" className="bg-white py-24 sm:py-32">
      <div className="mx-auto grid max-w-7xl gap-12 px-5 sm:px-8 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
        <Reveal className="lg:sticky lg:top-32 lg:self-start">
          <h2 className="font-display text-4xl font-extrabold tracking-[-0.03em] text-ink sm:text-5xl">
            What we do
          </h2>
          <p className="mt-4 max-w-sm text-lg text-muted">Everything your inbox presence needs, crafted end to end.</p>
        </Reveal>

        <ul className="border-t border-ink/10">
          {services.map((s, i) => {
          const Icon = icons[s.icon];
          return <li key={s.title} className="border-b border-ink/10">
                <Reveal delay={i * 0.05}>
                  <a href="#contact" className="group flex items-center gap-5 rounded-3xl px-2 py-8 transition-[background-color,padding] duration-200 ease-out hover:bg-cream sm:gap-8 sm:px-4 sm:hover:px-6 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-coral">
                    <span className="grid h-14 w-14 shrink-0 place-items-center rounded-2xl bg-ink text-coral transition-[background-color,color] duration-200 ease-out group-hover:bg-coral group-hover:text-ink sm:h-16 sm:w-16">
                      <Icon className="h-6 w-6" aria-hidden="true" />
                    </span>
                    <div className="min-w-0 flex-1">
                      <h3 className="font-display text-xl font-bold text-ink sm:text-3xl">{s.title}</h3>
                      <p className="mt-1 text-muted">{s.description}</p>
                    </div>
                    <ArrowUpRightIcon className="h-6 w-6 shrink-0 text-ink/30 transition-[color,transform] duration-200 ease-out group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-coral-deep" aria-hidden="true" />
                  </a>
                </Reveal>
              </li>;
        })}
        </ul>
      </div>
    </section>;
}