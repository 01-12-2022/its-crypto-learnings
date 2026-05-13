import Link from "next/link";

const highlights = [
  { icon: "🔡", label: "Caesar", tint: "from-amber-400 to-rose-500" },
  { icon: "⊕", label: "XOR", tint: "from-fuchsia-500 to-violet-600" },
  { icon: "📊", label: "Frequenz", tint: "from-sky-500 to-indigo-600" },
  { icon: "🔑", label: "Diffie-Hellman", tint: "from-emerald-500 to-teal-600" },
  { icon: "🔐", label: "RSA", tint: "from-blue-600 to-cyan-500" },
  { icon: "#️⃣", label: "Hashes", tint: "from-orange-500 to-pink-600" },
  { icon: "🪪", label: "OAuth", tint: "from-lime-500 to-emerald-600" },
  { icon: "🛡️", label: "HMAC", tint: "from-purple-600 to-indigo-700" },
];

export default function Home() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-gradient-to-br from-indigo-50 via-white to-rose-50">
      <div className="pointer-events-none absolute -top-32 -left-32 h-96 w-96 rounded-full bg-fuchsia-300/40 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-32 -right-32 h-96 w-96 rounded-full bg-sky-300/40 blur-3xl" />

      <div className="relative mx-auto flex min-h-screen max-w-5xl flex-col items-center justify-center gap-10 px-6 py-16 text-center">
        <span className="rounded-full border border-zinc-300 bg-white/80 px-4 py-1.5 text-xs font-semibold tracking-wider text-zinc-700 uppercase shadow-sm backdrop-blur">
          Interaktiv · Verständlich · Bunt
        </span>

        <h1 className="bg-gradient-to-r from-indigo-700 via-fuchsia-600 to-rose-600 bg-clip-text text-5xl font-extrabold tracking-tight text-transparent sm:text-6xl">
          Kryptografie lernen
        </h1>

        <p className="max-w-2xl text-lg text-zinc-700 sm:text-xl">
          Von der <strong className="text-zinc-900">Caesar-Verschiebung</strong> bis zu{" "}
          <strong className="text-zinc-900">OAuth</strong> und{" "}
          <strong className="text-zinc-900">Diffie-Hellman</strong> — alles zum
          Ausprobieren, Verstehen und Üben.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-3">
          <Link
            href="/lektionen"
            className="rounded-full bg-zinc-900 px-8 py-3.5 text-sm font-semibold text-white shadow-lg shadow-zinc-900/20 transition hover:scale-[1.02] hover:bg-zinc-800"
          >
            Zu den Lektionen →
          </Link>
          <Link
            href="/lektionen/quiz"
            className="rounded-full border border-zinc-300 bg-white px-8 py-3.5 text-sm font-semibold text-zinc-800 shadow-sm transition hover:border-zinc-900 hover:text-zinc-900"
          >
            Quiz starten 🧪
          </Link>
        </div>

        <div className="mt-6 grid w-full max-w-3xl grid-cols-2 gap-3 sm:grid-cols-4">
          {highlights.map((h) => (
            <div
              key={h.label}
              className={`rounded-xl bg-gradient-to-br ${h.tint} p-px shadow-md`}
            >
              <div className="flex h-full flex-col items-center gap-1 rounded-[11px] bg-white/95 px-3 py-4 text-zinc-800">
                <span className="text-2xl">{h.icon}</span>
                <span className="text-sm font-semibold">{h.label}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
