"use client";

import { ReactNode, useEffect, useRef } from "react";

export default function HeroMotion({
  children,
}: {
  children: ReactNode;
}) {
  const rootRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;

    let firstFrame = 0;
    let secondFrame = 0;

    firstFrame = requestAnimationFrame(() => {
      secondFrame = requestAnimationFrame(() => {
        root.classList.add("hero-motion-ready");
      });
    });

    return () => {
      cancelAnimationFrame(firstFrame);
      cancelAnimationFrame(secondFrame);
      root.classList.remove("hero-motion-ready");
    };
  }, []);

  return (
    <div ref={rootRef} className="hero-motion">
      {children}
    </div>
  );
}
