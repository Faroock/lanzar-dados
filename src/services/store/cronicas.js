import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    cronicas: [],
    masters: [],
    jugadores: [],
};

export const datosSlice = createSlice({
    name: "datos",
    initialState,
    reducers: {
        setCronicas: (state, action) => {
            state.cronicas = [...state.cronicas, action.payload];
        },
        setMasters: (state, action) => {
            state.masters = [...state.masters, action.payload];
        },
        setJugadores: (state, action) => {
            state.jugadores = [...state.jugadores, action.payload];
        },
    },
});

export const { setCronicas, setJugadores, setMasters } = datosSlice.actions;