import React, { useState } from "react"
import { useTranslation } from "react-i18next"
import FormButtons from "@/modules/PasswordRecovery/components/FormButtons"
import FormInputs from "@/modules/PasswordRecovery/components/FormInputs"
import { FormContext } from "@/modules/PasswordRecovery/hooks/useFormContext"
import FormValidationBlock from "@/modules/PasswordRecovery/components/FormValidationBlock"

const PasswordRecoveryForm = () => {
    const { t } = useTranslation("loginPage")

    const [emailValue, setEmailValue] = useState<string>("")
    const [codeValue, setCodeValue] = useState<string>("")
    const [newPassValue, setNewPassValue] = useState<string>("")
    const [confirmPassValue, setConfirmPassValue] = useState<string>("")
    const [validationError, setValidationError] = useState<string>("")

    const [isEmailPage, setIsEmailPage] = useState<boolean>(true)
    const [isCodePage, setIsCodePage] = useState<boolean>(false)
    const [isNewPassPage, setIsNewPassPage] = useState<boolean>(false)

    const setInputValue = (inputId: string, value: string) => {
        switch (inputId) {
            case "email":
                setEmailValue(value)
                break

            case "code":
                setCodeValue(value)
                break

            case "newPassword":
                setNewPassValue(value)
                break

            case "confirmPassword":
                setConfirmPassValue(value)
                break
        }
    }

    const validateForm = () => {
        let error: string = ""

        if (isEmailPage && !emailValue) {
            error = t("errors.fillInFields")
        }
        if (isCodePage && !codeValue) {
            error = t("errors.fillInFields")
        }
        if (isNewPassPage && (!newPassValue || !confirmPassValue)) {
            error = t("errors.fillInFields")
        }
        if (isNewPassPage && newPassValue !== confirmPassValue) {
            error = t("errors.passwordsMatch")
        }

        setValidationError(error)
        return error
    }

    const handleGetCode = (): void => {
        const error = validateForm()
        if (!error) {
            setIsEmailPage(false)
            setIsCodePage(true)
        }
        return
    }

    const handleChangePassword = () => {
        const error = validateForm()
        if (!error) {
            setIsCodePage(false)
            setIsNewPassPage(true)
        }
        return
    }

    const handleConfirmChange = () => {
        validateForm()
    }

    return (
        <section className="w-605">
            <form
                className="flex flex-col gap-4 "
                onSubmit={(e: React.FormEvent<HTMLFormElement>) =>
                    e.preventDefault()
                }
            >
                <h2 className={`text-3xl font-bold text-my-dark`}>
                    {t("phrases.passwordRecovery")}
                </h2>
                <FormContext.Provider
                    value={{
                        emailValue,
                        codeValue,
                        newPassValue,
                        confirmPassValue,
                        setInputValue,
                        isEmailPage,
                        isCodePage,
                        isNewPassPage,
                        setIsEmailPage,
                        setIsCodePage,
                        setIsNewPassPage,
                    }}
                >
                    <FormInputs />

                    <FormValidationBlock validationError={validationError} />

                    <FormButtons
                        handleGetCode={handleGetCode}
                        handleChangePassword={handleChangePassword}
                        handleConfirmChange={handleConfirmChange}
                    />
                </FormContext.Provider>
            </form>
        </section>
    )
}

export { PasswordRecoveryForm }
