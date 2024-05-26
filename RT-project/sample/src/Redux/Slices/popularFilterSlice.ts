import { SerializedError, createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import { Collection } from "../Types/searchResponseTypes"
import axios from "axios";




// ---------------

interface ImageState {
    collection: Collection;
    loading: boolean;
    errorMsg: SerializedError | null

}

 const initialState: ImageState = {

    collection: {
        href: '',
        items: [],
        version: '',
    },

    loading: false,
    errorMsg : null

 }

const popularUrl = `https://images-assets.nasa.gov/popular.json`





const  popularFilterSlice = createSlice({
    name:"popularFilter",
    initialState: initialState,
    reducers: {

    },

    extraReducers:(builder)=>{
        builder.addCase(
            getPopularFilter.fulfilled , (state, action)=>{
                state.collection = action.payload.collection

            }
        )
    }
})


export const getPopularFilter = createAsyncThunk(
    "popularFilter/getPopularFilter",


    async (url:string)=>{
        const response = await axios.get(url)
        console.log('response body filter', response.data)
        
        return response.data

    }

)

export default popularFilterSlice.reducer