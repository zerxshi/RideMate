import React, { useEffect } from "react"
import { BrowserRouter } from "react-router-dom"
import { Header } from "./modules/AppHeader"
import AppRouter from "./modules/AppRouter"
import { autoLoginAPI } from "@/API/autoLoginAPI"
import { setUser } from "@/store/slice/userSlice"
import { useAppDispatch } from "@/hooks/useTypedStore"

const App = () => {
    const [autoLogin] = autoLoginAPI.useAutoLoginMutation()
    const dispatch = useAppDispatch()

    useEffect(() => {
        const loginUser = async (): Promise<void> => {
            const result = await autoLogin()
            if ("data" in result) {
                localStorage.setItem("accessToken", result.data.token)
                dispatch(setUser(result.data.token))
            }
        }

        loginUser()
    }, [])

    return (
        <BrowserRouter>
            <Header />
            <AppRouter />
        </BrowserRouter>
    )
}

export default App
