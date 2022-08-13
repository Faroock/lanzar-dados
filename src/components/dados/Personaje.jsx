import styled from "styled-components"
import { Dado } from "@components/dados/Dado"

export const Personaje = ({jugador, userId, diced, resultado}) => {
    let lanzando = {}
    if (diced?.lanzando) {
        lanzando = {
            hambre: Array(diced?.dados?.hambre || 0).fill('·'),
            resultado: Array(diced?.dados?.cantidad - diced?.dados?.hambre || 0).fill('·')
        }
    }
    return (
        <PersonajeContainer me={jugador.id === userId}>
            <PersonajeHeader>
                <PersonajeTitulo>{jugador?.personaje?.normalize('NFD').replace(/[\u0300-\u036f]/g, "")}</PersonajeTitulo>
                <PersonajeSubtitulo>{jugador?.nickname?.normalize('NFD').replace(/[\u0300-\u036f]/g, "")}</PersonajeSubtitulo>
            </PersonajeHeader>
            <PersonajeBody>
                {diced?.lanzando && diced?.idJugador === jugador.id ? 
                    <Dado resultado={lanzando.resultado || 0} hambre={lanzando.hambre || 0} lanzando={true} />
                : 
                    !diced?.lanzando && diced?.idJugador === jugador.id && resultado?.idJugador === jugador.id ?
                        <Dado resultado={resultado.resultado} hambre={resultado.hambre} lanzando={false} />
                    : null    
                }
            </PersonajeBody>
        </PersonajeContainer>
    )
}

export const PersonajeContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    width: 48vw;
    height: 27vh;
    margin: 0.5rem;
    padding: 0.5rem 1rem;
    box-shadow: 0 0 0.5rem 0.1rem ${(props) => props.me ? '#8a0303' : '#000000'};
    border-radius: 0.5rem;
    @media (max-width: 768px) {
        width: 95vw;
    }
    @media (min-width: 1024px) {
        width: 32vw;
    }
`
export const PersonajeHeader = styled.div`
    display: flex;
    flex-direction: rows;
    justify-content: space-between;
    align-items: flex-end;
    width: 100%;
`

export const PersonajeTitulo = styled.h1`
    font-size: 2rem;
    font-weight: 600;
    font-family: 'Vampire', 'Roboto', sans-serif;
    color: #8a0303;
    margin: 0.7rem 0;
    margin-right: 1rem; ;
    margin-bottom: 0;
`
export const PersonajeSubtitulo = styled.h2`
    font-size: 1rem;
    font-weight: 600;
    font-family: 'Vampire', 'Roboto', sans-serif;
    color: #8a0303;
    margin: 0rem 0;
`
export const PersonajeBody = styled.div`
    font-family: 'Roboto', sans-serif;
    display: flex;
    gap: 0.5em;
    padding-top: 1em;
`