"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";

export default function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!cursorRef.current) return;

    gsap.set(cursorRef.current, { xPercent: -50, yPercent: -50 });
    
    const xTo = gsap.quickTo(cursorRef.current, "x", { duration: 0.15, ease: "power3.out" });
    const yTo = gsap.quickTo(cursorRef.current, "y", { duration: 0.15, ease: "power3.out" });

    const mouseMove = (e: MouseEvent) => {
      xTo(e.clientX - 16); // 16px is half the 32px width
      yTo(e.clientY - 16);
    };

    window.addEventListener("mousemove", mouseMove);

    return () => {
      window.removeEventListener("mousemove", mouseMove);
    };
  }, []);

  return (
    <div
      ref={cursorRef}
      className="fixed top-0 left-0 w-8 h-8 rounded-full pointer-events-none mix-blend-difference z-[999999] bg-white hidden md:block"
      style={{ 
        transform: "translate(-100px, -100px)",
      }}
    />
  );
}
