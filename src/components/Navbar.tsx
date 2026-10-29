import React, { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { MenuIcon, XIcon } from 'lucide-react';
import { Logo } from './Logo';
import { navLinks } from '../data/navigation';

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState('#home');

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const sections = navLinks.
    map((l) => document.querySelector(l.href)).
    filter((el): el is Element => el !== null);
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(`#${entry.target.id}`);
        });
      },
      { rootMargin: '-45% 0px -50% 0px' }
    );
    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && setOpen(false);
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [open]);

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-4 pt-3 sm:px-6">
      <nav
        aria-label="Primary"
        className={`mx-auto flex max-w-7xl items-center justify-between rounded-full py-2.5 pl-4 pr-2.5 transition-[background-color,box-shadow,border-color] duration-200 ease-out sm:pl-5 ${
        scrolled || open ?
        'border border-ink/5 bg-white/80 shadow-soft backdrop-blur-xl' :
        'border border-transparent bg-transparent'}`
        }>
        
        <Logo />

        <ul className="hidden items-center gap-1 rounded-full bg-lilac p-1 md:flex">
          {navLinks.map((link) =>
          <li key={link.href} className="relative">
              {active === link.href &&
            <motion.span
              layoutId="nav-pill"
              className="absolute inset-0 rounded-full bg-ink"
              transition={{ type: 'spring', stiffness: 500, damping: 40 }} />

            }
              <a
              href={link.href}
              aria-current={active === link.href ? 'true' : undefined}
              className={`relative block rounded-full px-4 py-2 text-sm font-medium transition-colors duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-coral ${
              active === link.href ? 'text-white' : 'text-muted hover:text-ink'}`
              }>
              
                {link.label}
              </a>
            </li>
          )}
        </ul>

        <a
          href="#contact"
          className="hidden whitespace-nowrap rounded-full bg-coral px-5 py-2.5 text-sm font-semibold text-ink transition-[box-shadow,transform] duration-150 ease-out hover:-translate-y-px hover:shadow-coral focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ink focus-visible:ring-offset-2 md:inline-flex">
          
          Get Started
        </a>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? 'Close menu' : 'Open menu'}
          className="grid h-10 w-10 place-items-center rounded-full bg-ink text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-coral md:hidden">
          
          {open ? <XIcon className="h-5 w-5" /> : <MenuIcon className="h-5 w-5" />}
        </button>
      </nav>

      <AnimatePresence>
        {open &&
        <motion.div
          id="mobile-menu"
          initial={{ opacity: 0, y: -8, scale: 0.98 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: -8, scale: 0.98 }}
          transition={{ duration: 0.2, ease: [0.23, 1, 0.32, 1] }}
          className="mx-auto mt-2 max-w-7xl rounded-3xl bg-ink p-3 shadow-soft md:hidden">
          
            <ul className="flex flex-col">
              {navLinks.map((link) =>
            <li key={link.href}>
                  <a
                href={link.href}
                onClick={() => setOpen(false)}
                className={`block rounded-2xl px-4 py-3 font-medium focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-coral ${
                active === link.href ? 'bg-white/10 text-white' : 'text-white/75'}`
                }>
                
                    {link.label}
                  </a>
                </li>
            )}
            </ul>
            <a
            href="#contact"
            onClick={() => setOpen(false)}
            className="mt-2 block rounded-2xl bg-coral px-4 py-3 text-center font-semibold text-ink">
            
              Get Started
            </a>
          </motion.div>
        }
      </AnimatePresence>
    </header>);

}