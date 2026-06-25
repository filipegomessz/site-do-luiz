import Image from "next/image";
import { site } from "@/data/site";
import { Reveal } from "./Reveal";

function PlayIcon() {
  return (
    <span className="flex h-14 w-14 items-center justify-center rounded-full bg-brand/90 text-white shadow-lg shadow-brand/30 transition-transform group-hover:scale-110">
      <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
        <path d="M8 5v14l11-7z" />
      </svg>
    </span>
  );
}

export function Portfolio() {
  return (
    <section id="portfolio" className="mx-auto max-w-6xl px-6 py-28">
      <Reveal>
        <p className="text-sm font-semibold uppercase tracking-widest text-brand">
          Portfólio
        </p>
        <h2 className="mt-3 font-display text-3xl font-bold text-white sm:text-4xl">
          Alguns cortes selecionados
        </h2>
        <p className="mt-4 max-w-xl text-[15px] leading-relaxed text-zinc-400">
          Trabalhos para canais de grande alcance. Clique para assistir.
        </p>
      </Reveal>

      <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {site.portfolio.map((item, i) => {
          const isLink = item.url && item.url.length > 0;
          const Wrapper = isLink ? "a" : "div";
          const wrapperProps = isLink
            ? { href: item.url, target: "_blank", rel: "noopener noreferrer" }
            : {};

          return (
            <Reveal key={i} delay={i * 0.1}>
              <Wrapper
                {...(wrapperProps as Record<string, string>)}
                className="group block overflow-hidden rounded-2xl border border-white/10 bg-ink-800"
              >
                <div className="relative aspect-[9/12] w-full overflow-hidden">
                  {item.thumb ? (
                    <Image
                      src={item.thumb}
                      alt={item.title}
                      fill
                      sizes="(max-width: 640px) 100vw, 33vw"
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  ) : (
                    <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-ink-700 to-ink-900">
                      <span className="font-display text-sm uppercase tracking-widest text-white/20">
                        {isLink ? "Assistir" : "Em breve"}
                      </span>
                    </div>
                  )}
                  <div className="absolute inset-0 flex items-center justify-center bg-black/30 opacity-0 transition-opacity group-hover:opacity-100">
                    <PlayIcon />
                  </div>
                </div>
                <div className="flex items-center justify-between gap-3 p-4">
                  <div>
                    <h3 className="font-display text-base font-semibold text-white">
                      {item.title}
                    </h3>
                    <p className="text-xs text-zinc-500">{item.channel}</p>
                  </div>
                  <span className="text-brand opacity-0 transition-opacity group-hover:opacity-100">
                    ↗
                  </span>
                </div>
              </Wrapper>
            </Reveal>
          );
        })}
      </div>
    </section>
  );
}
