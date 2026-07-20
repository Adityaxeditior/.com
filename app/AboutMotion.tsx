"use client";

import { ReactNode, useEffect, useRef } from "react";

const clamp = (value: number, min: number, max: number) =>
  Math.min(Math.max(value, min), max);

export default function AboutMotion({ children }: { children: ReactNode }) {
  const rootRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;

    const reducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    );
    const desktopMotion = window.matchMedia("(min-width: 1280px)");
    let parallaxFrame = 0;
    let revealFrame = 0;

    if (reducedMotion.matches) {
      root.classList.add("about-motion-ready", "about-motion-reduced");
      return;
    }

    const reveal = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;

        revealFrame = window.requestAnimationFrame(() => {
          root.classList.add("about-motion-ready");
        });
        reveal.disconnect();
      },
      { threshold: 0.14 },
    );

    const updateParallax = () => {
      parallaxFrame = 0;

      if (!desktopMotion.matches) {
        root.style.setProperty("--portrait-parallax", "0px");
        return;
      }

      const rect = root.getBoundingClientRect();
      const viewportHeight = window.innerHeight || 1;

      if (rect.bottom < 0 || rect.top > viewportHeight) return;

      const sectionCenter = rect.top + rect.height / 2;
      const offset = clamp(
        (viewportHeight / 2 - sectionCenter) / viewportHeight,
        -1,
        1,
      );

      root.style.setProperty("--portrait-parallax", `${offset * 18}px`);
    };

    const requestParallax = () => {
      if (parallaxFrame) return;
      parallaxFrame = window.requestAnimationFrame(updateParallax);
    };

    reveal.observe(root);
    updateParallax();
    window.addEventListener("scroll", requestParallax, { passive: true });
    window.addEventListener("resize", requestParallax);

    return () => {
      reveal.disconnect();
      window.cancelAnimationFrame(parallaxFrame);
      window.cancelAnimationFrame(revealFrame);
      window.removeEventListener("scroll", requestParallax);
      window.removeEventListener("resize", requestParallax);
    };
  }, []);

  return (
    <div className="about-motion" ref={rootRef}>
      {children}
    </div>
  );
}
