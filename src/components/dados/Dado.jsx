const { default: styled, keyframes } = require("styled-components")

export const Dado = ({resultado, hambre, lanzando}) => {
    return (
        <>
            {hambre && hambre.map(h => {
                return <Dice lanzando={lanzando} hambre={true}>{h}</Dice>
            })}
            {resultado && resultado.map(r => {
                return <Dice lanzando={lanzando}>{r}</Dice>
            })}
        </>
    )
}

const Dice = styled.div`
    width: 1.5em;
    height: 1.5em;
    font-size: 2em;
    background-color: ${(p) => p.hambre ? 'red': 'black'};
    border-radius: 15%;
    display: flex;
    justify-content: center;
    align-items: center;
    color: white;
    cursor: pointer;
    animation-name: ${(p) => p.lanzando ? Lanzando : 'none'};
    animation-duration: 0.5s;
    animation-iteration-count: infinite;
`

const Lanzando = keyframes`
    100% {transform: rotate(360deg)}
`