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
            <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 lg:py-10'>
                <div className='grid grid-cols-1 gap-6 lg:gap-8'>
                    
                    {/* 상단 섹션: 좌측 주소정보 / 우측 블로그아이콘 */}
                    <div className='flex flex-col md:flex-row justify-between items-end md:items-end w-full'>
                        
                        {/* 좌측: Contact info */}
                        <div className='space-y-2 w-full md:w-auto'>
                            <div className='flex items-start space-x-3'>
                                <span className='text-gray-500 text-md font-medium'>{content.company}</span>
                            </div>
                            <div className='flex items-start space-x-3'>
                                <MapPin size={16} className='mt-1 flex-shrink-0 opacity-70' />
                                <span className='text-gray-500 text-sm'>{content.address}</span>
                            </div>
                            <div className='flex items-center space-x-3'>
                                <Phone size={16} className='flex-shrink-0 opacity-70' />
                                <span className='text-gray-500 text-sm'>{content.phone}</span>
                            </div>
                            <div className='flex items-center space-x-3'>
                                <Mail size={16} className='flex-shrink-0 opacity-70' />
                                <span className='text-gray-500 text-sm'>{content.email}</span>
                            </div>
                        </div>

                        {/* 우측: 네이버 블로그 아이콘 (Divider 위쪽) */}
                        <div className='mt-6 md:mt-0'>
                            <Link 
                                href={content.blogUrl} 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="group flex items-center space-x-2 transition-all duration-300"
                            >
                                <div className="relative w-6 h-6 grayscale group-hover:grayscale-0 transition-all duration-300">
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
                     <div className='md:col-span-2 border-t border-silver-800 mt-3 pt-6'>
                         <div className='flex flex-col sm:flex-row justify-between items-center space-y-3 sm:space-y-0'>
                             <p className='text-gray-400 text-sm'>{content.copyright}</p>
 
                             {/* Privacy Policy Link */}
                             <Link
                                 href='/privacy-policy'
                                 className='text-gray-400 hover:text-[#bdb9dc] transition-colors duration-200 text-sm underline'
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