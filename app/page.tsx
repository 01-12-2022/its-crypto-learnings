import Link from "next/link";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-zinc-50 px-6">
      <div className="flex max-w-xl flex-col items-center gap-6 text-center">
        <h1 className="text-4xl font-bold tracking-tight text-zinc-900">
          Kryptografie lernen
        </h1>
        <p className="text-lg text-zinc-500">
          Interaktive Lernseiten zu klassischen Verschlüsselungsverfahren —
          ausprobieren, verstehen, üben.
        </p>
        <Link
          href="/lektionen"
          className="rounded-full bg-zinc-900 px-8 py-3 text-sm font-semibold text-white transition-colors hover:bg-zinc-700"
        >
          Zu den Lektionen →
        </Link>
      </div>
    </div>
  );
}
