import React, { FC } from "react"
import { useTranslation } from "react-i18next"

interface FormButtonsProps {
    handleCheckCode: () => Promise<void>
    handleCheckPassword: () => Promise<void>
    handleConfirmChange: () => Promise<void>
    isCodePage: boolean
    isPasswordPage: boolean
    isNewPassPage: boolean
}

const FormButtons: FC<FormButtonsProps> = ({
    handleCheckCode,
    handleCheckPassword,
    handleConfirmChange,
    isCodePage,
    isPasswordPage,
    isNewPassPage,
}) => {
    const { t } = useTranslation("common")

    return (
        <div className="flex flex-col">
            <button
                className={`w-full text-2xl font-bold h-14 rounded-2xl text-my-blue bg-my-dark active:scale-99 ${
                    isCodePage ? "animate-slideUp" : " hidden"
                }`}
                type="submit"
                onClick={handleCheckCode}
            >
                {t("buttons.checkCode")}
            </button>

            <button
                className={`w-full text-2xl font-bold h-14 rounded-2xl text-my-blue bg-my-dark active:scale-99 ${
                    isPasswordPage ? "animate-append" : " hidden"
                }`}
                type="submit"
                onClick={handleCheckPassword}
            >
                {t("buttons.checkPassword")}
            </button>

            <button
                className={`w-full text-2xl font-bold h-14 rounded-2xl text-my-blue bg-my-dark active:scale-99 ${
                    isNewPassPage ? "animate-append" : " hidden"
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
