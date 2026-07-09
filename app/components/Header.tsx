'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { MenuIcon, CloseIcon } from '@/app/components/icons';

type NavKey = 'portfolio' | 'wines' | 'press' | 'contact';

const NAV_ITEMS: { key: NavKey; href: string; label: string }[] = [
  { key: 'portfolio', href: '/portfolio', label: 'Portfolio' },
  { key: 'wines', href: '/wines', label: 'Wines' },
  { key: 'press', href: '/press', label: 'Press' },
  { key: 'contact', href: '/contact', label: 'Contact' },
];

type HeaderProps = {
  active?: NavKey;
  priority?: boolean;
};

export default function Header({ active, priority }: HeaderProps) {
  const [open, setOpen] = useState(false);

  return (
    <header className="relative mx-auto max-w-6xl border-b border-swiss-line px-6 py-6 lg:px-8">
      <div className="flex items-center justify-between">
        <Link href="/" className="flex items-center" onClick={() => setOpen(false)}>
          <Image
            src="/branding.svg"
            alt="GPVC"
            width={140}
            height={34}
            className="h-6 w-auto"
            style={{ filter: 'brightness(0)' }}
            priority={priority}
          />
        </Link>

        <nav className="hidden gap-6 text-xs font-bold uppercase tracking-widest md:flex">
          {NAV_ITEMS.map((item) => (
            <Link
              key={item.key}
              href={item.href}
              className={item.key === active ? 'text-swiss-accent' : 'transition hover:text-swiss-accent'}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <button
          type="button"
          aria-label={open ? '메뉴 닫기' : '메뉴 열기'}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="flex h-8 w-8 items-center justify-center md:hidden"
        >
          {open ? <CloseIcon className="h-5 w-5" /> : <MenuIcon className="h-5 w-5" />}
        </button>
      </div>

      {open && (
        <nav className="absolute inset-x-0 top-full z-50 flex flex-col gap-4 border-b border-swiss-line bg-swiss-bg px-6 py-6 text-sm font-bold uppercase tracking-widest md:hidden">
          {NAV_ITEMS.map((item) => (
            <Link
              key={item.key}
              href={item.href}
              onClick={() => setOpen(false)}
              className={item.key === active ? 'text-swiss-accent' : 'transition hover:text-swiss-accent'}
            >
              {item.label}
            </Link>
          ))}
        </nav>
      )}
    </header>
  );
}
