import styled from 'styled-components';
export function Texto(){
    return(
        <Titulo>Holaaa</Titulo>
    )
}

const Titulo = styled.h1`
    color: blue;
    &:hover{
        color: red;
    }
`