import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { getAllWineryParams, getWineryBySlug, splitFirstSentence } from '@/app/lib/wine-data';
import Header from '@/app/components/Header';
import Footer from '@/app/components/Footer';

const grotesk = { fontFamily: '"Helvetica Neue", Arial, "Segoe UI", sans-serif' };

type WineryPageProps = {
  params: { countrySlug: string; winerySlug: string };
};

export function generateStaticParams() {
  return getAllWineryParams();
}

export default function WineryPage({ params }: WineryPageProps) {
  const winery = getWineryBySlug(params.countrySlug, params.winerySlug);

  if (!winery) {
    notFound();
  }

  const { quote, remainder } = splitFirstSentence(winery.wineryDescription);

  return (
    <main style={grotesk} className="min-h-screen bg-swiss-bg text-swiss-ink">
      <Header active="portfolio" />

      <section className="mx-auto grid max-w-6xl border-b border-swiss-line lg:grid-cols-2">
        <div className="flex flex-col justify-center border-swiss-line px-6 py-16 lg:border-r lg:px-8 lg:py-20">
          <Link href={`/portfolio/${params.countrySlug}`} className="text-xs font-bold uppercase tracking-widest text-swiss-ink/50 transition hover:text-swiss-accent">
            ← {winery.regionKR}
          </Link>
          <p className="mt-6 text-xs font-bold uppercase tracking-widest text-swiss-accent">{winery.regionKR}</p>
          <h1 className="mt-4 text-4xl font-black uppercase leading-[0.95] tracking-tight sm:text-5xl">
            {winery.wineryName}
          </h1>
        </div>
        <div className="relative min-h-[320px]">
          <Image src={winery.bgImageUrl} alt={winery.wineryName} fill className="object-cover grayscale" />
        </div>
      </section>

      <section className="mx-auto grid max-w-6xl border-b border-swiss-line lg:grid-cols-[0.35fr_0.65fr]">
        <div className="border-swiss-line px-6 py-6 lg:border-r lg:px-8 lg:py-16">
          <p className="text-xs font-bold uppercase tracking-widest text-swiss-accent">Producer Story</p>
        </div>
        <div className="px-6 py-16 lg:px-8">
          <p className="text-2xl font-black uppercase leading-snug tracking-tight sm:text-3xl">
            &ldquo;{quote}&rdquo;
          </p>
          {remainder ? (
            <p className="mt-6 whitespace-pre-line text-sm leading-7 text-swiss-ink/70">{remainder}</p>
          ) : null}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-16 lg:px-8">
        <p className="text-xs font-bold uppercase tracking-widest text-swiss-accent">Wines</p>
        <h2 className="mt-4 text-2xl font-black uppercase tracking-tight">{winery.wineryName}의 와인</h2>
      </section>

      <section className="mx-auto max-w-6xl border-t border-swiss-line">
        <div className="grid sm:grid-cols-2">
          {winery.wines.map((wine, i) => (
            <Link
              key={wine.wineSlug}
              href={`/portfolio/${params.countrySlug}/${params.winerySlug}/${wine.wineSlug}`}
              className={`group border-swiss-line ${i % 2 === 0 ? 'sm:border-r' : ''} ${i < winery.wines.length - (winery.wines.length % 2 === 0 ? 2 : 1) ? 'border-b' : ''}`}
            >
              <div className="relative h-64 overflow-hidden bg-white">
                <Image src={wine.imageUrl} alt={wine.nameKR} fill className="object-contain p-8 grayscale-0 transition duration-500 group-hover:grayscale" />
              </div>
              <div className="p-6">
                <p className="text-xs font-bold uppercase tracking-widest text-swiss-accent">
                  {String(i + 1).padStart(2, '0')} / {wine.nameKR}
                </p>
                <h3 className="mt-2 text-lg font-black uppercase tracking-tight">{wine.name}</h3>
                <p className="mt-2 text-sm text-swiss-ink/60">{wine.vintage} · {wine.alcohol}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <Footer />
    </main>
  );
}
