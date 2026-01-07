'use client';
import React, { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

type Props = {
  href: string;
  children: React.ReactNode;
  className?: string;
};

export default function InteractiveCard({ href, children, className = '' }: Props) {
  const [active, setActive] = useState(false);
  const [isTouch, setIsTouch] = useState(false);
  const wrapperRef = useRef<HTMLDivElement | null>(null);
  const router = useRouter();

  useEffect(() => {
    // 터치 디바이스 감지 (SSR 안전)
    if (typeof window !== 'undefined') {
      const touchSupport =
        'ontouchstart' in window ||
        (navigator && (navigator as any).maxTouchPoints > 0) ||
        (window.matchMedia && window.matchMedia('(pointer: coarse)').matches);
      setIsTouch(!!touchSupport);
    }
  }, []);

  useEffect(() => {
    function onPointer(e: PointerEvent) {
      if (wrapperRef.current && !wrapperRef.current.contains(e.target as Node)) {
        setActive(false);
      }
    }
    document.addEventListener('pointerdown', onPointer);
    return () => document.removeEventListener('pointerdown', onPointer);
  }, []);

  function onLinkClick(e: React.MouseEvent) {
    // 모바일/터치 환경에서만 첫 탭을 막고 오버레이를 켬
    if (isTouch && !active) {
      e.preventDefault();
      setActive(true);
      wrapperRef.current?.focus();
    }
    // 데스크톱(마우스)에서는 e.preventDefault() 하지 않아서 즉시 이동
  }

  function onKeyDown(e: React.KeyboardEvent) {
    if (e.key === 'Enter') {
      if (!active) {
        e.preventDefault();
        setActive(true);
      } else {
        // 두번째 Enter는 실제 이동
        router.push(href);
      }
    } else if (e.key === 'Escape') {
      setActive(false);
    }
  }

  return (
    // data-active 어트리뷰트로 하위에서 Tailwind data-[] variant 사용 가능
    <div
      ref={wrapperRef}
      tabIndex={0}
      onKeyDown={onKeyDown}
      aria-expanded={active}
      data-active={active ? 'true' : 'false'}
      className={`group ${className}`}
    >
      <Link href={href} onClick={onLinkClick} className="block">
        {children}
      </Link>
    </div>
  );
}