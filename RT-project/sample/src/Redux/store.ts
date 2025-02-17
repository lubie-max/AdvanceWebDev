import { configureStore } from '@reduxjs/toolkit'

import imageBySearchSlice from './Slices/imageBySearchSlice'
import popularFilterSlice from './Slices/popularFilterSlice'
// import logger from 'redux-logger'
// ...

export const store = configureStore({
  reducer: {
   imageBySearchSlice,
   popularFilterSlice
   
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),

})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch