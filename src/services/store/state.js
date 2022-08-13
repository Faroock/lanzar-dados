import { configureStore } from "@reduxjs/toolkit";
import { cronicaSlice } from "@services/store/cronica";
import { datosSlice } from "@services/store/cronicas";
import { combineReducers } from "redux";

export const cronicaStore = configureStore({
    reducer: combineReducers({
        cronica: cronicaSlice.reducer,
        datos: datosSlice.reducer,
    }),
});