import Link from "next/link";
import { MiniCaesar } from "@/components/landing/MiniCaesar";

type MapItem = { label: string; href?: string; soon?: boolean; note?: string };
type MapGroup = { title: string; subtitle: string; items: MapItem[] };

const paths: {
  icon: string;
  title: string;
  audience: string;
  description: string;
  steps: { slug: string; label: string }[];
  accent: string;
}[] = [
  {
    icon: "🌱",
    title: "Komplett neu",
    audience: "Noch nie mit Krypto in Berührung gekommen.",
    description:
      "Wir starten ganz am Anfang: was Verschlüsselung überhaupt soll, dann das einfachste denkbare Verfahren.",
    steps: [
      { slug: "einleitung", label: "Was ist Kryptografie?" },
      { slug: "caesar", label: "Caesar-Cipher" },
      { slug: "frequenz", label: "Häufigkeitsanalyse" },
      { slug: "hash", label: "Hash-Funktionen" },
    ],
    accent: "from-emerald-500 to-teal-600",
  },
  {
    icon: "💻",
    title: "Entwickler:in",
    audience: "Kenne ich aus dem Job, will's mal richtig verstehen.",
    description:
      "Fokus auf moderne Bausteine, die du in echten Systemen siehst — AES, RSA, TLS, OAuth.",
    steps: [
      { slug: "symm-asymm", label: "Symmetrisch vs. asymmetrisch" },
      { slug: "aes", label: "AES" },
      { slug: "diffie-hellman", label: "Diffie-Hellman" },
      { slug: "tls", label: "TLS & PKI" },
      { slug: "oauth", label: "OAuth 2.0" },
    ],
    accent: "from-blue-500 to-indigo-600",
  },
  {
    icon: "🧠",
    title: "Tiefer rein",
    audience: "Will Mathe, Geschichte, Stolperfallen.",
    description:
      "Die nicht-trivialen Themen: Angreifer-Modelle, Padding-Oracles, Side-Channels, Post-Quantum.",
    steps: [
      { slug: "kerckhoffs", label: "Angreifer & Kerckhoffs" },
      { slug: "modi", label: "Betriebsmodi & Padding" },
      { slug: "signaturen", label: "Digitale Signaturen" },
      { slug: "ecc", label: "Elliptische Kurven" },
      { slug: "post-quantum", label: "Post-Quantum" },
    ],
    accent: "from-fuchsia-500 to-purple-600",
  },
];

const landscape: MapGroup[] = [
  {
    title: "Grundlagen & Mindset",
    subtitle: "Was Kryptografie überhaupt löst – und wovon sie nicht schützt.",
    items: [
      { label: "Was ist Kryptografie?", href: "/lektionen/einleitung", note: "Vertraulichkeit · Integrität · Authentizität" },
      { label: "Angreifer-Modelle & Kerckhoffs-Prinzip", href: "/lektionen/kerckhoffs" },
      { label: "Zufall & Entropie", href: "/lektionen/entropie", note: "warum schlechter Zufall alles bricht" },
    ],
  },
  {
    title: "Klassische Verfahren",
    subtitle: "Wo Krypto historisch herkommt – und woran sie scheitert.",
    items: [
      { label: "Caesar-Cipher", href: "/lektionen/caesar" },
      { label: "XOR-Verschlüsselung", href: "/lektionen/xor" },
      { label: "Häufigkeitsanalyse", href: "/lektionen/frequenz" },
      { label: "Enigma & One-Time-Pad", href: "/lektionen/enigma-otp" },
    ],
  },
  {
    title: "Symmetrische Krypto",
    subtitle: "Ein gemeinsames Geheimnis – wie tauscht man es aus?",
    items: [
      { label: "Symmetrisch vs. asymmetrisch", href: "/lektionen/symm-asymm", note: "die Grundunterscheidung" },
      { label: "AES", href: "/lektionen/aes", note: "die wichtigste Blockchiffre" },
      { label: "Betriebsmodi: CBC, CTR, GCM & Padding", href: "/lektionen/modi" },
    ],
  },
  {
    title: "Asymmetrische Krypto",
    subtitle: "Schlüssel, die jeder kennen darf – und trotzdem funktionieren.",
    items: [
      { label: "Diffie-Hellman", href: "/lektionen/diffie-hellman" },
      { label: "RSA", href: "/lektionen/rsa" },
      { label: "Elliptische Kurven (ECC)", href: "/lektionen/ecc" },
      { label: "Digitale Signaturen", href: "/lektionen/signaturen", note: "Hash + asymmetrische Krypto kombiniert" },
    ],
  },
  {
    title: "Hashes & Integrität",
    subtitle: "Fingerabdrücke statt Originale.",
    items: [
      { label: "Hash-Funktionen (SHA-256)", href: "/lektionen/hash" },
      { label: "HMAC", href: "/lektionen/hmac" },
      { label: "Passwort-Hashing (bcrypt, Argon2)", href: "/lektionen/passwort" },
      { label: "Merkle-Bäume & Blockchains", href: "/lektionen/merkle" },
    ],
  },
  {
    title: "Protokolle & Anwendung",
    subtitle: "Wo das alles im echten Internet auftaucht.",
    items: [
      { label: "TLS, Zertifikate & PKI", href: "/lektionen/tls" },
      { label: "OAuth 2.0", href: "/lektionen/oauth" },
      { label: "Post-Quantum-Krypto", href: "/lektionen/post-quantum", note: "Ausblick auf die nächste Generation" },
    ],
  },
];

const stats = [
  { number: "17", label: "Lektionen" },
  { number: "6", label: "Themengebiete" },
  { number: "100%", label: "interaktiv" },
  { number: "0 €", label: "Anmeldung" },
];

export default function Home() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-gradient-to-br from-indigo-50 via-white to-rose-50 dark:from-zinc-950 dark:via-zinc-900 dark:to-zinc-950">
      <div className="pointer-events-none absolute -top-32 -left-32 h-96 w-96 rounded-full bg-fuchsia-300/40 blur-3xl dark:bg-fuchsia-700/20" />
      <div className="pointer-events-none absolute top-1/3 -right-32 h-96 w-96 rounded-full bg-sky-300/40 blur-3xl dark:bg-sky-700/20" />
      <div className="pointer-events-none absolute -bottom-32 left-1/4 h-96 w-96 rounded-full bg-emerald-300/30 blur-3xl dark:bg-emerald-700/15" />

      {/* HERO */}
      <section className="relative mx-auto flex max-w-5xl flex-col items-center gap-8 px-6 pt-16 pb-12 text-center sm:pt-24">
        <span className="rounded-full border border-zinc-300 bg-white/80 px-4 py-1.5 text-xs font-semibold tracking-wider text-zinc-700 uppercase shadow-sm backdrop-blur dark:border-zinc-700 dark:bg-zinc-800/70 dark:text-zinc-300">
          Interaktiv · auf Deutsch · ohne Anmeldung
        </span>

        <h1 className="bg-gradient-to-r from-indigo-700 via-fuchsia-600 to-rose-600 bg-clip-text text-5xl font-extrabold tracking-tight text-transparent sm:text-7xl dark:from-indigo-400 dark:via-fuchsia-400 dark:to-rose-400">
          Kryptografie,
          <br />
          die man anfassen kann.
        </h1>

        <p className="max-w-2xl text-lg text-zinc-700 sm:text-xl dark:text-zinc-300">
          Von Caesar bis Post-Quantum — jede Lektion zum Ausprobieren, mit
          aufklappbaren Tiefen-Boxen für Einsteiger:innen und Profis.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-3">
          <Link
            href="/lektionen/einleitung"
            className="rounded-full bg-zinc-900 px-8 py-3.5 text-sm font-semibold text-white shadow-lg shadow-zinc-900/20 transition hover:scale-[1.02] hover:bg-zinc-800 dark:bg-zinc-100 dark:text-zinc-900 dark:shadow-zinc-100/10 dark:hover:bg-white"
          >
            Bei null anfangen →
          </Link>
          <Link
            href="/lektionen"
            className="rounded-full border border-zinc-300 bg-white/80 px-8 py-3.5 text-sm font-semibold text-zinc-800 shadow-sm backdrop-blur transition hover:border-zinc-900 hover:text-zinc-900 dark:border-zinc-700 dark:bg-zinc-800/70 dark:text-zinc-200 dark:hover:border-zinc-400 dark:hover:text-white"
          >
            Alle Lektionen
          </Link>
          <Link
            href="/lektionen/quiz"
            className="rounded-full border border-zinc-300 bg-white/80 px-8 py-3.5 text-sm font-semibold text-zinc-800 shadow-sm backdrop-blur transition hover:border-zinc-900 hover:text-zinc-900 dark:border-zinc-700 dark:bg-zinc-800/70 dark:text-zinc-200 dark:hover:border-zinc-400 dark:hover:text-white"
          >
            Quiz 🧪
          </Link>
        </div>

        {/* Interactive teaser */}
        <div className="mt-6 w-full">
          <MiniCaesar />
        </div>
      </section>

      {/* INTRO: Was ist Kryptografie? */}
      <section className="relative mx-auto max-w-3xl px-6 pb-16">
        <div className="rounded-2xl border border-zinc-200 bg-white/80 p-8 shadow-sm backdrop-blur dark:border-zinc-700 dark:bg-zinc-800/70">
          <h2 className="text-2xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100">
            Was ist Kryptografie eigentlich?
          </h2>
          <p className="mt-3 text-zinc-700 leading-relaxed dark:text-zinc-300">
            Kryptografie ist die Kunst, in einer Welt voller Lauscher, Fälscher
            und Hochstapler trotzdem <strong>sicher zu kommunizieren</strong>.
            Sie beantwortet im Kern drei Fragen:
          </p>

          <ul className="mt-5 space-y-3 text-left">
            <li className="rounded-lg border border-indigo-200 bg-indigo-50/60 p-4 dark:border-indigo-800 dark:bg-indigo-950/40">
              <strong className="text-indigo-900 dark:text-indigo-200">🔒 Vertraulichkeit</strong>
              <span className="text-zinc-700 dark:text-zinc-300"> — Kann jemand mitlesen?</span>
              <div className="mt-1 text-sm text-zinc-600 dark:text-zinc-400">
                Klassisch lösen das Verfahren wie <em>Caesar</em>, <em>XOR</em>{" "}
                oder modern <em>AES</em>.
              </div>
            </li>
            <li className="rounded-lg border border-emerald-200 bg-emerald-50/60 p-4 dark:border-emerald-800 dark:bg-emerald-950/40">
              <strong className="text-emerald-900 dark:text-emerald-200">✅ Integrität</strong>
              <span className="text-zinc-700 dark:text-zinc-300"> — Wurde unterwegs etwas verändert?</span>
              <div className="mt-1 text-sm text-zinc-600 dark:text-zinc-400">
                Hier kommen <em>Hash-Funktionen</em> und <em>HMAC</em> ins
                Spiel — Fingerabdrücke, an denen man Manipulation erkennt.
              </div>
            </li>
            <li className="rounded-lg border border-rose-200 bg-rose-50/60 p-4 dark:border-rose-800 dark:bg-rose-950/40">
              <strong className="text-rose-900 dark:text-rose-200">🪪 Authentizität</strong>
              <span className="text-zinc-700 dark:text-zinc-300"> — Mit wem rede ich überhaupt?</span>
              <div className="mt-1 text-sm text-zinc-600 dark:text-zinc-400">
                <em>Digitale Signaturen</em>, <em>Zertifikate</em> und{" "}
                Protokolle wie <em>OAuth</em> sorgen dafür, dass dein Gegenüber
                auch wirklich der ist, der er behauptet zu sein.
              </div>
            </li>
          </ul>

          <p className="mt-6 text-zinc-700 leading-relaxed dark:text-zinc-300">
            Die spannende Wendung: das alles soll funktionieren,{" "}
            <strong>auch wenn der Angreifer das Verfahren selbst kennt</strong>.
            Geheim bleiben darf nur der Schlüssel — das nennt man das{" "}
            <em>Kerckhoffs-Prinzip</em>. Genau deswegen ist „Security through
            obscurity" (selbstausgedachte Geheimverfahren) so eine schlechte
            Idee.
          </p>
        </div>
      </section>

      {/* LEARNING PATHS */}
      <section className="relative mx-auto max-w-5xl px-6 pb-20">
        <div className="mb-10 text-center">
          <h2 className="text-2xl font-bold tracking-tight text-zinc-900 sm:text-3xl dark:text-zinc-100">
            Wo soll ich anfangen?
          </h2>
          <p className="mt-2 text-zinc-600 dark:text-zinc-400">
            Drei Pfade durchs Material. Such dir aus, was zu dir passt.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
          {paths.map((p) => (
            <div
              key={p.title}
              className="relative flex flex-col overflow-hidden rounded-2xl border border-zinc-200 bg-white shadow-sm transition hover:shadow-lg dark:border-zinc-700 dark:bg-zinc-800/80 dark:hover:shadow-zinc-900/40"
            >
              <div className={`h-1 bg-gradient-to-r ${p.accent}`} />
              <div className="flex flex-1 flex-col p-6">
                <div className="flex items-center gap-3">
                  <span
                    className={`inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br ${p.accent} text-2xl text-white shadow`}
                  >
                    {p.icon}
                  </span>
                  <div>
                    <h3 className="text-base font-bold text-zinc-900 dark:text-zinc-100">{p.title}</h3>
                    <p className="text-xs text-zinc-500 dark:text-zinc-400">{p.audience}</p>
                  </div>
                </div>

                <p className="mt-4 text-sm text-zinc-700 dark:text-zinc-300">{p.description}</p>

                <ol className="mt-5 flex flex-1 flex-col gap-1.5">
                  {p.steps.map((s, i) => (
                    <li key={s.slug}>
                      <Link
                        href={`/lektionen/${s.slug}`}
                        className="group flex items-center gap-3 rounded-lg px-2.5 py-1.5 text-sm text-zinc-800 transition hover:bg-zinc-50 dark:text-zinc-200 dark:hover:bg-zinc-700/60"
                      >
                        <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-zinc-100 text-xs font-bold text-zinc-600 group-hover:bg-indigo-100 group-hover:text-indigo-700 dark:bg-zinc-700 dark:text-zinc-300 dark:group-hover:bg-indigo-900/60 dark:group-hover:text-indigo-300">
                          {i + 1}
                        </span>
                        <span className="font-medium group-hover:text-indigo-700 group-hover:underline dark:group-hover:text-indigo-300">
                          {s.label}
                        </span>
                      </Link>
                    </li>
                  ))}
                </ol>

                <Link
                  href={`/lektionen/${p.steps[0].slug}`}
                  className={`mt-6 inline-flex items-center justify-center rounded-full bg-gradient-to-r ${p.accent} px-4 py-2 text-sm font-semibold text-white shadow transition hover:scale-[1.02]`}
                >
                  Pfad starten →
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* LANDSCAPE */}
      <section className="relative mx-auto max-w-5xl px-6 pb-20">
        <div className="mb-8 text-center">
          <h2 className="text-2xl font-bold tracking-tight text-zinc-900 sm:text-3xl dark:text-zinc-100">
            Die ganze Landkarte
          </h2>
          <p className="mt-2 text-zinc-600 dark:text-zinc-400">
            Sechs Themengebiete, von ganz einfach bis ziemlich tief.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
          {landscape.map((group) => (
            <div
              key={group.title}
              className="rounded-xl border border-zinc-200 bg-white/80 p-5 shadow-sm backdrop-blur dark:border-zinc-700 dark:bg-zinc-800/70"
            >
              <h3 className="text-base font-bold text-zinc-900 dark:text-zinc-100">{group.title}</h3>
              <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-400">{group.subtitle}</p>
              <ul className="mt-4 flex flex-col gap-2">
                {group.items.map((item) => (
                  <li key={item.label} className="flex flex-col">
                    {item.href ? (
                      <Link
                        href={item.href}
                        className="group flex items-center gap-2 rounded-md px-2 py-1.5 text-sm font-medium text-zinc-800 transition hover:bg-indigo-50 hover:text-indigo-900 dark:text-zinc-200 dark:hover:bg-indigo-900/30 dark:hover:text-indigo-200"
                      >
                        <span className="text-emerald-600 dark:text-emerald-400">●</span>
                        <span className="group-hover:underline">{item.label}</span>
                        <span className="ml-auto text-xs text-zinc-400 group-hover:text-indigo-500 dark:text-zinc-500 dark:group-hover:text-indigo-300">
                          →
                        </span>
                      </Link>
                    ) : (
                      <div className="flex items-center gap-2 rounded-md px-2 py-1.5 text-sm text-zinc-500 dark:text-zinc-400">
                        <span className="text-zinc-300 dark:text-zinc-600">○</span>
                        <span>{item.label}</span>
                        <span className="ml-auto rounded-full border border-amber-300 bg-amber-50 px-2 py-0.5 text-[10px] font-semibold tracking-wider text-amber-800 uppercase dark:border-amber-700 dark:bg-amber-950/50 dark:text-amber-300">
                          kommt noch
                        </span>
                      </div>
                    )}
                    {item.note ? (
                      <span className="ml-6 text-xs text-zinc-500 dark:text-zinc-500">{item.note}</span>
                    ) : null}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* STATS */}
      <section className="relative mx-auto max-w-5xl px-6 pb-24">
        <div className="grid grid-cols-2 gap-4 rounded-2xl border border-zinc-200 bg-white/70 p-8 shadow-sm backdrop-blur sm:grid-cols-4 dark:border-zinc-700 dark:bg-zinc-800/60">
          {stats.map((s) => (
            <div key={s.label} className="text-center">
              <div className="bg-gradient-to-r from-indigo-700 via-fuchsia-600 to-rose-600 bg-clip-text text-3xl font-extrabold text-transparent sm:text-4xl dark:from-indigo-400 dark:via-fuchsia-400 dark:to-rose-400">
                {s.number}
              </div>
              <div className="mt-1 text-xs font-semibold tracking-wider text-zinc-600 uppercase dark:text-zinc-400">
                {s.label}
              </div>
            </div>
          ))}
        </div>

        <p className="mt-8 text-center text-sm text-zinc-500 dark:text-zinc-400">
          Alle Lektionen laufen rein im Browser — kein Backend, keine Tracker,
          keine Anmeldung. Code unter{" "}
          <Link href="/lektionen" className="text-indigo-700 underline dark:text-indigo-400">
            /lektionen
          </Link>{" "}
          öffnen und loslegen.
        </p>
      </section>
    </div>
  );
}
