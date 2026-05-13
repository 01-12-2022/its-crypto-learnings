import { useState } from "react";
import Sidebar from "./components/Sidebar";
import CaesarCipher from "./components/CaesarCipher";
import XorCipher from "./components/XorCipher";
import FrequencyAnalysis from "./components/FrequencyAnalysis";
import Quiz from "./components/Quiz";

export default function App() {
  const [active, setActive] = useState("caesar");

  return (
    <div className="app">
      <Sidebar active={active} onChange={setActive} />
      <main className="content">
        {active === "caesar" && <CaesarCipher />}
        {active === "xor" && <XorCipher />}
        {active === "frequency" && <FrequencyAnalysis />}
        {active === "quiz" && <Quiz />}
      </main>
    </div>
  );
}
