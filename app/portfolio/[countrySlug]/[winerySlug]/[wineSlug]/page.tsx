import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { getAllWineParams, getWineBySlug, getWineNameJP } from '@/app/lib/wine-data';
import Header from '@/app/components/Header';
import Footer from '@/app/components/Footer';

const grotesk = { fontFamily: '"Helvetica Neue", Arial, "Segoe UI", sans-serif' };

type WinePageProps = {
  params: { countrySlug: string; winerySlug: string; wineSlug: string };
};

export function generateStaticParams() {
  return getAllWineParams();
}

export default function WinePage({ params }: WinePageProps) {
  const wine = getWineBySlug(params.countrySlug, params.winerySlug, params.wineSlug);

  if (!wine) {
    notFound();
  }

  const nameJP = getWineNameJP(wine.wineSlug);

  return (
    <main style={grotesk} className="min-h-screen bg-swiss-bg text-swiss-ink">
      <Header active="portfolio" />

      <section className="mx-auto max-w-6xl px-6 pt-8 lg:px-8">
        <Link
          href={`/portfolio/${params.countrySlug}/${params.winerySlug}`}
          className="text-xs font-bold uppercase tracking-widest text-swiss-ink/50 transition hover:text-swiss-accent"
        >
          ← 와이너리로 돌아가기
        </Link>
      </section>

      <section className="mx-auto grid max-w-6xl border-b border-swiss-line lg:grid-cols-2">
        <div className="relative min-h-[420px] border-swiss-line bg-white lg:border-r">
          <Image src={wine.imageUrl} alt={wine.nameKR} fill className="object-contain p-12" />
        </div>
        <div className="px-6 py-16 lg:px-8">
          <p className="text-xs font-bold uppercase tracking-widest text-swiss-accent">{wine.grape}</p>
          <h1 className="mt-4 text-4xl font-black uppercase leading-[0.95] tracking-tight sm:text-5xl">
            {wine.name}
          </h1>
          <p className="mt-3 text-sm text-swiss-ink/60">
            {wine.nameKR}{nameJP ? ` (${nameJP})` : ''} · {wine.vintage} · {wine.alcohol}
          </p>
          <p className="mt-8 whitespace-pre-line break-keep text-pretty text-sm leading-7 text-swiss-ink/70">{wine.description}</p>
          <div className="mt-10">
            <Link
              href="/contact"
              className="inline-flex bg-swiss-ink px-6 py-3 text-xs font-bold uppercase tracking-widest text-white transition hover:bg-swiss-accent"
            >
              문의하기
            </Link>
          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-6xl border-b border-swiss-line sm:grid-cols-2">
        <div className="border-swiss-line px-6 py-10 sm:border-r lg:px-8">
          <p className="text-xs font-bold uppercase tracking-widest text-swiss-accent">Tasting Note</p>
          <p className="mt-3 break-keep text-pretty text-sm leading-7 text-swiss-ink/70">{wine.tastingNote}</p>
        </div>
        <div className="border-swiss-line px-6 py-10 lg:px-8">
          <p className="text-xs font-bold uppercase tracking-widest text-swiss-accent">추천 페어링</p>
          <p className="mt-3 break-keep text-pretty text-sm leading-7 text-swiss-ink/70">
            {wine.recommendedPairing || '테이블 상황에 맞는 섬세한 선택으로 제안합니다.'}
          </p>
        </div>
      </section>

      <Footer />
    </main>
  );
}
