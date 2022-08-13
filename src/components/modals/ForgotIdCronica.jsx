import { useEffect, useState } from 'react';
import CancelOutlinedIcon from '@mui/icons-material/CancelOutlined';
import { Boton, Cabecera, Contenedor, Frase, Icon, Input, Label, Select, Subcontenedor, Titulo } from '@components/ComponentesEstilados';
import { getCronicas, getMasters } from '@services/lanzar-dados';
import { setToLocalStorage } from '@services/localStorage';
import styled from 'styled-components';

export const ForgotCronica = ({show, onHide}) => {
    const [masters, setMasters] = useState([])
    useEffect(() => {
        getMasters((data) => {
            setMasters(data)
        }, (error) => {
            console.log({error})
        })
    }, [])
    const [master, setMaster] = useState()
    // useEffect(() => {
    //     setMaster(masters[0]?.id)
    // }, [masters])

    const [cronicas, setCronicas] = useState([])
    useEffect(() => {
        setCronicas([])
        setCronica('')
        if (master){
            getCronicas(master, (data) => {
                setCronicas(data)
            }, (error) => {
                console.log({error})
            })
        }
    }, [master])
    const [cronica, setCronica] = useState()

    const [ height, setHeight ] = useState(0)
    useEffect(() => {
        if (show) {
            setHeight('100vh')
        } else {
            setHeight('0px')
        }
    }, [show])

    const handleSaveCronica = () => {
        const localCronica = cronicas.find(c => c.id === cronica)
        setToLocalStorage('cronica', localCronica)
    }

    return (
        <>
            <Contenedor show={show} height={height}>
                <Cabecera>
                    <Icon onClick={onHide}><CancelOutlinedIcon /></Icon>
                    <Titulo>¿Olvidaste el ID de tu cronica?</Titulo>
                </Cabecera>
                <Subcontenedor>
                    <Frase>Necesito saber quien la dirige</Frase>
                    <Select type="select" value={master} onChange={(e) => setMaster(e.target.value)}>
                        <option value={null}>Selecciona un master</option>
                        {masters && masters.map(m => <option key={m.id} value={m.id}>{m.nickname}</option>)}
                    </Select>
                </Subcontenedor>
                <Subcontenedor>
                    <Frase>Las siguientes son las cronicas en curso</Frase>
                    <Select type="select" value={cronica} onChange={(e) => setCronica(e.target.value)}>
                        <option value={''}>Selecciona una cronica</option>
                        {cronicas && cronicas.map(c => <option key={c.id} value={c.id}>{c.nombre}</option>)}
                    </Select>
                </Subcontenedor>
                {cronica ?
                    <Subcontenedor>
                        <Frase>El ID de tu cronica es:</Frase>
                        <Label>{cronica}</Label>
                        <Label><Input type='checkbox' id='copiado' onChange={handleSaveCronica} />¡Guárdalo por mi!</Label>
                        <Link href={`/${cronica}`}>¡A jugar!</Link>
                    </Subcontenedor>
                : <Boton onClick={onHide}>Cerrar</Boton>
                }
            </Contenedor>
        </>
    )
};

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