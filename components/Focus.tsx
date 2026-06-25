import { site } from "@/data/site";
import { Reveal } from "./Reveal";

export function Focus() {
  return (
    <section id="foco" className="relative mx-auto max-w-6xl px-6 py-28">
      <div className="grid gap-14 lg:grid-cols-2">
        <Reveal>
          <p className="text-sm font-semibold uppercase tracking-widest text-brand">
            {site.focus.title}
          </p>
          <h2 className="mt-3 font-display text-3xl font-bold text-white sm:text-4xl">
            Cortes feitos para multiplicar alcance.
          </h2>
          <p className="mt-5 max-w-md text-[15px] leading-relaxed text-zinc-400">
            {site.focus.body}
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            {site.focus.niches.map((n) => (
              <span
                key={n}
                className="rounded-full border border-white/10 bg-white/[0.03] px-4 py-2 text-sm font-medium text-zinc-300"
              >
                {n}
              </span>
            ))}
          </div>
        </Reveal>

        <div className="grid gap-4 sm:grid-cols-2">
          {site.services.map((s, i) => (
            <Reveal key={s.title} delay={i * 0.08}>
              <div className="h-full rounded-2xl border border-white/5 bg-gradient-to-b from-white/[0.04] to-transparent p-6 transition-transform hover:-translate-y-1">
                <h3 className="font-display text-base font-semibold text-white">
                  {s.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-zinc-400">
                  {s.body}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
