import type { Metadata } from "next";
import Image from "next/image";
import type { CSSProperties } from "react";
import { designProjects } from "../designProjects";
import InstagramIcon from "../InstagramIcon";
import SiteHeader from "../SiteHeader";
import { assetPath, siteConfig } from "../siteConfig";
import ArchiveReveal from "./ArchiveReveal";

export const metadata: Metadata = {
  title: "All Design Projects - Aditya Kumar",
  description:
    "A collection of poster design, social creatives and visual experiments by Aditya Kumar.",
};

export default function DesignProjectsPage() {
  return (
    <div className="archive-page">
      <a className="skip-link" href="#archive-main">
        Skip to projects
      </a>

      <SiteHeader
        className="archive-header"
        homeHref={assetPath("/")}
        workHref={assetPath("/#work")}
        videoHref={assetPath("/#video")}
        aboutHref={assetPath("/#about")}
      />

      <main id="archive-main">
        <section className="archive-hero" aria-labelledby="archive-title">
          <div className="archive-shell">
            <a className="archive-back-link" href={assetPath("/")}>
              Back to portfolio ←
            </a>
            <p className="eyebrow">01 / Design Archive</p>
            <h1 id="archive-title">All design projects.</h1>
            <p className="archive-intro">
              A collection of posters, social creatives, thumbnails and visual
              experiments.
            </p>
          </div>
        </section>

        <section
          className="archive-projects"
          aria-label="All graphic design projects"
        >
          <ArchiveReveal />
          <div className="archive-shell archive-grid">
            {designProjects.map((project, index) => (
              <article
                className="archive-project-card"
                data-archive-card
                style={
                  {
                    "--archive-delay": `${Math.min(index * 80, 240)}ms`,
                  } as CSSProperties
                }
                key={project.title}
              >
                <figure className="archive-project-figure">
                  <span className="archive-project-number">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <Image
                    className="archive-project-image"
                    src={project.image}
                    alt={project.alt}
                    width={project.width}
                    height={project.height}
                    sizes="(max-width: 767px) calc(100vw - 36px), (max-width: 1100px) 46vw, 31vw"
                    loading="lazy"
                    unoptimized
                  />
                </figure>
                <div className="archive-project-meta">
                  <h2>{project.title}</h2>
                  <div>
                    <span>{project.type}</span>
                    <span>{project.year}</span>
                  </div>
                  {project.description ? <p>{project.description}</p> : null}
                </div>
              </article>
            ))}
          </div>
        </section>
      </main>

      <footer className="archive-footer">
        <div className="archive-shell archive-footer-inner">
          <div>
            <strong>{siteConfig.name}</strong>
            <span>
              {siteConfig.title} · {siteConfig.location}
            </span>
          </div>
          <a
            className="instagram-link"
            href={siteConfig.instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Visit Aditya’s Instagram profile"
          >
            <InstagramIcon />
            <span>Instagram ↗</span>
          </a>
        </div>
      </footer>
    </div>
  );
}
