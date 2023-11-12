import { IError } from "@/types"
import React, { FC } from "react"
import { useTranslation } from "react-i18next"

interface ValidationBlockProps {
    validationError: string
    isRecoveryError: boolean
    isRequestError: boolean
    isCodeError: boolean
    recoveryError: IError
    requestError: IError
    codeError: IError
}

const FormValidationBlock: FC<ValidationBlockProps> = ({
    validationError,
    recoveryError,
    requestError,
    codeError,
    isRecoveryError,
    isRequestError,
    isCodeError,
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
                    isRequestError ? "animate-append" : "hidden"
                }`}
            >
                {requestError && t(`errors.${requestError.data.message}`)}
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
                    isRecoveryError ? "animate-append" : "hidden"
                }`}
            >
                {recoveryError && t(`errors.${recoveryError.data.message}`)}
            </strong>
        </div>
    )
}

export default FormValidationBlock
