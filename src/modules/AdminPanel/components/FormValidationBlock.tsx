import React, { FC } from "react"
import { IError } from "@/types"
import { useTranslation } from "react-i18next"

interface ValidationBlockProps {
    validationError: string
    isCreationError: boolean
    creationError: IError
}

const FormValidationBlock: FC<ValidationBlockProps> = ({
    validationError,
    isCreationError,
    creationError,
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
                    isCreationError ? "animate-append" : "hidden"
                }`}
            >
                {creationError && t(`errors.${creationError.data.message}`)}
            </strong>
        </div>
    )
}

export default FormValidationBlock
