import React, { FC } from "react"
import { useTranslation } from "react-i18next"

interface FormButtonProps {
    isLogin: boolean
    register: () => void
    login: () => void
    handleSetLogin: () => void
    handleSetRegistration: () => void
}

const LoginFormButtons: FC<FormButtonProps> = ({
    isLogin,
    handleSetLogin,
    handleSetRegistration,
    register,
    login,
}) => {
    const { t } = useTranslation("loginPage")

    return (
        <div className="flex flex-col items-center gap-5">
            <button
                onClick={login}
                className={`w-full text-2xl font-bold h-14 rounded-2xl text-my-blue bg-my-dark ${
                    isLogin ? "animate-slideUp" : "hidden"
                }`}
                type="button"
            >
                {t("buttons.login")}
            </button>

            <button
                onClick={register}
                className={`w-full h-14 text-2xl font-bold rounded-2xl text-my-blue bg-my-dark ${
                    isLogin ? "hidden" : "animate-slideDown"
                }`}
                type="button"
            >
                {t("buttons.register")}
            </button>

            <button
                onClick={handleSetLogin}
                className={`w-full text-2xl font-bold border-4 opacity-50 h-14 rounded-2xl border-my-dark text-my-dark ${
                    isLogin ? "hidden" : "animate-slideDown"
                }`}
                type="button"
            >
                {t("buttons.login")}
            </button>

            <button
                onClick={handleSetRegistration}
                className={`w-full h-14 text-2xl font-bold rounded-2xl border-my-dark border-4 text-my-dark opacity-50 ${
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
