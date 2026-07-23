import Image from 'next/image';
import Link from 'next/link';
import { pressArticles } from '@/app/lib/press-data';
import Header from '@/app/components/Header';
import Footer from '@/app/components/Footer';

const grotesk = { fontFamily: '"Helvetica Neue", Arial, "Segoe UI", sans-serif' };

function formatDate(date: string) {
  return date.replaceAll('-', '.');
}

export default function PressPage() {
  return (
    <main style={grotesk} className="min-h-screen bg-swiss-bg text-swiss-ink">
      <Header active="press" />

      <section className="mx-auto max-w-6xl border-b border-swiss-line px-6 py-16 lg:px-8">
        <p className="text-xs font-bold uppercase tracking-widest text-swiss-accent">Press</p>
        <h1 className="mt-4 max-w-2xl text-4xl font-black uppercase leading-tight tracking-tight sm:text-5xl">
          미디어
        </h1>
        <p className="mt-5 max-w-xl text-sm leading-7 text-swiss-ink/70">
          GPVC에서 수입하는 와이너리에 대한 언론 보도 {pressArticles.length}건을 최신순으로 모았습니다.
        </p>
      </section>

      <div className="pb-24">
        <section className="mx-auto max-w-6xl border-b border-swiss-line">
          <div className="divide-y divide-swiss-line">
            {pressArticles.map((article, i) => (
              <a
                key={article.url}
                href={article.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group grid grid-cols-[2.5rem_6rem_1fr] items-center gap-4 px-6 py-6 transition hover:bg-swiss-ink hover:text-white sm:grid-cols-[2.5rem_6rem_8rem_1fr] lg:px-8"
              >
                <span className="text-xs font-bold uppercase tracking-widest text-swiss-accent group-hover:text-white">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <p className="text-xs font-bold uppercase tracking-widest text-swiss-ink/50 tabular-nums group-hover:text-white/70">
                  {formatDate(article.date)}
                </p>
                <p className="hidden text-xs font-bold uppercase tracking-widest text-swiss-ink/50 group-hover:text-white/70 sm:block">
                  {article.source}
                </p>
                <p className="text-sm font-bold leading-6 tracking-tight sm:text-base">
                  {article.title}
                </p>
              </a>
            ))}
          </div>
        </section>
      </div>

      <Footer />
    </main>
  );
}
