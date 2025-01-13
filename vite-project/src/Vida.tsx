import './Vida.css'

type VidaProps = {
    icone: string;
    valor: number;
};

export default function Vida({icone, valor}: VidaProps){

    
    return (
        <div className="Vida">
            <span className='ativo'>{icone.repeat(valor)}</span>
            <span className='inativo'>{icone.repeat(5-valor)}</span>
            </div>

    );

}

