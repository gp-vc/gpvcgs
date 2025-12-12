'use client';
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export default function Hero() {
    const sloganPart1 = "대중의 시선 밖에 존재하는, 알려지지 않은 세계적인 명작, 모두에게 허락되지 않은 경이로움";
    const sloganPart2 = "장인의 집념이 빚어낸 걸작을 만나보세요.";

  return (
    <>
      {/* -------------------- HERO SECTION (와이너리 이미지 배경) -------------------- */}
      <section 
        className="relative h-[80vh] md:h-screen flex items-center justify-center text-center overflow-hidden bg-cover bg-center" 
        style={{ backgroundImage: "url('/images/heroimage.jpg')" }}
      >
        
        {/* 오버레이 (텍스트 가독성 향상) */}
        <div className="absolute inset-0 bg-black/10 backdrop-brightness-90"></div>
        {/* <div className="absolute bg-black/50 backdrop-brightness-90 backdrop-blur-none"></div>  */}
        <div className="relative z-10 p-4 max-w-5xl mx-auto">
          <hgroup>
            {/* ⚡ 슬로건: Part 1 */}
            <p className="text-xl md:text-2xl text-gray-700 font-sans tracking-wide mb-8 leading-relaxed">
              {sloganPart1}
            </p>

            {/* ⚡ 슬로건: Part 2 (강조) */}
            <h1 className="text-4xl md:text-7xl font-playfair-display text-amber-700 font-bold mb-10 leading-snug drop-shadow-lg">
              {sloganPart2}
            </h1>
          </hgroup>
          
          {/* 포트폴리오 진입 버튼 */}
          <Link href="/portfolio/spain" className="inline-flex items-center space-x-3 bg-amber-600 hover:bg-amber-700 text-white font-bold py-4 px-8 rounded-full shadow-xl shadow-amber-600/40 transition duration-300 transform hover:scale-105 text-lg">
            <span>엄선된 포트폴리오 바로가기</span>
            <ArrowRight className="w-6 h-6 ml-2" />
          </Link>
        </div>
      </section>

      {/* -------------------- 추가 콘텐츠 섹션 (예: 회사 소개 요약 등) -------------------- */}
      <section className="py-20 max-w-7xl mx-auto px-4 text-center">
        <h2 className="text-3xl font-playfair-display text-gray-900 mb-4">Our Curation Philosophy</h2>
        <p className="text-gray-600 max-w-3xl mx-auto">
          저희는 단순한 수입사가 아닌, 와인 메이커의 열정과 독창성을 한국 시장에 연결하는 큐레이터입니다.
        </p>
      </section>
      
    </>
  );
}