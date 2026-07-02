"use client";

import { useState } from "react";
import { site } from "@/data/site";

export function CopyEmail({
  children,
  className,
  copiedLabel = "E-mail copiado!",
}: {
  children: React.ReactNode;
  className?: string;
  copiedLabel?: string;
}) {
  const [copied, setCopied] = useState(false);

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(site.email);
    } catch {
      // fallback para navegadores sem clipboard API
      const el = document.createElement("textarea");
      el.value = site.email;
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
      {copied ? copiedLabel : children}
    </button>
  );
}
