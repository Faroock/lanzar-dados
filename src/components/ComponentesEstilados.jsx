import styled from "styled-components"

export const Cabecera = styled.div`
display: flex;
justify-content: center;
align-items: center;
`

export const Icon = styled.div`
display: flex;
justify-content: center;
align-items: center;
font-size: 1.5rem;
cursor: pointer;
color: black;
position: absolute;
top: 1.5rem;
right: 1.5rem;
@media (max-width: 768px) {
    top: 0;
    right: 0;
}
`

export const Contenedor = styled.div`
display: ${props => props.show ? 'flex' : 'none'};
justify-content: flex-start;
align-items: center;
flex-direction: column;
background-color: #8a0303;
position: fixed;
width: 100vw;
height: ${props => props.height};
transition: height 0.5s;
// opacity: 0.8;
gap: 1rem;
`

export const Boton = styled.button`
font-size: 1rem;
font-family: 'Roboto', sans-serif;
background-color: #282c34;
color: #f00;
border-radius: 0.5rem;
padding: 0.5rem 1rem;
`

export const Subcontenedor = styled.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
`

export const Titulo = styled.h1`
font-size: 2.5rem;
font-weight: 600;
font-family: 'Vampire', 'Roboto', sans-serif;
color: black;
`

export const Frase = styled.span`
font-size: 1.5rem;
font-weight: 600;
font-family: 'Vampire', 'Roboto', sans-serif;
color: black;
`

export const Label = styled.label`
font-size: 1rem;
font-weight: 600;
color: black;
`

export const Input = styled.input`
font-size: 1rem;
background-color: #282c34;
color: red;
margin: 0.2rem 0;
accent-color: red;
`

export const Select = styled.select`
font-size: 1rem;
background-color: #282c34;
color: red;
margin: 0.2rem 0;
`