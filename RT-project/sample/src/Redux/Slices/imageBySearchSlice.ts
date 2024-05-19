import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import axios from "axios"
// import { Collection} from "../Types/imageBySearchResponse"
import { Collection , MediaLinks } from "../Types/searchResponseTypes";


axios.defaults.baseURL = `https://images-api.nasa.gov`

// collection.items

interface ImageState {
    collection: Collection;
    medialinks : MediaLinks;
  }
  
  const intialStateForSearchImg: ImageState = {
    collection: {
      href: '',
      items: [],
      links: [],
      version: '',
      metadata: 0
    },

    medialinks: {
        mlinks: []
    }
    
  }




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
        }).addCase(getImageBySearch.pending, (state, action)=>{
   // state.loading = true
        })

        // media

        builder.addCase(
            getMedia.fulfilled, (state, actions)=>{
                state.medialinks.mlinks.push(actions.payload) 
            }
        )


     
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
        catch(error){
            console.log('something is fishy', error)

        }
    }
)


export const getMedia = createAsyncThunk(
    "imageBysearch/getMedia",
    async (url:string)=>{
        const data = await axios.get(url)
        console.log(data.data[0])
        return data.data
    }
)

export default imageBySearchSlice.reducer