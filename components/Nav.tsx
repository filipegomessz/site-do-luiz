"use client";

import { useEffect, useState } from "react";
import type { Site } from "@/data/site";
import { CopyEmail } from "./CopyEmail";

export function Nav({ content }: { content: Site }) {
  const { ids, nav, langSwitch } = content.ui;
  const [scrolled, setScrolled] = useState(false);

  const links = [
    { href: `#${ids.about}`, label: nav.about },
    { href: `#${ids.focus}`, label: nav.focus },
    { href: `#${ids.portfolio}`, label: nav.portfolio },
    { href: `#${ids.contact}`, label: nav.contact },
  ];

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
        <a
          href={`#${ids.top}`}
          className="font-display text-lg font-bold tracking-tight"
        >
          {content.name.split(" ")[0]}
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

        <div className="flex items-center gap-2.5">
          <a
            href={langSwitch.href}
            title={langSwitch.title}
            className="rounded-full border border-white/15 px-3 py-2 text-xs font-semibold text-zinc-400 transition-colors hover:border-white/40 hover:text-white"
          >
            {langSwitch.label}
          </a>

          <CopyEmail
            content={content}
            className="rounded-full bg-brand px-4 py-2 text-sm font-semibold text-white transition-transform hover:scale-105 hover:bg-brand-glow"
          >
            {nav.cta}
          </CopyEmail>
        </div>
      </div>
    </header>
  );
}
