"use client";

import { useRef } from "react";
import InstagramIcon from "./InstagramIcon";

export default function MobileNav({
  instagramUrl,
  workHref = "#work",
  videoHref = "#video",
  aboutHref = "#about",
}: {
  instagramUrl: string;
  workHref?: string;
  videoHref?: string;
  aboutHref?: string;
}) {
  const menuRef = useRef<HTMLDetailsElement>(null);

  const closeMenu = () => {
    if (menuRef.current) {
      menuRef.current.open = false;
    }
  };

  return (
    <details className="mobile-menu" ref={menuRef}>
      <summary aria-label="Open navigation menu">
        <span aria-hidden="true" />
        <span aria-hidden="true" />
        <span aria-hidden="true" />
      </summary>
      <div className="mobile-menu-panel">
        <a href={workHref} onClick={closeMenu}>
          Work
        </a>
        <a href={videoHref} onClick={closeMenu}>
          Video
        </a>
        <a href={aboutHref} onClick={closeMenu}>
          About
        </a>
        <a
          className="mobile-instagram-link"
          href={instagramUrl}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Visit Aditya’s Instagram profile"
          onClick={closeMenu}
        >
          <InstagramIcon />
          <span>Instagram</span>
          <span className="nav-instagram-arrow" aria-hidden="true">
            ↗
          </span>
        </a>
      </div>
    </details>
  );
}
