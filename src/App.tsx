import React, { useEffect } from "react"
import { BrowserRouter } from "react-router-dom"
import { Header } from "./modules/AppHeader"
import AppRouter from "./modules/AppRouter"
import { autoLoginAPI } from "@/API/autoLoginAPI"
import { setUser } from "@/store/slice/userSlice"
import { useAppDispatch } from "@/hooks/useTypedStore"

const App = () => {
    const [mutate] = autoLoginAPI.useAutoLoginMutation()
    const dispatch = useAppDispatch()

    useEffect(() => {
        const loginUser = async () => {
            const result = await mutate()
            if ("data" in result) {
                dispatch(setUser(result.data))
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
