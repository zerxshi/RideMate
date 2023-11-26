import React, { FC } from "react"
import { useTranslation } from "react-i18next"

interface InputBlockProps {
    inputValue: string
    setInputValue: ((val: string) => void) | null
    setImage: ((e: React.ChangeEvent<HTMLInputElement>) => void) | null
    inputId: string
    inputType: string
}

const AdminInputBlock: FC<InputBlockProps> = ({
    inputValue,
    inputId,
    inputType,
    setInputValue,
    setImage,
}) => {
    const { t } = useTranslation("adminPanelPage")

    return (
        <div className="flex flex-col">
            <label
                className={`text-xl font-bold text-my-dark -translate-y-3 translate-x-4  bg-zinc-700 ${
                    inputValue
                        ? "absolute w-max transition-all duration-200 origin-bottom-right"
                        : "sr-only"
                }`}
                htmlFor={inputId}
            >
                {t(`inputs.${inputId}`)}
            </label>
            {setInputValue && (
                <input
                    className="p-2 text-xl font-bold bg-transparent border-4 outline-none h-14 rounded-2xl border-my-dark text-my-dark placeholder:text-my-dark"
                    value={inputValue}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                        setInputValue(e.target.value)
                    }
                    id={inputId}
                    type={inputType}
                    placeholder={t(`inputs.${inputId}`)}
                />
            )}
            {setImage && (
                <input
                    className="p-2 text-xl font-bold bg-transparent border-4 outline-none h-14 rounded-2xl border-my-dark text-my-dark placeholder:text-my-dark"
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                        setImage(e)
                    }
                    id={inputId}
                    type={inputType}
                    placeholder={t(`inputs.${inputId}`)}
                />
            )}
        </div>
    )
}

export default AdminInputBlock
