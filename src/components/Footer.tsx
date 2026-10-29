import React from 'react';
import { Logo } from './Logo';
import { navLinks } from '../data/navigation';

export function Footer() {
  return (
    <footer className="border-t border-ink/10 bg-cream">
      <div className="mx-auto flex max-w-7xl flex-col gap-8 px-5 py-12 sm:px-8 md:flex-row md:items-center md:justify-between">
        <Logo />
        <nav aria-label="Footer">
          <ul className="flex flex-wrap gap-x-6 gap-y-2">
            {navLinks.map((l) =>
            <li key={l.href}>
                <a
                href={l.href}
                className="rounded text-sm text-muted transition-colors duration-150 hover:text-ink focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-coral">
                
                  {l.label}
                </a>
              </li>
            )}
          </ul>
        </nav>
        <a href="mailto:info@themailupdates.com" className="text-sm font-semibold text-coral-deep hover:underline">
          info@themailupdates.com
        </a>
      </div>
      <div className="mx-auto max-w-7xl px-5 pb-10 sm:px-8">
        <p className="text-xs text-muted">© {new Date().getFullYear()} TheMailUpdates. All rights reserved.</p>
      </div>
    </footer>);

}