import React, { FC, useState } from "react"
import { useTranslation } from "react-i18next"

interface FormInputProps {
    emailValue: string
    setEmailValue: (value: string) => void
    nameValue: string
    setNameValue: (value: string) => void
    passwordValue: string
    setPasswordValue: (value: string) => void
    isLogin: boolean
}

const LoginFormInputs: FC<FormInputProps> = ({
    emailValue,
    setEmailValue,
    nameValue,
    setNameValue,
    passwordValue,
    setPasswordValue,
    isLogin,
}) => {
    const { t } = useTranslation("loginPage")

    return (
        <div className="flex flex-col gap-5">
            <input
                className="p-2 font-medium rounded-lg bg-my-dark text-my-white placeholder:text-my-white"
                value={emailValue}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                    setEmailValue(e.target.value)
                }
                type="email"
                placeholder={t("inputs.email")}
            />
            {!isLogin && (
                <input
                    className="p-2 font-medium rounded-lg bg-my-dark text-my-white placeholder:text-my-white"
                    value={nameValue}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                        setNameValue(e.target.value)
                    }
                    type="text"
                    placeholder={t("inputs.name")}
                />
            )}
            <input
                className="p-2 font-medium rounded-lg bg-my-dark text-my-white placeholder:text-my-white"
                value={passwordValue}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                    setPasswordValue(e.target.value)
                }
                type="password"
                placeholder={t("inputs.password")}
            />

            <button
                className="self-center px-3 py-1 text-xl font-bold rounded-lg w-max text-my-white bg-my-copper active:scale-95"
                type="submit"
            >
                {isLogin ? t("buttons.login") : t("buttons.register")}
            </button>
        </div>
    )
}

export default LoginFormInputs
