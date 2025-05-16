import { createSlice } from "@reduxjs/toolkit";

export const CardSlice=createSlice({
    name:'card',
    initialState:[],
    reducers:{
        add:()=>{

        },
        remove:()=>{
            
        },
    },
})

export const {add,remove}=CardSlice.actions;

export default CardSlice.reducer;