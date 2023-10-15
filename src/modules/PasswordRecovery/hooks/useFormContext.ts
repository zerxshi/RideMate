import { createContext, useContext } from "react"

interface ContextType {
    emailValue: string
    codeValue: string
    newPassValue: string
    confirmPassValue: string
    setInputValue: (id: string, value: string) => void
    isEmailPage: boolean
    isCodePage: boolean
    isNewPassPage: boolean
    setIsEmailPage: (value: boolean) => void
    setIsCodePage: (value: boolean) => void
    setIsNewPassPage: (value: boolean) => void
}

export const FormContext = createContext<ContextType | undefined>(undefined)

export const useFormContext = () => {
    const form = useContext(FormContext)

    if (form === undefined) {
        throw new Error("useFormContext must be used with a FormContext")
    }

    return form
}
