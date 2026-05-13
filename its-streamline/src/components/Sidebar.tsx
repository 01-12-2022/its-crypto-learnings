interface SidebarProps {
  active: string;
  onChange: (id: string) => void;
}

const lessons = [
  { id: "caesar", label: "Caesar-Cipher", emoji: "🔡" },
  { id: "xor", label: "XOR-Verschlüsselung", emoji: "⊕" },
  { id: "frequency", label: "Häufigkeitsanalyse", emoji: "📊" },
  { id: "quiz", label: "Quiz", emoji: "🧪" },
];

export default function Sidebar({ active, onChange }: SidebarProps) {
  return (
    <nav className="sidebar">
      <div className="sidebar-header">
        <h1>Kryptografie</h1>
        <p>Lernen & Üben</p>
      </div>
      <ul>
        {lessons.map((l) => (
          <li key={l.id}>
            <button
              className={`nav-item ${active === l.id ? "active" : ""}`}
              onClick={() => onChange(l.id)}
            >
              <span className="nav-emoji">{l.emoji}</span>
              <span>{l.label}</span>
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
}
