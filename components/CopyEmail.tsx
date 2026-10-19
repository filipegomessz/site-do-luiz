"use client";

import { useState } from "react";
import type { Site } from "@/data/site";

export function CopyEmail({
  content,
  children,
  className,
}: {
  content: Site;
  children: React.ReactNode;
  className?: string;
}) {
  const [copied, setCopied] = useState(false);

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(content.email);
    } catch {
      // fallback para navegadores sem clipboard API
      const el = document.createElement("textarea");
      el.value = content.email;
      document.body.appendChild(el);
      el.select();
      document.execCommand("copy");
      document.body.removeChild(el);
    }
    setCopied(true);
    setTimeout(() => setCopied(false), 1800);
  };

  return (
    <button type="button" onClick={copy} className={className}>
      {copied ? content.ui.emailCopied : children}
    </button>
  );
}
