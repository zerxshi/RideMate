import React, { FC } from "react"
import { useTranslation } from "react-i18next"

interface FormButtonProps {
    isLogin: boolean
    register: () => void
    login: () => void
    handleToggleIsLogin: () => void
}

const LoginFormButtons: FC<FormButtonProps> = ({
    isLogin,
    handleToggleIsLogin,
    register,
    login,
}) => {
    const { t } = useTranslation("loginPage")

    return (
        <div className="flex flex-col items-center gap-5">
            {isLogin && (
                <button
                    type="button"
                    className={`self-end font-bold text-lg text-my-dark active:scale-99 ${
                        isLogin && "animate-slideUp"
                    }`}
                >
                    {t("buttons.forgotPassword")}
                </button>
            )}

            <button
                onClick={login}
                className={`w-full text-2xl font-bold h-14 rounded-2xl text-my-blue bg-my-dark active:scale-99 ${
                    isLogin ? "animate-slideUp" : "hidden"
                }`}
                type="button"
            >
                {t("buttons.login")}
            </button>

            <button
                onClick={register}
                className={`w-full h-14 text-2xl font-bold rounded-2xl text-my-blue bg-my-dark active:scale-99 ${
                    isLogin ? "hidden" : "animate-slideDown"
                }`}
                type="button"
            >
                {t("buttons.register")}
            </button>

            <button
                onClick={handleToggleIsLogin}
                className={`w-full text-2xl font-bold border-4 opacity-50 h-14 rounded-2xl border-my-dark text-my-dark active:scale-99 ${
                    isLogin ? "hidden" : "animate-slideDown"
                }`}
                type="button"
            >
                {t("buttons.login")}
            </button>

            <button
                onClick={handleToggleIsLogin}
                className={`w-full h-14 text-2xl font-bold rounded-2xl border-my-dark border-4 text-my-dark opacity-50 active:scale-99 ${
                    isLogin ? "animate-slideUp" : "hidden"
                }`}
                type="button"
            >
                {t("buttons.register")}
            </button>
        </div>
    )
}

export default LoginFormButtons
