'use client';

import { useEffect } from 'react';
import Link from 'next/link';
import { useRouter, useSearchParams } from 'next/navigation';

export type StepItem = {
  countrySlug: string;
  winerySlug: string;
  wineSlug: string;
  name: string;
  wineryName: string;
  type: 'red' | 'white';
};

const FILTER_KEYS = ['country', 'winery', 'type'] as const;

function useWineSteps(items: StepItem[], current: { countrySlug: string; winerySlug: string; wineSlug: string }) {
  const searchParams = useSearchParams();
  const isSame = (i: StepItem) =>
    i.countrySlug === current.countrySlug && i.winerySlug === current.winerySlug && i.wineSlug === current.wineSlug;
  const sameWinery = (i: StepItem) => i.countrySlug === current.countrySlug && i.winerySlug === current.winerySlug;

  // 기본 범위: 현재 와이너리. /wines에서 들어온 경우: 그 목록의 필터 결과.
  let list = items.filter(sameWinery);
  const query = new URLSearchParams();

  if (searchParams.get('from') === 'wines') {
    query.set('from', 'wines');
    const country = searchParams.get('country');
    const winery = searchParams.get('winery');
    const type = searchParams.get('type');
    FILTER_KEYS.forEach((key) => {
      const value = searchParams.get(key);
      if (value) query.set(key, value);
    });
    const filtered = items.filter(
      (i) =>
        (!country || i.countrySlug === country) &&
        (!winery || i.wineryName === winery) &&
        (!type || i.type === type),
    );
    // 쿼리가 오래되어 현재 와인이 목록에 없으면 와이너리 범위로 되돌린다.
    if (filtered.some(isSame)) list = filtered;
    else query.delete('from');
  }

  const index = list.findIndex(isSame);
  const suffix = query.toString() ? `?${query.toString()}` : '';
  const toHref = (i?: StepItem) =>
    i ? `/portfolio/${i.countrySlug}/${i.winerySlug}/${i.wineSlug}${suffix}` : null;

  return {
    index,
    total: list.length,
    prev: index > 0 ? list[index - 1] : undefined,
    next: index >= 0 && index < list.length - 1 ? list[index + 1] : undefined,
    toHref,
  };
}

export function WineCounter({ items, current }: { items: StepItem[]; current: Parameters<typeof useWineSteps>[1] }) {
  const { index, total } = useWineSteps(items, current);
  if (index < 0) return null;
  return (
    <span className="text-xs font-bold uppercase tracking-widest text-swiss-ink/40">
      <span className="text-swiss-ink">{String(index + 1).padStart(2, '0')}</span> / {String(total).padStart(2, '0')}
    </span>
  );
}

function StepCell({
  href,
  label,
  name,
  sub,
  align,
}: {
  href: string | null;
  label: string;
  name?: string;
  sub?: string;
  align: 'left' | 'right';
}) {
  const alignCls = align === 'right' ? 'text-right sm:items-end' : 'text-left';
  const base = `flex flex-col gap-2 px-6 py-8 lg:px-8 ${alignCls}`;

  if (!href) {
    return (
      <div aria-disabled="true" className={`${base} cursor-not-allowed text-swiss-ink/20`}>
        <span className="text-xs font-bold uppercase tracking-widest">{label}</span>
      </div>
    );
  }

  return (
    <Link href={href} replace scroll className={`group ${base} transition hover:bg-swiss-ink hover:text-white`}>
      <span className="text-xs font-bold uppercase tracking-widest text-swiss-accent group-hover:text-white">{label}</span>
      <span className="text-base font-black uppercase leading-tight tracking-tight">{name}</span>
      <span className="text-xs text-swiss-ink/50 group-hover:text-white/70">{sub}</span>
    </Link>
  );
}

export function WineStepBar({ items, current }: { items: StepItem[]; current: Parameters<typeof useWineSteps>[1] }) {
  const router = useRouter();
  const { prev, next, toHref } = useWineSteps(items, current);
  const prevHref = toHref(prev);
  const nextHref = toHref(next);

  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.metaKey || e.ctrlKey || e.altKey || e.shiftKey) return;
      const el = e.target as HTMLElement | null;
      if (el && (el.isContentEditable || ['INPUT', 'TEXTAREA', 'SELECT'].includes(el.tagName))) return;
      if (e.key === 'ArrowLeft' && prevHref) router.replace(prevHref);
      else if (e.key === 'ArrowRight' && nextHref) router.replace(nextHref);
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [router, prevHref, nextHref]);

  return (
    <nav aria-label="와인 이전/다음" className="mx-auto grid max-w-6xl grid-cols-2 border-b border-swiss-line">
      <div className="border-r border-swiss-line">
        <StepCell href={prevHref} label="← Prev" name={prev?.name} sub={prev?.wineryName} align="left" />
      </div>
      <StepCell href={nextHref} label="Next →" name={next?.name} sub={next?.wineryName} align="right" />
    </nav>
  );
}
