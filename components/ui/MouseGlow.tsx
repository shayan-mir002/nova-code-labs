"use client";
import { useEffect, useRef } from "react";

export default function MouseGlow() {
  const glowRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (glowRef.current) {
        glowRef.current.style.left = `${e.clientX}px`;
        glowRef.current.style.top = `${e.clientY}px`;
      }
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div
      ref={glowRef}
      className="pointer-events-none fixed z-0 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full transition-all duration-300 ease-out"
      style={{
        background:
          "radial-gradient(circle, rgba(37,99,235,0.06) 0%, rgba(6,182,212,0.03) 40%, transparent 70%)",
        filter: "blur(1px)",
      }}
    />
  );
}
