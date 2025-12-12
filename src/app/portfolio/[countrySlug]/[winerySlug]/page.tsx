import Link from "next/link";
import { getAllWineriesPaths, getWineryData } from "@/src/data/dataLoader";
import { Wine, Calendar } from 'lucide-react';
import { notFound } from 'next/navigation';

interface Params {
    countrySlug: string;
    winerySlug: string;
}

interface Props {
    params: Params;
}

// 1. 메타데이터 정의 (for SEO)
export async function generateMetaData({ params }: Props) {
    const { countrySlug, winerySlug } = params;
    const wineryData = await getWineryData(countrySlug, winerySlug);
    if (!wineryData) {
        return { title: 'Not Found' };
    }
    return {
        title: `${wineryData.wineryName} 포트폴리오 | [회사명]`,
        description: `${wineryData.region} 지역의 ${wineryData.wineryName} 와이너리의 상세 와인 목록입니다.`
    }
}

// 2. 빌드 시점에 생성할 모든 와이너리 경로 정의
export async function generateStaticParams() {
    // [{ countrySlug: 'spain', winerySlug: 'Costers del Siurana}, ...]
    return await getAllWineriesPaths();
}

// 3. 서버 컴포넌트로 데이터 로드 및 랜더링
export default async function WineryDetailPage({ params }: Props) {
    const { countrySlug, winerySlug } = await params;
    const wineryData = await getWineryData(countrySlug, winerySlug);

    if (!wineryData) {
        notFound();
    }

    const isComingSoon = wineryData.wines.length === 0;

    return (
    <>
      <section 
        className="relative h-[50vh] md:h-[50vh] flex items-center justify-center text-center overflow-hidden bg-cover bg-center" 
        style={{ backgroundImage: `url(${wineryData.bgImageUrl})` }}
      >
        {/* 밝은 모드 배경에 텍스트 가독성을 위한 오버레이 */}
        <div className="absolute inset-0 bg-black/30 backdrop-brightness-90"></div>
        
        <div className="relative z-10 p-4 max-w-4xl mx-auto">
          {/* ⚡ 제목: {wineryData.wineryName} 포트폴리오 */}
          <h1 className="text-5xl md:text-6xl font-serif text-white font-semibold mb-4 drop-shadow-lg">
            {wineryData.wineryTitle}
          </h1>
          {/* ⚡ 부제목: {wineryData.region}의 {wineryData.wineryName}이 선보이는 와인입니다. */}
          {
            wineryData.wineryDescription.split('\n').map((paragraph, index) => (
              paragraph.trim() && (
                <p key={index} className="text-lg md:text-sm text-white font-sans tracking-normal">
                  <span className="font-semibold">
                    {paragraph}
                  </span>
                </p>
              )
            ))
          }
          
          {/* 와이너리 정보 더보기 버튼 (옵션) */}
        </div>
      </section>
    <div className="max-w-6xl mx-auto px-4 py-16 bg-gray-50 min-h-screen">      

      {/* 그리드 구조: 이미지를 크게 보여주기 위해 3열 그리드로 변경 */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-6 md:gap-8">
        {wineryData.wines.map(wine => (
          <Link 
            key={wine.wineSlug} 
            href={`/portfolio/${countrySlug}/${winerySlug}/${wine.wineSlug}`}
            className="block p-4 bg-white rounded-xl shadow-lg hover:bg-gray-100 transition duration-300 border border-gray-200 group text-center"
          >
            {/* ⚡ 수정: 와인 병 이미지 (크게) */}
            <div className="flex justify-center items-center h-48 mb-4">
                <img 
                    src={wine.imageUrl || `https://placehold.co/120x300/8B4513/FFFFFF?text=Bottle`} 
                    alt={`${wine.name} bottle shot`} 
                    className="h-full w-auto object-contain transition duration-300 group-hover:scale-105"
                />
            </div>
            
            {/* ⚡ 수정: 와인명 및 빈티지 (간결하게) */}
            <h3 className="text-lg font-serif text-gray-900 font-semibold line-clamp-2">
                {wine.name}
            </h3>
            <p className="text-gray-400 text-sm mt-1 flex items-center justify-center">
                <Calendar className="w-3 h-3 mr-1 text-amber-500" />
                {wine.vintage}
            </p>

            {/* 기존의 테이스팅 노트 요약은 제거됨 */}
          </Link>
        ))}
      </div>
    </div>
  </>
  );
}