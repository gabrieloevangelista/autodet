"use client";

import { useState } from "react";
import { Icon } from "@iconify/react";

interface CardImageProps {
  src: string;
  alt: string;
  className?: string;
  containerClassName?: string;
  title?: string;
  category?: string;
}

export default function CardImage({
  src,
  alt,
  className = "",
  containerClassName = "",
  title,
  category,
}: CardImageProps) {
  const [isLoaded, setIsLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);

  return (
    <div className={`relative w-full h-full overflow-hidden bg-[#0a0a0a] ${containerClassName}`}>
      {/* Skeleton Loading State */}
      {!isLoaded && !hasError && (
        <div className="absolute inset-0 z-10 flex flex-col items-center justify-center bg-[#0d0d0d] overflow-hidden">
          {/* Shimmer line */}
          <div className="absolute inset-0 -translate-x-full animate-shimmer bg-gradient-to-r from-transparent via-[#FACC15]/10 to-transparent pointer-events-none" />
          
          {/* Subtle pulse icon/badge */}
          <div className="flex flex-col items-center gap-2 relative z-10 opacity-60">
            <div className="w-8 h-8 rounded-full border border-[#FACC15]/30 flex items-center justify-center bg-[#FACC15]/5 animate-pulse shadow-[0_0_12px_rgba(250,204,21,0.15)]">
              <Icon icon="solar:sparkler-linear" className="w-4 h-4 text-[#FACC15]" />
            </div>
            {title && (
              <span className="text-[9px] font-mono tracking-widest uppercase text-gray-500">
                Carregando
              </span>
            )}
          </div>
        </div>
      )}

      {/* Fallback View if Image fails */}
      {hasError ? (
        <div className="absolute inset-0 flex flex-col items-center justify-center p-4 text-center bg-gradient-to-br from-[#141414] via-[#0b0b0b] to-[#050505] border border-white/5">
          <div className="w-10 h-10 rounded-full border border-[#FACC15]/40 flex items-center justify-center mb-2 bg-[#FACC15]/10 shadow-[0_0_15px_rgba(250,204,21,0.2)]">
            <Icon icon="solar:shield-check-linear" className="w-5 h-5 text-[#FACC15]" />
          </div>
          {category && (
            <span className="text-[9px] uppercase tracking-widest text-[#FACC15] font-mono mb-0.5">
              {category}
            </span>
          )}
          <span className="text-xs font-medium text-white tracking-tight line-clamp-1">
            {title || alt}
          </span>
          <span className="text-[8px] font-mono tracking-widest text-gray-500 uppercase mt-1">
            AUTODET SELECT
          </span>
        </div>
      ) : (
        /* The Actual Image */
        /* eslint-disable-next-line @next/next/no-img-element */
        <img
          src={src}
          alt={alt}
          onLoad={() => setIsLoaded(true)}
          onError={() => setHasError(true)}
          className={`w-full h-full object-cover transition-all duration-700 ${
            isLoaded ? "opacity-100" : "opacity-0"
          } ${className}`}
        />
      )}
    </div>
  );
}
