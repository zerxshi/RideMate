import React, { FC } from "react"
import { useTranslation } from "react-i18next"
import { useFormContext } from "@/modules/PasswordRecovery/hooks/useFormContext"

interface FormButtonsProps {
    handleGetCode: () => void
    handleChangePassword: () => void
    handleConfirmChange: () => void
}

const FormButtons: FC<FormButtonsProps> = ({
    handleGetCode,
    handleChangePassword,
    handleConfirmChange,
}) => {
    const { t } = useTranslation("loginPage")

    const formData = useFormContext()

    return (
        <div className="flex flex-col">
            <button
                className={`w-full text-2xl font-bold h-14 rounded-2xl text-my-blue bg-my-dark active:scale-99 ${
                    formData.isEmailPage ? "animate-slideUp" : " hidden"
                }`}
                type="submit"
                onClick={handleGetCode}
            >
                {t("buttons.getCode")}
            </button>

            <button
                className={`w-full text-2xl font-bold h-14 rounded-2xl text-my-blue bg-my-dark active:scale-99 ${
                    formData.isCodePage ? "animate-append" : " hidden"
                }`}
                type="submit"
                onClick={handleChangePassword}
            >
                {t("buttons.changePassword")}
            </button>

            <button
                className={`w-full text-2xl font-bold h-14 rounded-2xl text-my-blue bg-my-dark active:scale-99 ${
                    formData.isNewPassPage ? "animate-slideDown" : " hidden"
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
