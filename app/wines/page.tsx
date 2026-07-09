import { getAllWinesFlat } from '@/app/lib/wine-data';
import Header from '@/app/components/Header';
import Footer from '@/app/components/Footer';
import WinesList from '@/app/wines/WinesList';

const grotesk = { fontFamily: '"Helvetica Neue", Arial, "Segoe UI", sans-serif' };

export default function WinesPage() {
  const entries = getAllWinesFlat();
  const total = entries.length;

  return (
    <main style={grotesk} className="min-h-screen bg-swiss-bg text-swiss-ink">
      <Header active="wines" />

      <section className="mx-auto max-w-6xl border-b border-swiss-line px-6 py-16 lg:px-8">
        <p className="text-xs font-bold uppercase tracking-widest text-swiss-accent">All Wines</p>
        <h1 className="mt-4 max-w-2xl text-4xl font-black uppercase leading-tight tracking-tight sm:text-5xl">
          전체 와인 카탈로그
        </h1>
        <p className="mt-5 max-w-xl text-sm leading-7 text-swiss-ink/70">
          취급 중인 {total}종의 와인을 한 번에 확인할 수 있는 리스트입니다.
        </p>
      </section>

      <WinesList entries={entries} />

      <Footer />
    </main>
  );
}
