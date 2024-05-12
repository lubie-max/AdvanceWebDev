import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import axios from "axios"
// import { error } from "console"
// import exp from "constants"


axios.defaults.baseURL = `https://images-api.nasa.gov`

// collection.items
interface imageData {
   data: any[]
}


const intialStateForSearchImg: imageData = {
data: []

}


const  imageBySearchSlice = createSlice({
    name: 'imageBySearch',
    initialState: intialStateForSearchImg,
    reducers: {},
    extraReducers: (builder)=>{
        builder.addCase(getImageBySearch.fulfilled,(state,actions)=>{

            state.data.push(actions.payload)
        })
    }
})


const getImageBySearch = createAsyncThunk(
    "getImageBy/searchImage",

    async ()=>{
        try{
           const response = await axios.get('/search?q=apollo')
           console.log('searchImage api response', response.data)
           return response.data
        }
        catch{
            console.log('something is fishy')

        }
    }
)


export  { getImageBySearch }   
export default imageBySearchSlice.reducer