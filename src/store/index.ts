import { authAPI } from "@/modules/LoginForm"
import { combineReducers, configureStore } from "@reduxjs/toolkit"
import userSlice from "./slice/userSlice"
import { changeDataAPI } from "@/modules/UserProfile/API/ChangeDataAPI"
import { carsAPI } from "@/modules/Cars"
import { brandAPI } from "@/modules/Cars"
import { classAPI } from "@/modules/Cars"
import { autoLoginAPI } from "@/API/autoLoginAPI"
import { changeEmailAPI } from "@/modules/EmailChange"
import { passwordCheckAPI } from "@/API/passwordCheckAPI"
import { tokenCheckAPI } from "@/API/tokenCheckAPI"
import { changePasswordAPI } from "@/modules/PasswordChange/API/changePasswordAPI"

const rootReducer = combineReducers({
    userReducer: userSlice,
    [authAPI.reducerPath]: authAPI.reducer,
    [changeDataAPI.reducerPath]: changeDataAPI.reducer,
    [carsAPI.reducerPath]: carsAPI.reducer,
    [brandAPI.reducerPath]: brandAPI.reducer,
    [classAPI.reducerPath]: classAPI.reducer,
    [autoLoginAPI.reducerPath]: autoLoginAPI.reducer,
    [changeEmailAPI.reducerPath]: changeEmailAPI.reducer,
    [passwordCheckAPI.reducerPath]: passwordCheckAPI.reducer,
    [tokenCheckAPI.reducerPath]: tokenCheckAPI.reducer,
    [changePasswordAPI.reducerPath]: changePasswordAPI.reducer,
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
            autoLoginAPI.middleware,
            changeEmailAPI.middleware,
            passwordCheckAPI.middleware,
            tokenCheckAPI.middleware,
            changePasswordAPI.middleware,
        ),
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
