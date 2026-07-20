const siteBasePath = process.env.NEXT_PUBLIC_SITE_BASE_PATH ?? "";

export const assetPath = (path: string) => `${siteBasePath}${path}`;

// EDIT YOUR DETAILS HERE
export const siteConfig = {
  name: "Aditya Kumar",
  title: "Graphic Designer & Video Editor",
  location: "Greater Noida, India",
  whatsappDisplay: "+91 82879 80293",
  whatsappUrl:
    "https://wa.me/918287980293?text=Hi%20Aditya%2C%20I%20saw%20your%20portfolio%20and%20want%20to%20discuss%20a%20project",
  instagramUrl: "https://instagram.com/ez_made.design/",
  aboutPortrait: assetPath("/portfolio/aditya-about-landscape.png"),
};
