import type { Site } from "@/data/site";
import { CopyEmail } from "./CopyEmail";

export function Footer({ content }: { content: Site }) {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-white/5 px-6 py-10">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 text-sm text-zinc-500 sm:flex-row">
        <p>
          © {year} {content.name} — {content.role}
        </p>
        <CopyEmail content={content} className="transition-colors hover:text-white">
          {content.email}
        </CopyEmail>
      </div>
    </footer>
  );
}
