import React, { FC } from "react"
import { useTranslation } from "react-i18next"
import { Link } from "react-router-dom"

interface FormButtonProps {
    isLogin: boolean
    register: () => Promise<void>
    login: () => Promise<void>
    handleToggleIsLogin: () => void
}

const FormButtons: FC<FormButtonProps> = ({
    isLogin,
    handleToggleIsLogin,
    register,
    login,
}) => {
    const { t } = useTranslation("loginPage")

    return (
        <div className="flex flex-col items-center gap-4">
            {isLogin && (
                <Link
                    to="/recovery"
                    className={`self-end font-bold text-lg text-my-dark active:scale-99 ${
                        isLogin && "animate-slideUp"
                    }`}
                >
                    {t("buttons.forgotPassword")}
                </Link>
            )}

            <button
                onClick={login}
                className={`w-full text-2xl font-bold h-14 rounded-2xl text-my-blue bg-my-dark active:scale-99 ${
                    isLogin ? "animate-slideUp" : "hidden"
                }`}
                type="submit"
            >
                {t("buttons.login")}
            </button>

            <button
                onClick={register}
                className={`w-full h-14 text-2xl font-bold rounded-2xl text-my-blue bg-my-dark active:scale-99 ${
                    isLogin ? "hidden" : "animate-slideDown"
                }`}
                type="submit"
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

export default FormButtons
