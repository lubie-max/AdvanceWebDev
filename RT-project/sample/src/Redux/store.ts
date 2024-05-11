import { configureStore } from '@reduxjs/toolkit'

import searchImageSlice from './Slices/testSlice' // test component
import imageBySearchSlice from './Slices/imageBySearchSlice'
// ...

export const store = configureStore({
  reducer: {
   searchImageSlice,
   imageBySearchSlice
  },
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch