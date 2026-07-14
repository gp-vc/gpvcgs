import Image from 'next/image';
import Link from 'next/link';
import { MailIcon, PhoneIcon, PinIcon } from '@/app/components/icons';
import Header from '@/app/components/Header';
import Footer from '@/app/components/Footer';

const grotesk = { fontFamily: '"Helvetica Neue", Arial, "Segoe UI", sans-serif' };

const checklist = [
  '업체명 및 업종 (레스토랑 / 바 / 리테일 / 유통사 등)',
  '취급을 원하는 와인 또는 스타일',
  '희망 물량 및 거래 형태 (정기 납품 / 단발성 등)',
  '담당자 연락처',
];

const address = '서울시 강남구 언주로157길 6, 3층';
const encodedAddress = encodeURIComponent(address);
const mapEmbedUrl = `https://maps.google.com/maps?q=${encodedAddress}&t=&z=16&ie=UTF8&iwloc=&output=embed`;
const googleMapsLink = `https://www.google.com/maps/search/?api=1&query=${encodedAddress}`;
const directionsLink = `https://www.google.com/maps/dir/?api=1&destination=${encodedAddress}`;
const mailtoLink = 'mailto:info@gp-vc.com?subject=%5BB2B%20%ED%8C%8C%ED%8A%B8%EB%84%88%EC%8B%AD%20%EB%AC%B8%EC%9D%98%5D';

export default function ContactPage() {
  return (
    <main style={grotesk} className="min-h-screen bg-swiss-bg text-swiss-ink">
      <Header active="contact" />

      <section className="mx-auto max-w-6xl border-b border-swiss-line px-6 py-16 lg:px-8">
        <p className="text-xs font-bold uppercase tracking-widest text-swiss-accent">Contact</p>
        <h1 className="mt-4 break-keep text-4xl font-black uppercase leading-tight tracking-tight sm:text-5xl">
          레스토랑·리테일 파트너를 위한 문의
        </h1>
        <p className="mt-5 break-keep text-pretty text-sm leading-7 text-swiss-ink/70">
          취급을 고려 중인 채널이 있다면 편하게 연락 주세요. 원하는 스타일과 물량에 맞춰 컬렉션을 제안해드립니다.
        </p>
      </section>

      <section className="mx-auto grid max-w-6xl border-b border-swiss-line lg:grid-cols-2">
        <div className="flex flex-col justify-center border-swiss-line px-6 py-16 lg:border-r lg:px-8">
          <p className="text-xs font-bold uppercase tracking-widest text-swiss-accent">Get in Touch</p>
          <div className="mt-8 space-y-5 text-sm leading-7">
            <div className="flex items-start gap-3">
              <MailIcon className="mt-0.5 h-4 w-4 shrink-0 text-swiss-accent" />
              <a href={mailtoLink} className="font-bold tracking-tight transition hover:text-swiss-accent">
                info@gp-vc.com
              </a>
            </div>
            <div className="flex items-start gap-3">
              <PhoneIcon className="mt-0.5 h-4 w-4 shrink-0 text-swiss-accent" />
              <a href="tel:+8216001228" className="font-bold tracking-tight transition hover:text-swiss-accent">+82-1600-1228</a>
            </div>
            <div className="flex items-start gap-3">
              <PinIcon className="mt-0.5 h-4 w-4 shrink-0 text-swiss-accent" />
              <span className="font-bold tracking-tight text-swiss-ink/80">{address}</span>
            </div>
          </div>
          <div className="mt-10">
            <a
              href={mailtoLink}
              className="inline-flex bg-swiss-ink px-6 py-3 text-xs font-bold uppercase tracking-widest text-white transition hover:bg-swiss-accent"
            >
              이메일로 문의하기
            </a>
          </div>
        </div>

        <div className="relative min-h-[360px] overflow-hidden">
          <div className="group absolute inset-0">
            <iframe
              src={mapEmbedUrl}
              width="100%"
              height="100%"
              style={{ border: 0 }}
              className="grayscale-0 transition duration-500 group-hover:grayscale"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title={`Map showing ${address}`}
            />
            <div className="pointer-events-none absolute inset-0 flex flex-col items-center justify-center gap-4 bg-swiss-bg/95 p-8 text-center opacity-0 transition duration-300 group-hover:pointer-events-auto group-hover:opacity-100">
              <p className="text-xs font-bold uppercase tracking-widest text-swiss-accent">Office Location</p>
              <p className="max-w-xs text-sm font-bold leading-6 tracking-tight">{address}</p>
              <div className="mt-2 flex flex-col gap-3 sm:flex-row">
                <a
                  href={googleMapsLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-swiss-ink px-5 py-2.5 text-xs font-bold uppercase tracking-widest text-white transition hover:bg-swiss-accent"
                >
                  지도에서 보기
                </a>
                <a
                  href={directionsLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="border border-swiss-ink px-5 py-2.5 text-xs font-bold uppercase tracking-widest text-swiss-ink transition hover:border-swiss-accent hover:text-swiss-accent"
                >
                  길찾기
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-16 lg:px-8">
        <p className="text-xs font-bold uppercase tracking-widest text-swiss-accent">Before You Reach Out</p>
        <h2 className="mt-4 max-w-xl text-2xl font-black uppercase tracking-tight">문의 시 포함해주시면 좋은 정보</h2>
        <div className="mt-8 grid border border-swiss-line sm:grid-cols-2">
          {checklist.map((item, i) => (
            <div
              key={item}
              className={`flex items-start gap-4 p-6 ${i % 2 === 0 ? 'sm:border-r' : ''} ${i < checklist.length - 2 ? 'border-b' : ''} border-swiss-line`}
            >
              <span className="text-xs font-bold uppercase tracking-widest text-swiss-accent">{String(i + 1).padStart(2, '0')}</span>
              <p className="text-sm leading-7 text-swiss-ink/70">{item}</p>
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </main>
  );
}
