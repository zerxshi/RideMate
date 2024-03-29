import React, { FC } from "react"
import { IError } from "@/types"
import { useTranslation } from "react-i18next"

interface ValidationBlockProps {
    validationError: string
    isChangeError: boolean
    isPasswordError: boolean
    isCodeError: boolean
    changeError: IError
    passwordError: IError
    codeError: IError
}

const FormValidationBlock: FC<ValidationBlockProps> = ({
    validationError,
    isChangeError,
    isPasswordError,
    isCodeError,
    changeError,
    passwordError,
    codeError,
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
                    isCodeError ? "animate-append" : "hidden"
                }`}
            >
                {codeError && t(`errors.${codeError.data.message}`)}
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
                    isChangeError ? "animate-append" : "hidden"
                }`}
            >
                {changeError && t(`errors.${changeError.data.message}`)}
            </strong>
        </div>
    )
}

export default FormValidationBlock
