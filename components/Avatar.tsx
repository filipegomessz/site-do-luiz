import Image from "next/image";
import { site } from "@/data/site";

export function Avatar({ size = 280 }: { size?: number }) {
  const initials = site.name
    .split(" ")
    .map((p) => p[0])
    .slice(0, 2)
    .join("");

  return (
    <div
      className="relative shrink-0"
      style={{ width: size, height: size }}
    >
      <div className="absolute -inset-3 rounded-3xl bg-gradient-to-tr from-brand/40 via-brand/0 to-purple-500/30 blur-2xl" />
      <div className="relative h-full w-full overflow-hidden rounded-3xl border border-white/10 bg-ink-800">
        {site.photo ? (
          <Image
            src={site.photo}
            alt={site.name}
            fill
            sizes="(max-width: 768px) 60vw, 280px"
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
