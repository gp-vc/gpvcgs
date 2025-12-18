import Link from "next/link";
import { getAllWineriesPaths, getWineryData } from "@/src/data/dataLoader";
import { Wine, Calendar, ArrowLeft } from 'lucide-react';
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

    const countryBasePath = `/portfolio/${countrySlug}`;

    return (
    <>
      <section 
        className="relative h-[50vh] md:h-[50vh] flex items-center justify-center text-center overflow-hidden bg-cover bg-center" 
        style={{ backgroundImage: `url(${wineryData.bgImageUrl})` }}
      >
        {/* 밝은 모드 배경에 텍스트 가독성을 위한 오버레이 */}
        <div className="absolute inset-0 bg-black/30 backdrop-brightness-90"></div>
        
        <div className="mt-16 relative z-10 p-4 max-w-7xl mx-auto">
          {
            wineryData.wineryTitle.split('\n').map((paragraph, index) => (
              paragraph.trim() && (
                <h1 className="text-5xl md:text-6xl font-seif text-white font-semibold mb-6 drop-shadow-lg">
                  {paragraph}
                </h1>
              )
            ))
          }
          {/* ⚡ 부제목: {wineryData.region}의 {wineryData.wineryName}이 선보이는 와인입니다. */}
          <div className="max-w-4xl mx-auto px-4 hidden md:block">
          {
            wineryData.wineryDescription.split('\n').map((paragraph, index) => (
              paragraph.trim() && (
                <p key={index} className="text-lg md:text-sm text-white text-left font-sans tracking-normal">
                  <span className="font-semibold">
                    {paragraph}
                  </span>
                </p>
              )
            ))
          }
          </div>
          
          {/* 와이너리 정보 더보기 버튼 (옵션) */}
        </div>
      </section>
    <div className="max-w-6xl mx-auto px-4 py-4 bg-gray-50 min-h-screen">      
      <div className="max-w-7xl mx-auto px-4 pt-4 md:pt-8 flex justify-start mb-12">
        <Link 
            href={countryBasePath} // /portfolio/[countrySlug]
            className="inline-flex items-center text-gray-700 hover:text-amber-600 transition duration-150 font-semibold text-sm md:text-base p-2 rounded-lg bg-white shadow-md hover:shadow-lg"
        >
            <ArrowLeft className="w-4 h-4 mr-1 md:mr-2" />
            <span className="hidden sm:inline">국가별 와이너리 목록으로 돌아가기</span>
            <span className="sm:hidden">국가 목록</span>
        </Link>
      </div>  
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
                    className="h-full w-auto object-cover transition duration-300 group-hover:scale-105"
                />
            </div>
            
            {/* ⚡ 수정: 와인명 및 빈티지 (간결하게) */}
            <h3 className="text-lg font-adobe-brim text-gray-400 font-normal line-clamp-2">
                {wine.name}
            </h3>

            {/* 기존의 테이스팅 노트 요약은 제거됨 */}
          </Link>
        ))}
      </div>
    </div>
  </>
  );
}