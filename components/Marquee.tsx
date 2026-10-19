import type { Site } from "@/data/site";

export function Marquee({ content }: { content: Site }) {
  const items = [...content.channels, ...content.ui.marquee];
  const row = [...items, ...items];

  return (
    <section className="relative overflow-hidden border-y border-white/5 py-6">
      <div className="flex w-max animate-marquee gap-12 whitespace-nowrap">
        {row.map((item, i) => (
          <span
            key={i}
            className="flex items-center gap-12 font-display text-2xl font-bold text-white/25"
          >
            {item}
            <span className="text-brand/60">✦</span>
          </span>
        ))}
      </div>
    </section>
  );
}
