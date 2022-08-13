import { useState } from 'react';
import styled from 'styled-components'
import NewCronica from '@components/modals/NewCronica';
import { useSelector, useDispatch } from 'react-redux'
import { getFromLocalStorage } from '@services/localStorage';
import { hydrate } from '@services/store/cronica';
import { useEffect } from 'react';
import { ForgotCronica } from '@components/modals/ForgotIdCronica';

export default function Principal() {
    
    const cronica = useSelector(state => state.cronica)
    const dispatch = useDispatch()

    useEffect(() => {
        const cronicaActual = getFromLocalStorage('cronica')
        dispatch(hydrate(cronicaActual))
    }, [])

    const [idCronica, setIdCronica] = useState(cronica?.id || '')
    const [newCronica, setNewCronica] = useState(false)

    const handleIdCronica = (e) => {
        setIdCronica(e.target.value)
    }
    const cancelNewCronica = () => {
        setNewCronica(false)
    }

    const [forgot, setForgot] = useState(false)
    const cancelForgot = () => {
        setForgot(false)
    }
    useEffect(() => {
        if (cronica?.id) {
            setIdCronica(cronica.id)
        }
    }, [cronica])

  return (
    <>
        <NewCronica show={newCronica} onHide={cancelNewCronica} />
        <ForgotCronica show={forgot} onHide={cancelForgot} />
      <Contenedor>
        <Titulo>¡Bienvenido!</Titulo>
        <Subtitulo>Esta plataforma pretende ayudar en las partidas de rol online.</Subtitulo>
        {!newCronica &&
        <Subcontenedor>
            <Span>Si ya tienes creada una crónica, puedes entrar a ella mediante el ID que deberías tener guardado.</Span>
            <Input type='text' placeholder='ID de la crónica' onChange={handleIdCronica} value={idCronica || ''} />
            <Link href={`/${idCronica}`}>Entra a tu cronica</Link>
            <Forgot onClick={()=>setForgot(true)}>¿Has olvidado el ID de tu crónica?</Forgot>
        </Subcontenedor>
        }
        <Subcontenedor>
            <Span>Si no tienes una crónica creada, puedes crear una nueva.</Span>
            <Boton onClick={() => setNewCronica(true)} disabled={idCronica===''}>Crea una nueva crónica</Boton>
        </Subcontenedor>
      </Contenedor>
    </>
  );
}

export const Subcontenedor = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    margin-bottom: 2rem;
`

export const Forgot = styled.span`
    margin-top: 0.5rem;
    font-size: 0.6rem;
    color: #fff;
    cursor: pointer;
    &:hover {
        text-decoration: underline;
    }
    @media (max-width: 768px) {
        margin-top: 1rem;
    }
`

export const Contenedor = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100vh;
    width: 100vw;
`

export const Titulo = styled.h1`
    font-size: 2.5rem;
    font-weight: 600;
    font-family: 'Vampire', 'Roboto', sans-serif;
`

export const Subtitulo = styled.h2`
    font-size: 1.5rem;
    font-weight: 600;
    font-family: 'Vampire', 'Roboto', sans-serif;
`

export const Boton = styled.button`
    font-size: 1rem;
    font-family: 'Roboto', sans-serif;
    background-color: #000;
    color: #fff;
    border-radius: 0.5rem;
    padding: 0.5rem 1rem;
    width: 15rem;
`
export const Input = styled.input`
    font-size: 1rem;
    font-family: 'Roboto', sans-serif;
    background-color: #000;
    color: #fff;
    border-radius: 0.5rem;
    padding: 0.5rem 1rem;
    width: 20rem;
`
export const Span = styled.span`
    font-size: 1rem;
    font-family: 'Roboto', sans-serif;
`

const Link = styled.a`
    display: block;
    width: 15em;
    background: #4E9CAF;
    text-align: center;
    color: white;
    font-weight: bold;
    line-height: 2em;
    font-size: 1rem;
    font-family: 'Roboto', sans-serif;
    background-color: black;
    color: white;
    border-radius: 0.5rem;
    padding: 0.5rem 1rem;
`