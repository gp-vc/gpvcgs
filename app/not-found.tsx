import Link from 'next/link';

const grotesk = { fontFamily: '"Helvetica Neue", Arial, "Segoe UI", sans-serif' };

export default function NotFound() {
  return (
    <main style={grotesk} className="flex min-h-screen flex-col items-center justify-center bg-swiss-bg px-6 text-center text-swiss-ink">
      <p className="text-xs font-bold uppercase tracking-widest text-swiss-accent">404</p>
      <h1 className="mt-5 max-w-xl text-4xl font-black uppercase leading-tight tracking-tight sm:text-5xl">
        페이지를 찾을 수 없습니다.
      </h1>
      <p className="mt-6 max-w-xl text-sm leading-7 text-swiss-ink/70">
        요청하신 주소는 현재 서비스에 존재하지 않거나 이동되었습니다. 홈이나 포트폴리오 페이지에서 다시 시작해 주세요.
      </p>
      <div className="mt-10 flex flex-wrap justify-center gap-4 text-xs font-bold uppercase tracking-widest">
        <Link href="/" className="bg-swiss-ink px-6 py-3 text-white transition hover:bg-swiss-accent">
          홈으로 이동
        </Link>
        <Link href="/portfolio" className="border border-swiss-ink px-6 py-3 transition hover:border-swiss-accent hover:text-swiss-accent">
          포트폴리오 보기
        </Link>
      </div>
    </main>
  );
}
