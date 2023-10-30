import { authAPI } from "@/modules/LoginForm"
import { combineReducers, configureStore } from "@reduxjs/toolkit"
import userSlice from "./slice/userSlice"
import { carsAPI } from "@/modules/Cars";
import { brandAPI } from "@/modules/Cars";
import { classAPI } from "@/modules/Cars";

const rootReducer = combineReducers({
    userReducer: userSlice,
    [authAPI.reducerPath]: authAPI.reducer,
    [carsAPI.reducerPath]: carsAPI.reducer,
    [brandAPI.reducerPath]: brandAPI.reducer,
    [classAPI.reducerPath]: classAPI.reducer
})

export const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(
            authAPI.middleware,
            carsAPI.middleware,
            brandAPI.middleware,
            classAPI.middleware
        ),
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
