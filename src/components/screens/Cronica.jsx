import { getCronica } from "@services/lanzar-dados"
import { useEffect, useState } from "react"

import styled from "styled-components";
import { DadosLabel, DadosSelect, PoolDados } from "@components/dados/PoolDados";
import { Personaje } from "@components/dados/Personaje";
import socket from "@services/sockets";

export const Cronica = ({idCronica}) => {
    const [userId, setUserId] = useState()
    const handleUserId = (e) => {
        const {value: idPersonaje} = e.target
        const master = cronica?.masters?.id === idPersonaje
        setUserId(idPersonaje)
        const who = master ? cronica.masters : cronica.jugadores.find(j => j.id === idPersonaje)
        socket.emit('conectado', {...who, idCronica, master, personaje: master ? 'Narrador' : who.personaje})
    }
    const [cronica, setCronica] = useState()
    useEffect(() => {
        if (idCronica){
            getCronica(idCronica, (data) => {
                setCronica(data)
                socket.emit('cronica', data)
            },(error) => {
                console.log({error})
            })
        }
    }, [idCronica])

    const [jugadores, setJugadores] = useState([])
    socket.on('newPlayer' , (data) => {
        const newJugadores = jugadores.map(j => {
            return data.map(d => {
                if (d.id === j.id) return d
                return j
            })
        })
        setJugadores([...newJugadores, ...data]
            .filter(j => j.idCronica === idCronica)
            .sort((a,b)=>a.personaje<b.personaje?-1:1)
            .sort((a,b)=>a.master?-1:1)
        )
    })
    const [diced, setDiced] = useState()
    socket.on('lanzando' , (lanzando) => {
        setDiced(lanzando)
    })

    const [resultado, setResultado] = useState()
    socket.on('dados', (data) => {
        setResultado(data)
    })
    
    return (

        <CronicaContainer>
            {cronica &&
                <CronicaHeader>
                    <CronicaTitulo>{(cronica?.nombre || '').normalize('NFD').replace(/[\u0300-\u036f]/g, "")}</CronicaTitulo>
                    <CronicaSubtitulo>(By {(cronica?.masters?.nickname || '').normalize('NFD').replace(/[\u0300-\u036f]/g, "")})</CronicaSubtitulo>
                </CronicaHeader>
            }
            {userId && jugadores?.length > 0 ? 
                <CronicaBody>
                    <PoolDados />
                    {jugadores
                    .map((p, i) => {
                        return <Personaje key={i} jugador={p} userId={userId} diced={diced} resultado={resultado} />
                    })}
                </CronicaBody>
             :
                <CronicaBody>
                    <DadosLabel>Para poder jugar, debes indicarme quién eres</DadosLabel>
                    <DadosSelect onChange={handleUserId}>
                        <option value="">Selecciona</option>
                        {cronica?.masters && <option value={cronica?.masters?.id}>{cronica?.masters?.nickname}</option>}
                        {cronica?.jugadores?.map((p, i) => {
                            return <option key={i} value={p.id} name={p.nickname}>{p.nickname}</option>
                        })}
                    </DadosSelect>
                </CronicaBody>
            }
             {cronica && 
                <CronicaFooter>
                    {cronica?.links && cronica?.links?.length > 0 && <Links>Links:</Links>}
                    {cronica?.links && cronica?.links?.map(({link, nombre}, index) => {
                        return <a key={index} href={link} target="_blank"> · {nombre}</a>
                    })}
                </CronicaFooter>
            }
        </CronicaContainer>)
    
}

export const CronicaHeader = styled.div`
    display: flex;
    flex-direction: rows;
    align-items: flex-end;
    margin-bottom: 0rem;
`

export const CronicaContainer = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: flex-start;
`

export const CronicaBody = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    @media (max-width: 768px) {
        grid-template-columns: 1fr;
    }
    @media (min-width: 1024px) {
        grid-template-columns: 1fr 1fr 1fr;
    }
`

export const CronicaTitulo = styled.h1`
    font-size: 2rem;
    font-weight: 600;
    font-family: 'Vampire', 'Roboto', sans-serif;
    color: #8a0303;
    margin: 0.7rem 0.5rem;
    margin-right: 1rem; ;
    margin-bottom: 0;
`
export const CronicaSubtitulo = styled.h2`
    font-size: 1rem;
    font-weight: 600;
    font-family: 'Vampire', 'Roboto', sans-serif;
    color: #8a0303;
    margin: 0rem 0;
`

export const CronicaFooter = styled.div`
    position: fixed;
    bottom: 0;
    left: 0;
    display: grid;
    padding: 0 0.5rem;
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr;
    background-color: #282c30;
    width: 100%;
`
export const Links = styled.div`
    grid-column-start: 1;
    grid-column-end: 7;
`