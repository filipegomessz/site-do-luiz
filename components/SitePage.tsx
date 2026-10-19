import type { Site } from "@/data/site";
import { Nav } from "./Nav";
import { Hero } from "./Hero";
import { Marquee } from "./Marquee";
import { About } from "./About";
import { Focus } from "./Focus";
import { Portfolio } from "./Portfolio";
import { Contact } from "./Contact";
import { Footer } from "./Footer";

// A página inteira, montada a partir de um conteúdo.
// O site em português passa `site`; o em inglês passa `siteEn`.
export function SitePage({ content }: { content: Site }) {
  return (
    <main className="relative">
      <Nav content={content} />
      <Hero content={content} />
      <Marquee content={content} />
      <About content={content} />
      <Focus content={content} />
      <Portfolio content={content} />
      <Contact content={content} />
      <Footer content={content} />
    </main>
  );
}
