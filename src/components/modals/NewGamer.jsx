import CancelOutlinedIcon from '@mui/icons-material/CancelOutlined';
import { Boton, Cabecera, Contenedor, Frase, Icon, Input, Label, Select, Subcontenedor, Titulo } from '@components/ComponentesEstilados';
import { useEffect, useState } from 'react';
import { useGamers } from 'hooks/lanzar-dados';

export const NewGamer = ({show, onHide, idCronica}) => {

    const { gamers, error } = useGamers()
    console.log({gamers})

    const [nick, setNick] = useState()
    const [nombre, setNombre] = useState()
    const [email, setEmail] = useState()
    const [personaje, setPersonaje] = useState()

    const handleNick = (e) => {
        setNick(e.target.value)
    }
    const handleNombre = (e) => {
        setNombre(e.target.value)
    }
    const handleEmail = (e) => {
        setEmail(e.target.value)
    }
    const handlePersonaje = (e) => {
        setPersonaje(e.target.value)
    }
    const [saved, setSaved] = useState(false)
    const handleSave = () => {
        setSaved(true)
    }

    useEffect(() => {
        if (nick) {
            const gamer = gamers.find(g => g.nickname === nick)
            setNombre(gamer?.nombre)
            setEmail(gamer?.email)
        }
    }, [gamers, nick])

    const [ height, setHeight ] = useState(0)
    useEffect(() => {
        if (show) {
            setHeight('100vh')
        } else {
            setHeight('0px')
        }
    }, [show])

    return (
        <>
            <Contenedor show={show} height={height}>
                <Cabecera>
                    <Icon onClick={onHide}><CancelOutlinedIcon /></Icon>
                    <Titulo>Nuevo Jugador para la cronica</Titulo>
                </Cabecera>
                <Subcontenedor>
                    <Frase>Primero necesito saber quien eres:</Frase>
                    <Input list='nick' placeholder='¿Cuál es tu nick?' value={nick || ''} onChange={handleNick} />
                    <Input type='text' placeholder='El nombre de tu personaje' value={personaje || ''} onChange={handlePersonaje} />
                    <Input type='text' placeholder='¿Cuál es tu nombre?' value={nombre || ''} onChange={handleNombre} />
                    <Input type='email' placeholder='¿Cuál es tu email?' value={email || ''} onChange={handleEmail} />
                    <Boton onClick={handleSave}>Listo</Boton>
                </Subcontenedor>
            </Contenedor>
            <datalist id='nick'>
                {gamers.map(g => (
                    <option data-id={g.id} key={g.id} value={g.nickname}>{g.nombre}</option>
                ))}
            </datalist>
        </>
    )
}

