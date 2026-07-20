"use client";

import { useEffect } from "react";

export default function ArchiveReveal() {
  useEffect(() => {
    const cards = Array.from(
      document.querySelectorAll<HTMLElement>("[data-archive-card]"),
    );

    if (cards.length === 0) {
      return;
    }

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    );

    if (prefersReducedMotion.matches || !("IntersectionObserver" in window)) {
      cards.forEach((card) => card.classList.add("archive-card-visible"));
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) {
            return;
          }

          entry.target.classList.add("archive-card-visible");
          observer.unobserve(entry.target);
        });
      },
      {
        rootMargin: "0px 0px -8% 0px",
        threshold: 0.12,
      },
    );

    cards.forEach((card) => observer.observe(card));

    return () => observer.disconnect();
  }, []);

  return null;
}
