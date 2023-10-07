import { LoginForm } from "@/modules/LoginForm"
import React, { FunctionComponent } from "react"

const Login: FunctionComponent = () => {
    return (
        <main className="absolute top-0 bottom-0 left-0 right-0 flex items-center justify-center bg-my-blue">
            <LoginForm />
        </main>
    )
}

export default Login
