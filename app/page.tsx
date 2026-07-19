import Image from "next/image";
import type { CSSProperties } from "react";
import HeroMotion from "./HeroMotion";
import { WorkReveal } from "./WorkReveal";

// EDIT YOUR DETAILS HERE
const siteConfig = {
  name: "Aditya Kumar",
  title: "Graphic Designer & Video Editor",
  location: "Greater Noida, India",
  whatsappDisplay: "+91 82879 80293",
  whatsappUrl:
    "https://wa.me/918287980293?text=Hi%20Aditya%2C%20I%20saw%20your%20portfolio%20and%20want%20to%20discuss%20a%20project",
  instagramUrl: "https://www.instagram.com/ez_made.design/",
  profileImage: "",
};

// EDIT YOUR DESIGN PROJECTS HERE
const designWork = [
  {
    title: "Don\u2019t Fear",
    type: "Concept Poster",
    year: "2026",
    image: "/portfolio/dont-fear.webp",
    alt: "Surreal Don't Fear poster with a desert, stars and a doorway into the sky",
  },
  {
    title: "My Little Setup",
    type: "Social Creative",
    year: "2026",
    image: "/portfolio/my-setup.webp",
    alt: "Warm desk setup social media design featuring a laptop, tablet, mouse and phone",
  },
  {
    title: "Stairway to Heaven",
    type: "Concept Poster",
    year: "2026",
    image: "/portfolio/stairway.webp",
    alt: "Blue and yellow Stairway to Heaven poster with a ladder rising through clouds",
  },
  {
    title: "Keep on Dreaming",
    type: "Concept Poster",
    year: "2026",
    image: "/portfolio/dreaming.webp",
    alt: "Keep on Dreaming poster with a seated figure whose head is hidden inside a cloud",
  },
];

// EDIT YOUR SERVICES HERE
const services = [
  {
    title: "Graphic Design",
    description:
      "Posters, social creatives and campaign visuals with deliberate hierarchy, composition and mood.",
    items: ["Poster design", "Social media creatives", "Ad creatives"],
    tone: "light",
  },
  {
    title: "Video Editing",
    description:
      "Fast, clean edits with pacing and sound choices that support the message instead of distracting from it.",
    items: ["Short-form reels", "Talking-head edits", "Promotional videos"],
    tone: "dark",
  },
  {
    title: "Motion & Finish",
    description:
      "The extra layer that makes an edit feel intentional: movement, sound, colour and platform-ready delivery.",
    items: ["Motion graphics", "Sound design", "Colour grading"],
    tone: "lime",
  },
];

const heroCards = [
  {
    image: "/portfolio/dont-fear.webp",
    className: "hero-card-slot-1",
    rotation: "-15deg",
    delay: "180ms",
    floatDelay: "0s",
  },
  {
    image: "/portfolio/my-setup.webp",
    className: "hero-card-slot-2",
    rotation: "8deg",
    delay: "300ms",
    floatDelay: "0.35s",
  },
  {
    image: "/portfolio/stairway.webp",
    className: "hero-card-slot-3",
    rotation: "-4deg",
    delay: "120ms",
    floatDelay: "0.7s",
  },
  {
    image: "/portfolio/dreaming.webp",
    className: "hero-card-slot-4",
    rotation: "10deg",
    delay: "380ms",
    floatDelay: "0.18s",
  },
  {
    image: "/portfolio/reel-poster.jpg",
    className: "hero-card-slot-5",
    rotation: "16deg",
    delay: "240ms",
    floatDelay: "0.55s",
  },
];

const marqueeItems = [
  "Posters",
  "Social Creatives",
  "Thumbnails",
  "Short-form Edits",
  "Motion Graphics",
];

const videoSkills = [
  "Short-form edits",
  "Motion graphics",
  "Sound design",
  "Colour polish",
];

const greenScreenSkills = [
  "Green-screen keying",
  "Background compositing",
  "Kinetic titles",
  "Sound-led cuts",
];

const toolLabels = ["Photoshop", "Premiere Pro", "After Effects"];

export default function Home() {
  return (
    <>
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <main id="main">
        <HeroMotion>
          <header className="site-header" id="top">
            <div className="shell header-shell">
              <a className="brand" href="#top" aria-label="Aditya Kumar home">
                <span className="logo-mark">AK</span>
                <span>{siteConfig.name}</span>
              </a>
              <nav className="main-nav" aria-label="Primary navigation">
                <a href="#work">Work</a>
                <a href="#video">Video</a>
                <a href="#about">About</a>
              </nav>
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

          <section className="hero" aria-labelledby="hero-title">
            <div className="hero-copy">
              <p className="eyebrow">GRAPHIC DESIGN × VIDEO EDITING</p>
              <h1 id="hero-title">
                <span className="hero-line-mask">
                  <span className="hero-line hero-line-one">
                    Make people stop.
                  </span>
                </span>
                <span className="hero-line-mask">
                  <span className="hero-line hero-line-two hero-line-muted">
                    Then make them feel.
                  </span>
                </span>
              </h1>
              <p className="hero-intro">
                I&apos;m Aditya, a multidisciplinary visual creator turning
                ideas into scroll-stopping designs and edits that hold
                attention.
              </p>
              <div className="hero-actions">
                <a className="button button-lime" href="#work">
                  Explore my work ↓
                </a>
                <a className="text-link" href="#video">
                  Play sample reel ↗
                </a>
              </div>
            </div>

            <div className="hero-stage" aria-hidden="true">
              {heroCards.map((card, index) => (
                <div
                  className={`hero-card-slot ${card.className}`}
                  style={
                    {
                      "--card-rotation": card.rotation,
                      "--card-delay": card.delay,
                      "--float-delay": card.floatDelay,
                    } as CSSProperties
                  }
                  key={card.image}
                >
                  <div className="hero-card-enter">
                    <div className="hero-card-float">
                      <Image
                        src={card.image}
                        alt=""
                        fill
                        sizes="(max-width: 700px) 34vw, 275px"
                        priority={index < 3}
                        unoptimized
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="hero-meta" aria-label="Availability and location">
              <span>Available for select freelance projects</span>
              <span>{siteConfig.location}</span>
            </div>
          </section>
        </HeroMotion>

        <section className="marquee-strip" aria-label="Creative services">
          <div className="marquee-track">
            {[...marqueeItems, ...marqueeItems, ...marqueeItems].map(
              (item, index) => (
                <span key={`${item}-${index}`}>
                  {item}
                  <b>✦</b>
                </span>
              ),
            )}
          </div>
        </section>

        <section
          className="work-section section-shell"
          id="work"
          aria-labelledby="work-title"
        >
          <WorkReveal />
          <div className="work-progress" aria-hidden="true" />
          <div className="section-intro work-intro" data-work-heading>
            <p className="eyebrow">01 / Selected Work</p>
            <h2 id="work-title">Designed to earn the pause.</h2>
            <p>
              A mix of surreal poster exploration and social-first design—built
              around strong composition, clear hierarchy and a memorable mood.
            </p>
          </div>

          <div className="project-grid">
            {designWork.map((project, index) => (
              <article
                className="project-card"
                data-work-card
                data-direction={index % 2 === 0 ? "right" : "left"}
                key={project.title}
              >
                <div className="project-image-wrap">
                  <span className="project-number">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <Image
                    className="project-image"
                    src={project.image}
                    alt={project.alt}
                    fill
                    sizes="(max-width: 760px) 100vw, 48vw"
                    loading={index < 2 ? "eager" : "lazy"}
                    unoptimized
                  />
                </div>
                <div className="project-meta">
                  <h3>{project.title}</h3>
                  <div>
                    <span>{project.type}</span>
                    <span>{project.year}</span>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="video-section" id="video" aria-labelledby="video-title">
          <div className="video-bg-word" aria-hidden="true">
            Motion
          </div>
          <div className="section-shell video-shell">
            <div className="video-copy">
              <p className="eyebrow">02 / Video Editing</p>
              <h2 id="video-title">Motion that keeps the story moving.</h2>
              <p>
                Clean pacing, purposeful motion graphics and sound-led edits for
                short-form content that needs to hook quickly and feel polished.
              </p>
              <div className="pill-row">
                {videoSkills.map((skill) => (
                  <span key={skill}>{skill}</span>
                ))}
              </div>
            </div>

            <div className="video-feature video-feature-vertical">
              <span className="play-tag">PLAY / 01</span>
              <div className="orbit-line" aria-hidden="true" />
              <div className="video-detail">
                <span>Featured sample</span>
                <strong>00:31 · Vertical edit</strong>
              </div>
              <video
                className="phone-video"
                controls
                playsInline
                preload="metadata"
                poster="/portfolio/reel-poster.jpg"
                aria-label="Featured vertical video editing sample by Aditya Kumar"
              >
                <source src="/portfolio/sample-reel.mp4" type="video/mp4" />
              </video>
            </div>

            <article className="video-case">
              <div className="video-case-copy">
                <p className="eyebrow">Video Project 02</p>
                <h3>Green screen, rebuilt frame by frame.</h3>
                <p>
                  A creator edit built around clean keying, background
                  compositing, kinetic titles and quick visual transitions.
                </p>
                <div className="pill-row">
                  {greenScreenSkills.map((skill) => (
                    <span key={skill}>{skill}</span>
                  ))}
                </div>
              </div>
              <div className="landscape-video-wrap">
                <span className="play-tag landscape-tag">PLAY / 02</span>
                <video
                  className="landscape-video"
                  controls
                  playsInline
                  preload="metadata"
                  poster="/portfolio/green-screen-poster.jpg"
                  aria-label="Landscape green screen editing sample by Aditya Kumar"
                >
                  <source
                    src="/portfolio/green-screen-edit.mp4"
                    type="video/mp4"
                  />
                </video>
              </div>
            </article>
          </div>
        </section>

        <section className="services-section section-shell" aria-labelledby="services-title">
          <div className="section-intro">
            <p className="eyebrow">03 / Services</p>
            <h2 id="services-title">One visual partner. Two disciplines.</h2>
          </div>
          <div className="service-grid">
            {services.map((service) => (
              <article
                className={`service-card service-${service.tone}`}
                key={service.title}
              >
                <h3>{service.title}</h3>
                <p>{service.description}</p>
                <ul>
                  {service.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </section>

        <section
          className="about-section"
          id="about"
          aria-labelledby="about-title"
        >
          <div className="section-shell about-shell">
            <div className="about-image" aria-label="Profile photograph area">
              {siteConfig.profileImage ? (
                <Image
                  src={siteConfig.profileImage}
                  alt="Aditya Kumar, graphic designer and video editor"
                  fill
                  sizes="(max-width: 800px) 100vw, 520px"
                  unoptimized
                />
              ) : (
                <div className="profile-placeholder" aria-hidden="true">
                  AK
                </div>
              )}
              <span>Based in Greater Noida</span>
            </div>
            <div className="about-copy">
              <p className="eyebrow">04 / About Me</p>
              <h2 id="about-title">
                I build the frame—and the feeling after it.
              </h2>
              <p className="lead">
                I&apos;m Aditya Kumar, a graphic designer and video editor
                focused on work that is clear, energetic and hard to scroll
                past.
              </p>
              <p>
                My process combines Photoshop-led visual design with Premiere
                Pro and After Effects, so I can carry one idea from a static
                campaign into motion without losing its personality.
              </p>
              <div className="tool-list">
                {toolLabels.map((tool) => (
                  <span key={tool}>{tool}</span>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="contact-section section-shell" aria-labelledby="contact-title">
          <div className="contact-card">
            <span className="contact-arrow" aria-hidden="true">
              ↗
            </span>
            <p className="eyebrow">Have a project in mind?</p>
            <h2 id="contact-title">Let&apos;s make it impossible to ignore.</h2>
            <p>
              Send the brief, references and timeline on WhatsApp. I&apos;ll
              reply with the clearest next step.
            </p>
            <div className="contact-actions">
              <a
                className="button button-lime"
                href={siteConfig.whatsappUrl}
                target="_blank"
                rel="noreferrer"
              >
                Start a WhatsApp chat ↗
              </a>
              <span>{siteConfig.whatsappDisplay}</span>
            </div>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="footer-brand">
          <span className="logo-mark">AK</span>
          <span>{siteConfig.name}</span>
        </div>
        <p>
          {siteConfig.title} · {siteConfig.location}
        </p>
        <div className="footer-links">
          <a href={siteConfig.instagramUrl} target="_blank" rel="noreferrer">
            Instagram ↗
          </a>
          <a href="#top">Back to top ↑</a>
        </div>
      </footer>
    </>
  );
}
