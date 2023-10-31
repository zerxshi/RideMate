import { PasswordRecoveryForm } from "@/modules/PasswordRecovery"
import React, { FC } from "react"

const PasswordRecovery: FC = () => {
    return (
        <main className="absolute bottom-0 left-0 right-0 flex items-center justify-center overflow-hidden top-20 bg-my-blue">
            <PasswordRecoveryForm />
        </main>
    )
}

export default PasswordRecovery
