import { useEffect, useState } from "react";
import { getCronicas, getGamers, getMasters } from "services/lanzar-dados";

export const useCronicas = (idMaster=undefined) => {
    const [cronicas, setCronicas] = useState([]);
    const [error, setError] = useState();
    useEffect(() => {
        getCronicas(idMaster, (cronicas) => {
            setCronicas(cronicas);
        },
        (err) => {
            console.log({err});
            setError(err);
        });
    }, [idMaster]);
    return { cronicas, error };
}

export const useMasters = (id=undefined) => {
    const [masters, setMasters] = useState([]);
    const [error, setError] = useState();
    useEffect(() => {
        getMasters((masters) => {
            setMasters(masters);
        },
        (err) => {
            console.log({err});
            setError(err);
        });
    }, [id]);
    return { masters, setMasters, error };
}

export const useGamers = (id=undefined) => {
    const [gamers, setGamers] = useState([]);
    const [error, setError] = useState();
    useEffect(() => {
        getGamers((gamers) => {
            setGamers(gamers);
        },
        (err) => {
            console.log({err});
            setError(err);
        });
    }, [id]);
    return { gamers, error };
}