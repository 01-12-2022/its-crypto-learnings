import { useState } from "react";
import type { QuizQuestion } from "../types";

const questions: QuizQuestion[] = [
  {
    question: "Welcher Buchstabe ist im Deutschen am häufigsten?",
    options: ["A", "E", "I", "S"],
    correctIndex: 1,
    explanation: "E kommt in deutschen Texten mit ~17% am häufigsten vor.",
  },
  {
    question: "Was ist der Schlüsselraum beim Caesar-Cipher (lateinisches Alphabet)?",
    options: ["26", "25", "256", "Unendlich"],
    correctIndex: 1,
    explanation:
      "Es gibt 25 sinnvolle Verschiebungen (1–25). Eine Verschiebung von 0 oder 26 ergibt den Klartext.",
  },
  {
    question: "XOR mit demselben Schlüssel zweimal angewendet ergibt...",
    options: ["Eine stärkere Verschlüsselung", "Den Klartext", "Zufällige Daten", "Einen Fehler"],
    correctIndex: 1,
    explanation: "XOR ist selbstinvers: A ⊕ K ⊕ K = A. Das macht XOR für Verschlüsselung und Entschlüsselung mit demselben Schlüssel nutzbar.",
  },
  {
    question: "Was ist ein One-Time-Pad?",
    options: [
      "Ein wiederverwendbarer Schlüssel",
      "Eine Caesar-Variante",
      "Ein zufälliger Schlüssel so lang wie die Nachricht, der nur einmal verwendet wird",
      "Ein modernes symmetrisches Verfahren",
    ],
    correctIndex: 2,
    explanation:
      "Das One-Time-Pad ist beweisbar sicher — aber nur wenn der Schlüssel wirklich zufällig, genau so lang wie die Nachricht ist und niemals wiederverwendet wird.",
  },
  {
    question: "Warum ist der Caesar-Cipher unsicher?",
    options: [
      "Er ist zu langsam",
      "Der Schlüsselraum ist zu klein — nur 25 Möglichkeiten",
      "Er funktioniert nur auf Englisch",
      "Er braucht zu viel Speicher",
    ],
    correctIndex: 1,
    explanation:
      "Mit nur 25 möglichen Schlüsseln kann ein Angreifer alle Möglichkeiten in Sekunden durchprobieren (Brute-Force).",
  },
];

export default function Quiz() {
  const [current, setCurrent] = useState(0);
  const [selected, setSelected] = useState<number | null>(null);
  const [score, setScore] = useState(0);
  const [done, setDone] = useState(false);

  const q = questions[current];

  function handleAnswer(index: number) {
    if (selected !== null) return;
    setSelected(index);
    if (index === q.correctIndex) setScore((s) => s + 1);
  }

  function next() {
    if (current + 1 >= questions.length) {
      setDone(true);
    } else {
      setCurrent((c) => c + 1);
      setSelected(null);
    }
  }

  function restart() {
    setCurrent(0);
    setSelected(null);
    setScore(0);
    setDone(false);
  }

  if (done) {
    return (
      <div className="lesson-card quiz-done">
        <h2>Quiz abgeschlossen!</h2>
        <div className="score-display">
          <span className="score-number">{score}</span>
          <span className="score-total">/ {questions.length}</span>
        </div>
        <p>
          {score === questions.length
            ? "Perfekt! Du hast alles richtig!"
            : score >= questions.length / 2
            ? "Gut gemacht! Schau dir die Lektionen nochmal an, um die restlichen zu meistern."
            : "Noch etwas Übung nötig — die Lektionen helfen dir!"}
        </p>
        <button className="btn-primary" onClick={restart}>
          Nochmal versuchen
        </button>
      </div>
    );
  }

  return (
    <div className="lesson-card">
      <div className="quiz-header">
        <h2>Quiz</h2>
        <span className="quiz-progress">
          {current + 1} / {questions.length}
        </span>
      </div>

      <div className="progress-bar">
        <div
          className="progress-fill"
          style={{ width: `${((current) / questions.length) * 100}%` }}
        />
      </div>

      <p className="quiz-question">{q.question}</p>

      <div className="options">
        {q.options.map((opt, i) => {
          let className = "option";
          if (selected !== null) {
            if (i === q.correctIndex) className += " correct";
            else if (i === selected) className += " wrong";
          }
          return (
            <button key={i} className={className} onClick={() => handleAnswer(i)}>
              {opt}
            </button>
          );
        })}
      </div>

      {selected !== null && (
        <div className={`explanation ${selected === q.correctIndex ? "correct-box" : "wrong-box"}`}>
          <strong>{selected === q.correctIndex ? "Richtig!" : "Falsch."}</strong>{" "}
          {q.explanation}
        </div>
      )}

      {selected !== null && (
        <button className="btn-primary" onClick={next}>
          {current + 1 >= questions.length ? "Ergebnis anzeigen" : "Nächste Frage"}
        </button>
      )}
    </div>
  );
}
