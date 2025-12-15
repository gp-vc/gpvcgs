import { getAllWinePaths, getWineDetail } from "@/src/data/dataLoader";
import { notFound } from "next/navigation";
import { Leaf, UtensilsCrossed, Gauge, Grape, Calendar } from 'lucide-react';
import Image from "next/image";
import WineTasteProfile from "@/src/components/sections/WineTasteProfile";
import Link from "next/link";

interface Params {
    countrySlug: string;
    winerySlug: string;
    wineSlug: string;
}

interface Props {
    params: Params;
}

// 1. 메타데이터 (SEO) 정의
export async function generateMetadata({ params }: Props) {
    const { countrySlug, winerySlug, wineSlug } = await params;
    const wine = await getWineDetail(countrySlug, winerySlug, wineSlug);

    if (!wine) {
        return { title: 'Not Found' };
    }

    return {
        title: `${wine.name} (${wine.vintage}) - ${wine.winery}`,
        description: wine.tastingNote.substring(0, 150) + '...',
    };
}

// 2. 빌드 시점에 생성할 모든 페이지의 경로를 정의 (SSG)
export async function generateStaticParams() {
    return await getAllWinePaths();
}

// 3. 와인 상세 페이지 컴포넌트 (서버 컴포넌트)
export default async function WineDetailPage({ params }: Props) {
    const { countrySlug, winerySlug, wineSlug } = await params;

    // 컴포넌트 내부에서 데이터 로드
    const wine = await getWineDetail(countrySlug, winerySlug, wineSlug);

    if (!wine) {
        notFound();
    }

    return (
    <div className="max-w-6xl mx-auto p-4 md:p-8 mt-12 mb-24 bg-gray-50">
      <div className="bg-white p-8 md:p-12 rounded-xl shadow-2xl border border-gray-200/50">
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 items-stretch">
          
          {/* -------------------- 1. 와인 이미지 및 메인 정보 (1/3) -------------------- */}
          <div className="lg:col-span-1 flex flex-col items-center h-full">
            {/* ⚡ Image 컴포넌트 적용을 위해 부모 div 크기를 명시 */}
            <div className="relative w-full max-w-xs md:max-w-none md:w-3/4 aspect-[2/3] lg:aspect-[2/3] p-4 bg-gray-100 rounded-lg shadow-md mb-6 flex items-center justify-center max-h-[90vh] lg:max-w-none flex-grow">
                <Image 
                    src={wine.imageUrl || `/images/placeholder-bottle.png`} 
                    alt={`${wine.name} bottle shot`} 
                    fill // ⚡ 부모 div 크기(h-[400px])를 채우도록 설정
                    priority // 상세 페이지의 핵심 이미지이므로 우선 로딩
                    className="object-contain" // 비율 유지하며 컨테이너에 맞춤
                    sizes="(max-width: 1024px) 100vw, 33vw" // 반응형 사이즈 힌트
                />
            </div>
          </div>
          
          {/* -------------------- 2. 상세 설명 및 노트 (2/3) -------------------- */}
          <div className="lg:col-span-2 space-y-6">
             <hgroup className="border-b border-gray-200 pb-4">
                <Link href={`/portfolio/${countrySlug}/${winerySlug}`}><p className="text-sm uppercase text-amber-700 font-semibold tracking-widest">{wine.winery} ({wine.country})</p></Link>
                <h1 className="text-5xl font-playfair-display text-gray-900 mb-2">{wine.name}</h1>
             </hgroup>

             <section className="p-6 rounded-lg bg-gray-50 border border-gray-200">
                {/* <h2 className="text-2xl font-bold text-gray-900 mb-3 flex items-center">
                    <Info className="w-5 h-5 mr-2 text-amber-600" />
                    와인 소개
                </h2> */}
                <p className="text-gray-700 whitespace-pre-line leading-relaxed italic">
                    {wine.description}
                </p>
             </section>

             {/* 테이스팅 노트 섹션 */}
             <section className="bg-amber-50/70 p-6 rounded-lg border-l-4 border-amber-600">
                <h2 className="text-2xl font-bold text-gray-900 mb-3 flex items-center">
                    <Leaf className="w-5 h-5 mr-2 text-amber-600" />
                    Tasting note
                </h2>
                <p className="text-gray-700 whitespace-pre-line leading-relaxed">{wine.tastingNote}</p>
             </section>

             {/* 와인 상세 스펙 (B2B 정보) */}
             <section className="grid grid-cols-1 gap-2 border-t border-gray-200 pt-4 text-sm md:text-base">
             {/* <section className="grid grid-cols-1 sm:grid-cols-1 gap-4 border-t border-gray-200 pt-2"> */}
                <div className="flex items- space-x-2 text-gray-700">
                    <Calendar className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
                    <span className="font-semibold flex-shrink-0">빈티지:</span>
                    <span className="font-medium text-gray-800 flex-grow">{wine.vintage}</span>
                </div>

                <div className="flex items-center space-x-2 text-gray-700">
                    <Grape className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
                    <span className="font-semibold flex-shrink-0">품종:</span>
                    <span className="font-medium text-gray-800 flex-grow">{wine.grape}</span>
                </div>

                <div className="flex items-center space-x-2 text-gray-700">
                    <Gauge className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
                    <span className="font-semibold flex-shrink-0">알코올:</span>
                    <span className="font-medium text-gray-800 flex-grow">{wine.alcohol}</span>
                </div>
                <div className="flex items-center space-x-2 text-gray-700">
                    <UtensilsCrossed className="w-5 h-5 text-amber-600" />
                    <span className="font-semibold flex-shrink-0">페어링:</span>
                    <span className="ffont-medium text-gray-800 flex-grow">{wine.recommendedPairing || '해당 없음'}</span>
                </div>
             </section>
             
             <div>
                <WineTasteProfile profile={wine.tasteProfile} />
             </div>

             {/* B2B 자료 다운로드 버튼 */}
             {/* <div className="mt-8">
                 <a href="/downloads/wine_portfolio.pdf" download className="bg-amber-600 hover:bg-amber-500 text-white font-bold py-3 px-6 rounded-lg transition duration-300 shadow-lg inline-flex items-center">
                     기술 자료 (Tech Sheet) 다운로드
                 </a>
             </div> */}
          </div>
          
        </div>
      </div>
    </div>
    );    
}
