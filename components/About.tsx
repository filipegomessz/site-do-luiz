import { site } from "@/data/site";
import { Reveal } from "./Reveal";

export function About() {
  const blocks = [site.why, site.story, site.experience];

  return (
    <section id="sobre" className="mx-auto max-w-6xl px-6 py-28">
      <Reveal>
        <p className="text-sm font-semibold uppercase tracking-widest text-brand">
          Sobre mim
        </p>
        <h2 className="mt-3 max-w-2xl font-display text-3xl font-bold text-white sm:text-4xl">
          Um bom corte transforma a forma como uma ideia chega às pessoas.
        </h2>
      </Reveal>

      <div className="mt-16 grid gap-10 md:grid-cols-3">
        {blocks.map((b, i) => (
          <Reveal key={b.title} delay={i * 0.1}>
            <div className="group h-full rounded-2xl border border-white/5 bg-white/[0.02] p-7 transition-colors hover:border-brand/30">
              <span className="font-display text-5xl font-bold text-white/10 transition-colors group-hover:text-brand/40">
                0{i + 1}
              </span>
              <h3 className="mt-4 font-display text-xl font-semibold text-white">
                {b.title}
              </h3>
              <p className="mt-3 text-[15px] leading-relaxed text-zinc-400">
                {b.body}
              </p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
