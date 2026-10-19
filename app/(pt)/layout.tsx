import type { Metadata, Viewport } from "next";
import { site } from "@/data/site";
import { fontVars } from "../fonts";
import "../globals.css";

const url = "https://nastedit.online";

export const metadata: Metadata = {
  metadataBase: new URL(url),
  title: `${site.name} — ${site.role}`,
  description: site.tagline,
  alternates: {
    canonical: "/",
    languages: {
      "pt-BR": "/",
      en: "/en/",
    },
  },
  openGraph: {
    title: `${site.name} — ${site.role}`,
    description: site.tagline,
    type: "website",
    locale: "pt_BR",
    url: "/",
  },
  twitter: {
    card: "summary_large_image",
    title: `${site.name} — ${site.role}`,
    description: site.tagline,
  },
};

export const viewport: Viewport = {
  themeColor: "#060608",
};

export default function PtLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR" className={fontVars}>
      <body className="grain">{children}</body>
    </html>
  );
}
