'use client';
import { useState, useEffect, useRef } from 'react';
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
    const [mobileDropdown, setMobileDropdown] = useState<string | null>(null);
    const [isScrolled, setIsScrolled] = useState(false);
    const [mounted, setMounted] = useState(false);
    const pathname = usePathname();
    const wrapperRef = useRef<HTMLDivElement>(null);

    const isMainPage = pathname === '/';

    useEffect(() => {
      setIsMenuOpen(false);
      setMobileDropdown(null);
    }, [pathname]);

    useEffect(() => {
      function onPointerDown(e: PointerEvent) {
        if (!isMenuOpen) return;
        if (wrapperRef.current && !wrapperRef.current.contains(e.target as Node)) {
          setIsMenuOpen(false);
          setMobileDropdown(null);
        }
      }
      document.addEventListener('pointerdown', onPointerDown);
      return() => document.removeEventListener('pointerdown', onPointerDown);
    }, [isMenuOpen]);

    const handleNavClick = (href: string) => {
        // TODO: 네비게이션바 버튼 클릭시 그 페이지로 리디렉트
        setIsMenuOpen(false);
        if (typeof window !== 'undefined') {

        }
    }

    const toggleMobileDropdown = (name: string) => {
      setMobileDropdown(prev => (prev === name ? null : name));
    };

    return (
    <header
      ref={wrapperRef}
      className="absolute top-0 left-0 right-0 z-50 bg-transparent border-none"
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
        
        {/* 로고 / 회사명 */}
        <Link href="/" className="text-2xl font-serif text-amber-500 font-bold tracking-wider hover:text-amber-400 transition duration-150">
        <div className='relative w-32 h-8 lg:w-32 lg:h-10'>
              <Image
                  src='/branding/gpvc-text-logo-brown.svg'
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
              <Link href={item.href} className="text-(--bg-text-color) hover:text-amber-500 transition duration-150 font-sans flex items-center py-2">
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
        <button 
          onClick={() => setIsMenuOpen(v => !v)}
          aria-expanded={isMenuOpen}
          aria-label="Toggle menu"
          className="md:hidden text-gray-300 hover:text-amber-500"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path></svg>
        </button>
      </nav>

      {/* 모바일 드랍다운 메뉴 (토글 방식, 데스크탑 드롭다운 스타일과 통일) */}
      <div className={`md:hidden px-4 pb-6 ${isMenuOpen ? 'block' : 'hidden'}`}>
        <div className="max-w-7xl mx-auto">
          <div className="bg-gray-800 rounded-lg shadow-xl overflow-hidden border border-gray-700 p-3">
            <div className="flex flex-col space-y-1">
              {navItems.map(item => (
                <div key={item.name} className="w-full">
                  {item.dropdown ? (
                    <>
                      <button
                        type="button"
                        onClick={() => toggleMobileDropdown(item.name)}
                        aria-expanded={mobileDropdown === item.name}
                        className="w-full flex items-center justify-between px-3 py-2 text-left text-base font-medium text-gray-300 hover:bg-amber-600 hover:text-white rounded-md transition"
                      >
                        <span>{item.name}</span>
                        <ChevronDown className={`w-4 h-4 transition-transform ${mobileDropdown === item.name ? 'rotate-180' : ''}`} />
                      </button>

                      <div className={`${mobileDropdown === item.name ? 'max-h-96 opacity-100 py-2' : 'max-h-0 opacity-0 py-0'} overflow-hidden transition-all duration-300`}>
                        {item.dropdown.map(sub => (
                          <Link
                            key={sub.name}
                            href={sub.href}
                            onClick={() => { setIsMenuOpen(false); setMobileDropdown(null); }}
                            className="block px-6 py-2 text-sm text-gray-300 hover:bg-amber-600 hover:text-white rounded-md"
                          >
                            {sub.name}
                          </Link>
                        ))}
                      </div>
                    </>
                  ) : (
                    <Link
                      href={item.href}
                      onClick={() => setIsMenuOpen(false)}
                      className="block px-3 py-2 text-base font-medium text-gray-300 hover:bg-amber-600 hover:text-white rounded-md"
                    >
                      {item.name}
                    </Link>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}