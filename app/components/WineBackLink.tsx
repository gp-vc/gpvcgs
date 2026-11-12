'use client';

import Link from 'next/link';
import { useSearchParams } from 'next/navigation';

const FILTER_KEYS = ['country', 'winery', 'type'] as const;

const className =
  'text-xs font-bold uppercase tracking-widest text-swiss-ink/50 transition hover:text-swiss-accent';

export default function WineBackLink({ wineryHref }: { wineryHref: string }) {
  const searchParams = useSearchParams();

  if (searchParams.get('from') !== 'wines') {
    return (
      <Link href={wineryHref} className={className}>
        ← 와이너리로
      </Link>
    );
  }

  // 화이트리스트된 필터만 복사해서 /wines 필터 상태를 복원한다.
  const params = new URLSearchParams();
  FILTER_KEYS.forEach((key) => {
    const value = searchParams.get(key);
    if (value) params.set(key, value);
  });
  const query = params.toString();

  return (
    <Link href={query ? `/wines?${query}` : '/wines'} className={className}>
      ← 와인 목록으로
    </Link>
  );
}
