import "./card.css";
export function Card({estado}) {
    return(
        <div className="card">
            <h1>Mi primer Card</h1>
            <p className={estado ? 'on' : 'off'}>Detalle Card</p>
        </div>
    )
}