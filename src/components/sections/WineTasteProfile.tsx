'use client';
import { Wine } from '@/src/data/types';

interface TasteProfileProps {
    profile: Wine['tasteProfile'];
}

// 슬라이더 UI를 랜더링하는 컴포넌트
const ProfileSlider: React.FC<{ labelLeft: string; labelRight: string; value: number }> = ({ labelLeft, labelRight, value }) => {
    // value ranges from 1 to 5, converting it to css width (20% each)
    const widthPercentage = value * 20;

    return (
    <div className="mb-4">
      <div className="flex justify-between text-sm font-semibold text-gray-700 mb-1">
        <span>{labelLeft}</span>
        <span>{labelRight}</span>
      </div>
      <div className="relative h-2 rounded-full bg-gray-200">
        {/* 활성 슬라이더 부분: 앰버 색상 */}
        <div 
          className="absolute h-2 rounded-full bg-amber-600 transition-all duration-500" 
          style={{ width: `${widthPercentage}%` }} 
        />
        {/* 현재 값을 표시하는 마커: 중앙에 위치 */}
        <div 
          className="absolute h-4 w-4 rounded-full bg-amber-700 border-2 border-white shadow-md top-1/2 transform -translate-y-1/2 -translate-x-1/2" 
          style={{ left: `${widthPercentage}%` }} 
        />
      </div>
    </div>        
    )
}

export default function WineTasteProfile({ profile }: TasteProfileProps) {
  return (
    <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-lg mt-8">
      <h3 className="text-2xl font-sans text-gray-900 font-semibold mb-6 border-b border-gray-200 pb-3">
        팔레트
      </h3>
      
      <div className="space-y-6">
        <ProfileSlider 
          labelLeft="가벼운" 
          labelRight="풀바디" 
          value={profile.body} 
        />
        <ProfileSlider 
          labelLeft="부드러운" 
          labelRight="탄닌감있는" 
          value={profile.tannin} 
        />
        <ProfileSlider 
          labelLeft="드라이한" 
          labelRight="달콤한" 
          value={profile.sweetness} 
        />
        <ProfileSlider 
          labelLeft="낮은 산도" 
          labelRight="높은 산도" 
          value={profile.acidity} 
        />
      </div>
    </div>
  );    
}