import { authAPI } from "@/modules/LoginForm"
import { combineReducers, configureStore } from "@reduxjs/toolkit"
import userSlice from "./slice/userSlice"

const rootReducer = combineReducers({
    userReducer: userSlice,
    [authAPI.reducerPath]: authAPI.reducer,
})

export const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(authAPI.middleware),
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
