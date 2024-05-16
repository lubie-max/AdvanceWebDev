import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import axios from "axios"
// import { error } from "console"
// import exp from "constants"


axios.defaults.baseURL = `https://images-api.nasa.gov`

// collection.items

interface Item {}
interface Link {}

interface Collection{
    version: string,
    href : string,
    items : Item[],
    links : Link[]
}
interface imageData {
    loading : boolean,
    failed : boolean|string,

    collection: Collection | null
}


const intialStateForSearchImg: imageData = {
    loading: false,
    failed : false,
    collection: null,

}


const  imageBySearchSlice = createSlice({
    name: 'imageBySearch',
    initialState: intialStateForSearchImg,
    reducers: {},
    extraReducers: (builder)=>{
        builder.addCase(getImageBySearch.fulfilled,(state,actions)=>{

            // state.data.push(actions.payload)
            state.collection = actions.payload
            // state.collection 
        })

        builder.addCase(getImageBySearch.rejected,(state, actions)=>{

            state.failed = true

        })

        builder.addCase(getImageBySearch.pending, (state, action)=>{

            state.loading = true
        })
    }
})


export const getImageBySearch = createAsyncThunk(
    "imageBysearch/getImageBySearch",

    async ()=>{
        try{
           const response = await axios.get('/search?q=moon')
           console.log('searchImage api response', response.data)
           return response.data
        }
        catch{
            console.log('something is fishy')

        }
    }
)


export default imageBySearchSlice.reducer