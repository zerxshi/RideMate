import { combineReducers, configureStore } from "@reduxjs/toolkit"
import userSlice from "./slice/userSlice"

const rootReducer = combineReducers({
    user: userSlice
})

export const store = configureStore({
    reducer: rootReducer,
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
