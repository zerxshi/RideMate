import React, { FC } from "react"
import { IError } from "@/modules/LoginForm/types"
import { useTranslation } from "react-i18next"

interface ValidationBlockProps {
    validationError: string
    isLoginError: boolean
    isRegistrationError: boolean
    loginError: IError
    registrationError: IError
}

const FormValidationBlock: FC<ValidationBlockProps> = ({
    validationError,
    isLoginError,
    isRegistrationError,
    loginError,
    registrationError,
}) => {
    const { t } = useTranslation("loginPage")

    return (
        <div>
            <strong
                className={`ml-3 font-black text-my-dark ${
                    validationError ? "animate-append" : "hidden"
                }`}
            >
                {validationError}
            </strong>

            <strong
                className={`ml-3 font-black text-my-dark ${
                    isLoginError ? "animate-append" : "hidden"
                }`}
            >
                {loginError && t(`errors.${loginError.data.message}`)}
            </strong>

            <strong
                className={`ml-3 font-black text-my-dark ${
                    isRegistrationError ? "animate-append" : "hidden"
                }`}
            >
                {registrationError &&
                    t(`errors.${registrationError.data.message}`)}
            </strong>
        </div>
    )
}

export default FormValidationBlock
