import Link from 'next/link';
import { Mail, Phone, MapPin, Building2 } from 'lucide-react';
import Image from 'next/image';

export default function Footer() {
    const content = {
        company: '주식회사 지피브이씨',
        address: '서울시 강남구 언주로157길 6, 3층',
        phone: '1600-1228',
        email: 'info@gp-vc.com',
        copyright: '©2026 GPVC Co.,Ltd. All rights reserved.',
        businessInfo: '주식회사 지피브이씨 | 대표자: CHA WONIL, KIM WONWOO(김원우), 신정호 | 사업자등록번호: 466-81-03190',
        privacyPolicy: '개인정보처리방침',
        blogUrl: 'https://blog.naver.com/gpvcgs'
    };

    return (
 <footer className='bg-gray-200 text-gray-600'>
            <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 md:py-8 lg:py-10'>
                <div className='grid grid-cols-1 gap-4 md:gap-6 lg:gap-8'>
                    
                    {/* 상단 섹션: 좌측 주소정보 / 우측 블로그아이콘 */}
                    <div className='flex flex-col md:flex-row justify-between items-start md:items-end w-full gap-4 md:gap-0'>
                        
                        {/* 좌측: Contact info */}
                        <div className='space-y-1 md:space-y-2 w-full md:w-auto'>
                            <div className='flex items-start space-x-3'>
                                <span className='text-gray-700 text-xs md:text-sm font-semibold'>{content.company}</span>
                            </div>
                            <div className='flex items-start space-x-3'>
                                <MapPin size={14} className='mt-0.5 flex-shrink-0 opacity-60 hidden sm:block' />
                                <span className='text-gray-600 text-xs md:text-sm'>{content.address}</span>
                            </div>
                            <div className='flex items-center space-x-3'>
                                <Phone size={14} className='flex-shrink-0 opacity-60 hidden sm:block' />
                                <span className='text-gray-600 text-xs md:text-sm'>{content.phone}</span>
                            </div>
                            <div className='flex items-center space-x-3'>
                                <Mail size={14} className='flex-shrink-0 opacity-60 hidden sm:block' />
                                <span className='text-gray-600 text-xs md:text-sm'>{content.email}</span>
                            </div>
                        </div>

                        {/* 우측: 네이버 블로그 아이콘 (Divider 위쪽) */}
                        <div className='mt-3 md:mt-0'>
                            <Link 
                                href={content.blogUrl} 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="group flex items-center space-x-2 transition-all duration-300"
                            >
                                <div className="relative w-5 h-5 md:w-6 md:h-6 grayscale opacity-70 group-hover:opacity-100 group-hover:grayscale-0 transition-all duration-300">
                                    <Image 
                                        src="/images/naver_blog.svg" 
                                        alt="Naver Blog" 
                                        fill
                                        className="object-contain"
                                    />
                                </div>
                            </Link>
                        </div>
                    </div>
 
                     {/* Divider */}
                     <div className='border-t border-gray-300 mt-2 md:mt-3 pt-4 md:pt-6'>
                         <div className='flex flex-col sm:flex-row justify-between items-center space-y-2 sm:space-y-0'>
                             <p className='text-gray-500 text-xs md:text-sm'>{content.copyright}</p>
 
                             {/* Privacy Policy Link */}
                             <Link
                                 href='/privacy-policy'
                                 className='text-gray-500 hover:text-gray-700 transition-colors duration-200 text-xs md:text-sm underline'
                                 >
                                     {content.privacyPolicy}
                             </Link>
                         </div>
                     </div>
                 </div>
             </div>
         </footer>
    )
}