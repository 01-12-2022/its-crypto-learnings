"use client";

import { useEffect, useState } from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneLight } from "react-syntax-highlighter/dist/esm/styles/prism";
import "./lesson.css";

async function sha256(text: string): Promise<string> {
  const buf = new TextEncoder().encode(text);
  const hash = await crypto.subtle.digest("SHA-256", buf);
  return Array.from(new Uint8Array(hash))
    .map((b) => b.toString(16).padStart(2, "0"))
    .join("");
}

const implCode = `async function sha256(text: string) {
  const buf = new TextEncoder().encode(text);
  const hash = await crypto.subtle.digest("SHA-256", buf);
  return Array.from(new Uint8Array(hash))
    .map((b) => b.toString(16).padStart(2, "0"))
    .join("");
}`;

function diffChars(a: string, b: string) {
  const max = Math.max(a.length, b.length);
  const out: { ch: string; diff: boolean }[] = [];
  for (let i = 0; i < max; i++) {
    out.push({ ch: b[i] ?? "·", diff: a[i] !== b[i] });
  }
  return out;
}

export default function HashFunction() {
  const [textA, setTextA] = useState("Hallo Welt");
  const [textB, setTextB] = useState("Hallo Welt!");
  const [hashA, setHashA] = useState("");
  const [hashB, setHashB] = useState("");
  const [showCode, setShowCode] = useState(false);

  useEffect(() => {
    sha256(textA).then(setHashA);
  }, [textA]);

  useEffect(() => {
    sha256(textB).then(setHashB);
  }, [textB]);

  const diffCount = hashA && hashB ? diffChars(hashA, hashB).filter((c) => c.diff).length : 0;
  const diffPct = hashA && hashB ? Math.round((diffCount / hashA.length) * 100) : 0;

  return (
    <div className="lesson-card">
      <h2>Hash-Funktionen (SHA-256)</h2>
      <p className="lesson-description">
        Eine Hash-Funktion macht aus einem beliebig langen Text einen{" "}
        <strong>Fingerabdruck fester Länge</strong>. SHA-256 liefert immer 256 Bit
        (= 64 Hex-Zeichen). Drei zentrale Eigenschaften: <strong>deterministisch</strong>,{" "}
        <strong>einweg</strong> (nicht umkehrbar) und{" "}
        <strong>kollisionsresistent</strong> (zwei verschiedene Eingaben sollten
        praktisch nie denselben Hash ergeben).
      </p>

      <div className="info-box">
        <strong>Wofür?</strong> Passwortspeicherung, Integritätsprüfung von Downloads,
        digitale Signaturen, Blockchains, Git-Commits – überall wo man prüfen will
        &bdquo;hat sich etwas verändert?&ldquo;, ohne den Inhalt selbst zu speichern.
      </div>

      <div className="input-group">
        <label>Eingabe A</label>
        <input
          type="text"
          value={textA}
          onChange={(e) => setTextA(e.target.value)}
          placeholder="Beliebiger Text..."
        />
        <div className="hash-output">{hashA || "…"}</div>
      </div>

      <div className="input-group">
        <label>Eingabe B</label>
        <input
          type="text"
          value={textB}
          onChange={(e) => setTextB(e.target.value)}
          placeholder="Leicht abweichender Text..."
        />
        <div className="hash-output">
          {hashB
            ? diffChars(hashA, hashB).map((c, i) => (
                <span key={i} className={c.diff ? "diff-char-diff" : "diff-char-same"}>
                  {c.ch}
                </span>
              ))
            : "…"}
        </div>
      </div>

      <div className={diffPct > 30 ? "success-box" : "info-box"}>
        <strong>Avalanche-Effekt:</strong> {diffCount} von {hashA.length || 64} Hex-Zeichen
        sind unterschiedlich ({diffPct} %). Schon eine winzige Änderung an der
        Eingabe verändert den Hash komplett – das ist gewollt und macht Hashes für
        Sicherheitszwecke nutzbar.
      </div>

      <h3>Eigenschaften im Überblick</h3>
      <ol className="step-list">
        <li>
          <strong>Deterministisch:</strong> Gleiche Eingabe → immer gleicher Hash.
        </li>
        <li>
          <strong>Einweg:</strong> Aus dem Hash lässt sich die Eingabe nicht
          zurückrechnen – nur durch Raten (Brute-Force).
        </li>
        <li>
          <strong>Kollisionsresistent:</strong> Es ist praktisch unmöglich, zwei
          verschiedene Eingaben mit demselben Hash zu finden.
        </li>
        <li>
          <strong>Schnell zu berechnen:</strong> Aber für Passwörter nimmt man
          absichtlich langsame Varianten (bcrypt, scrypt, Argon2).
        </li>
      </ol>

      <div className="warn-box">
        <strong>Achtung:</strong> MD5 und SHA-1 gelten als gebrochen – für
        Sicherheit immer mindestens SHA-256 nehmen. Für Passwörter nie reine
        Hashes, sondern <strong>Argon2</strong> oder <strong>bcrypt</strong> mit
        Salt.
      </div>

      <button className="toggle-code" onClick={() => setShowCode(!showCode)}>
        {showCode ? "Code ausblenden" : "Implementierung anzeigen"}
      </button>

      {showCode && (
        <SyntaxHighlighter language="typescript" style={oneLight}>
          {implCode}
        </SyntaxHighlighter>
      )}
    </div>
  );
}
