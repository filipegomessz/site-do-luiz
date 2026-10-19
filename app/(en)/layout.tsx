import type { Metadata, Viewport } from "next";
import { siteEn } from "@/data/site-en";
import { fontVars } from "../fonts";
import "../globals.css";

const url = "https://nastedit.online";

export const metadata: Metadata = {
  metadataBase: new URL(url),
  title: `${siteEn.name} — ${siteEn.role}`,
  description: siteEn.tagline,
  alternates: {
    canonical: "/en/",
    languages: {
      "pt-BR": "/",
      en: "/en/",
    },
  },
  openGraph: {
    title: `${siteEn.name} — ${siteEn.role}`,
    description: siteEn.tagline,
    type: "website",
    locale: "en_US",
    url: "/en/",
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteEn.name} — ${siteEn.role}`,
    description: siteEn.tagline,
  },
};

export const viewport: Viewport = {
  themeColor: "#060608",
};

export default function EnLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={fontVars}>
      <body className="grain">{children}</body>
    </html>
  );
}
