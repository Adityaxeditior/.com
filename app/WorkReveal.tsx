"use client";

import { useEffect } from "react";

const clamp = (value: number) => Math.min(Math.max(value, 0), 1);
const easeOut = (value: number) => 1 - Math.pow(1 - value, 3);

export function WorkReveal() {
  useEffect(() => {
    const section = document.querySelector<HTMLElement>(".work-section");
    const heading = document.querySelector<HTMLElement>("[data-work-heading]");
    const cards = Array.from(
      document.querySelectorAll<HTMLElement>("[data-work-card]"),
    );

    if (!section || !heading || cards.length === 0) {
      return;
    }

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    );

    if (prefersReducedMotion.matches) {
      section.classList.add("work-ready", "reduced-motion");
      return;
    }

    let ticking = false;

    const update = () => {
      const viewportHeight = window.innerHeight || 1;
      const sectionRect = section.getBoundingClientRect();
      const sectionProgress = clamp(
        (viewportHeight - sectionRect.top) /
          (sectionRect.height + viewportHeight * 0.45),
      );

      section.style.setProperty("--work-progress", String(sectionProgress));

      const headingRect = heading.getBoundingClientRect();
      const headingProgress = easeOut(
        clamp((viewportHeight * 0.9 - headingRect.top) / (viewportHeight * 0.5)),
      );
      heading.style.setProperty("--heading-progress", String(headingProgress));

      cards.forEach((card) => {
        const rect = card.getBoundingClientRect();
        const progress = easeOut(
          clamp((viewportHeight * 0.92 - rect.top) / (viewportHeight * 0.7)),
        );
        const direction = card.dataset.direction === "left" ? -1 : 1;
        const translateX = direction * (1 - progress) * 20;
        const translateY = (1 - progress) * 120;
        const rotation = direction * (1 - progress) * 7;
        const scale = 0.8 + progress * 0.2;
        const clip = (1 - progress) * 100;
        const imageScale = 1 + (1 - progress) * 0.16;
        const metaProgress = easeOut(clamp((progress - 0.42) / 0.58));

        card.style.setProperty("--card-x", `${translateX}vw`);
        card.style.setProperty("--card-y", `${translateY}px`);
        card.style.setProperty("--card-rotate", `${rotation}deg`);
        card.style.setProperty("--card-scale", String(scale));
        card.style.setProperty("--card-opacity", String(progress));
        card.style.setProperty("--image-clip", `${clip}%`);
        card.style.setProperty("--image-scale", String(imageScale));
        card.style.setProperty("--meta-progress", String(metaProgress));
      });

      section.classList.add("work-ready");
      ticking = false;
    };

    const requestTick = () => {
      if (!ticking) {
        ticking = true;
        window.requestAnimationFrame(update);
      }
    };

    update();
    window.addEventListener("scroll", requestTick, { passive: true });
    window.addEventListener("resize", requestTick);

    return () => {
      window.removeEventListener("scroll", requestTick);
      window.removeEventListener("resize", requestTick);
    };
  }, []);

  return null;
}
