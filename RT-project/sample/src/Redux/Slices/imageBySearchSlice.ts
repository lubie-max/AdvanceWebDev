import { SerializedError, createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import axios from "axios"
import { Collection, MediaLinks } from "../Types/searchResponseTypes";

// -----------------------------------------
// URLs 

axios.defaults.baseURL = `https://images-api.nasa.gov`
const popularUrl = `https://images-assets.nasa.gov/popular.json`



interface ImageState {
    collection: Collection;
    medialinks: MediaLinks;
    loading: boolean;
    errorMsg: SerializedError | null

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
    },

    loading: false,
    errorMsg: null

}




const imageBySearchSlice = createSlice({
    name: 'imageBySearch',
    initialState: intialStateForSearchImg,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(getImageBySearch.fulfilled, (state, actions) => {

            state.collection = actions.payload.collection
        })

        builder.addCase(getImageBySearch.rejected, (state, actions) => {
            state.errorMsg = actions.error
        }).addCase(getImageBySearch.pending, (state, action) => {
            state.loading = true
        })



        // media files  : collection >>[items] >>href.json

        builder.addCase(
            getMedia.fulfilled, (state, actions) => {
                // state.medialinks.mlinks.push(actions.payload.filter((l: string) => l.endsWith('.mp4')))
                state.medialinks.mlinks.push(actions.payload)
            }
        )

    }

})


export const getImageBySearch = createAsyncThunk(
    "imageBysearch/getImageBySearch",

    async (searchValue: string) => {
        try {
            const response = await axios.get(`/search?q=${searchValue}`)
            // console.log('searchImage api response', response.data)
            return response.data
        }
        catch (error) {
            console.log('something is fishy', error)

        }
    }
)


 // media files  : collection >>[items] >> href.json
export const getMedia = createAsyncThunk(
    "imageBysearch/getMedia",
    async (dataHref: string) => {
        const response = await axios.get(dataHref) 
        return response.data
    }
)

export default imageBySearchSlice.reducer