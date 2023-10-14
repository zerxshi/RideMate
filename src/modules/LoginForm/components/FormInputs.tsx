import React, { FC } from "react"
import { useTranslation } from "react-i18next"
import LoginInputBlock from "@/modules/LoginForm/components/LoginInputBlock"
import RegisterInputBlock from "@/modules/LoginForm/components/RegisterInputBlock"

interface FormInputProps {
    emailValue: string
    nameValue: string
    passwordValue: string
    confirmPasswordValue: string
    setInputValue: (inputId: string, value: string) => void
    isLogin: boolean
}

const FormInputs: FC<FormInputProps> = ({
    emailValue,
    nameValue,
    passwordValue,
    confirmPasswordValue,
    setInputValue,
    isLogin,
}) => {
    const { t } = useTranslation("loginPage")

    return (
        <div className="flex flex-col gap-4 ">
            <b
                className={`text-3xl text-my-dark ${
                    isLogin ? "animate-slideDown" : "hidden"
                }`}
            >
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
                setInputValue={setInputValue}
                inputId={"name"}
                inputType={"text"}
                labelTitle={"Name"}
            />

            <LoginInputBlock
                isLogin={isLogin}
                inputValue={emailValue}
                setInputValue={setInputValue}
                inputId={"email"}
                inputType={"email"}
                labelTitle={"Email"}
            />

            <LoginInputBlock
                isLogin={isLogin}
                inputValue={passwordValue}
                setInputValue={setInputValue}
                inputId={"password"}
                inputType={"password"}
                labelTitle={"Password"}
            />

            <RegisterInputBlock
                isLogin={isLogin}
                inputValue={confirmPasswordValue}
                setInputValue={setInputValue}
                inputId={"confirmPassword"}
                inputType={"password"}
                labelTitle={"Confirm password"}
            />
        </div>
    )
}

export default FormInputs
