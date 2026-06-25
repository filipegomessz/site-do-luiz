import { site } from "@/data/site";

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-white/5 px-6 py-10">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 text-sm text-zinc-500 sm:flex-row">
        <p>
          © {year} {site.name} — {site.role}
        </p>
        <a
          href={`mailto:${site.email}`}
          className="transition-colors hover:text-white"
        >
          {site.email}
        </a>
      </div>
    </footer>
  );
}
