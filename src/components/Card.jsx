import "./card.css";
const pokemon = [
    {
        id: 1,
        nombre: "Pikachu",
        imagen: "https://images.wikidexcdn.net/mwuploads/wikidex/thumb/7/77/latest/20150621181250/Pikachu.png/200px-Pikachu.png"
    },
    {
        id: 2, 
        nombre: 'Charizard',
        imagen: "https://images.wikidexcdn.net/mwuploads/wikidex/thumb/9/95/latest/20160817212623/Charizard.png/200px-Charizard.png"
    }
]
export function Card() {
    return(
        pokemon.map((item,index)=>{
            return(
                <div className="card" key={index}>
                    <h1>{item.nombre}</h1>
                    <img src={item.imagen} className="image"/>
                </div>
            )
        })
    )
}