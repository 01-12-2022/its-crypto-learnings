import Link from "next/link";

const lessons = [
  {
    slug: "caesar",
    label: "Caesar-Cipher",
    icon: "🔡",
    description: "Buchstaben verschieben — interaktiv mit Slider und Alphabetvisualisierung.",
  },
  {
    slug: "xor",
    label: "XOR-Verschlüsselung",
    icon: "⊕",
    description: "Bitweise XOR-Operation, Hex-Tabelle, Selbstinversität live erleben.",
  },
  {
    slug: "frequenz",
    label: "Häufigkeitsanalyse",
    icon: "📊",
    description: "Buchstabenhäufigkeiten als Balkendiagramm — Caesar-Cipher damit knacken.",
  },
  {
    slug: "quiz",
    label: "Quiz",
    icon: "🧪",
    description: "5 Fragen zum Testen des Gelernten mit sofortigem Feedback.",
  },
];

export default function LektionenPage() {
  return (
    <div className="flex flex-col gap-8">
      <div>
        <h1 className="text-2xl font-bold text-zinc-900">Kryptografie lernen</h1>
        <p className="mt-2 text-zinc-500">
          Interaktive Lektionen — wähle eine aus der Sidebar oder direkt hier.
        </p>
      </div>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        {lessons.map((l) => (
          <Link
            key={l.slug}
            href={`/lektionen/${l.slug}`}
            className="group flex flex-col gap-2 rounded-xl border border-zinc-200 bg-white p-5 shadow-sm transition-shadow hover:shadow-md"
          >
            <span className="text-2xl">{l.icon}</span>
            <span className="font-semibold text-zinc-900 group-hover:text-blue-600">
              {l.label}
            </span>
            <span className="text-sm text-zinc-500">{l.description}</span>
          </Link>
        ))}
      </div>
    </div>
  );
}
