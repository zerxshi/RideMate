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
import { codeCheckAPI } from "@/API/codeCheckAPI"
import { changePasswordAPI } from "@/modules/PasswordChange/API/changePasswordAPI"
import { passwordRecoveryAPI } from "@/modules/PasswordRecovery"
import { rentalHistoryAPI } from "@/modules/UserProfile/API/rentalHistoryAPI"

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
    [codeCheckAPI.reducerPath]: codeCheckAPI.reducer,
    [changePasswordAPI.reducerPath]: changePasswordAPI.reducer,
    [passwordRecoveryAPI.reducerPath]: passwordRecoveryAPI.reducer,
    [rentalHistoryAPI.reducerPath]: rentalHistoryAPI.reducer,
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
            codeCheckAPI.middleware,
            changePasswordAPI.middleware,
            passwordRecoveryAPI.middleware,
            rentalHistoryAPI.middleware,
        ),
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
