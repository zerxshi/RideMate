import { LoginForm } from "@/modules/LoginForm"
import React, { FunctionComponent } from "react"
import logoBlack from "@/assets/images/logoBlack.png"
import { Link } from "react-router-dom"
const Login: FunctionComponent = () => {
    return (
        <main className="flex items-center justify-center w-screen h-screen overflow-hidden bg-my-blue">
            <Link to="/">
                <img
                    src={logoBlack}
                    alt="rideMate logo"
                    className="absolute top-3 left-5"
                />
            </Link>

            <LoginForm />
        </main>
    )
}

export default Login
