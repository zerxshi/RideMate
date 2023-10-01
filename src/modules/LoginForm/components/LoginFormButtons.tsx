import React, { FC } from "react"
import { useTranslation } from "react-i18next"

interface FormButtonProps {
    isLogin: boolean
    setIsLogin: (value: boolean) => void
}

const LoginFormButtons: FC<FormButtonProps> = ({ isLogin, setIsLogin }) => {
    const { t } = useTranslation("loginPage")

    return (
        <div className="flex justify-center gap-14">
            <button
                onClick={() => setIsLogin(true)}
                className={`w-max px-3 py-1 text-xl font-bold rounded-lg text-my-white active:scale-95  ${
                    isLogin ? "bg-my-copper" : "border border-my-copper"
                }`}
                type="button"
            >
                {t("buttons.login")}
            </button>
            <button
                onClick={() => setIsLogin(false)}
                className={`w-max px-3 py-1 text-xl font-bold rounded-lg text-my-white active:scale-95  ${
                    isLogin ? "border border-my-copper" : "bg-my-copper"
                }`}
                type="button"
            >
                {t("buttons.register")}
            </button>
        </div>
    )
}

export default LoginFormButtons
