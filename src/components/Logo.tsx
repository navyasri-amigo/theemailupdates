import React from 'react';
import { MailIcon } from 'lucide-react';

type LogoProps = {
  inverted?: boolean;
};

export function Logo({ inverted = false }: LogoProps) {
  return (
    <a
      href="#home"
      className="flex items-center gap-2.5 rounded-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-coral">
      
      <span className="relative grid h-9 w-9 place-items-center rounded-xl bg-ink text-white">
        <MailIcon className="h-[18px] w-[18px]" aria-hidden="true" />
        <span className="absolute -right-0.5 -top-0.5 h-3 w-3 rounded-full border-2 border-white bg-coral" />
      </span>
      <span className={`font-display text-lg font-extrabold tracking-tight ${inverted ? 'text-white' : 'text-ink'}`}>
        TheMail<span className={inverted ? 'text-coral' : 'text-coral-deep'}>Updates</span>
      </span>
    </a>);

}