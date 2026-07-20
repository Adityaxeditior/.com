import { assetPath } from "./siteConfig";

export type DesignProject = {
  title: string;
  type: string;
  year: string;
  image: string;
  alt: string;
  width: number;
  height: number;
  description?: string;
};

// EDIT YOUR DESIGN PROJECTS HERE
export const designProjects: DesignProject[] = [
  {
    title: "Don\u2019t Fear",
    type: "Concept Poster",
    year: "2026",
    image: assetPath("/portfolio/dont-fear.webp"),
    alt: "Surreal Don't Fear poster with a desert, stars and a doorway into the sky",
    width: 1440,
    height: 1800,
  },
  {
    title: "My Little Setup",
    type: "Social Creative",
    year: "2026",
    image: assetPath("/portfolio/my-setup.webp"),
    alt: "Warm desk setup social media design featuring a laptop, tablet, mouse and phone",
    width: 1080,
    height: 1350,
  },
  {
    title: "Stairway to Heaven",
    type: "Concept Poster",
    year: "2026",
    image: assetPath("/portfolio/stairway.webp"),
    alt: "Blue and yellow Stairway to Heaven poster with a ladder rising through clouds",
    width: 1152,
    height: 1440,
  },
  {
    title: "Keep on Dreaming",
    type: "Concept Poster",
    year: "2026",
    image: assetPath("/portfolio/dreaming.webp"),
    alt: "Keep on Dreaming poster with a seated figure whose head is hidden inside a cloud",
    width: 1152,
    height: 1440,
  },
];
