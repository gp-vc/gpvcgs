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

  // 항상 preventDefault 한 뒤, 환경에 맞게 직접 라우팅 처리
  function onLinkClick(e: React.MouseEvent) {
    e.preventDefault();

    if (isTouch) {
      if (!active) {
        setActive(true);
        wrapperRef.current?.focus();
        return;
      }
      // 이미 active 상태면 탭 두번째(실제 이동)
      router.push(href);
    } else {
      // 데스크탑/마우스: 즉시 이동
      router.push(href);
    }
  }

  function onKeyDown(e: React.KeyboardEvent) {
    if (e.key === 'Enter') {
      if (!active) {
        e.preventDefault();
        setActive(true);
      } else {
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
      data-active={active ? 'true' : 'false'}
      className={`group ${className}`}
    >
      {/* Link은 시맨틱 유지를 위해 남겨두되 클릭은 항상 preventDefault 후 직접 처리 */}
      <Link href={href} onClick={onLinkClick} className="block" aria-hidden="false">
        {children}
      </Link>
    </div>
  );
}