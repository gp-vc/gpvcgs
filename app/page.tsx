import Image from 'next/image';
import Link from 'next/link';
import { countries } from '@/app/lib/wine-data';
import Header from '@/app/components/Header';
import Footer from '@/app/components/Footer';

const grotesk = { fontFamily: '"Helvetica Neue", Arial, "Segoe UI", sans-serif' };

export default function HomePage() {
  const activeCountries = countries.filter((c) => c.wineries.length > 0);

  return (
    <main style={grotesk} className="min-h-screen bg-swiss-bg text-swiss-ink">
      <Header priority />

      <section className="mx-auto grid max-w-6xl gap-0 border-b border-swiss-line lg:grid-cols-2">
        <div className="flex flex-col justify-center border-swiss-line px-6 py-16 lg:border-r lg:px-8 lg:py-24">
          <p className="text-xs font-bold uppercase tracking-widest text-swiss-accent">01 — GPVC Global Sourcing</p>
          <h1 className="mt-6 break-words text-4xl font-black uppercase leading-[0.95] tracking-tight sm:text-6xl">
            Rare masterpieces. Timeless elegance. Exclusively served.
          </h1>
          <p className="mt-8 max-w-md text-sm leading-7 text-swiss-ink/70">
            절제된 생산으로, 늘 소수의 테이블에만 오르던 세계적인 명작들, 우리는 그 특별한 가치와 품격을 흐트러짐 없이 전합니다.
          </p>
          <div className="mt-10 flex flex-wrap gap-4 text-xs font-bold uppercase tracking-widest">
            <Link href="/contact" className="bg-swiss-ink px-6 py-3 text-white transition hover:bg-swiss-accent">
              파트너십 문의
            </Link>
            <Link href="/portfolio" className="border border-swiss-ink px-6 py-3 transition hover:border-swiss-accent hover:text-swiss-accent">
              와인 컬렉션 보기
            </Link>
          </div>
        </div>
        <div className="relative min-h-[360px]">
          <Image src="/images/heroimage.jpg" alt="GPVC Global Sourcing" fill className="object-cover grayscale" />
        </div>
      </section>

      <section className="mx-auto grid max-w-6xl border-b border-swiss-line lg:grid-cols-[0.4fr_0.6fr]">
        <div className="border-swiss-line px-6 py-6 lg:border-r lg:px-8 lg:py-16">
          <p className="text-xs font-bold uppercase tracking-widest text-swiss-accent">02 — Philosophy</p>
          <h2 className="mt-6 text-pretty text-3xl font-black uppercase leading-tight tracking-tight">
            숫자보다 이야기를 앞세운 선택.
          </h2>
        </div>
        <div className="space-y-6 px-6 py-16 text-sm leading-7 text-swiss-ink/70 lg:px-8">
          <p>
            우리는 대형 브랜드가 아닌, 땅과 사람의 이야기가 담긴 와이너리를 찾습니다. 오랜 시간 자리를 지켜온 포도밭,
            관행을 거스르며 품질을 지켜온 생산자, 그리고 병에 담긴 정직한 풍미. 이 세 가지가 확인될 때만 컬렉션에
            더합니다.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl border-b border-swiss-line px-6 py-16 lg:px-8">
        <p className="text-xs font-bold uppercase tracking-widest text-swiss-accent">03 — Origins</p>
        <h2 className="mt-4 text-3xl font-black uppercase tracking-tight">원산지별 컬렉션</h2>
        <div className="mt-10 grid border border-swiss-line md:grid-cols-3">
          {activeCountries.map((country, i) => {
            const featured = country.wineries[0];
            const imageUrl = country.countrySlug === 'spain' ? '/images/212.jpg' : featured.bgImageUrl;
            return (
              <Link
                key={country.countrySlug}
                href={`/portfolio/${country.countrySlug}`}
                className={`group border-swiss-line p-0 ${i !== activeCountries.length - 1 ? 'border-b md:border-b-0 md:border-r' : ''}`}
              >
                <div className="relative h-56 overflow-hidden">
                  <Image src={imageUrl} alt={country.countryName} fill className="object-cover grayscale-0 transition duration-500 group-hover:grayscale" />
                </div>
                <div className="p-6">
                  <p className="text-xs font-bold uppercase tracking-widest text-swiss-accent">{String(i + 1).padStart(2, '0')} / {country.countryName}</p>
                  <h3 className="mt-2 text-lg font-black uppercase tracking-tight">{country.wineries.length}개 와이너리</h3>
                </div>
              </Link>
            );
          })}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-20 lg:px-8">
        <p className="text-xs font-bold uppercase tracking-widest text-swiss-accent">04 — For Restaurants &amp; Retailers</p>
        <h2 className="mt-5 max-w-2xl text-3xl font-black uppercase leading-tight tracking-tight sm:text-4xl">
          레스토랑과 리테일 파트너를 찾습니다.
        </h2>
        <p className="mt-6 max-w-xl text-sm leading-7 text-swiss-ink/70">
          취급을 고려 중인 채널이 있다면, 원하는 스타일과 물량에 맞춰 컬렉션을 제안해드립니다.
        </p>
        <div className="mt-8">
          <Link href="/contact" className="inline-flex bg-swiss-ink px-6 py-3 text-xs font-bold uppercase tracking-widest text-white transition hover:bg-swiss-accent">
            파트너십 문의하기
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  );
}
