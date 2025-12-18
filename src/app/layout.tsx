import type { Metadata } from "next";
import { Noto_Sans_KR, Playfair_Display, Sacramento } from "next/font/google";
import "./globals.css";
import Footer from "../components/layout/Footer";
import Header from "../components/layout/Header";

const notoSansKr = Noto_Sans_KR({
  subsets: ['latin'],
  weight: ['300', '400', '700'],
  variable: '--font-noto-sans-kr',
});

const playfairDisplay = Playfair_Display({
  subsets: ['latin'],
  weight: ['400', '700'],
  style: ['normal', 'italic'],
  variable: '--font-playfair-display',
})

const sacramento = Sacramento({
  subsets: ['latin'],
  weight: ['400'],
  variable: '--font-sacramento',
})

export const metadata: Metadata = {
  title: "GPVC Wine Webpage",
  description: "GPVC global",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
      return (
        // ⚡ Light Mode: 기본 배경색을 흰색 계열로 변경
        <html lang="ko" className={`${notoSansKr.variable} ${playfairDisplay.variable} ${sacramento.variable} antialiased`}>
          <head>
            <link rel="stylesheet" href="https://use.typekit.net/avl7ajc.css"></link>
            <title>GPVC Wine Website</title>
              <meta
                name='description'
                content='GPVC wine introducing website'
              />
            <meta name='viewport' content='width=device-width, initial-scale=1' />
          </head>
            <body className="min-h-screen bg-gray-50 text-gray-900 antialiased">
                <Header />
                {/* 2. Page Content */}
                <main className="min-h-[calc(100vh-120px)]">
                    {children}
                </main>
                <Footer />
            </body>
        </html>
    );
  // return (
  //   <html lang="ko">
  //     <head>
  //       <title>GPVC Wine website</title>
  //       <meta
  //         name='description'
  //         content='GPVC wine introducing website'
  //       />
  //       <meta name='viewport' content='width=device-width, initial-scale=1' />
  //     </head>
  //     <body
  //       className={`${geistSans.variable} ${geistMono.variable} antialiased`}
  //     >
  //       <Header />
  //       <main>{children}</main>
  //       <Footer />
  //     </body>
  //   </html>
  // );
}
