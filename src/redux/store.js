import { configureStore } from "@reduxjs/toolkit";
import CardReducer from "../features/card/CardSlice";

export const store=configureStore({
    reducer:{
        card:CardReducer,
    }
})