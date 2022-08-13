import { useEffect, useState } from "react";
import { getCronicas, getMasters } from "services/lanzar-dados";

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
    }, []);
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

