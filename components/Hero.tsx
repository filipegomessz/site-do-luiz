"use client";

import { motion } from "framer-motion";
import { site } from "@/data/site";
import { Avatar } from "./Avatar";
import { CopyEmail } from "./CopyEmail";

export function Hero() {
  return (
    <section
      id="topo"
      className="relative mx-auto flex min-h-screen max-w-6xl flex-col justify-center px-6 pt-28"
    >
      <div className="grid items-center gap-12 md:grid-cols-[1fr_auto]">
        <div>
          <motion.span
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-4 py-1.5 text-xs font-medium uppercase tracking-widest text-zinc-400"
          >
            <span className="h-2 w-2 animate-pulse rounded-full bg-brand" />
            {site.role}
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.05 }}
            className="mt-6 font-display text-5xl font-extrabold leading-[1.05] tracking-tight text-white sm:text-6xl md:text-7xl"
          >
            {site.name.split(" ")[0]}
            <br />
            <span className="text-gradient">{site.name.split(" ").slice(1).join(" ")}</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="mt-6 max-w-xl text-lg leading-relaxed text-zinc-400"
          >
            {site.tagline}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.25 }}
            className="mt-9 flex flex-wrap items-center gap-4"
          >
            <a
              href="#portfolio"
              className="rounded-full bg-brand px-6 py-3 text-sm font-semibold text-white transition-transform hover:scale-105 hover:bg-brand-glow"
            >
              Ver portfólio
            </a>
            <CopyEmail className="rounded-full border border-white/15 px-6 py-3 text-sm font-semibold text-white transition-colors hover:border-white/40">
              {site.email}
            </CopyEmail>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="mx-auto"
        >
          <Avatar width={360} />
        </motion.div>
      </div>

      <div className="pointer-events-none absolute bottom-8 left-1/2 -translate-x-1/2 text-xs uppercase tracking-widest text-zinc-600">
        ver mais ↓
      </div>
    </section>
  );
}
