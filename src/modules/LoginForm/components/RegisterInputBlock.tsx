import React, { FC } from "react"
import { useTranslation } from "react-i18next"

interface LoginInputProps {
    isLogin: boolean
    inputValue: string
    setInputValue: (value: string) => void
    labelTitle: string
    inputId: string
    inputType: string
}

const RegisterInputBlock: FC<LoginInputProps> = ({
    isLogin,
    inputValue,
    setInputValue,
    labelTitle,
    inputId,
    inputType,
}) => {
    const { t } = useTranslation("loginPage")

    return (
        <div
            className={`flex flex-col ${isLogin ? "hidden" : "animate-append"}`}
        >
            <label
                className={`text-xl font-bold text-my-dark -translate-y-3 translate-x-4  bg-my-blue ${
                    inputValue
                        ? "absolute w-max transition-all duration-200 origin-bottom-right"
                        : "sr-only"
                }`}
                htmlFor={inputId}
            >
                {labelTitle}
            </label>
            <input
                className="p-2 text-2xl font-bold bg-transparent border-4 h-14 rounded-2xl border-my-dark text-my-dark placeholder:text-my-dark"
                value={inputValue}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                    setInputValue(e.target.value)
                }
                id={inputId}
                type={inputType}
                placeholder={t(`inputs.${inputId}`)}
            />
        </div>
    )
}

export default RegisterInputBlock
