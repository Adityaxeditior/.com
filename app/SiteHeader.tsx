import Image from "next/image";
import InstagramIcon from "./InstagramIcon";
import MobileNav from "./MobileNav";
import { assetPath, siteConfig } from "./siteConfig";

type SiteHeaderProps = {
  className?: string;
  homeHref?: string;
  workHref?: string;
  videoHref?: string;
  aboutHref?: string;
};

export default function SiteHeader({
  className = "",
  homeHref = "#top",
  workHref = "#work",
  videoHref = "#video",
  aboutHref = "#about",
}: SiteHeaderProps) {
  return (
    <header className={`site-header ${className}`.trim()} id="top">
      <div className="shell header-shell">
        <a className="brand" href={homeHref} aria-label="Aditya Kumar home">
          <Image
            className="logo-mark"
            src={assetPath("/favicon.svg")}
            alt=""
            width={64}
            height={64}
            priority
          />
          <span>{siteConfig.name}</span>
        </a>
        <nav className="main-nav" aria-label="Primary navigation">
          <a href={workHref}>Work</a>
          <a href={videoHref}>Video</a>
          <a href={aboutHref}>About</a>
          <a
            className="nav-instagram"
            href={siteConfig.instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Visit Aditya’s Instagram profile"
          >
            <InstagramIcon />
            <span>Instagram</span>
            <span className="nav-instagram-arrow" aria-hidden="true">
              ↗
            </span>
          </a>
        </nav>
        <MobileNav
          instagramUrl={siteConfig.instagramUrl}
          workHref={workHref}
          videoHref={videoHref}
          aboutHref={aboutHref}
        />
        <a
          className="button button-dark header-cta"
          href={siteConfig.whatsappUrl}
          target="_blank"
          rel="noreferrer"
        >
          Let&apos;s work ↗
        </a>
      </div>
    </header>
  );
}
