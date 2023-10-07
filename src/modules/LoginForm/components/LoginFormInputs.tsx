import React, { FC, useState } from "react"
import { useTranslation } from "react-i18next"
import LoginInputBlock from "./LoginInputBlock"
import RegisterInputBlock from "./RegisterInputBlock"

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

            <RegisterInputBlock
                isLogin={isLogin}
                inputValue={nameValue}
                setInputValue={setNameValue}
                inputId={"name"}
                inputType={"text"}
                labelTitle={"Name"}
            />

            <LoginInputBlock
                isLogin={isLogin}
                inputValue={emailValue}
                setInputValue={setEmailValue}
                inputId={"email"}
                inputType={"email"}
                labelTitle={"Email"}
            />

            <LoginInputBlock
                isLogin={isLogin}
                inputValue={passwordValue}
                setInputValue={setPasswordValue}
                inputId={"password"}
                inputType={"password"}
                labelTitle={"Password"}
            />

            <RegisterInputBlock
                isLogin={isLogin}
                inputValue={confirmPasswordValue}
                setInputValue={setConfirmPasswordValue}
                inputId={"confirmPassword"}
                inputType={"password"}
                labelTitle={"Confirm password"}
            />

            {isLogin && (
                <button
                    type="button"
                    className="self-end font-black text-my-dark"
                >
                    {t("phrases.forgotPassword")}
                </button>
            )}
        </div>
    )
}

export default LoginFormInputs
