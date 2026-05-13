import Link from "next/link";

const highlights = [
  { icon: "🔡", label: "Caesar", tint: "from-amber-400 to-rose-500", href: "/lektionen/caesar" },
  { icon: "⊕", label: "XOR", tint: "from-fuchsia-500 to-violet-600", href: "/lektionen/xor" },
  { icon: "📊", label: "Frequenz", tint: "from-sky-500 to-indigo-600", href: "/lektionen/frequenz" },
  { icon: "🔑", label: "Diffie-Hellman", tint: "from-emerald-500 to-teal-600", href: "/lektionen/diffie-hellman" },
  { icon: "🔐", label: "RSA", tint: "from-blue-600 to-cyan-500", href: "/lektionen/rsa" },
  { icon: "#️⃣", label: "Hashes", tint: "from-orange-500 to-pink-600", href: "/lektionen/hash" },
  { icon: "🪪", label: "OAuth", tint: "from-lime-500 to-emerald-600", href: "/lektionen/oauth" },
  { icon: "🛡️", label: "HMAC", tint: "from-purple-600 to-indigo-700", href: "/lektionen/hmac" },
];

type MapItem = { label: string; href?: string; soon?: boolean; note?: string };
type MapGroup = { title: string; subtitle: string; items: MapItem[] };

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

export default function Home() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-gradient-to-br from-indigo-50 via-white to-rose-50">
      <div className="pointer-events-none absolute -top-32 -left-32 h-96 w-96 rounded-full bg-fuchsia-300/40 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-32 -right-32 h-96 w-96 rounded-full bg-sky-300/40 blur-3xl" />

      <div className="relative mx-auto flex max-w-5xl flex-col items-center gap-10 px-6 py-16 text-center">
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
            <Link
              key={h.label}
              href={h.href}
              className={`rounded-xl bg-gradient-to-br ${h.tint} p-px shadow-md transition hover:scale-[1.03]`}
            >
              <div className="flex h-full flex-col items-center gap-1 rounded-[11px] bg-white/95 px-3 py-4 text-zinc-800">
                <span className="text-2xl">{h.icon}</span>
                <span className="text-sm font-semibold">{h.label}</span>
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* --- Intro: Was ist Kryptografie? --- */}
      <section className="relative mx-auto max-w-3xl px-6 pb-16">
        <div className="rounded-2xl border border-zinc-200 bg-white/80 p-8 shadow-sm backdrop-blur">
          <h2 className="text-2xl font-bold tracking-tight text-zinc-900">
            Was ist Kryptografie eigentlich?
          </h2>
          <p className="mt-3 text-zinc-700 leading-relaxed">
            Kryptografie ist die Kunst, in einer Welt voller Lauscher, Fälscher
            und Hochstapler trotzdem <strong>sicher zu kommunizieren</strong>.
            Sie beantwortet im Kern drei Fragen:
          </p>

          <ul className="mt-5 space-y-3 text-left">
            <li className="rounded-lg border border-indigo-200 bg-indigo-50/60 p-4">
              <strong className="text-indigo-900">🔒 Vertraulichkeit</strong>
              <span className="text-zinc-700"> — Kann jemand mitlesen?</span>
              <div className="mt-1 text-sm text-zinc-600">
                Klassisch lösen das Verfahren wie <em>Caesar</em>, <em>XOR</em>{" "}
                oder modern <em>AES</em>.
              </div>
            </li>
            <li className="rounded-lg border border-emerald-200 bg-emerald-50/60 p-4">
              <strong className="text-emerald-900">✅ Integrität</strong>
              <span className="text-zinc-700"> — Wurde unterwegs etwas verändert?</span>
              <div className="mt-1 text-sm text-zinc-600">
                Hier kommen <em>Hash-Funktionen</em> und <em>HMAC</em> ins
                Spiel — Fingerabdrücke, an denen man Manipulation erkennt.
              </div>
            </li>
            <li className="rounded-lg border border-rose-200 bg-rose-50/60 p-4">
              <strong className="text-rose-900">🪪 Authentizität</strong>
              <span className="text-zinc-700"> — Mit wem rede ich überhaupt?</span>
              <div className="mt-1 text-sm text-zinc-600">
                <em>Digitale Signaturen</em>, <em>Zertifikate</em> und{" "}
                Protokolle wie <em>OAuth</em> sorgen dafür, dass dein Gegenüber
                auch wirklich der ist, der er behauptet zu sein.
              </div>
            </li>
          </ul>

          <p className="mt-6 text-zinc-700 leading-relaxed">
            Die spannende Wendung: das alles soll funktionieren,{" "}
            <strong>auch wenn der Angreifer das Verfahren selbst kennt</strong>.
            Geheim bleiben darf nur der Schlüssel — das nennt man das{" "}
            <em>Kerckhoffs-Prinzip</em>. Genau deswegen ist „Security through
            obscurity" (selbstausgedachte Geheimverfahren) so eine schlechte
            Idee.
          </p>

          <p className="mt-4 text-zinc-700 leading-relaxed">
            Die Reise auf dieser Seite geht von <strong>2000 Jahre alten
            Tricks</strong> (die du auf Papier brechen kannst) bis zu den{" "}
            <strong>Bausteinen deiner HTTPS-Verbindung</strong> — und jede
            Lektion hat aufklappbare 🌱-, 🤔- und 🔬-Boxen, mit denen du
            selber wählst, wie tief du reingehen willst.
          </p>
        </div>
      </section>

      {/* --- Themen-Landkarte --- */}
      <section className="relative mx-auto max-w-5xl px-6 pb-24">
        <div className="mb-8 text-center">
          <h2 className="text-2xl font-bold tracking-tight text-zinc-900">
            Die Landkarte
          </h2>
          <p className="mt-2 text-zinc-600">
            So hängen die Themen zusammen. Manche Lektionen sind schon da,
            andere kommen noch.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
          {landscape.map((group) => (
            <div
              key={group.title}
              className="rounded-xl border border-zinc-200 bg-white/80 p-5 shadow-sm backdrop-blur"
            >
              <h3 className="text-base font-bold text-zinc-900">{group.title}</h3>
              <p className="mt-1 text-sm text-zinc-600">{group.subtitle}</p>
              <ul className="mt-4 flex flex-col gap-2">
                {group.items.map((item) => (
                  <li key={item.label} className="flex flex-col">
                    {item.href ? (
                      <Link
                        href={item.href}
                        className="group flex items-center gap-2 rounded-md px-2 py-1.5 text-sm font-medium text-zinc-800 transition hover:bg-indigo-50 hover:text-indigo-900"
                      >
                        <span className="text-emerald-600">●</span>
                        <span className="group-hover:underline">{item.label}</span>
                        <span className="ml-auto text-xs text-zinc-400 group-hover:text-indigo-500">
                          →
                        </span>
                      </Link>
                    ) : (
                      <div className="flex items-center gap-2 rounded-md px-2 py-1.5 text-sm text-zinc-500">
                        <span className="text-zinc-300">○</span>
                        <span>{item.label}</span>
                        <span className="ml-auto rounded-full border border-amber-300 bg-amber-50 px-2 py-0.5 text-[10px] font-semibold tracking-wider text-amber-800 uppercase">
                          kommt noch
                        </span>
                      </div>
                    )}
                    {item.note ? (
                      <span className="ml-6 text-xs text-zinc-500">{item.note}</span>
                    ) : null}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <p className="mt-10 text-center text-sm text-zinc-500">
          Tipp: wenn du komplett neu bist, fang mit{" "}
          <Link href="/lektionen/caesar" className="text-indigo-700 underline">
            Caesar
          </Link>{" "}
          an und arbeite dich nach unten durch. Wenn du nur eine konkrete Frage
          hast — z. B. „wie funktioniert HTTPS-Login?" — spring direkt zu{" "}
          <Link href="/lektionen/oauth" className="text-indigo-700 underline">
            OAuth
          </Link>
          .
        </p>
      </section>
    </div>
  );
}
