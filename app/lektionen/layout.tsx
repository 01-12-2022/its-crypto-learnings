import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Kryptografie Lektionen",
};

const lessons = [
  { slug: "caesar", label: "Caesar-Cipher", icon: "🔡" },
  { slug: "xor", label: "XOR-Verschlüsselung", icon: "⊕" },
  { slug: "frequenz", label: "Häufigkeitsanalyse", icon: "📊" },
  { slug: "quiz", label: "Quiz", icon: "🧪" },
];

export default function LektionenLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-screen">
      <nav className="w-60 shrink-0 border-r border-zinc-200 bg-zinc-50 p-4">
        <div className="mb-6 border-b border-zinc-200 pb-4">
          <Link href="/" className="text-sm text-zinc-500 hover:text-zinc-800">
            ← Übersicht
          </Link>
          <h2 className="mt-2 text-base font-semibold text-zinc-800">Lektionen</h2>
        </div>
        <ul className="flex flex-col gap-1">
          {lessons.map((l) => (
            <li key={l.slug}>
              <Link
                href={`/lektionen/${l.slug}`}
                className="flex items-center gap-2.5 rounded-lg px-3 py-2.5 text-sm text-zinc-600 transition-colors hover:bg-zinc-100 hover:text-zinc-900"
              >
                <span className="w-5 text-center">{l.icon}</span>
                {l.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
      <main className="flex-1 p-10 max-w-3xl">{children}</main>
    </div>
  );
}
