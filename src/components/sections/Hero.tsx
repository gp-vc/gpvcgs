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
        className="relative min-h-screen flex items-center justify-center text-center overflow-hidden bg-cover bg-center" 
        style={{ backgroundImage: "url('/images/448.jpg')" }}
      >
        
        {/* 오버레이 (텍스트 가독성 향상): 전체 약간 어둡게 + 텍스트 뒤 중앙에 밝은 그라디언트 */}
        <div className="absolute inset-0 transition-all duration-700 pointer-events-none">
          {/* 전체 약한 다크 레이어 (이미지 대비 안정화) */}
          <div className="absolute inset-0 bg-black/8"></div>
          {/* 텍스트가 위치한 중앙 영역만 밝게 만들어 하단 나무색과 경계 문제 해결 */}
          <div className="absolute left-0 right-0 top-1/3 bottom-1/3 bg-gradient-to-b from-transparent to-transparent"></div>
        </div>
        
        <div className="relative z-20 p-4 max-w-9xl mx-auto">
          <hgroup>
             {/* ⚡ 슬로건: Part 1 */}
             <p className="text-xl md:text-5xl font-bold text-white font-serif italic tracking-wide leading-relaxed">
               {sloganPart1}
               <br />{sloganPart2}
             </p>
 
             {/* ⚡ 슬로건: Part 2 (강조) */}
            <h1 className="text-xl mt-8 md:text-xl font-sans text-orange-200 font-bold mb-6 md:mb-10 leading-snug drop-shadow-lg">
               {sloganPart3}
             </h1>
           </hgroup>
          
          {/* 포트폴리오 진입 버튼 */}
          <Link href="/portfolio/spain" className="inline-flex items-center space-x-3 bg-(--bg-text-color)/70 hover:bg-(--bg-text-color)/70 text-white font-bold py-4 px-8 rounded-full shadow-xl shadow-amber-600/40 transition duration-300 transform hover:scale-105 text-lg">
            <span>엄선된 포트폴리오 바로가기</span>
            <ArrowRight className="w-6 h-6 ml-2" />
          </Link>
        </div>
      </section>
      
    </>
  );
}