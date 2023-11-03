import React, { FC } from "react"
import { IError } from "@/types"
import { useTranslation } from "react-i18next"

interface ValidationBlockProps {
    validationError: string
    isEmailError: boolean
    isPasswordError: boolean
    emailChangeError: IError
    passwordError: IError
}

const FormValidationBlock: FC<ValidationBlockProps> = ({
    validationError,
    isEmailError,
    isPasswordError,
    emailChangeError,
    passwordError,
}) => {
    const { t } = useTranslation("common")

    return (
        <div>
            <strong
                className={`ml-3 font-bold text-my-dark text-lg ${
                    validationError ? "animate-append" : "hidden"
                }`}
            >
                {validationError}
            </strong>

            <strong
                className={`ml-3 font-bold text-my-dark text-lg ${
                    isPasswordError ? "animate-append" : "hidden"
                }`}
            >
                {passwordError && t(`errors.${passwordError.data.message}`)}
            </strong>

            <strong
                className={`ml-3 font-bold text-my-dark text-lg ${
                    isEmailError ? "animate-append" : "hidden"
                }`}
            >
                {emailChangeError &&
                    t(`errors.${emailChangeError.data.message}`)}
            </strong>
        </div>
    )
}

export default FormValidationBlock
