"use client";

import { useState } from "react";
import { motion, type PanInfo } from "framer-motion";
import { site } from "@/data/site";
import { Reveal } from "./Reveal";

const CARD_W = 280; // largura do card central (px)
const CARD_H = Math.round((CARD_W * 16) / 9); // formato vertical 9:16
const OFFSET = 232; // deslocamento dos vídeos laterais
const SIDE_SCALE = 0.82;

// extrai o ID do arquivo do link de preview do Google Drive
function driveId(embed: string) {
  return embed.match(/\/d\/([^/]+)/)?.[1] ?? "";
}

// Miniatura estática dos vídeos laterais, com cadeia de fallback de URLs
// (o thumbnail do Drive é instável p/ vídeo) e placeholder caso tudo falhe.
function SideThumb({ embed, title }: { embed: string; title: string }) {
  const id = driveId(embed);
  const sources = [
    `https://lh3.googleusercontent.com/d/${id}=w640`,
    `https://drive.google.com/thumbnail?id=${id}&sz=w640`,
  ];
  const [idx, setIdx] = useState(0);
  const [failed, setFailed] = useState(false);

  if (failed || !id) {
    return (
      <div className="flex h-full w-full flex-col items-center justify-center gap-3 bg-gradient-to-br from-ink-700 to-ink-950 px-4 text-center">
        <svg width="34" height="34" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" className="text-white/30">
          <rect x="2" y="4" width="20" height="16" rx="2" />
          <path d="M10 9l5 3-5 3V9z" />
        </svg>
        <span className="text-xs font-medium uppercase tracking-widest text-white/30">
          {title}
        </span>
      </div>
    );
  }

  return (
    /* eslint-disable-next-line @next/next/no-img-element */
    <img
      src={sources[idx]}
      alt={title}
      draggable={false}
      referrerPolicy="no-referrer"
      onError={() =>
        idx < sources.length - 1 ? setIdx(idx + 1) : setFailed(true)
      }
      className="h-full w-full select-none object-cover"
    />
  );
}

export function Portfolio() {
  const channels = site.portfolio;
  const [channel, setChannel] = useState(0);
  const [active, setActive] = useState(0);
  // vídeo central "ativado" (player liberado p/ dar play); null = mostra capa+arraste
  const [playing, setPlaying] = useState<string | null>(null);

  const current = channels[channel];
  const total = current.videos.length;

  const selectChannel = (i: number) => {
    setChannel(i);
    setActive(0);
    setPlaying(null);
  };

  const go = (delta: number) => {
    setActive((v) => (v + delta + total) % total);
    setPlaying(null);
  };

  const jump = (i: number) => {
    setActive(i);
    setPlaying(null);
  };

  const onDragEnd = (_e: unknown, info: PanInfo) => {
    const off = info.offset.x;
    const vel = info.velocity.x;
    if (off < -55 || vel < -450) go(1);
    else if (off > 55 || vel > 450) go(-1);
  };

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
          Trabalhos para canais de grande alcance. Escolha um canal e arraste
          para navegar pelos cortes.
        </p>
      </Reveal>

      {/* Botões de canal */}
      <Reveal delay={0.1}>
        <div className="mt-10 flex flex-wrap gap-3">
          {channels.map((c, i) => (
            <button
              key={c.channel}
              onClick={() => selectChannel(i)}
              className={`rounded-full px-5 py-2.5 text-sm font-semibold transition-all ${
                i === channel
                  ? "bg-brand text-white shadow-lg shadow-brand/25"
                  : "border border-white/10 bg-white/[0.03] text-zinc-400 hover:border-white/30 hover:text-white"
              }`}
            >
              {c.channel}
            </button>
          ))}
        </div>
      </Reveal>

      {/* Carrossel */}
      <Reveal delay={0.15}>
        <div
          className="relative mx-auto mt-14 w-full overflow-hidden"
          style={{ height: CARD_H }}
        >
          <motion.div
            className="absolute inset-0 cursor-grab active:cursor-grabbing"
            drag="x"
            dragConstraints={{ left: 0, right: 0 }}
            dragElastic={0.18}
            onDragEnd={onDragEnd}
          >
            {current.videos.map((clip, i) => {
              // posição relativa: 0 = centro, 1 = direita, total-1 = esquerda
              const rel = (i - active + total) % total;
              const isCenter = rel === 0;
              const isRight = rel === 1;
              const isLeft = rel === total - 1;
              const isPlaying = isCenter && playing === clip.embed;

              const x = isCenter ? 0 : isRight ? OFFSET : -OFFSET;
              const scale = isCenter ? 1 : SIDE_SCALE;
              const zIndex = isCenter ? 30 : 10;

              return (
                <motion.div
                  key={clip.embed}
                  className="absolute top-0"
                  style={{
                    left: "50%",
                    width: CARD_W,
                    height: CARD_H,
                    marginLeft: -CARD_W / 2,
                  }}
                  animate={{ x, scale, zIndex, opacity: isCenter ? 1 : 0.95 }}
                  transition={{ duration: 0.45, ease: [0.21, 0.47, 0.32, 0.98] }}
                >
                  <div className="relative h-full w-full overflow-hidden rounded-2xl border border-white/10 bg-ink-900 shadow-2xl shadow-black/50">
                    {isCenter ? (
                      <>
                        {/* Player de verdade só no vídeo central */}
                        <iframe
                          src={isPlaying ? `${clip.embed}?autoplay=1` : clip.embed}
                          title={clip.title}
                          allow="autoplay; encrypted-media; fullscreen"
                          allowFullScreen
                          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 border-0"
                          style={{ width: "108%", height: "108%" }}
                        />
                        {/* Camada transparente: permite ARRASTAR e, num clique,
                            libera o player (sem botão próprio — usa o play do Drive) */}
                        {!isPlaying && (
                          <div
                            className="absolute inset-0"
                            onClick={() => setPlaying(clip.embed)}
                          />
                        )}
                      </>
                    ) : (
                      <>
                        {/* Vídeos laterais: miniatura estática (sem botão de play) */}
                        <SideThumb embed={clip.embed} title={clip.title} />
                        <div
                          className={`absolute inset-0 transition-colors duration-300 ${
                            isLeft
                              ? "bg-gradient-to-r from-black/85 to-black/45"
                              : "bg-gradient-to-l from-black/85 to-black/45"
                          } hover:bg-black/35`}
                          onClick={() => go(isRight ? 1 : -1)}
                        />
                      </>
                    )}
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>

        {/* Título + posição */}
        <div className="mt-7 text-center">
          <h3 className="font-display text-lg font-semibold text-white">
            {current.videos[active].title}
          </h3>
          <p className="text-xs text-zinc-500">{current.channel}</p>
        </div>

        {/* Dots */}
        <div className="mt-5 flex items-center justify-center gap-2.5">
          {current.videos.map((_, i) => (
            <button
              key={i}
              aria-label={`Ir para o vídeo ${i + 1}`}
              onClick={() => jump(i)}
              className={`h-2.5 rounded-full transition-all ${
                i === active ? "w-8 bg-brand" : "w-2.5 bg-white/20 hover:bg-white/40"
              }`}
            />
          ))}
        </div>
      </Reveal>
    </section>
  );
}
