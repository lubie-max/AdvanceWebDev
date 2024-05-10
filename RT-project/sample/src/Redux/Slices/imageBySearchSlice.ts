import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import axios from "axios"
import { error } from "console"


axios.defaults.baseURL = `https://images-api.nasa.gov`

// collection.items
interface imageData {
    href: string,
    data: [{

            title: string,
            nasa_id: string,
            keywords: string[],
            description: string
        }],

    links: [
        {
            href: string,
            rel: string
        }
    ]
}


const intialStateForSearchImg: imageData = {
    href: "",
    data: [{
        title: "img",
        nasa_id: "default nasa id",
        keywords: [],
        description: 'default description'

    }],

    links: [{
        href: 'default',
        rel: 'defaul tImg'
    }]

}


const  imageBySearchSlice = createSlice({
    name: 'imageBySearch',
    initialState: intialStateForSearchImg,
    reducers: {}
})


const getImageBySearch = createAsyncThunk(
    "getImageBy/searchImage",

    async ()=>{
        try{
           const response = await axios.get('/search')
           console.log('searchImage api response', response.data)
           return response.data
        }
        catch{
            console.log(error)

        }
    }
)
