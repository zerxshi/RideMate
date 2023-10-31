import { authAPI } from "@/modules/LoginForm"
import { combineReducers, configureStore } from "@reduxjs/toolkit"
import userSlice from "./slice/userSlice"
import { changeDataAPI } from "@/modules/UserProfile/API/ChangeDataAPI"
import { carsAPI } from "@/modules/Cars";
import { brandAPI } from "@/modules/Cars";
import { classAPI } from "@/modules/Cars";
import {autoLoginAPI} from "@/API/autoLoginAPI";

const rootReducer = combineReducers({
    userReducer: userSlice,
    [authAPI.reducerPath]: authAPI.reducer,
    [changeDataAPI.reducerPath]: changeDataAPI.reducer,
    [carsAPI.reducerPath]: carsAPI.reducer,
    [brandAPI.reducerPath]: brandAPI.reducer,
    [classAPI.reducerPath]: classAPI.reducer,
    [autoLoginAPI.reducerPath]: autoLoginAPI.reducer
})

export const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(
            authAPI.middleware,
            changeDataAPI.middleware,
            carsAPI.middleware,
            brandAPI.middleware,
            classAPI.middleware,
            autoLoginAPI.middleware
        ),
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
