import Image from "next/image";
import { site } from "@/data/site";

export function Avatar({ width = 360 }: { width?: number }) {
  const initials = site.name
    .split(" ")
    .map((p) => p[0])
    .slice(0, 2)
    .join("");

  // retângulo vertical (3:4)
  const height = Math.round((width * 4) / 3);

  return (
    <div className="relative" style={{ width, height }}>
      {/* Glow colorido atrás da foto */}
      <div className="absolute -inset-6 -z-20 rounded-[3rem] bg-gradient-to-tr from-brand/45 via-brand/0 to-purple-500/35 blur-3xl" />

      {/* Fundo que se adapta à própria foto (cópia desfocada e ampliada) */}
      {site.photo && (
        <div
          aria-hidden
          className="absolute -inset-8 -z-10 rounded-[3rem] bg-cover bg-center opacity-45 blur-3xl saturate-150"
          style={{ backgroundImage: `url(${site.photo})` }}
        />
      )}

      {/* Foto principal */}
      <div className="relative h-full w-full overflow-hidden rounded-[2rem] border border-white/10 bg-ink-800 shadow-2xl shadow-black/50">
        {site.photo ? (
          <Image
            src={site.photo}
            alt={site.name}
            fill
            sizes="(max-width: 768px) 70vw, 360px"
            className="object-cover"
            priority
          />
        ) : (
          <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-ink-700 to-ink-900">
            <span className="font-display text-6xl font-bold text-white/80">
              {initials}
            </span>
          </div>
        )}
      </div>
    </div>
  );
}
