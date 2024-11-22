import { configureStore } from '@reduxjs/toolkit'
import poemReducer from "./Poems/slices"

export const store = configureStore({
  reducer: {
    poem: poemReducer,
  
  },
})


export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch