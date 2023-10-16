import React, { FC } from "react"
import { useTranslation } from "react-i18next"

interface InputBlockProps {
    isCondition: boolean
    animations: [string, string]
    inputValue: string
    setInputValue: (id: string, value: string) => void
    labelTitle: string
    inputId: string
    inputType: string
}

const InputBlock: FC<InputBlockProps> = ({
    isCondition,
    animations,
    inputValue,
    setInputValue,
    labelTitle,
    inputId,
    inputType,
}) => {
    const { t } = useTranslation("loginPage")

    return (
        <div
            className={`flex flex-col ${
                isCondition ? animations[0] : animations[1]
            }`}
        >
            <label
                className={`text-xl font-bold text-my-dark -translate-y-3 translate-x-4  bg-my-blue ${
                    inputValue
                        ? "absolute w-max transition-all duration-200 origin-bottom-right"
                        : "sr-only"
                }`}
                htmlFor={inputId}
            >
                {t(`inputs.${inputId}`)}
            </label>
            <input
                className="p-2 text-2xl font-bold bg-transparent border-4 h-14 rounded-2xl border-my-dark text-my-dark placeholder:text-my-dark"
                value={inputValue}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                    setInputValue(inputId, e.target.value)
                }
                id={inputId}
                type={inputType}
                placeholder={t(`inputs.${inputId}`)}
            />
        </div>
    )
}

export default InputBlock
