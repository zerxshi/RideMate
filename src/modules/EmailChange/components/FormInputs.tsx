import React, { FC } from "react"
import InputBlock from "@/components/InputBlock"

interface FormInputsProps {
    passwordValue: string
    newEmailValue: string
    isPasswordPage: boolean
    isNewEmailPage: boolean
    setInputValue: (id: string, value: string) => void
}

const FormInputs: FC<FormInputsProps> = ({
    passwordValue,
    newEmailValue,
    isPasswordPage,
    isNewEmailPage,
    setInputValue,
}) => {
    return (
        <div>
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
