import { useMasters } from 'hooks/lanzar-dados';
import { useEffect, useState } from 'react'
import { saveCronica, saveMaster } from 'services/lanzar-dados';
import CancelOutlinedIcon from '@mui/icons-material/CancelOutlined';
import { Boton, Cabecera, Contenedor, Frase, Icon, Input, Label, Subcontenedor, Titulo } from '../ComponentesEstilados';
import styled from 'styled-components';

export default function NewCronica({show, onHide}) {
    const { masters, setMasters, errorMasters } = useMasters();

    const [master, setMaster] = useState()

    const [cronica, setCronica] = useState('')
    const [idCronica, setIdCronica] = useState('')

    const [listo, setListo] = useState(false)
    const [saved, setSaved] = useState(false)
    const [nick, setNick] = useState()
    const [nombre, setNombre] = useState()
    const [email, setEmail] = useState()
    const handleNick = (e) => {
        setNick(e.target.value)
    }
    const handleNombre = (e) => {
        setNombre(e.target.value)
    }
    const handleEmail = (e) => {
        setEmail(e.target.value)
    }

    const handleSave = () => {
        if (nick) {
            saveMaster({nickname: nick, nombre, email, id: master},
                (data) => {
                    if (!master){
                        setMasters([...masters, ...data])
                    } else {
                        const newMasters = masters.map(m => {
                            if (m.id === master){
                                return data[0]
                            } else {
                                return m
                            }
                        })
                        setMasters(newMasters)
                    }
                    setListo(true)
                },
                (error) => {
                    console.log({error})
                });
        }
    }
    const HandleSaveCronica = () => {
        if (master) {
            saveCronica({nombre: cronica, master},
                (data) => {
                    setIdCronica(data[0].id)
                    setSaved(true)
                }
            )
        }
    }
    useEffect(() => {
        if (nick) {
            const master = masters.find(m => m.nickname === nick)
            setMaster(master?.id)
            setNombre(master?.nombre)
            setEmail(master?.email)
        }
    }, [masters, nick])
    
    const [saveId, setSaveId] = useState(false)
    // const { id, setId } = useLocal('idCronica', idCronica);
    const handleSaveId = () => {
        // setId(idCronica)
        setSaveId(true)
    }

    const [height, setHeight] = useState('0px')
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
                    <Titulo>¡Nueva cronica!</Titulo>
                    <Icon><CancelOutlinedIcon onClick={onHide} /></Icon>
                </Cabecera>

                <Subcontenedor>
                    <Frase>Primero necesito saber quien eres:</Frase>
                    <Input list='nick' placeholder='¿Cuál es tu nick?' value={nick || ''} onChange={handleNick} />
                    <Input type='text' placeholder='¿Cuál es tu nombre?' value={nombre || ''} onChange={handleNombre} />
                    <Input type='email' placeholder='¿Cuál es tu email?' value={email || ''} onChange={handleEmail} />
                    <Boton onClick={handleSave}>Listo</Boton>
                </Subcontenedor>
                {listo &&
                    <Subcontenedor>
                        <Frase>¿Que cronica quieres crear?</Frase>
                        <Input type='text' placeholder='¿El nombre de la cronica?' value={cronica} onChange={(e) => setCronica(e.target.value)} />
                        <Boton onClick={HandleSaveCronica}>Crear Cronica</Boton>
                    </Subcontenedor>
                }
                {saved ?
                    <Subcontenedor>
                        <Frase>¡Listo!</Frase>
                        <Frase>Guarda este ID:</Frase>
                        <Label>{idCronica}</Label>
                        <Label><Input type='checkbox' id='copiado' onChange={handleSaveId} />¡Guárdalo por mi!</Label>
                        <Link href={`/${idCronica}`}>¡A jugar!</Link>
                    </Subcontenedor>
                : 
                    <Boton onClick={onHide}>Cerrar</Boton>
                }
            </Contenedor>
            <datalist id='nick'>
                {masters && masters.map((master) => (
                    <option data-id={master.id} key={master.id} value={master.nickname}>{master.nombre}</option>
                ))}
            </datalist>
        </>
    )
}

const Link = styled.a`
    display: block;
    width: 8em;
    background: #4E9CAF;
    text-align: center;
    color: white;
    font-weight: bold;
    line-height: 2em;
    font-size: 1rem;
    font-family: 'Roboto', sans-serif;
    background-color: #282c34;
    color: #f00;
    border-radius: 0.5rem;
    padding: 0.5rem 1rem;
`