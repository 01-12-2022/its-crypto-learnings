"use client";

import { useState } from "react";
import Link from "next/link";

function caesar(text: string, shift: number): string {
  return text
    .split("")
    .map((c) => {
      const code = c.charCodeAt(0);
      if (code >= 65 && code <= 90) {
        return String.fromCharCode(((code - 65 + shift + 26) % 26) + 65);
      }
      if (code >= 97 && code <= 122) {
        return String.fromCharCode(((code - 97 + shift + 26) % 26) + 97);
      }
      return c;
    })
    .join("");
}

export function MiniCaesar() {
  const [text, setText] = useState("Hallo Welt");
  const [shift, setShift] = useState(3);

  const out = caesar(text, shift);

  return (
    <div className="mx-auto w-full max-w-2xl rounded-2xl border border-zinc-200 bg-white/80 p-6 shadow-lg backdrop-blur">
      <div className="mb-3 flex items-center justify-between">
        <span className="text-xs font-bold tracking-wider text-zinc-500 uppercase">
          Mini-Demo · Caesar-Verschiebung
        </span>
        <Link
          href="/lektionen/caesar"
          className="text-xs font-semibold text-indigo-700 hover:text-indigo-900"
        >
          Volle Lektion →
        </Link>
      </div>

      <div className="flex flex-col gap-3">
        <input
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
          className="rounded-lg border border-zinc-300 bg-zinc-50 px-3 py-2 text-sm font-mono text-zinc-900 focus:border-indigo-500 focus:outline-none"
          placeholder="Tippe etwas..."
        />

        <div className="flex items-center gap-3">
          <label className="text-xs font-bold tracking-wider text-zinc-500 uppercase">
            Shift
          </label>
          <input
            type="range"
            min={-25}
            max={25}
            value={shift}
            onChange={(e) => setShift(parseInt(e.target.value))}
            className="flex-1 accent-indigo-500"
          />
          <span className="w-10 text-center font-mono text-sm font-semibold text-indigo-700">
            {shift > 0 ? `+${shift}` : shift}
          </span>
        </div>

        <div className="rounded-lg border border-amber-200 bg-amber-50 px-3 py-2 text-sm font-mono break-all text-amber-900">
          {out || "…"}
        </div>
      </div>
    </div>
  );
}
