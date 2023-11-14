import { PasswordRecoveryForm } from "@/modules/PasswordRecovery"
import React, { FC } from "react"

const PasswordRecovery: FC = () => {
    return (
        <main className="flex items-center justify-center w-screen h-screen overflow-hidden bg-my-blue">
            <PasswordRecoveryForm />
        </main>
    )
}

export default PasswordRecovery
