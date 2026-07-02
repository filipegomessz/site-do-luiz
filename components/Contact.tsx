import { site } from "@/data/site";
import { Reveal } from "./Reveal";
import { CopyEmail } from "./CopyEmail";

export function Contact() {
  const { instagram, youtube, whatsapp } = site.socials;
  const socials = [
    { label: "Instagram", href: instagram },
    { label: "YouTube", href: youtube },
    { label: "WhatsApp", href: whatsapp },
  ].filter((s) => s.href);

  return (
    <section id="contato" className="mx-auto max-w-6xl px-6 py-28">
      <Reveal>
        <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-ink-800 to-ink-950 p-10 text-center sm:p-16">
          <div className="pointer-events-none absolute -top-20 left-1/2 h-60 w-60 -translate-x-1/2 rounded-full bg-brand/20 blur-3xl" />
          <p className="text-sm font-semibold uppercase tracking-widest text-brand">
            Vamos trabalhar juntos
          </p>
          <h2 className="mx-auto mt-4 max-w-2xl font-display text-3xl font-bold leading-tight text-white sm:text-5xl">
            Tem um conteúdo que precisa virar corte?
          </h2>
          <p className="mx-auto mt-5 max-w-md text-[15px] leading-relaxed text-zinc-400">
            Me manda uma mensagem e vamos transformar suas lives e podcasts em
            cortes que prendem a atenção.
          </p>

          <div className="mt-9 flex flex-wrap items-center justify-center gap-4">
            <CopyEmail className="rounded-full bg-brand px-7 py-3.5 text-sm font-semibold text-white transition-transform hover:scale-105 hover:bg-brand-glow">
              {site.email}
            </CopyEmail>
            {socials.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full border border-white/15 px-7 py-3.5 text-sm font-semibold text-white transition-colors hover:border-white/40"
              >
                {s.label}
              </a>
            ))}
          </div>
        </div>
      </Reveal>
    </section>
  );
}
