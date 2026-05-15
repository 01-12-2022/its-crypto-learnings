import Link from "next/link";

type Lesson = {
  slug: string;
  label: string;
  icon: string;
  description: string;
  accent: string;
};

type Category = {
  title: string;
  subtitle: string;
  lessons: Lesson[];
};

const categories: Category[] = [
  {
    title: "Grundlagen & Mindset",
    subtitle: "Was Kryptografie überhaupt löst – und wovon sie nicht schützt.",
    lessons: [
      {
        slug: "einleitung",
        label: "Was ist Kryptografie?",
        icon: "📖",
        description: "Vertraulichkeit, Integrität, Authentizität – die drei Grundfragen.",
        accent: "from-indigo-500 to-fuchsia-500",
      },
      {
        slug: "kerckhoffs",
        label: "Angreifer & Kerckhoffs",
        icon: "🎯",
        description: "Warum das Verfahren öffentlich sein darf – und muss.",
        accent: "from-rose-500 to-orange-500",
      },
      {
        slug: "entropie",
        label: "Zufall & Entropie",
        icon: "🎲",
        description: "Wie schwer ist etwas zu erraten? Mit Passwort-Stärke-Rechner.",
        accent: "from-violet-500 to-purple-600",
      },
    ],
  },
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
        description: "Buchstabenhäufigkeiten als Balkendiagramm – Caesar damit knacken.",
        accent: "from-sky-500 to-indigo-600",
      },
      {
        slug: "enigma-otp",
        label: "Enigma & One-Time-Pad",
        icon: "⚙️",
        description: "Die einzige beweisbar sichere Chiffre – und warum sie kaum jemand nutzt.",
        accent: "from-stone-500 to-zinc-700",
      },
    ],
  },
  {
    title: "Symmetrische Krypto",
    subtitle: "Ein gemeinsames Geheimnis – wie tauscht man es aus, wie nutzt man's?",
    lessons: [
      {
        slug: "symm-asymm",
        label: "Symmetrisch vs. asymmetrisch",
        icon: "⚖️",
        description: "Der wichtigste Unterschied in der modernen Krypto.",
        accent: "from-teal-500 to-cyan-600",
      },
      {
        slug: "aes",
        label: "AES",
        icon: "🧱",
        description: "Die wichtigste Blockchiffre der Welt – live im Browser.",
        accent: "from-blue-500 to-indigo-600",
      },
      {
        slug: "modi",
        label: "Betriebsmodi & Padding",
        icon: "🔁",
        description: "CBC, CTR, GCM – warum die Wahl wichtiger ist als die Chiffre.",
        accent: "from-indigo-500 to-purple-600",
      },
    ],
  },
  {
    title: "Asymmetrische Krypto",
    subtitle: "Schlüssel, die jeder kennen darf – und trotzdem funktionieren.",
    lessons: [
      {
        slug: "diffie-hellman",
        label: "Diffie-Hellman",
        icon: "🔑",
        description: "Schlüsselaustausch über einen abhörbaren Kanal.",
        accent: "from-emerald-500 to-teal-600",
      },
      {
        slug: "rsa",
        label: "RSA",
        icon: "🔐",
        description: "Asymmetrische Verschlüsselung mit öffentlichem und privatem Schlüssel.",
        accent: "from-blue-600 to-cyan-500",
      },
      {
        slug: "ecc",
        label: "Elliptische Kurven",
        icon: "🌐",
        description: "Modernere Schwester von RSA – kürzere Schlüssel, gleiche Sicherheit.",
        accent: "from-green-500 to-emerald-600",
      },
      {
        slug: "signaturen",
        label: "Digitale Signaturen",
        icon: "✍️",
        description: "ECDSA live: unterschreiben, manipulieren, verifizieren.",
        accent: "from-pink-500 to-rose-600",
      },
    ],
  },
  {
    title: "Hashes & Integrität",
    subtitle: "Fingerabdrücke statt Originale.",
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
        label: "HMAC",
        icon: "🛡️",
        description: "Nachrichten authentifizieren mit geheimem Schlüssel.",
        accent: "from-purple-600 to-indigo-700",
      },
      {
        slug: "passwort",
        label: "Passwort-Hashing",
        icon: "🔒",
        description: "Warum bcrypt/Argon2 – mit Kosten-Slider zum Spielen.",
        accent: "from-red-500 to-rose-600",
      },
      {
        slug: "merkle",
        label: "Merkle & Blockchains",
        icon: "🌳",
        description: "Aus Hashes wird ein Baum – Git, IPFS, Bitcoin.",
        accent: "from-lime-500 to-green-600",
      },
    ],
  },
  {
    title: "Anwendung",
    subtitle: "Wo Kryptografie im echten Internet auftaucht.",
    lessons: [
      {
        slug: "tls",
        label: "TLS & PKI",
        icon: "🔏",
        description: "Was hinter dem Schloss-Symbol wirklich passiert.",
        accent: "from-cyan-500 to-blue-600",
      },
      {
        slug: "oauth",
        label: "OAuth 2.0",
        icon: "🪪",
        description: "Authorization-Code-Flow Schritt für Schritt.",
        accent: "from-lime-500 to-emerald-600",
      },
      {
        slug: "post-quantum",
        label: "Post-Quantum",
        icon: "⚛️",
        description: "Was passiert, wenn Quantencomputer RSA brechen.",
        accent: "from-fuchsia-500 to-pink-600",
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
        <h1 className="text-3xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100">
          Alle Lektionen
        </h1>
        <p className="mt-2 text-zinc-700 dark:text-zinc-300">
          Wähle eine Lektion – jede ist eigenständig und interaktiv. Empfohlene
          Reihenfolge: von oben nach unten.
        </p>
      </header>

      {categories.map((cat) => (
        <section key={cat.title} className="flex flex-col gap-4">
          <div>
            <h2 className="text-lg font-bold text-zinc-900 dark:text-zinc-100">{cat.title}</h2>
            <p className="text-sm text-zinc-600 dark:text-zinc-400">{cat.subtitle}</p>
          </div>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            {cat.lessons.map((l) => (
              <Link
                key={l.slug}
                href={`/lektionen/${l.slug}`}
                className="group relative overflow-hidden rounded-xl border border-zinc-200 bg-white p-5 shadow-sm transition-all hover:-translate-y-0.5 hover:shadow-lg dark:border-zinc-700 dark:bg-zinc-800 dark:hover:shadow-zinc-900/50"
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
                  <span className="text-base font-semibold text-zinc-900 group-hover:text-zinc-950 dark:text-zinc-100 dark:group-hover:text-white">
                    {l.label}
                  </span>
                  <span className="text-sm text-zinc-600 dark:text-zinc-400">{l.description}</span>
                </div>
              </Link>
            ))}
          </div>
        </section>
      ))}
    </div>
  );
}
