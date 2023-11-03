import React, { FC } from "react"
import InputBlock from "@/components/InputBlock"

interface FormInputsProps {
    passwordValue: string
    newEmailValue: string
    codeValue: string
    isPasswordPage: boolean
    isNewEmailPage: boolean
    isCodePage: boolean
    setInputValue: (id: string, value: string) => void
}

const FormInputs: FC<FormInputsProps> = ({
    passwordValue,
    newEmailValue,
    codeValue,
    isPasswordPage,
    isNewEmailPage,
    isCodePage,
    setInputValue,
}) => {
    return (
        <div>
            <InputBlock
                inputType="text"
                inputId="code"
                labelTitle="Code"
                inputValue={codeValue}
                setInputValue={setInputValue}
                isCondition={isCodePage}
                animations={["animate-append", "hidden"]}
            />

            <InputBlock
                inputType="password"
                inputId="password"
                labelTitle="Password"
                inputValue={passwordValue}
                setInputValue={setInputValue}
                isCondition={isPasswordPage}
                animations={["animate-append", "hidden"]}
            />

            <InputBlock
                inputType="email"
                inputId="newEmail"
                labelTitle="New email"
                inputValue={newEmailValue}
                setInputValue={setInputValue}
                isCondition={isNewEmailPage}
                animations={["animate-append", "hidden"]}
            />
        </div>
    )
}

export default FormInputs
