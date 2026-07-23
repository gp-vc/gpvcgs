'use client';

import { useEffect, useState } from 'react';
import { CloseIcon } from '@/app/components/icons';

export default function EmailNoticeModal() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpen(false);
    };
    document.addEventListener('keydown', onKeyDown);
    return () => document.removeEventListener('keydown', onKeyDown);
  }, [open]);

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        className="underline underline-offset-2 transition hover:text-swiss-accent"
      >
        이메일무단수집거부
      </button>

      {open ? (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-swiss-ink/70 p-6"
          onClick={() => setOpen(false)}
        >
          <div
            className="relative w-full max-w-md border border-swiss-line bg-swiss-bg p-8 text-swiss-ink"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => setOpen(false)}
              aria-label="닫기"
              className="absolute right-4 top-4 text-swiss-ink/50 transition hover:text-swiss-accent"
            >
              <CloseIcon className="h-5 w-5" />
            </button>
            <p className="text-xs font-bold uppercase tracking-widest text-swiss-accent">이메일무단수집거부</p>
            <p
              className="mt-4 break-keep tracking-normal text-sm leading-7 text-swiss-ink/70"
              style={{ fontFamily: "'Apple SD Gothic Neo', 'Malgun Gothic', 'Helvetica Neue', Arial, sans-serif" }}
            >
              본 사이트에 게시된 이메일 주소가 전자우편 수집 프로그램이나 그 밖의 기술적 장치를 이용하여 무단으로 수집되는 것을 거부하며, 이를 위반 시 정보통신망법에 의해 형사처벌됨을 유의하시기 바랍니다.
            </p>
          </div>
        </div>
      ) : null}
    </>
  );
}
