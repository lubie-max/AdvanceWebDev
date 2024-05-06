
import { createSlice } from '@reduxjs/toolkit'



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


const searchImageSlice = createSlice({
    name: "search Image",
    initialState: intialStateForSearchImg, 
    reducers: {
        testReducer: (state)=>{
            state.data[0].description  = "changed description Hahahaha !"
        }
    }
    
})



export const { testReducer } = searchImageSlice.actions
export default searchImageSlice.reducer