import socket from "@services/sockets";
import { useEffect, useState } from "react";
import styled from "styled-components";

export const PoolDados = () => {

    const [cantidadDados, setCantidadDados] = useState('');
    const [tipoDados, setTipoDados] = useState('v5');
    const [caras, setCaras] = useState(10);
    const [hambre, setHambre] = useState('');
    const [dificultad, setDificultad] = useState('');

    const handleCantidadDados = (e) => {
        const {value} = e.target;
        setCantidadDados(value);
    }
    const handleTipoDados = (e) => {
        const {value} = e.target;
        const mapCaras = {
            'v5': 10,
            'd10': 10,
            'd2': 2,
            'd3': 3,
            'd4': 4,
            'd5': 5,
            'd6': 6,
            'd7': 7,
            'd8': 8,
            'd9': 9, 
        }
        setTipoDados(value);
        setCaras(mapCaras[value]);
    }
    const handleHambre = (e) => {
        const {value} = e.target;
        setHambre(value);
    }
    const handleDificultad = (e) => {
        const {value} = e.target;
        setDificultad(value);
    }
    const lanzarDados = () => {
        socket.emit('dados', {cantidad: parseInt(cantidadDados), caras: parseInt(caras), hambre: parseInt(hambre), dificultad: parseInt(dificultad), tipo: tipoDados})
        socket.on('lanzando', ({idJugador, lanzando}) => {
            if (!lanzando) {
                setCantidadDados('');
                setTipoDados('v5');
                setCaras(10);
                setHambre('');
                setDificultad('');
            }
        })
    }
    return (
        <CronicaDados>
            <DadosLabel>Pool de dados</DadosLabel>
            <div>
                <DadosInput type='number' onChange={handleCantidadDados} value={cantidadDados} />
                <DadosSelect onChange={handleTipoDados} value={tipoDados}>
                    <option value='v5'>V5</option>
                    <option value='d10'>D10</option>
                    <option value='d6'>D6</option>
                    <option value='d2'>D2</option>
                    <option value='d3'>D3</option>
                    <option value='d4'>D4</option>
                    <option value='d5'>D5</option>
                    <option value='d7'>D7</option>
                    <option value='d8'>D8</option>
                    <option value='d9'>D9</option>
                </DadosSelect>
            </div>
            <DadosLabel>Hambre</DadosLabel>
            <DadosInput type='number' onChange={handleHambre} value={hambre} />
            <DadosLabel>Dificultad</DadosLabel>
            <div>
                <DadosInput type='number' onChange={handleDificultad} value={dificultad} />
                <DadosBoton onClick={lanzarDados}>Lanzar</DadosBoton>
            </div>
            <DadosNota>Si no conoces la dificultad, dejalo en blanco</DadosNota>
        </CronicaDados>
    )
}

export const DadosBoton = styled.button`
    background-color: #8a0303;
    border: none;
    color: black;
    height:  2rem;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 1rem;
    margin: 0 0.5rem;
    cursor: pointer;
    border-radius: 0.5rem;
    width: 4rem;
`

export const DadosNota = styled.p`
    font-size: 0.8rem;
    color: #fff;
    margin:0;
    grid-column: 1 / 3;
    color: #8a0303;
    font-weight: 800;
    text-align: center;
`

export const CronicaDados = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    align-items: start;
    justify-content: center;
    box-shadow: 0 0 0.1rem 0.1rem #8a0303;
    padding: 1rem;
    border-radius: 0.5rem;
    margin: 0.5rem 1rem;
    background-color: #282c34;
    @media (max-width: 768px) {
        grid-template-columns: 1fr 1.5fr;
        position: sticky;
        top: 0.5rem;
    }
`

export const DadosLabel = styled.label`
    font-size: 1rem;
    font-weight: 600;
    font-family: 'Roboto', sans-serif;
    color: #8a0303;
    margin: 0.7rem 0;
    margin-right: 1rem;
    text-align: right;
`

export const DadosInput = styled.input`
    font-size: 1rem;
    font-family: 'Roboto', sans-serif;
    background-color: #000;
    color: #fff;
    border-radius: 0.5rem;
    padding: 0.5rem 1rem;
    width: 6rem;
`

export const DadosSelect = styled.select`
    font-size: 1rem;
    font-family: 'Roboto', sans-serif;
    background-color: #000;
    color: #fff;
    border-radius: 0.5rem;
    padding: 0.5rem 1rem;
`