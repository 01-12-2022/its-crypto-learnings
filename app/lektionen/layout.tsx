import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Kryptografie Lektionen",
};

const groups = [
  {
    title: "Klassisch",
    items: [
      { slug: "caesar", label: "Caesar-Cipher", icon: "🔡" },
      { slug: "xor", label: "XOR-Verschlüsselung", icon: "⊕" },
      { slug: "frequenz", label: "Häufigkeitsanalyse", icon: "📊" },
    ],
  },
  {
    title: "Modern",
    items: [
      { slug: "hash", label: "Hash-Funktionen", icon: "#️⃣" },
      { slug: "hmac", label: "HMAC", icon: "🛡️" },
      { slug: "diffie-hellman", label: "Diffie-Hellman", icon: "🔑" },
      { slug: "rsa", label: "RSA", icon: "🔐" },
    ],
  },
  {
    title: "Anwendung",
    items: [
      { slug: "oauth", label: "OAuth 2.0", icon: "🪪" },
      { slug: "quiz", label: "Quiz", icon: "🧪" },
    ],
  },
];

export default function LektionenLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-screen bg-white">
      <nav className="w-64 shrink-0 border-r border-zinc-200 bg-zinc-50 p-4">
        <div className="mb-6 border-b border-zinc-200 pb-4">
          <Link
            href="/"
            className="text-sm font-medium text-zinc-600 hover:text-zinc-900"
          >
            ← Übersicht
          </Link>
          <h2 className="mt-2 text-base font-bold text-zinc-900">Lektionen</h2>
        </div>
        <div className="flex flex-col gap-5">
          {groups.map((g) => (
            <div key={g.title}>
              <div className="mb-1.5 px-3 text-[11px] font-bold tracking-wider text-zinc-500 uppercase">
                {g.title}
              </div>
              <ul className="flex flex-col gap-0.5">
                {g.items.map((l) => (
                  <li key={l.slug}>
                    <Link
                      href={`/lektionen/${l.slug}`}
                      className="flex items-center gap-2.5 rounded-lg px-3 py-2 text-sm font-medium text-zinc-700 transition-colors hover:bg-white hover:text-zinc-950"
                    >
                      <span className="w-5 text-center">{l.icon}</span>
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </nav>
      <main className="flex-1 px-10 py-10">
        <div className="mx-auto max-w-3xl">{children}</div>
      </main>
    </div>
  );
}
