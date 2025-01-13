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
        setComida(Math.min(comida + 1,5));
    }


    function onHidratar(){
        setAgua(Math.min(agua + 1,5));
    }

    function onLigaDesligaLuz(){
        
    }

    function onCiclo(){
        setComida(Math.max(0,comida-1));
        setAgua(Math.max(0,agua-1));
        setEnergia(Math.max(0,energia-1));
        if(comida === 0){
            setSaude(prevSaude=>Math.max(0, prevSaude-1));
        }
        if(agua === 0){
            setSaude(prevSaude=>Math.max(0, prevSaude-1));
        }
        if(energia === 0){
            setSaude(prevSaude=>Math.max(0, prevSaude-1));
        }
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