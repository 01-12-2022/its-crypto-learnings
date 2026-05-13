import Link from "next/link";

type Lesson = {
  slug: string;
  label: string;
  icon: string;
  description: string;
  accent: string; // tailwind gradient
};

type Category = {
  title: string;
  subtitle: string;
  lessons: Lesson[];
};

const categories: Category[] = [
  {
    title: "Klassische Verfahren",
    subtitle: "Wie früher verschlüsselt wurde – und warum es heute nicht mehr reicht.",
    lessons: [
      {
        slug: "caesar",
        label: "Caesar-Cipher",
        icon: "🔡",
        description: "Buchstaben verschieben – interaktiv mit Slider und Alphabetvisualisierung.",
        accent: "from-amber-500 to-rose-500",
      },
      {
        slug: "xor",
        label: "XOR-Verschlüsselung",
        icon: "⊕",
        description: "Bitweise XOR-Operation, Hex-Tabelle, Selbstinversität live erleben.",
        accent: "from-fuchsia-500 to-violet-600",
      },
      {
        slug: "frequenz",
        label: "Häufigkeitsanalyse",
        icon: "📊",
        description: "Buchstabenhäufigkeiten als Balkendiagramm – Caesar-Cipher damit knacken.",
        accent: "from-sky-500 to-indigo-600",
      },
    ],
  },
  {
    title: "Moderne Bausteine",
    subtitle: "Die Werkzeuge, aus denen heutige Sicherheit zusammengebaut wird.",
    lessons: [
      {
        slug: "hash",
        label: "Hash-Funktionen",
        icon: "#️⃣",
        description: "SHA-256 live im Browser. Avalanche-Effekt und Einweg-Prinzip.",
        accent: "from-orange-500 to-pink-600",
      },
      {
        slug: "hmac",
        label: "HMAC & Integrität",
        icon: "🛡️",
        description: "Nachrichten authentifizieren mit geheimem Schlüssel – warum simples Hashen nicht reicht.",
        accent: "from-purple-600 to-indigo-700",
      },
      {
        slug: "diffie-hellman",
        label: "Diffie-Hellman",
        icon: "🔑",
        description: "Schlüsselaustausch über einen abhörbaren Kanal – mit Farben und Zahlen erklärt.",
        accent: "from-emerald-500 to-teal-600",
      },
      {
        slug: "rsa",
        label: "RSA",
        icon: "🔐",
        description: "Asymmetrische Verschlüsselung mit öffentlichem und privatem Schlüssel.",
        accent: "from-blue-600 to-cyan-500",
      },
    ],
  },
  {
    title: "Anwendung",
    subtitle: "Wo Kryptografie im echten Internet auftaucht.",
    lessons: [
      {
        slug: "oauth",
        label: "OAuth 2.0",
        icon: "🪪",
        description: "Authorization-Code-Flow Schritt für Schritt – wie 'Login mit Google' funktioniert.",
        accent: "from-lime-500 to-emerald-600",
      },
      {
        slug: "quiz",
        label: "Quiz",
        icon: "🧪",
        description: "Fragen zum Testen des Gelernten mit sofortigem Feedback.",
        accent: "from-rose-500 to-orange-500",
      },
    ],
  },
];

export default function LektionenPage() {
  return (
    <div className="flex flex-col gap-10">
      <header>
        <h1 className="text-3xl font-bold tracking-tight text-zinc-900">
          Alle Lektionen
        </h1>
        <p className="mt-2 text-zinc-700">
          Wähle eine Lektion – jede ist eigenständig und interaktiv. Empfohlene
          Reihenfolge: von oben nach unten.
        </p>
      </header>

      {categories.map((cat) => (
        <section key={cat.title} className="flex flex-col gap-4">
          <div>
            <h2 className="text-lg font-bold text-zinc-900">{cat.title}</h2>
            <p className="text-sm text-zinc-600">{cat.subtitle}</p>
          </div>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            {cat.lessons.map((l) => (
              <Link
                key={l.slug}
                href={`/lektionen/${l.slug}`}
                className="group relative overflow-hidden rounded-xl border border-zinc-200 bg-white p-5 shadow-sm transition-all hover:-translate-y-0.5 hover:shadow-lg"
              >
                <div
                  className={`absolute inset-x-0 top-0 h-1 bg-gradient-to-r ${l.accent}`}
                />
                <div className="flex flex-col gap-2">
                  <span
                    className={`inline-flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br ${l.accent} text-xl text-white shadow-sm`}
                  >
                    {l.icon}
                  </span>
                  <span className="text-base font-semibold text-zinc-900 group-hover:text-zinc-950">
                    {l.label}
                  </span>
                  <span className="text-sm text-zinc-600">{l.description}</span>
                </div>
              </Link>
            ))}
          </div>
        </section>
      ))}
    </div>
  );
}
