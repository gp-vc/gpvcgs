import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { Info, MapPin } from "lucide-react";
import InteractiveCard from "@/src/components/layout/InteractiveCard";
import { getAllCountries, getCountryData } from "@/src/data/dataLoader";
import { Country } from "@/src/data/types";

interface Params {
    countrySlug: string;
}

interface Props {
    params: Params;
}

// 1. 빌드 시점에 생성할 모든 국가 경로 정의
export async function generateStaticParams() {
    const countries = await getAllCountries();
    return countries.map(country => ({
        countrySlug: country.countrySlug,
    }));
}

// 2. 서버 컴포넌트로 데이터 로드 및 랜더링
export default async function CountryDetailPage({ params }: Props) {
    const { countrySlug } = await params;

    const countryData: Country | undefined = await getCountryData(countrySlug);

    // 추후에 다른나라 와인도 추가되면 그냥 getAllCountries()써서 거기있는 나라들 활용
    // 지금은 그냥 Spain, Japan, France만. Japan, France는 지금 데이터 없으니 추가예정입니다정도 추가
    const allCountries = [
        {
            key: 1,
            countrySlug: "spain",
            countryName: "Spain"
        },
        {
            key: 2,
            countrySlug: "france",
            countryName: "France",
        },
        {
            key: 3,
            countrySlug: "japan",
            countryName: "Japan",
        }
    ]
    // const allCountries = getAllCountries();

    const currentCountryName = allCountries.find(c => c.countrySlug === countrySlug)?.countryName || countrySlug.toUpperCase();

    if (!allCountries.find(c => c.countrySlug === countrySlug)) {
        notFound();
    }
    if (!countryData) { 
        notFound();
    }

    const isComingSoon = !countryData || countryData.wineries.length === 0;

    return (    
    // <div className="max-w-full mx-auto px-4 py-12 min-h-screen mt-12">
    <div className="min-h-screen flex flex-col font-sans">
      <section className="relative h-[40vh] md:h-[60vh] w-full flex items-center justify-center overflow-hidden">
        {/* 배경 이미지 설정 */}
        <div 
            className="absolute inset-0 bg-cover bg-[length:100%_auto] bg-bottom no-repeat transition-transform duration-1000"
            style={{ backgroundImage: "url('/images/portfoliohero.jpg')" }}
        >
            {/* 오버레이: 텍스트 가시성을 위한 어두운 처리 */}
            <div className="absolute inset-0 bg-black/40 backdrop-brightness-90"></div>
        </div>
        {/* 히어로 타이틀 콘텐츠 */}
        <div className="relative z-10 text-center px-4">
            <h1 className="text-5xl md:text-8xl font-serif text-white drop-shadow-2xl mb-6 tracking-tight uppercase">
                {currentCountryName}
            </h1>
            <div className="w-24 h-1.5 bg-(--bg-text-color) mx-auto rounded-full mb-6"></div>
            <p className="text-white/90 text-lg md:text-2xl font-light tracking-[0.2em] drop-shadow-md">
                
            </p>
        </div>                
      </section>
      <main 
        className="flex-grow bg-repeat py-12 md:py-20"
        style={{ backgroundImage: "url('/images/portfoliobg.png')" }}
      >
      
      <nav className="mb-6 p-3 rounded-lg shadow-sm overflow-x-auto whitespace-nowrap">
        {allCountries.map(country => (
          <Link 
            key={country.key} 
            href={`/portfolio/${country.countrySlug}`}
            className={`inline-block py-2 px-4 text-lg font-semibold transition duration-200 rounded-md
              ${country.countrySlug === countrySlug 
                ? 'bg-(--bg-text-color) text-white shadow-md' // 현재 활성화된 국가
                : 'text-[#555555] hover:bg-gray-100' // 비활성화된 국가
              }
            `}
          >
            {country.countryName}
          </Link>
        ))}
      </nav>
      <hr className="border-t border-gray-200 mb-12" />

      {/* <h1 className="text-5xl font-playfair-display text-amber-700 mb-4">
        {countryData.countryName} 와이너리 포트폴리오
      </h1>
      <p className="text-gray-600 text-lg mb-12">
        {countryData.countryName}의 엄선된 파트너 와이너리를 소개합니다.
      </p> */}
    
      {isComingSoon ? (
        <div className="text-center p-16 bg-white rounded-xl shadow-xl border border-gray-200">
            <Info className="w-12 h-12 mx-auto text-amber-500 mb-4" />
            <h2 className="text-3xl font-serif text-gray-900 mb-3">
                포트폴리오 준비 중입니다.
            </h2>
            <p className="text-gray-600 max-w-lg mx-auto">
                와인은 곧 입고될 예정입니다. 최고의 품질을 위해 신중하게 선별하고 있으니 잠시만 기다려주세요! B2B 선주문 문의는 Contact 페이지를 이용해주세요.
            </p>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-10 px-4">
          {countryData!.wineries.map(winery => {
            const isWhiteLogo = winery.logoUrl && winery.logoUrl.includes('clos-de-lobac.svg');
            const logoClasses = `object-contain transition duration-300 ${isWhiteLogo ? 'filter invert' : ''}`;

            return (
              <InteractiveCard
                key={winery.winerySlug}
                href={`/portfolio/${countrySlug}/${winery.winerySlug}`}
                className="relative block rounded-xl shadow-lg border border-gray-200 overflow-hidden h-80 md:h-96 transition duration-300"
              >
                {/* Background image */}
                <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${winery.bgImageUrl})` }} />

                {/* subtle gradient to improve contrast */}
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/10 to-black/20" />

                {/* logo box (top-left) */}
                {winery.logoUrl && (
                  <div className="absolute top-4 left-4 z-30 w-28 h-14 rounded-md flex items-center justify-center">
                    <Image src={winery.logoUrl} alt={winery.wineryName} fill className={logoClasses} sizes="120px" />
                  </div>
                )}  

                {/* card content (bottom-left) */}
                {/* <div className="absolute left-6 bottom-6 z-10">
                  <h3 className="text-white text-2xl md:text-3xl font-semibold drop-shadow-lg">{winery.wineryName}</h3>
                  {winery.region && <p className="text-white/80 mt-1 text-sm">{winery.region}</p>}
                </div> */}

                {/* overlay: 모바일은 탭으로 켜짐(InteractiveCard), 데스크톱은 hover */}
              {/* overlay: 데스크탑 hover OR 부모 data-active (탭 1회) 에서 표시. 배경 흐림(backdrop) 추가 */}
              <div className="absolute inset-0 bg-black/60 opacity-0 md:opacity-0 transition-all duration-500 z-20 flex flex-col justify-center items-center p-6 text-center
                              group-data-[active=true]:opacity-100 md:group-hover:opacity-100 focus-within:opacity-100
                              group-data-[active=true]:backdrop-blur-sm md:group-hover:backdrop-blur-sm focus-within:backdrop-blur-sm">
                  <div className="text-white space-y-3 transform translate-y-4 transition-transform duration-500 max-w-xs
                                  md:group-hover:translate-y-0 focus-within:translate-y-0 group-data-[active=true]:translate-y-0">
                     <h4 className="text-2xl font-serif font-semibold">{winery.wineryName}</h4>
                     <p className='text-lg text-white font-medium drop-shadow flex items-center justify-center pt-2'>
                             <MapPin className="w-5 h-5 mr-2 text-amber-300" />
                             {winery.region} ({countryData!.countryName})
                     </p>
                     <div className="pt-2">
                       <span className="inline-block bg-white/10 text-white py-2 px-4 rounded-full text-sm font-medium shadow-sm">자세히 보기</span>
                     </div>
                   </div>
                 </div>
              </InteractiveCard>
            );
          })}
        </div>
      )}
      </main>
      </div>
    )}
