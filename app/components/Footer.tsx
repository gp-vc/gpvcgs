import Link from 'next/link';
import { MailIcon, PhoneIcon, PinIcon, NaverBlogIcon } from '@/app/components/icons';
import EmailNoticeModal from '@/app/components/EmailNoticeModal';

const address = '서울시 강남구 언주로157길 6, 3층';
const naverBlogUrl = 'https://blog.naver.com/gpvcgs';

export default function Footer() {
  return (
    <footer className="bg-swiss-ink text-white">
      <div className="mx-auto max-w-6xl px-6 py-12 lg:px-8">
        <div className="flex flex-col justify-between gap-8 sm:flex-row sm:items-start">
          <div className="space-y-3 text-sm leading-6 text-white/60">
            <p className="text-sm font-bold uppercase tracking-tight text-white">주식회사 지피브이씨</p>
            <div className="flex items-start gap-2.5">
              <PinIcon className="mt-0.5 h-4 w-4 shrink-0 text-white/40" />
              <span>{address}</span>
            </div>
            <div className="flex items-start gap-2.5">
              <PhoneIcon className="mt-0.5 h-4 w-4 shrink-0 text-white/40" />
              <a href="tel:+8216001228" className="transition hover:text-swiss-accent">1600-1228</a>
            </div>
            <div className="flex items-start gap-2.5">
              <MailIcon className="mt-0.5 h-4 w-4 shrink-0 text-white/40" />
              <a href="mailto:info@gp-vc.com" className="transition hover:text-swiss-accent">info@gp-vc.com</a>
            </div>
          </div>

          <a
            href={naverBlogUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GPVC Global Sourcing 네이버 블로그"
            className="flex h-9 w-9 shrink-0 items-center justify-center border border-white/15 transition hover:border-swiss-accent"
          >
            <NaverBlogIcon className="h-4 w-4" />
          </a>
        </div>

        <div className="mt-10 flex flex-col gap-3 border-t border-white/15 pt-6 text-[11px] font-bold uppercase tracking-widest text-white/40 sm:flex-row sm:items-center sm:justify-between">
          <p>© 2026 GPVC Co.,Ltd. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <Link href="/privacy" className="underline underline-offset-2 transition hover:text-swiss-accent">
              개인정보처리방침
            </Link>
            <EmailNoticeModal />
          </div>
        </div>
      </div>
    </footer>
  );
}
