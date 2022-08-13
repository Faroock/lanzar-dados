import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    cronica: {
        id: '',
        nombre: "",
        master: {
            id: '',
            nombre: "",
            nick: "",
        },
        jugadores: [],
    }
};


export const cronicaSlice = createSlice({
    name: "cronica",
    initialState,
    reducers: {
        setCronica: (state, action) => {
            state.cronica.id = action.payload.id;
            state.cronica.nombre = action.payload.nombre;
        },
        setJugadores: (state, action) => {
            state.cronica.jugadores.push(action.payload);
        },
        setMaster: (state, action) => {
            state.cronica.master = action.payload;
        },
        hydrate: (state, action) => {
            return action.payload;
        },
    },
});

export const { setCronica, setJugadores, setMaster, hydrate } = cronicaSlice.actions;