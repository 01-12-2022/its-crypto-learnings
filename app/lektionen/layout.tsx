import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Kryptografie Lektionen",
};

const groups = [
  {
    title: "Grundlagen",
    items: [
      { slug: "einleitung", label: "Was ist Kryptografie?", icon: "📖" },
      { slug: "kerckhoffs", label: "Angreifer & Kerckhoffs", icon: "🎯" },
      { slug: "entropie", label: "Zufall & Entropie", icon: "🎲" },
    ],
  },
  {
    title: "Klassisch",
    items: [
      { slug: "caesar", label: "Caesar-Cipher", icon: "🔡" },
      { slug: "xor", label: "XOR-Verschlüsselung", icon: "⊕" },
      { slug: "frequenz", label: "Häufigkeitsanalyse", icon: "📊" },
      { slug: "enigma-otp", label: "Enigma & OTP", icon: "⚙️" },
    ],
  },
  {
    title: "Symmetrisch",
    items: [
      { slug: "symm-asymm", label: "Symm. vs. asymm.", icon: "⚖️" },
      { slug: "aes", label: "AES", icon: "🧱" },
      { slug: "modi", label: "Betriebsmodi", icon: "🔁" },
    ],
  },
  {
    title: "Asymmetrisch",
    items: [
      { slug: "diffie-hellman", label: "Diffie-Hellman", icon: "🔑" },
      { slug: "rsa", label: "RSA", icon: "🔐" },
      { slug: "ecc", label: "Elliptische Kurven", icon: "🌐" },
      { slug: "signaturen", label: "Signaturen", icon: "✍️" },
    ],
  },
  {
    title: "Hashes & Integrität",
    items: [
      { slug: "hash", label: "Hash-Funktionen", icon: "#️⃣" },
      { slug: "hmac", label: "HMAC", icon: "🛡️" },
      { slug: "passwort", label: "Passwort-Hashing", icon: "🔒" },
      { slug: "merkle", label: "Merkle & Blockchain", icon: "🌳" },
    ],
  },
  {
    title: "Anwendung",
    items: [
      { slug: "tls", label: "TLS & PKI", icon: "🔏" },
      { slug: "oauth", label: "OAuth 2.0", icon: "🪪" },
      { slug: "post-quantum", label: "Post-Quantum", icon: "⚛️" },
      { slug: "quiz", label: "Quiz", icon: "🧪" },
    ],
  },
];

export default function LektionenLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-screen bg-white dark:bg-zinc-950">
      <nav className="w-64 shrink-0 border-r border-zinc-200 bg-zinc-50 p-4 dark:border-zinc-800 dark:bg-zinc-900">
        <div className="mb-6 border-b border-zinc-200 pb-4 dark:border-zinc-800">
          <Link
            href="/"
            className="text-sm font-medium text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100"
          >
            ← Übersicht
          </Link>
          <h2 className="mt-2 text-base font-bold text-zinc-900 dark:text-zinc-100">Lektionen</h2>
        </div>
        <div className="flex flex-col gap-5">
          {groups.map((g) => (
            <div key={g.title}>
              <div className="mb-1.5 px-3 text-[11px] font-bold tracking-wider text-zinc-500 uppercase dark:text-zinc-400">
                {g.title}
              </div>
              <ul className="flex flex-col gap-0.5">
                {g.items.map((l) => (
                  <li key={l.slug}>
                    <Link
                      href={`/lektionen/${l.slug}`}
                      className="flex items-center gap-2.5 rounded-lg px-3 py-2 text-sm font-medium text-zinc-700 transition-colors hover:bg-white hover:text-zinc-950 dark:text-zinc-300 dark:hover:bg-zinc-800 dark:hover:text-white"
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
