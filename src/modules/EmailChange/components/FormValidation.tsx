import React, { FC } from "react"
import { IError } from "@/types"
import { useTranslation } from "react-i18next"

interface ValidationBlockProps {
    validationError: string
    isError: boolean
    emailChangeError: IError
}

const FormValidationBlock: FC<ValidationBlockProps> = ({
    validationError,
    isError,
    emailChangeError,
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
                    isError ? "animate-append" : "hidden"
                }`}
            >
                {emailChangeError &&
                    t(`errors.${emailChangeError.data.message}`)}
            </strong>
        </div>
    )
}

export default FormValidationBlock
