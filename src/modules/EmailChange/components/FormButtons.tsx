import React, { FC } from "react"
import { useTranslation } from "react-i18next"

interface FormButtonsProps {
    handleCheckPassword: () => void
    handleConfirmChange: () => void
    isPasswordPage: boolean
    isNewEmailPage: boolean
}

const FormButtons: FC<FormButtonsProps> = ({
    handleCheckPassword,
    handleConfirmChange,
    isPasswordPage,
    isNewEmailPage,
}) => {
    const { t } = useTranslation("emailChangePage")

    return (
        <div className="flex flex-col">
            <button
                className={`w-full text-2xl font-bold h-14 rounded-2xl text-my-blue bg-my-dark active:scale-99 ${
                    isPasswordPage ? "animate-slideUp" : " hidden"
                }`}
                type="submit"
                onClick={handleCheckPassword}
            >
                {t("buttons.checkPassword")}
            </button>

            <button
                className={`w-full text-2xl font-bold h-14 rounded-2xl text-my-blue bg-my-dark active:scale-99 ${
                    isNewEmailPage ? "animate-append" : " hidden"
                }`}
                type="submit"
                onClick={handleConfirmChange}
            >
                {t("buttons.confirm")}
            </button>
        </div>
    )
}

export default FormButtons
