import React, { FC } from "react"
import { useTranslation } from "react-i18next"
import InputBlock from "@/components/InputBlock"

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
            <h2
                className={`text-3xl text-my-dark font-bold ${
                    isLogin ? "animate-slideDown" : "hidden"
                }`}
            >
                {t("phrases.signIn")}
            </h2>

            <h2
                className={`text-3xl text-my-dark font-bold ${
                    isLogin ? "hidden" : "animate-append"
                }`}
            >
                {t("phrases.registration")}
            </h2>

            <InputBlock
                isCondition={isLogin}
                animations={["hidden", "animate-append"]}
                inputValue={nameValue}
                setInputValue={setInputValue}
                inputId={"name"}
                inputType={"text"}
                labelTitle={"Name"}
            />
            <InputBlock
                isCondition={isLogin}
                animations={["animate-slideUp", "animate-slideDown"]}
                inputValue={emailValue}
                setInputValue={setInputValue}
                inputId={"email"}
                inputType={"email"}
                labelTitle={"Email"}
            />
            <InputBlock
                isCondition={isLogin}
                animations={["animate-slideUp", "animate-slideDown"]}
                inputValue={passwordValue}
                setInputValue={setInputValue}
                inputId={"password"}
                inputType={"password"}
                labelTitle={"Password"}
            />
            <InputBlock
                isCondition={isLogin}
                animations={["hidden", "animate-append"]}
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
