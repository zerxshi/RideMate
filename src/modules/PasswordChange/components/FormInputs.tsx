import InputBlock from "@/components/InputBlock"
import React, { FC } from "react"

interface FormInputsProps {
    codeValue: string
    passwordValue: string
    newPassValue: string
    confirmPassValue: string
    isCodePage: boolean
    isPasswordPage: boolean
    isNewPassPage: boolean
    setInputValue: (id: string, value: string) => void
}

const FormInputs: FC<FormInputsProps> = ({
    codeValue,
    passwordValue,
    newPassValue,
    confirmPassValue,
    isCodePage,
    isPasswordPage,
    isNewPassPage,
    setInputValue,
}) => {
    return (
        <div className="flex flex-col gap-4">
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
                inputType="password"
                inputId="newPassword"
                labelTitle="New password"
                inputValue={newPassValue}
                setInputValue={setInputValue}
                isCondition={isNewPassPage}
                animations={["animate-append", "hidden"]}
            />

            <InputBlock
                inputType="password"
                inputId="confirmPassword"
                labelTitle="Confirm password"
                inputValue={confirmPassValue}
                setInputValue={setInputValue}
                isCondition={isNewPassPage}
                animations={["animate-append", "hidden"]}
            />
        </div>
    )
}

export default FormInputs
