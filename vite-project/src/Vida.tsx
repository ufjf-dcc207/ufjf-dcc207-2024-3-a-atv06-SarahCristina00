import { useState } from 'react'
import './Vida.css'

type VidaProps = {
    icone: string;
};

export default function Vida({icone}: VidaProps){

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
        <div className="Vida">
            <span>{icone.repeat(valor)}</span>
            <span className='inativo'>{icone.repeat(5-valor)}</span>
            <button onClick={onMaisClick}>+</button>
            </div>

    );

}

