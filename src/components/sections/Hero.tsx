'use client';
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export default function Hero() {
    const sloganPart1 = "Masterpieces crafted in limited quantities for only a few tables.";
    const sloganPart2 = "We deliver their timeless value and elegance with care.";
    const sloganPart3 = "절제된 생산으로, 늘 소수의 테이블에만 오르던 세계적인 명작들, 우리는 그 특별한 가치와 품격을 흐트러짐 없이 전합니다.";

  return (
    <>
      {/* -------------------- HERO SECTION (와이너리 이미지 배경) -------------------- */}
      <section 
        className="relative h-[80vh] md:h-screen flex items-center justify-center text-center overflow-hidden bg-cover bg-center" 
        style={{ backgroundImage: "url('/images/heroimage.jpg')" }}
      >
        
        {/* 오버레이 (텍스트 가독성 향상) */}
        {/* <div className="absolute inset-0 bg-black/10 backdrop-brightness-90"></div> */}
        <div className="absolute inset-0 transition-all duration-700"></div>
        
        <div className="relative z-10 p-4 max-w-9xl mx-auto">
          <hgroup>
            {/* ⚡ 슬로건: Part 1 */}
            <p className="text-xl md:text-5xl font-bold text-[#555555] font-serif italic tracking-wide leading-relaxed">
              {sloganPart1}
              <br />{sloganPart2}
            </p>

            {/* ⚡ 슬로건: Part 2 (강조) */}
            <h1 className="text-xl mt-8 md:text-xl font-sans text-orange-200 font-bold mb-10 leading-snug drop-shadow-lg">
              {sloganPart3}
            </h1>
          </hgroup>
          
          {/* 포트폴리오 진입 버튼 */}
          <Link href="/portfolio/spain" className="inline-flex items-center space-x-3 bg-(--bg-text-color) hover:bg-(--bg-text-color) text-white font-bold py-4 px-8 rounded-full shadow-xl shadow-amber-600/40 transition duration-300 transform hover:scale-105 text-lg">
            <span>엄선된 포트폴리오 바로가기</span>
            <ArrowRight className="w-6 h-6 ml-2" />
          </Link>
        </div>
      </section>
      
    </>
  );
}