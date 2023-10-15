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
                labelTitle="Email"
                inputValue={formData.emailValue}
                setInputValue={formData.setInputValue}
                isCondition={formData.isEmailPage}
                animations={["append", "hidden"]}
            />

            <InputBlock
                inputType="text"
                inputId="code"
                labelTitle="Code"
                inputValue={formData.codeValue}
                setInputValue={formData.setInputValue}
                isCondition={formData.isCodePage}
                animations={["append", "hidden"]}
            />

            <InputBlock
                inputType="password"
                inputId="newPassword"
                labelTitle="New password"
                inputValue={formData.newPassValue}
                setInputValue={formData.setInputValue}
                isCondition={formData.isNewPassPage}
                animations={["append", "hidden"]}
            />

            <InputBlock
                inputType="password"
                inputId="confirmPassword"
                labelTitle="Confirm password"
                inputValue={formData.confirmPassValue}
                setInputValue={formData.setInputValue}
                isCondition={formData.isNewPassPage}
                animations={["append", "hidden"]}
            />
        </div>
    )
}

export default FormInputs
