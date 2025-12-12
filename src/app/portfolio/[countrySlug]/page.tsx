import Link from "next/link";
import Image from "next/image";
import { getAllCountries, getCountryData } from "@/src/data/dataLoader";
import { Briefcase, MapPin, Info, Loader2 } from "lucide-react";
import { notFound } from "next/navigation";
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
    <div className="max-w-6xl mx-auto px-4 py-12 min-h-screen">
      <nav className="mb-6 p-3 rounded-lg shadow-sm overflow-x-auto whitespace-nowrap">
        {allCountries.map(country => (
          <Link 
            key={country.key} 
            href={`/portfolio/${country.countrySlug}`}
            className={`inline-block py-2 px-4 text-lg font-semibold transition duration-200 rounded-md
              ${country.countrySlug === countrySlug 
                ? 'bg-amber-600 text-white shadow-md' // 현재 활성화된 국가
                : 'text-gray-700 hover:bg-gray-100' // 비활성화된 국가
              }
            `}
          >
            {country.countryName}
          </Link>
        ))}
      </nav>
      <hr className="border-t border-gray-200 mb-12" />

      <h1 className="text-5xl font-playfair-display text-amber-700 mb-4">
        {countryData.countryName} 와이너리 포트폴리오
      </h1>
      <p className="text-gray-600 text-lg mb-12">
        {countryData.countryName}의 엄선된 파트너 와이너리를 소개합니다.
      </p>
    
      {isComingSoon? (
        <div className="text-center p-16 bg-white rounded-xl shadow-xl border border-gray-200">
            <Info className="w-12 h-12 mx-auto text-amber-500 mb-4" />
            <h2 className="text-3xl font-serif text-gray-900 mb-3">
                포트폴리오 준비 중입니다.
            </h2>
            <p className="text-gray-600 max-w-lg mx-auto">
                {currentCountryName} 와인은 곧 입고될 예정입니다. 최고의 품질을 위해 신중하게 선별하고 있으니 잠시만 기다려주세요! B2B 선주문 문의는 Contact 페이지를 이용해주세요.
            </p>
            <Link 
                href="/contact"
                className="mt-6 inline-flex items-center text-white bg-amber-600 hover:bg-amber-700 font-semibold py-2 px-4 rounded-lg transition duration-150 shadow-md"
            >
                B2B 문의하기
            </Link>
        </div>        
      ) : (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {countryData.wineries.map(winery => (
            <Link 
              key={winery.winerySlug} 
              href={`/portfolio/${countrySlug}/${winery.winerySlug}`}
              className="block bg-white p-6 rounded-xl shadow-lg border border-gray-200 hover:shadow-xl transition duration-300 text-center group"
            >
              {/* ⚡ 와이너리 로고 (Image 컴포넌트 사용) */}
              <div className="relative h-24 w-full mb-4 flex justify-center items-center">
                <Image
                  src={winery.logoUrl || '/images/logos/placeholder.png'}
                  alt={`${winery.wineryName} logo`}
                  fill
                  className="object-contain transition duration-300 group-hover:scale-105"
                  sizes="(max-width: 640px) 100vw, 33vw"
                />
              </div>

              {/* ⚡ 와이너리 이름 및 지역 정보 */}
              <h2 className="text-xl font-serif text-gray-900 font-bold mt-4 mb-1">
                {winery.wineryName}
              </h2>
              <p className="text-gray-600 flex items-center justify-center text-sm">
                  <MapPin className="w-4 h-4 mr-2 text-amber-600" /> 
                  {winery.region} ({countryData!.countryName})
              </p>
            </Link>


        //   <div key={winery.winerySlug} className="bg-white p-6 rounded-xl shadow-lg border border-gray-200 hover:shadow-xl transition duration-300">
        //     <h2 className="text-3xl font-serif text-gray-900 mb-2">{winery.wineryName}</h2>
        //     <p className="text-gray-600 mb-4 flex items-center">
        //         <MapPin className="w-4 h-4 mr-2 text-amber-600" /> 
        //         {winery.region} ({winery.regionKR})
        //     </p>
        //     {/* 3단계 와인 목록 페이지로 이동 */}
        //     <Link 
        //       href={`/portfolio/${countrySlug}/${winery.winerySlug}`}
        //       className="mt-3 inline-flex items-center text-amber-700 hover:text-amber-600 font-semibold transition duration-150"
        //     >
        //       <Briefcase className="w-5 h-5 mr-2" />
        //       와이너리 와인 목록 보기
        //     </Link>
        ))}
      </div>        
      )}  
    </div>
    );
    
}
