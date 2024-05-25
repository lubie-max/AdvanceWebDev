




// ---------------

import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"

const popularUrl = `https://images-assets.nasa.gov/popular.json`




const  popularFilterSlice = createSlice({
    name:"popularFilter",
    initialState: null,
    reducers: {

    },

    extraReducers:(builder)=>{
        builder.addCase
    }
})


export const getPopularFilter = createAsyncThunk(
    "popularFilter/getPopularFilter",

    async ()=>{
        
    }

)