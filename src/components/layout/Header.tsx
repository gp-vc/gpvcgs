'use client';
import { useState } from 'react';
import Link from 'next/link';
import { ChevronDown } from 'lucide-react';
import { usePathname } from 'next/navigation';
import Image from 'next/image';

interface DropDownItem {
    name: string;
    href: string;
}

interface NavItem {
    name: string;
    href: string;
    dropdown?: DropDownItem[];
}

const navItems: NavItem[] = [
    { name: 'HOME', href: '/' },
    {
        name: 'PORTFOLIO',
        href: '/portfolio/spain',
        dropdown: [
            { name: 'Spain', href: '/portfolio/spain' },
            { name: 'France', href: '/portfolio/france' },
            { name: 'Japan', href: '/portfolio/japan' },
        ]
    },
    { name: 'CONTACT', href: '/contact' },
];

export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const [mounted, setMounted] = useState(false);
    const pathname = usePathname();

    const isMainPage = pathname === '/';

    const handleNavClick = (href: string) => {
        // TODO: 네비게이션바 버튼 클릭시 그 페이지로 리디렉트
        setIsMenuOpen(false);
        if (typeof window !== 'undefined') {

        }
    }

    return (
    <header
      className="absolute top-0 left-0 right-0 z-50 bg-transparent border-none"
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
        
        {/* 로고 / 회사명 */}
        <Link href="/" className="text-2xl font-serif text-amber-500 font-bold tracking-wider hover:text-amber-400 transition duration-150">
        <div className='relative w-32 h-8 lg:w-32 lg:h-10'>
              <Image
                  src='/branding/gpvc-text-logo-gray.svg'
                  alt='GPVC Logo'
                  fill
                  priority
                  className='object-contain drop-shadow-2xl'
                  sizes='56px'
              />
            </div>
        </Link>
        
        {/* 네비게이션 메뉴 (데스크톱) */}
        <div className="hidden md:flex space-x-6">
          {navItems.map((item) => (
            // relative group: 드롭다운을 위한 부모 요소
            <div key={item.name} className="relative group">
              {/* 메인 메뉴 항목 */}
              <Link href={item.href} className="text-[#555555] hover:text-amber-500 transition duration-150 font-sans flex items-center py-2">
                {item.name}
                {/* 드롭다운이 있을 경우에만 화살표 아이콘 표시 */}
                {item.dropdown && (
                  <ChevronDown className="w-4 h-4 ml-1 transition-transform duration-200 group-hover:rotate-180" />
                )}
              </Link>

              {/* 드롭다운 메뉴 (숨겨진 부분) */}
              {item.dropdown && (
                <div className="absolute left-0 mt-0 pt-2 
                                invisible opacity-0 group-hover:visible group-hover:opacity-100 
                                transition duration-300 transform translate-y-2 group-hover:translate-y-0
                                w-48 bg-gray-800 rounded-lg shadow-xl overflow-hidden border border-gray-700 z-50">
                  {item.dropdown.map((subItem) => (
                    <Link key={subItem.name} href={subItem.href} className="block px-4 py-2 text-sm text-gray-300 hover:bg-amber-600 hover:text-white transition duration-150">
                      {subItem.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
        
        {/* 모바일 메뉴 버튼 Placeholder */}
        <button className="md:hidden text-gray-300 hover:text-amber-500">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path></svg>
        </button>
      </nav>
    </header>
  );
}