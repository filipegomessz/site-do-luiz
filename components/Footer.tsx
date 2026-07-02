import { site } from "@/data/site";
import { CopyEmail } from "./CopyEmail";

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-white/5 px-6 py-10">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 text-sm text-zinc-500 sm:flex-row">
        <p>
          © {year} {site.name} — {site.role}
        </p>
        <CopyEmail className="transition-colors hover:text-white">
          {site.email}
        </CopyEmail>
      </div>
    </footer>
  );
}
