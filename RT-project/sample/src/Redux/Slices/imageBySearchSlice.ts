import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import axios from "axios"
// import { Collection} from "../Types/imageBySearchResponse"
import { Collection } from "../Types/searchResponseTypes";


axios.defaults.baseURL = `https://images-api.nasa.gov`

// collection.items

interface ImageState {
    collection: Collection;
  }
  
  const intialStateForSearchImg: ImageState = {
    collection: {
      href: '',
      items: [],
      links: [],
      version: '',
      metadata: 0
    }
  };

// const intialStateForSearchImg: Collection = {
//     href: "",
//     items: [],
//     links: [],
//     version: ""
// }




const  imageBySearchSlice = createSlice({
    name: 'imageBySearch',
    initialState: intialStateForSearchImg,
    reducers: {},
    extraReducers: (builder)=>{
        builder.addCase(getImageBySearch.fulfilled,(state,actions)=>{

            // state.data.push(actions.payload)
            state.collection = actions.payload.collection
            // state.collection 
        })

        builder.addCase(getImageBySearch.rejected,(state, actions)=>{

            // state.failed = true

        })

        builder.addCase(getImageBySearch.pending, (state, action)=>{

            // state.loading = true
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