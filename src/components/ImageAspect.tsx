'use client';
import Image from 'next/image';
import { useState } from 'react';

type Props = {
  src: string;
  alt?: string;
  className?: string;
  fallbackRatio?: number; // height / width
  children?: React.ReactNode;
  fallbackMinHeight?: string;
};

export default function ImageAspect({
  src,
  alt = '',
  className = '',
  fallbackRatio,
  children,
  fallbackMinHeight = '40vh',
}: Props) {
  const [ratio, setRatio] = useState<number | null>(fallbackRatio ?? null);

  return (
    <div className={`w-full overflow-hidden ${className}`}>
      <div
        className="relative w-full"
        style={ratio ? { paddingTop: `${ratio * 100}%` } : { minHeight: fallbackMinHeight }}
      >
        <Image
          src={src}
          alt={alt}
          fill
          className="object-cover object-center"
          onLoadingComplete={(res: any) => {
            if (res?.naturalWidth && res?.naturalHeight) {
              setRatio(res.naturalHeight / res.naturalWidth);
            }
          }}
        />
        {children && <div className="absolute inset-0">{children}</div>}
      </div>
    </div>
  );
}