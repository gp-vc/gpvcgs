import Link from 'next/link';
import { Mail, Phone, MapPin } from 'lucide-react';

export default function Footer() {
    const content = {
        address: '서울시 강남구 언주로157길 6, 3층',
        phone: '1600-1228',
        email: 'info@gp-vc.com',
        copyright: '©2025 GPVC Co.,Ltd. All rights reserved.',
        privacyPolicy: '개인정보처리방침',
    };

    return (
        <footer className='bg-gray-200 text-gray-600'>
            <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 lg:py-10'>
                <div className='grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8'>
                    {/* Contact info (moved to left when logo removed) */}
                    <div className='col-span-1'>
                         <div className='space-y-2'>
                             <div className='flex items-start space-x-3'>
                                 <MapPin
                                     size={16}
                                     className='text-[#bdb9dc] mt-1 flex-shrink-0'
                                 />
                                 <span className='text-gray-500 text-sm'>{content.address}</span>
                             </div>
                             <div className='flex items-center space-x-3'>
                                 <Phone size={16} className='text-[#bdb9dc] flex-shrink-0' />
                                 <span className='text-gray-500 text-sm'>{content.phone}</span>
                             </div>
                             <div className='flex items-center space-x-3'>
                                 <Mail size={16} className='text-[#bdb9dc] flex-shrink-0' />
                                 <span className='text-gray-500 text-sm'>{content.email}</span>
                             </div>
                         </div>
                    </div>
 
                     {/* Divider */}
                     <div className='md:col-span-2 border-t border-silver-800 mt-6 pt-6'>
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