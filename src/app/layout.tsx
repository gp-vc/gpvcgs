import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Footer from "../components/layout/Footer";
import Header from "../components/layout/Header";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

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
        <html lang="ko" className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
          <head>
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
