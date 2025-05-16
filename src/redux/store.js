import { configureStore } from "@reduxjs/toolkit";
import { CardSlice } from "../features/card/CardSlice";

export const store=configureStore({
    reducer:{
        card:CardSlice,
    }
})