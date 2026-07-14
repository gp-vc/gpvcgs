import Image from 'next/image';
import Link from 'next/link';
import { countries } from '@/app/lib/wine-data';
import Header from '@/app/components/Header';
import Footer from '@/app/components/Footer';

const grotesk = { fontFamily: '"Helvetica Neue", Arial, "Segoe UI", sans-serif' };

export default function PortfolioPage() {
  return (
    <main style={grotesk} className="min-h-screen bg-swiss-bg text-swiss-ink">
      <Header active="portfolio" />

      <section className="mx-auto max-w-6xl border-b border-swiss-line px-6 py-16 lg:px-8">
        <p className="text-xs font-bold uppercase tracking-widest text-swiss-accent">Portfolio</p>
        <h1 className="mt-4 break-keep text-4xl font-black uppercase leading-tight tracking-tight sm:text-5xl">
          와이너리의 개성을 그대로 담은 컬렉션.
        </h1>
        <p className="mt-5 break-keep text-pretty text-sm leading-7 text-swiss-ink/70">
          생산자의 철학과 땅의 개성이 담겨 있는 와이너리와 와인을 소개합니다. 
        </p>
      </section>

      <section className="mx-auto max-w-6xl border-b border-swiss-line">
        <div className="grid sm:grid-cols-2">
          {countries.map((country, i) => {
            const featured = country.wineries[0];
            const isEmpty = country.wineries.length === 0;
            const borderClasses = `border-swiss-line ${i % 2 === 0 ? 'sm:border-r' : ''} ${i < countries.length - (countries.length % 2 === 0 ? 2 : 1) ? 'border-b' : ''}`;

            if (isEmpty) {
              return (
                <div key={country.countrySlug} className={`flex min-h-[280px] flex-col items-center justify-center gap-3 p-8 text-center opacity-50 ${borderClasses}`}>
                  <p className="text-xs font-bold uppercase tracking-widest text-swiss-accent">Coming Soon</p>
                  <p className="text-sm font-bold uppercase tracking-tight">{country.countryName}</p>
                </div>
              );
            }

            const imageUrl = country.countrySlug === 'spain' ? '/images/212.jpg' : featured.bgImageUrl;

            return (
              <Link key={country.countrySlug} href={`/portfolio/${country.countrySlug}`} className={`group ${borderClasses}`}>
                <div className="relative h-56 overflow-hidden">
                  <Image src={imageUrl} alt={country.countryName} fill className="object-cover grayscale-0 transition duration-500 group-hover:grayscale" />
                </div>
                <div className="p-6">
                  <p className="text-xs font-bold uppercase tracking-widest text-swiss-accent">
                    {String(i + 1).padStart(2, '0')} / {country.countryName}
                  </p>
                  <h2 className="mt-2 text-lg font-black uppercase tracking-tight">
                    {country.wineries.length}개 와이너리 · {country.wineries.reduce((s, w) => s + w.wines.length, 0)}종의 와인
                  </h2>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {country.wineries.map((winery) => (
                      <span key={winery.winerySlug} className="border border-swiss-line px-3 py-1 text-[11px] font-bold uppercase tracking-widest text-swiss-ink/60">
                        {winery.wineryName}
                      </span>
                    ))}
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-16 lg:px-8">
        <p className="text-xs font-bold uppercase tracking-widest text-swiss-accent">Selection Criteria</p>
        <h2 className="mt-4 max-w-xl text-2xl font-black uppercase tracking-tight">
          우리는 와인이 가진 장소성과 개성, 그리고 오래 기억되는 경험을 우선합니다.
        </h2>
        <div className="mt-6">
          <Link href="/contact" className="inline-flex bg-swiss-ink px-6 py-3 text-xs font-bold uppercase tracking-widest text-white transition hover:bg-swiss-accent">
            파트너십 문의
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  );
}
