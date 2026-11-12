'use client';

import { useMemo } from 'react';
import Link from 'next/link';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
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
  const countryOptions = useMemo(() => {
    const seen = new Map<string, string>();
    entries.forEach((entry) => seen.set(entry.country.countrySlug, entry.country.countryName));
    return Array.from(seen, ([countrySlug, countryName]) => ({ countrySlug, countryName }));
  }, [entries]);

  const wineryNames = useMemo(
    () => Array.from(new Set(entries.map((entry) => entry.winery.wineryName))),
    [entries],
  );

  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const countryParam = searchParams.get('country');
  const wineryParam = searchParams.get('winery');
  const typeParam = searchParams.get('type');

  // URL 값이 유효한 옵션일 때만 필터로 인정한다.
  const country = countryOptions.some((o) => o.countrySlug === countryParam) ? countryParam : null;
  const winery = wineryNames.includes(wineryParam ?? '') ? wineryParam : null;
  const type = typeParam && typeParam in TYPE_LABELS ? (typeParam as WineType) : null;

  const updateFilter = (key: 'country' | 'winery' | 'type', value: string | null) => {
    const params = new URLSearchParams(searchParams.toString());
    if (value) params.set(key, value);
    else params.delete(key);
    const query = params.toString();
    router.replace(query ? `${pathname}?${query}` : pathname, { scroll: false });
  };

  const hasFilter = country !== null || winery !== null || type !== null;
  const resetFilters = () => router.replace(pathname, { scroll: false });

  const setCountry = (value: string | null) => updateFilter('country', value);
  const setWinery = (value: string | null) => updateFilter('winery', value);
  const setType = (value: WineType | null) => updateFilter('type', value);

  // 상세 페이지의 "와인 목록으로" 버튼이 현재 필터를 복원할 수 있도록 쿼리를 넘긴다.
  const detailParams = new URLSearchParams({ from: 'wines' });
  if (country) detailParams.set('country', country);
  if (winery) detailParams.set('winery', winery);
  if (type) detailParams.set('type', type);
  const detailQuery = `?${detailParams.toString()}`;

  const activeChips: { key: string; label: string; onRemove: () => void }[] = [];
  if (country) {
    const name = countryOptions.find((o) => o.countrySlug === country)?.countryName ?? country;
    activeChips.push({ key: 'country', label: name, onRemove: () => setCountry(null) });
  }
  if (winery) activeChips.push({ key: 'winery', label: winery, onRemove: () => setWinery(null) });
  if (type) activeChips.push({ key: 'type', label: TYPE_LABELS[type], onRemove: () => setType(null) });

  const filtered = useMemo(
    () =>
      entries.filter((entry) => {
        if (country && entry.country.countrySlug !== country) return false;
        if (winery && entry.winery.wineryName !== winery) return false;
        if (type && getWineType(entry.wine) !== type) return false;
        return true;
      }),
    [entries, country, winery, type],
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
            <span className="mr-1 text-xs font-bold uppercase tracking-widest text-swiss-ink/40">Country</span>
            <FilterButton active={country === null} onClick={() => setCountry(null)}>
              전체
            </FilterButton>
            {countryOptions.map(({ countrySlug, countryName }) => (
              <FilterButton key={countrySlug} active={country === countrySlug} onClick={() => setCountry(countrySlug)}>
                {countryName}
              </FilterButton>
            ))}
          </div>

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

        <div className="mt-6 flex flex-wrap items-center gap-x-4 gap-y-3 border-t border-swiss-line pt-5">
          <p className="text-xs font-bold uppercase tracking-widest text-swiss-ink/60">
            <span className="text-swiss-ink">{filtered.length}종</span>
            {hasFilter && <span className="text-swiss-ink/40"> / 전체 {entries.length}종</span>}
          </p>

          {activeChips.map((chip) => (
            <button
              key={chip.key}
              type="button"
              onClick={chip.onRemove}
              aria-label={`${chip.label} 필터 해제`}
              className="flex items-center gap-1.5 border border-swiss-ink px-2.5 py-1 text-xs font-bold uppercase tracking-widest text-swiss-ink transition hover:border-swiss-accent hover:text-swiss-accent"
            >
              {chip.label}
              <span aria-hidden="true">×</span>
            </button>
          ))}

          {hasFilter && (
            <button
              type="button"
              onClick={resetFilters}
              className="text-xs font-bold uppercase tracking-widest text-swiss-accent underline underline-offset-4 transition hover:text-swiss-ink sm:ml-auto"
            >
              필터 초기화
            </button>
          )}
        </div>
      </section>

      {filtered.length === 0 ? (
        <section className="mx-auto max-w-6xl border-b border-swiss-line px-6 py-16 text-center lg:px-8">
          <p className="text-sm text-swiss-ink/50">조건에 맞는 와인이 없습니다.</p>
          {hasFilter && (
            <button
              type="button"
              onClick={resetFilters}
              className="mt-6 bg-swiss-ink px-6 py-3 text-xs font-bold uppercase tracking-widest text-white transition hover:bg-swiss-accent"
            >
              필터 초기화
            </button>
          )}
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
                  href={`/portfolio/${country.countrySlug}/${w.winerySlug}/${wine.wineSlug}${detailQuery}`}
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
