import React, { FC } from "react"
import { IError } from "@/modules/LoginForm/types"
import { useTranslation } from "react-i18next"

interface ValidationBlockProps {
    validationError: string
}

const FormValidationBlock: FC<ValidationBlockProps> = ({ validationError }) => {
    return (
        <div>
            <strong
                className={`ml-3 font-bold text-my-dark text-lg ${
                    validationError ? "animate-append" : "hidden"
                }`}
            >
                {validationError}
            </strong>
        </div>
    )
}

export default FormValidationBlock
