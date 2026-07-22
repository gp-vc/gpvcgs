'use client';

import { useMemo, useState } from 'react';
import Link from 'next/link';
import type { getAllWinesFlat, WineType } from '@/app/lib/wine-data';
import { getWineType } from '@/app/lib/wine-data';

type Entry = ReturnType<typeof getAllWinesFlat>[number];

const TYPE_LABELS: Record<WineType, string> = {
  red: '레드',
  white: '화이트',
};

function FilterButton({
  active,
  onClick,
  children,
}: {
  active: boolean;
  onClick: () => void;
  children: React.ReactNode;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`border px-3 py-1.5 text-xs font-bold uppercase tracking-widest transition ${
        active
          ? 'border-swiss-ink bg-swiss-ink text-white'
          : 'border-swiss-line text-swiss-ink/60 hover:border-swiss-accent hover:text-swiss-accent'
      }`}
    >
      {children}
    </button>
  );
}

export default function WinesList({ entries }: { entries: Entry[] }) {
  const wineryNames = useMemo(
    () => Array.from(new Set(entries.map((entry) => entry.winery.wineryName))),
    [entries],
  );

  const [winery, setWinery] = useState<string | null>(null);
  const [type, setType] = useState<WineType | null>(null);

  const filtered = useMemo(
    () =>
      entries.filter((entry) => {
        if (winery && entry.winery.wineryName !== winery) return false;
        if (type && getWineType(entry.wine) !== type) return false;
        return true;
      }),
    [entries, winery, type],
  );

  const groupedByCountry = filtered.reduce<Record<string, Entry[]>>((acc, entry) => {
    const key = entry.country.countrySlug;
    acc[key] = acc[key] ? [...acc[key], entry] : [entry];
    return acc;
  }, {});

  return (
    <div className="pb-24">
      <section className="mx-auto max-w-6xl border-b border-swiss-line px-6 py-8 lg:px-8">
        <div className="flex flex-wrap items-center gap-x-8 gap-y-4">
          <div className="flex flex-wrap items-center gap-2">
            <span className="mr-1 text-xs font-bold uppercase tracking-widest text-swiss-ink/40">Winery</span>
            <FilterButton active={winery === null} onClick={() => setWinery(null)}>
              전체
            </FilterButton>
            {wineryNames.map((name) => (
              <FilterButton key={name} active={winery === name} onClick={() => setWinery(name)}>
                {name}
              </FilterButton>
            ))}
          </div>

          <div className="flex flex-wrap items-center gap-2">
            <span className="mr-1 text-xs font-bold uppercase tracking-widest text-swiss-ink/40">Type</span>
            <FilterButton active={type === null} onClick={() => setType(null)}>
              전체
            </FilterButton>
            {(Object.keys(TYPE_LABELS) as WineType[]).map((t) => (
              <FilterButton key={t} active={type === t} onClick={() => setType(t)}>
                {TYPE_LABELS[t]}
              </FilterButton>
            ))}
          </div>
        </div>
      </section>

      {filtered.length === 0 ? (
        <section className="mx-auto max-w-6xl border-b border-swiss-line px-6 py-16 text-center lg:px-8">
          <p className="text-sm text-swiss-ink/50">조건에 맞는 와인이 없습니다.</p>
        </section>
      ) : (
        Object.entries(groupedByCountry).map(([countrySlug, wines]) => (
          <section key={countrySlug} className="mx-auto max-w-6xl border-b border-swiss-line">
            <div className="border-b border-swiss-line px-6 py-6 lg:px-8">
              <p className="text-xs font-bold uppercase tracking-widest text-swiss-accent">{wines[0].country.countryName}</p>
            </div>
            <div className="divide-y divide-swiss-line">
              {wines.map(({ wine, winery: w, country }, i) => (
                <Link
                  key={wine.wineSlug}
                  href={`/portfolio/${country.countrySlug}/${w.winerySlug}/${wine.wineSlug}`}
                  className="group grid grid-cols-[2.5rem_1fr] items-center gap-4 px-6 py-5 transition hover:bg-swiss-ink hover:text-white md:grid-cols-[2.5rem_1fr_1fr_1fr] lg:px-8"
                >
                  <span className="text-xs font-bold uppercase tracking-widest text-swiss-accent group-hover:text-white">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <div>
                    <p className="text-base font-black uppercase tracking-tight">{wine.name}</p>
                    <p className="text-xs text-swiss-ink/50 group-hover:text-white/70">{wine.nameKR}</p>
                  </div>
                  <p className="hidden text-xs font-bold uppercase tracking-widest text-swiss-ink/60 group-hover:text-white/70 md:block">
                    {w.wineryName} · {w.regionKR}
                  </p>
                  <p className="hidden text-xs font-bold uppercase tracking-widest text-swiss-ink/60 group-hover:text-white/70 md:block">
                    {wine.vintage} · {wine.grape.split(',')[0]}
                  </p>
                </Link>
              ))}
            </div>
          </section>
        ))
      )}
    </div>
  );
}
