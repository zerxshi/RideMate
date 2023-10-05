import { PayloadAction, createSlice } from "@reduxjs/toolkit"
import jwtDecode from "jwt-decode"

interface IUser {
    email: string | null
    name: string | null
    id: number | null
    role: string | null
    isAuth: boolean
    isActivated: boolean
}

interface IDecodeToken {
    email: string
    name: string
    id: number
    role: string
    isActivated: boolean
}

const initialState: IUser = {
    email: null,
    name: null,
    id: null,
    role: null,
    isAuth: false,
    isActivated: false,
}

const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        setUser: (state, action: PayloadAction<string>) => {
            const jwttoken: IDecodeToken = jwtDecode(action.payload)
            state.email = jwttoken.email
            state.name = jwttoken.name
            state.id = jwttoken.id
            state.role = jwttoken.role
            state.isActivated = jwttoken.isActivated
            state.isAuth = true
        },
        deleteUser: (state) => {
            state.email = null
            state.id = null
            state.role = null
            state.isAuth = false
            state.isActivated = false
            localStorage.setItem("accessToken", "")
        },
    },
})

export const { setUser, deleteUser } = userSlice.actions
export default userSlice.reducer
