import React, { FC, useState } from "react"
import { useTranslation } from "react-i18next"

interface FormInputProps {
    emailValue: string
    setEmailValue: (value: string) => void
    nameValue: string
    setNameValue: (value: string) => void
    passwordValue: string
    setPasswordValue: (value: string) => void
    confirmPasswordValue: string
    setConfirmPasswordValue: (value: string) => void
    isLogin: boolean
}

const LoginFormInputs: FC<FormInputProps> = ({
    emailValue,
    setEmailValue,
    nameValue,
    setNameValue,
    passwordValue,
    setPasswordValue,
    confirmPasswordValue,
    setConfirmPasswordValue,
    isLogin,
}) => {
    const { t } = useTranslation("loginPage")

    return (
        <div className="flex flex-col gap-4">
            <b className={`text-3xl text-my-dark ${!isLogin && "hidden"}`}>
                {t("phrases.signIn")}
            </b>

            <b
                className={`text-3xl text-my-dark ${
                    isLogin ? "hidden" : "animate-append"
                }`}
            >
                {t("phrases.registration")}
            </b>

            <div
                className={`flex flex-col ${
                    isLogin ? "hidden" : "animate-append"
                }`}
            >
                <label
                    className={`text-xl font-bold text-my-dark -translate-y-3 translate-x-4  bg-my-blue ${
                        nameValue
                            ? "absolute w-max transition-all duration-200 origin-bottom-right"
                            : "sr-only"
                    }`}
                    htmlFor="name"
                >
                    Name
                </label>
                <input
                    className="p-2 text-2xl font-bold bg-transparent border-4 h-14 rounded-2xl border-my-dark text-my-dark placeholder:text-my-dark"
                    value={nameValue}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                        setNameValue(e.target.value)
                    }
                    id="name"
                    type="text"
                    placeholder={t("inputs.name")}
                />
            </div>

            <div
                className={`flex flex-col ${
                    isLogin ? "" : "animate-slideDown"
                }`}
            >
                <label
                    className={`text-xl font-bold text-my-dark -translate-y-3 translate-x-4  bg-my-blue ${
                        emailValue
                            ? "absolute w-max transition-all duration-200 origin-bottom-right"
                            : "sr-only"
                    }`}
                    htmlFor="email"
                >
                    Email
                </label>
                <input
                    className="p-2 px-3 text-2xl font-bold bg-transparent border-4 h-14 rounded-2xl border-my-dark text-my-dark placeholder:text-my-dark"
                    value={emailValue}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                        setEmailValue(e.target.value)
                    }
                    id="email"
                    type="email"
                    placeholder={t("inputs.email")}
                />
            </div>

            <div
                className={`flex flex-col ${
                    isLogin ? "" : "animate-slideDown"
                }`}
            >
                <label
                    className={`text-xl font-bold text-my-dark -translate-y-3 translate-x-4  bg-my-blue ${
                        passwordValue
                            ? "absolute w-max transition-all duration-200 origin-bottom-right"
                            : "sr-only"
                    }`}
                    htmlFor="password"
                >
                    Password
                </label>
                <input
                    className="p-2 text-2xl font-bold bg-transparent border-4 h-14 rounded-2xl border-my-dark text-my-dark placeholder:text-my-dark"
                    value={passwordValue}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                        setPasswordValue(e.target.value)
                    }
                    id="password"
                    type="password"
                    placeholder={t("inputs.password")}
                />
            </div>

            <div
                className={`flex flex-col ${
                    isLogin ? "hidden" : "animate-append"
                }`}
            >
                <label
                    className={`text-xl font-bold transition text-my-dark -translate-y-3 translate-x-4  bg-my-blue ${
                        confirmPasswordValue
                            ? "absolute w-max transition-all duration-200 origin-bottom-right"
                            : "sr-only"
                    }`}
                    htmlFor="confirmPassword"
                >
                    Confirm password
                </label>
                <input
                    className="p-2 text-2xl font-bold bg-transparent border-4 h-14 rounded-2xl border-my-dark text-my-dark placeholder:text-my-dark"
                    value={confirmPasswordValue}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                        setConfirmPasswordValue(e.target.value)
                    }
                    id="confirmPassword"
                    type="password"
                    placeholder={t("inputs.confirmPassword")}
                />
            </div>

            {isLogin && (
                <b className="self-end font-black text-my-dark">
                    {t("phrases.forgotPassword")}
                </b>
            )}
        </div>
    )
}

export default LoginFormInputs
