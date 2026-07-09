import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { getCountryBySlug, getAllCountryParams } from '@/app/lib/wine-data';
import Header from '@/app/components/Header';
import Footer from '@/app/components/Footer';
import RegionMap from '@/app/components/region-map';
import { countryAdminGeo } from '@/app/lib/geo';

const grotesk = { fontFamily: '"Helvetica Neue", Arial, "Segoe UI", sans-serif' };

type CountryPageProps = {
  params: { countrySlug: string };
};

export function generateStaticParams() {
  return getAllCountryParams();
}

export default function CountryPage({ params }: CountryPageProps) {
  const country = getCountryBySlug(params.countrySlug);

  if (!country) {
    notFound();
  }

  return (
    <main style={grotesk} className="min-h-screen bg-swiss-bg text-swiss-ink">
      <Header active="portfolio" />

      <section className="mx-auto max-w-6xl border-b border-swiss-line px-6 py-16 lg:px-8">
        <Link href="/portfolio" className="text-xs font-bold uppercase tracking-widest text-swiss-ink/50 transition hover:text-swiss-accent">
          ← Portfolio
        </Link>
        <p className="mt-6 text-xs font-bold uppercase tracking-widest text-swiss-accent">{country.countryName}</p>
        <h1 className="mt-4 max-w-2xl text-4xl font-black uppercase leading-tight tracking-tight sm:text-5xl">
          {country.countryName}의 와이너리
        </h1>
        <p className="mt-5 max-w-xl text-sm leading-7 text-swiss-ink/70">
          지역의 테루아와 생산자의 철학을 담아낸 와인들로, 각 와이너리의 개성을 선명하게 보여줍니다.
        </p>
      </section>

      {countryAdminGeo[country.countrySlug] ? (
        <section className="mx-auto max-w-6xl border-b border-swiss-line px-6 py-16 lg:px-8">
          <p className="text-xs font-bold uppercase tracking-widest text-swiss-accent">Where to Find Us</p>
          <h2 className="mt-4 max-w-xl text-2xl font-black uppercase tracking-tight">
            지도에서 와이너리 위치를 확인하세요
          </h2>
          <p className="mt-3 max-w-xl text-sm leading-7 text-swiss-ink/70">
            와이너리가 있는 지역을 클릭하거나 지도 위의 표시를 선택하면 상세 페이지로 이동합니다.
          </p>
          <div className="mt-8">
            <RegionMap countrySlug={country.countrySlug} wineries={country.wineries} />
          </div>
        </section>
      ) : null}

      <section className="mx-auto max-w-6xl">
        <div className="grid sm:grid-cols-2">
          {country.wineries.map((winery, i) => (
            <Link
              key={winery.winerySlug}
              href={`/portfolio/${country.countrySlug}/${winery.winerySlug}`}
              className={`group border-swiss-line ${i % 2 === 0 ? 'sm:border-r' : ''} ${i < country.wineries.length - (country.wineries.length % 2 === 0 ? 2 : 1) ? 'border-b' : ''}`}
            >
              <div className="relative h-64 overflow-hidden">
                <Image src={winery.bgImageUrl} alt={winery.wineryName} fill className="object-cover grayscale-0 transition duration-500 group-hover:grayscale" />
              </div>
              <div className="p-6">
                <p className="text-xs font-bold uppercase tracking-widest text-swiss-accent">
                  {String(i + 1).padStart(2, '0')} / {winery.regionKR}
                </p>
                <h2 className="mt-2 text-xl font-black uppercase tracking-tight">{winery.wineryName}</h2>
                <p className="mt-3 text-sm leading-6 text-swiss-ink/60">{winery.wineryDescription.slice(0, 120)}...</p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <Footer />
    </main>
  );
}
