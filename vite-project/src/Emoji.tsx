import { useState } from "react";
import "./Emoji.css";
import Vida from "./Vida.tsx";
const EMOJIS = new Map<string, string>([
  ["happy", "🙂"],
  ["sleep", "😴"],
  ["sick", "🤢"],
  ["dead", "😵"],
]);

export default function Emoji() {
  const [situacao, setSituacao] = useState("happy");
  const [saude, setSaude] = useState(4);
  const [energia, setEnergia] = useState(3);
  const [comida, setComida] = useState(2);
  const [agua, setAgua] = useState(1);
  const [luz, setLuz] = useState(true);

  function onAlimentar() {
    setComida(Math.min(comida + 1, 5));
  }

  function onHidratar() {
    setAgua(Math.min(agua + 1, 5));
  }

  function onLigaDesligaLuz() {
    setLuz(!luz);
  }

  function onCiclo() {
    if (!luz && comida > 1 && agua >1) {
      setSaude(Math.min(5, saude + 1));
    }

    setComida(Math.max(0, comida - 1));
    setAgua(Math.max(0, agua - 1));

    if (luz) {
      setEnergia(Math.max(0, energia - 1));
    } else {
      setEnergia(Math.min(5, energia + 1));
    }

    if (comida === 0) {
      setSaude((prevSaude) => Math.max(0, prevSaude - 1));
    }
    if (agua === 0) {
      setSaude((prevSaude) => Math.max(0, prevSaude - 1));
    }
    if (energia === 0) {
      setSaude((prevSaude) => Math.max(0, prevSaude - 1));
    }
    if (energia <= 2) {
      console.log("ToSleep()!");
      setSituacao("sleep");
    }

    if (saude <= 2) {
      console.log("ToSick( )!");
      setSituacao("sick");
    }

    if (saude === 0) {
      console.log("ToDead()!");
      setSituacao("dead");
      return;
    }
  }

  return (
    <div className="emoji">
      <div className="situacao">{EMOJIS.get(situacao) || "🫥"}</div>
      <div className="vida">
        <Vida icone="🩷" valor={saude} />
        <Vida icone="⚡" valor={energia} />
        <Vida icone="🍗" valor={comida} />
        <Vida icone="💧" valor={agua} />
      </div>
      <div className="acoes">
        <button onClick={onAlimentar}>Dar Comida</button>
        <button onClick={onHidratar}>Dar àgua</button>
        <button onClick={onLigaDesligaLuz}>
          <span style={{ filter: luz ? "" : "grayscale(100%)" }}>💡</span>
          {luz ? "Apagar" : "Acender"} a Luz
        </button>
        <button onClick={onCiclo}>Ciclo</button>
      </div>
    </div>
  );
}
