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
     const[situacao, setSituacao] = useState("happy");

    function toHappy(){
        console.log(`toHappy()!" ${situacao}`);
        setSituacao("happy");
        console.log(`toHappy()!" ${situacao}`);
    }


    function toDead(){
        console.log("toDead()!");
        setSituacao("dead");
    }

    function toSick(){
        console.log("toSick()!");
        setSituacao("sick");
    }

    function toSad(){
        console.log("toSick()!");
        setSituacao("sad");
    }

    function cicle(){
        console.log("troca()!");
        switch(situacao){
            case "happy":
                setSituacao("sick");
                break;
            case "sick":
                setSituacao("dead");
                break;
            case "dead":
                setSituacao("sad")
                break;
            case "sad":
                setSituacao("happy");
                break;
            default:
                setSituacao("happy");
        }
    }
    
    return(
        <div className="emoji">
        <div className="situacao">{EMOJIS.get(situacao) || "🫥"}</div>
        <div className="vida">
            <Vida icone="🩷"/>
            <Vida icone="⚡"/>
            <Vida icone="🍗"/>
            <Vida icone="💧"/>
        </div>
        <div className="acoes">
            <button onClick={toHappy}>Vivo</button>
            <button onClick={toSick}>Sick</button>
            <button onClick={toDead}>morto</button>
            <button onClick={toSad}>Sad</button>
            <button onClick={cicle}>troca</button>
        </div>
        </div>
    )       
}