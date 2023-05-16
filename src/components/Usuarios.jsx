export function Usuarios(props) {
    return(
        <div>
            <h1>Soy el usuario {props.nombre} con edad de {props.edad}, vive en {props.direccion.pais}, comuna de {props.direccion.comuna}</h1>
        </div>
    )   
}