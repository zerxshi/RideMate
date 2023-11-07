import React, { FC } from "react"
import InputBlock from "@/components/InputBlock"
import { useFormContext } from "@/modules/PasswordRecovery/hooks/useFormContext"

const FormInputs: FC = ({}) => {
    const formData = useFormContext()

    return (
        <div className="flex flex-col gap-4">
            <InputBlock
                inputType="email"
                inputId="email"
                inputValue={formData.emailValue}
                setInputValue={formData.setInputValue}
                isCondition={formData.isEmailPage}
                animations={["animate-append", "hidden"]}
            />

            <InputBlock
                inputType="text"
                inputId="code"
                inputValue={formData.codeValue}
                setInputValue={formData.setInputValue}
                isCondition={formData.isCodePage}
                animations={["animate-append", "hidden"]}
            />

            <InputBlock
                inputType="password"
                inputId="newPassword"
                inputValue={formData.newPassValue}
                setInputValue={formData.setInputValue}
                isCondition={formData.isNewPassPage}
                animations={["animate-append", "hidden"]}
            />

            <InputBlock
                inputType="password"
                inputId="confirmPassword"
                inputValue={formData.confirmPassValue}
                setInputValue={formData.setInputValue}
                isCondition={formData.isNewPassPage}
                animations={["animate-append", "hidden"]}
            />
        </div>
    )
}

export default FormInputs
