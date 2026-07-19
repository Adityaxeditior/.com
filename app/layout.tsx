import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const siteBasePath = process.env.NEXT_PUBLIC_SITE_BASE_PATH ?? "";
const assetPath = (path: string) => `${siteBasePath}${path}`;
const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://adityaxeditior.github.io/.com/";
const metadataOrigin = new URL(new URL(siteUrl).origin);

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: metadataOrigin,
  title: "Aditya Kumar - Graphic Designer & Video Editor",
  description:
    "Selected graphic design and video editing work by Aditya Kumar, a multidisciplinary visual creator based in Greater Noida, India.",
  keywords: [
    "Aditya Kumar",
    "graphic designer",
    "video editor",
    "poster design",
    "motion graphics",
    "Greater Noida",
    "short-form edits",
  ],
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: "Aditya Kumar - Graphic Designer & Video Editor",
    description:
      "Selected graphic design and video editing work by Aditya Kumar, based in Greater Noida, India.",
    type: "website",
    images: [
      {
        url: assetPath("/portfolio/dont-fear.webp"),
        width: 1440,
        height: 1800,
        alt: "Selected poster work by Aditya Kumar",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Aditya Kumar - Graphic Designer & Video Editor",
    description:
      "Selected graphic design and video editing work by Aditya Kumar.",
    images: [assetPath("/portfolio/dont-fear.webp")],
  },
  icons: {
    icon: assetPath("/favicon.svg"),
    shortcut: assetPath("/favicon.svg"),
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
