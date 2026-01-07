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
  const wrapperRef = useRef<HTMLDivElement | null>(null);
  const router = useRouter();

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
    if (!active) {
      // 첫 탭: 오버레이만 켜고 네비게이션 차단
      e.preventDefault();
      setActive(true);
      wrapperRef.current?.focus();
    }
    // active 상태면 기본 동작(네비게이션) 허용
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
    <div
      ref={wrapperRef}
      tabIndex={0}
      onKeyDown={onKeyDown}
      aria-expanded={active}
      className={`group ${className} ${active ? 'is-active' : ''}`}
    >
      <Link href={href} onClick={onLinkClick} className="block">
        {children}
      </Link>
    </div>
  );
}