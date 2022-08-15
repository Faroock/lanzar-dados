import { BestialFail } from "./v5/BestialFail"
import { Critico } from "./v5/Critico"
import { Exito } from "./v5/Exito"
import { Falla } from "./v5/Falla"

const { default: styled, keyframes } = require("styled-components")

export const Dado = ({resultado, hambre, lanzando, tipo}) => {
    if (tipo === 'v5') {
        return (
            <DiceContainer>
                {hambre && hambre.map((h, i) => {
                    if (h === 1) {
                        return <Dice key={i} lanzando={lanzando} hambre={true}><BestialFail height={'1em'} /></Dice>
                    }
                    if (h === 10) {
                        return <Dice key={i} lanzando={lanzando} hambre={true}><Critico height={'1em'} /></Dice>
                    }
                    if (h > 5) {
                        return <Dice key={i} lanzando={lanzando} hambre={true}><Exito height={'1em'} /></Dice>
                    }
                    return <Dice key={i} lanzando={lanzando} hambre={true}>{'·'}</Dice>
                })}
                {resultado && resultado.map((r,i) => {
                    if (r === 1) {
                        return <Dice key={i} lanzando={lanzando}><BestialFail height={'1em'} /></Dice>
                    }
                    if (r === 10) {
                        return <Dice key={i} lanzando={lanzando}><Critico height={'1em'} /></Dice>
                    }
                    if (r > 5) {
                        return <Dice key={i} lanzando={lanzando}><Exito height={'1em'} /></Dice>
                    }
                    return <Dice key={i} lanzando={lanzando}>{'·'}</Dice>
                })}
            </DiceContainer>           
        )
    }
    return (
        <DiceContainer>
            {hambre && hambre.map((h, i) => {
                return <Dice key={i} lanzando={lanzando} hambre={true}>{h}</Dice>
            })}
            {resultado && resultado.map((r,i) => {
                return <Dice  key={i}  lanzando={lanzando}>{r}</Dice>
            })}
        </DiceContainer>
    )
}

const DiceContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(7, 1fr);
    gap: 0.5em;
    @media (max-width: 768px) {
        grid-template-columns: repeat(6, 1fr);
    }
    @media (min-width: 1024px) {
        grid-template-columns: repeat(8, 1fr);
    }
`

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