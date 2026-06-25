"use client";

import { useEffect, useState } from "react";
import { site } from "@/data/site";

const links = [
  { href: "#sobre", label: "Sobre" },
  { href: "#foco", label: "Foco" },
  { href: "#portfolio", label: "Portfólio" },
  { href: "#contato", label: "Contato" },
];

export function Nav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-40 transition-all duration-300 ${
        scrolled ? "py-3" : "py-5"
      }`}
    >
      <div
        className={`mx-auto flex max-w-6xl items-center justify-between rounded-full px-5 py-3 transition-all duration-300 ${
          scrolled ? "glass mx-4 md:mx-auto" : "bg-transparent"
        }`}
      >
        <a href="#topo" className="font-display text-lg font-bold tracking-tight">
          {site.name.split(" ")[0]}
          <span className="text-brand">.</span>
        </a>

        <nav className="hidden items-center gap-8 md:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm text-zinc-400 transition-colors hover:text-white"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <a
          href={`mailto:${site.email}`}
          className="rounded-full bg-brand px-4 py-2 text-sm font-semibold text-white transition-transform hover:scale-105 hover:bg-brand-glow"
        >
          Entre em contato
        </a>
      </div>
    </header>
  );
}
