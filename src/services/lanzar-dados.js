import axios from 'axios';
import { createClient } from '@supabase/supabase-js'


const getServer = () => {
    // const supabase_key = process.env.REACT_APP_SUPABASE_KEY;
    const supabase_key = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImxseXJsbHB3cXNjZXVncXpwb2VlIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTY1OTk4ODYxMiwiZXhwIjoxOTc1NTY0NjEyfQ.djPCjjYiMJetB0LrQn2dOZ12k794Vqw3jUjFIBNN2p4';
    return ['https://llyrllpwqsceugqzpoee.supabase.co', {headers: {
        'apikey': supabase_key,
        'Authorization': `Bearer ${supabase_key}`
    }}, supabase_key];
}
const [url, headers, supabase_key] = getServer();
const supabase = createClient(url, supabase_key);

export const getMasters = (callback, errorcallback) => {
    const [url, headers] = getServer();
    return axios.get(`${url}/rest/v1/masters?select=id,nombre,nickname,email`,headers)
        .then((response) => {
            callback(response.data);
        })
        .catch((err) => {
            errorcallback(err);
        });
};

export const getCronicas = (idMaster, callback, errorcallback) => {
    const [url, headers] = getServer();
    let urlCronicas = `${url}/rest/v1/cronicas?select=*,master(*)`;
    if (idMaster) {
        urlCronicas = `${urlCronicas}&master=eq.${idMaster}`;
    } 

    return axios.get(`${urlCronicas}`,headers)
        .then((response) => {
            callback(response.data);
        })
        .catch((err) => {
            errorcallback(err);
        });
};

export const saveMaster = (master, callback, errorcallback) => {
    const [url, headers] = getServer();
    headers.headers['Prefer'] = 'resolution=merge-duplicates,return=representation';
    return axios.post(`${url}/rest/v1/masters?select=id,nombre,nickname,email`, master, headers)
        .then((response) => {
            callback(response.data);
        })
        .catch((err) => {
            errorcallback(err);
        });
};

export const saveCronica = (cronica, callback, errorcallback) => {
    const [url, headers] = getServer();
    headers.headers['Prefer'] = 'resolution=merge-duplicates,return=representation';
    return axios.post(`${url}/rest/v1/cronicas?select=*,master(*)`, cronica, headers)
        .then((response) => {
            callback(response.data);
        })
        .catch((err) => {
            errorcallback(err);
        });
};

// export const getCronica = (idCronica, callback, errorcallback) => {
//     const [url, headers] = getServer();
//     return axios.get(`${url}/rest/v1/cronicas?id=eq.${idCronica}&select=nombre,links,masters(nickname),jugadores(nickname,personaje)`, headers)
//         .then((response) => {
//             callback(response.data);
//         })
//         .catch((err) => {
//             errorcallback(err);
//         });
// };

export const getCronica = async (idCronica, callback, errorcallback) => {
    const { data: cronica, error } = await supabase
        .from('cronicas')
        .select('id,nombre,links,masters(id,nickname),jugadores(id,nickname,personaje)')
        .eq('id', idCronica)
        .single();
    if (error) {
        errorcallback(error);
    }
    // cronica.jugadores = cronica?.jugadores?.sort((a, b) => a.personaje.localeCompare(b.personaje));
    callback(cronica);
}

export const updateJugadorConnected = async (idJugador, conectado, isMaster, callback, errorcallback) => {
    const tabla = isMaster === true ? 'masters' : 'jugadores'
    const { data: jugador, error } = await supabase
        .from(tabla)
        .update({ conectado })
        .eq('id', idJugador)
        .single();
    if (error) {
        errorcallback(error);
    }
    callback(jugador);
}

export const updateJugador = async (idJugador, jugador, callback, errorcallback) => {
    const { data: jugadorActualizado, error } = await supabase
        .from('jugadores')
        .update(jugador)
        .eq('id', idJugador)
        .single();
    if (error) {
        errorcallback(error);
    }
    callback(jugadorActualizado);
}