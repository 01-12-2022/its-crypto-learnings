"use client";

import { useEffect, useState } from "react";

type Mode = "light" | "dark" | "system";

function applyMode(mode: Mode) {
  const root = document.documentElement;
  if (mode === "system") {
    localStorage.removeItem("theme");
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    root.classList.toggle("dark", prefersDark);
  } else {
    localStorage.setItem("theme", mode);
    root.classList.toggle("dark", mode === "dark");
  }
}

function currentMode(): Mode {
  if (typeof window === "undefined") return "system";
  const stored = localStorage.getItem("theme");
  if (stored === "light" || stored === "dark") return stored;
  return "system";
}

export function ThemeToggle() {
  const [mode, setMode] = useState<Mode>("system");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMode(currentMode());
    setMounted(true);
  }, []);

  useEffect(() => {
    if (mode !== "system") return;
    const mq = window.matchMedia("(prefers-color-scheme: dark)");
    const handler = () => applyMode("system");
    mq.addEventListener("change", handler);
    return () => mq.removeEventListener("change", handler);
  }, [mode]);

  function cycle() {
    const next: Mode =
      mode === "system" ? "light" : mode === "light" ? "dark" : "system";
    setMode(next);
    applyMode(next);
  }

  const label =
    mode === "system" ? "System" : mode === "light" ? "Hell" : "Dunkel";
  const icon = mode === "system" ? "🖥️" : mode === "light" ? "☀️" : "🌙";

  return (
    <button
      onClick={cycle}
      title={`Theme: ${label} (klicken zum Wechseln)`}
      aria-label={`Theme wechseln — aktuell: ${label}`}
      className="fixed top-4 right-4 z-50 flex items-center gap-2 rounded-full border border-zinc-200 bg-white/90 px-3 py-1.5 text-xs font-semibold text-zinc-700 shadow-sm backdrop-blur transition hover:scale-105 hover:border-zinc-400 dark:border-zinc-700 dark:bg-zinc-800/90 dark:text-zinc-200 dark:hover:border-zinc-500"
    >
      <span aria-hidden className="text-base leading-none">
        {mounted ? icon : "🖥️"}
      </span>
      <span>{mounted ? label : ""}</span>
    </button>
  );
}
