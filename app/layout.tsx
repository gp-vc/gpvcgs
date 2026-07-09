import './globals.css';
import type { Metadata } from 'next';

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.gpvcgs.com';

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: 'GPVC Global Sourcing',
  description: '와이너리의 정체성과 철학을 살린 수입 와인을 소개하는 GPVC Global Sourcing입니다.',
  openGraph: {
    title: 'GPVC Global Sourcing',
    description: '와이너리의 정체성과 철학을 살린 수입 와인을 소개하는 GPVC Global Sourcing입니다.',
    url: SITE_URL,
  },
  verification: {
    other: {
      'naver-site-verification': ['a11361273ae8e4d85a1cd06f4a563b2085106d29'],
    },
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body>{children}</body>
    </html>
  );
}
