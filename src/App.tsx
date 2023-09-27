import React from "react"
import { BrowserRouter } from "react-router-dom"
import { Header } from "./modules/AppHeader"
import AppRouter from "./modules/AppRouter"

const App = () => {
    return (
        <BrowserRouter>
            <Header />
            <AppRouter />
        </BrowserRouter>
    )
}

export default App
