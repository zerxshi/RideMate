import { IError } from "@/types"
import React, { FC } from "react"
import { useTranslation } from "react-i18next"

interface ValidationBlockProps {
    validationError: string
    isRecoveryError: boolean
    isRequestError: boolean
    isTokenError: boolean
    recoveryError: IError
    requestError: IError
    tokenError: IError
}

const FormValidationBlock: FC<ValidationBlockProps> = ({
    validationError,
    recoveryError,
    requestError,
    tokenError,
    isRecoveryError,
    isRequestError,
    isTokenError,
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
                    isTokenError ? "animate-append" : "hidden"
                }`}
            >
                {tokenError && t(`errors.${tokenError.data.message}`)}
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
