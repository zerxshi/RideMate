import React, { FC } from "react"
import { useTranslation } from "react-i18next"

interface FormButtonProps {
    isLogin: boolean
    register: () => void
    login: () => void
}

const LoginFormButtons: FC<FormButtonProps> = ({
    isLogin,
    register,
    login,
}) => {
    const { t } = useTranslation("loginPage")

    return (
        <div className="flex flex-col items-center gap-5">
            {isLogin && (
                <button
                    onClick={login}
                    className="w-full text-2xl font-bold h-14 rounded-2xl text-my-blue bg-my-dark"
                    type="button"
                >
                    {t("buttons.login")}
                </button>
            )}

            <button
                onClick={register}
                className={`w-full h-14 text-2xl font-bold rounded-2xl   ${
                    isLogin
                        ? "border-my-dark border-4 text-my-dark opacity-50"
                        : "bg-my-dark text-my-blue animate-slideDown"
                }`}
                type="button"
            >
                {t("buttons.register")}
            </button>
        </div>
    )
}

export default LoginFormButtons
