import { useState } from "react";
import "./Emoji.css";
import Vida from './Vida.tsx';
const EMOJIS = new Map <string,string>(
    [
        ["happy", "🙂"],
        ["sick", "🤢"],
        ["dead", "😵"],
        ["sad", "😞"]
    ]
);






export default function Emoji(){
     const[situacao, setSituacao] = useState("daddy");
     const[saude, setSaude] = useState(4);
     const[energia, setEnergia] = useState(3);
     const[comida, setComida] = useState(2);
     const[agua, setAgua] = useState(1);

    function onAlimentar(){
        setComida(comida === 5 ? comida: comida +1);
    }


    function onHidratar(){
        setAgua(agua === 5 ? agua : agua +1);
    }

    function onLigaDesligaLuz(){
        
    }

    function onCiclo(){
        
    }
    
    
    return(
        <div className="emoji">
        <div className="situacao">{EMOJIS.get(situacao) || "🫥"}</div>
        <div className="vida">
            <Vida icone="🩷" valor={saude}/>
            <Vida icone="⚡"  valor={energia}/>
            <Vida icone="🍗" valor={comida}/>
            <Vida icone="💧" valor={agua}/>
        </div>
        <div className="acoes">
            <button onClick={onAlimentar}>Dar Comida</button>
            <button onClick={onHidratar}>Dar àgua</button>
            <button onClick={onLigaDesligaLuz}>Ligar/Desligar a Luz</button>
            <button onClick={onCiclo}>Ciclo</button>
        </div>
        </div>
    );      
}