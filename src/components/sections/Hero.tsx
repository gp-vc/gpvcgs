'use client';
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export default function Hero() {
    const sloganPart1 = "숨겨져있던 세계적 걸작";
    const sloganPart2 = " 그 경이로움을 당신의 일상으로";
    const sloganPart3 = "(주)지피브이씨는 대중의 시선 밖, 숨겨진 생산자들의 기록을 발굴하여 와인 그 이상의 가치를 수입합니다.";

  return (
    <>
      {/* -------------------- HERO SECTION (와이너리 이미지 배경) -------------------- */}
      <section 
        className="relative h-[80vh] md:h-screen flex items-center justify-center text-center overflow-hidden bg-cover bg-center" 
        style={{ backgroundImage: "url('/images/heroimage.jpg')" }}
      >
        
        {/* 오버레이 (텍스트 가독성 향상) */}
        {/* <div className="absolute inset-0 bg-black/10 backdrop-brightness-90"></div> */}
        <div className="absolute inset-0 bg-black/40 transition-all duration-700"></div>
        
        <div className="relative z-10 p-4 max-w-7xl mx-auto">
          <hgroup>
            {/* ⚡ 슬로건: Part 1 */}
            <p className="text-xl md:text-5xl font-bold text-slate-300 font-sans tracking-wide leading-relaxed">
              {sloganPart1}, 
              {sloganPart2}
            </p>

            {/* ⚡ 슬로건: Part 2 (강조) */}
            <h1 className="text-xl mt-8 md:text-xl font-sans text-orange-200 font-bold mb-10 leading-snug drop-shadow-lg">
              {sloganPart3}
            </h1>
          </hgroup>
          
          {/* 포트폴리오 진입 버튼 */}
          <Link href="/portfolio/spain" className="inline-flex items-center space-x-3 bg-amber-600 hover:bg-amber-600 text-white font-bold py-4 px-8 rounded-full shadow-xl shadow-amber-600/40 transition duration-300 transform hover:scale-105 text-lg">
            <span>엄선된 포트폴리오 바로가기</span>
            <ArrowRight className="w-6 h-6 ml-2" />
          </Link>
        </div>
      </section>

      {/* -------------------- 추가 콘텐츠 섹션 (예: 회사 소개 요약 등) -------------------- */}
      {/* <section className="py-20 max-w-7xl mx-auto px-4 text-center">
        <h2 className="text-3xl font-playfair-display text-gray-900 mb-4">Our Curation Philosophy</h2>
        <p className="text-gray-600 max-w-3xl mx-auto">
          저희는 단순한 수입사가 아닌, 와인 메이커의 열정과 독창성을 한국 시장에 연결하는 큐레이터입니다.
        </p>
      </section> */}
      
    </>
  );
}