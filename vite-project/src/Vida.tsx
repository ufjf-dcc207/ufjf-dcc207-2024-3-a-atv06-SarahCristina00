import { useState } from 'react'
import './Vida.css'

type VidaProps = {
    icone: string;
};

export default function Vida(){

    const [valor, setvalor] = useState(3);

    function onMaisClick(){
        if(valor === 5){
            setvalor(0);
        }
        else{
            setvalor(valor+1);
        }
    }
    return (
        <>
        <div className="Vida">
            <span>{icone.repeat(valor)}</span>

    )

}

