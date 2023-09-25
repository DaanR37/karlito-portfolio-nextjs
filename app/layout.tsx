import React from 'react';
import "./globals.scss";
// import { roboto_flex } from "./fonts";
import type { Metadata } from "next";

// const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://karlein.nl"),
  title: "Karlito's Way | Locations Scout for Film and TV",
  description:
    "Karlito's Way, Locations Scout for Film and TV",
  authors: { name: 'Karlein Nolet', url: 'https://karlein.nl' },
  applicationName: 'Karlitos Way Portfolio Website',
  // keywords: ['Next.js', 'React', 'JavaScript', 'Css', 'front-end', 'developer'],
  openGraph: {
    title: "Karlito's Way | Locations Scout for Film and TV",
    description: "Karlito's Way, Locations Scout for Film and TV",
    url: "https://karlein.nl",
    siteName: "Karlitos Way Portfolio Website",
    type: "website",
    images: [
      {
        // url: "/opengraph-image.png",
        url: "https://karlein.nl/opengraph-image.png",
        width: 450,
        height: 450,
      },
    ],
  },
  twitter: {
   card: "summary_large_image",
   title: "Karlito's Way | Locations Scout for Film and TV",
   description:
     "Karlito's Way, Locations Scout for Film and TV",
   images: [
      "https://karlein.nl/opengraph-image.png",
   ],
  },
  robots: {
    index: false,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: false,
      noimageindex: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="">{children}</body>
    </html>
  );
}
