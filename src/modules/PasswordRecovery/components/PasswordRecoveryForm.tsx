import React, { useState } from "react"
import { useTranslation } from "react-i18next"
import FormButtons from "@/modules/PasswordRecovery/components/FormButtons"
import FormInputs from "@/modules/PasswordRecovery/components/FormInputs"
import { FormContext } from "@/modules/PasswordRecovery/hooks/useFormContext"
import FormValidationBlock from "@/modules/PasswordRecovery/components/FormValidationBlock"
import SuccessFeature from "@/components/SuccessFeature"

const PasswordRecoveryForm = () => {
    const { t } = useTranslation(["loginPage", "common"])

    const [emailValue, setEmailValue] = useState<string>("")
    const [codeValue, setCodeValue] = useState<string>("")
    const [newPassValue, setNewPassValue] = useState<string>("")
    const [confirmPassValue, setConfirmPassValue] = useState<string>("")
    const [validationError, setValidationError] = useState<string>("")

    const [isEmailPage, setIsEmailPage] = useState<boolean>(true)
    const [isCodePage, setIsCodePage] = useState<boolean>(false)
    const [isNewPassPage, setIsNewPassPage] = useState<boolean>(false)

    const [isFakeSuccess, setIsFakeSuccess] = useState<boolean>(false)
    const [isFormVisible, setIsFormVisible] = useState<boolean>(true)

    const setInputValue = (inputId: string, value: string) => {
        switch (inputId) {
            case "email":
                setEmailValue(value)
                setValidationError("")
                break

            case "code":
                setCodeValue(value)
                setValidationError("")
                break

            case "newPassword":
                setNewPassValue(value)
                setValidationError("")
                break

            case "confirmPassword":
                setConfirmPassValue(value)
                setValidationError("")
                break
        }
    }

    const validateForm = () => {
        let error: string = ""

        if (isEmailPage && !emailValue) {
            error = t("errors.fillInFields", { ns: "common" })
        }
        if (isCodePage && !codeValue) {
            error = t("errors.fillInFields", { ns: "common" })
        }
        if (isNewPassPage && (!newPassValue || !confirmPassValue)) {
            error = t("errors.fillInFields", { ns: "common" })
        }
        if (isNewPassPage && newPassValue !== confirmPassValue) {
            error = t("errors.passwordsMatch", { ns: "common" })
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
        const error = validateForm()
        if (!error) {
            setIsFakeSuccess(true)
        }
        return
    }

    const handleAnimationEnd = (e: React.AnimationEvent<HTMLFormElement>) => {
        if (e.animationName === "remove") {
            setIsFormVisible(false)
        }
    }

    return (
        <section className="w-605">
            {isFakeSuccess && (
                <SuccessFeature
                    headerTitle="passwordChangeSuccess"
                    linkDestination="/login"
                    linkTitle="goToLogin"
                />
            )}

            {isFormVisible && (
                <form
                    className={`flex flex-col gap-4 ${
                        isFakeSuccess && "animate-remove"
                    }`}
                    onSubmit={(e: React.FormEvent<HTMLFormElement>) =>
                        e.preventDefault()
                    }
                    onAnimationEnd={handleAnimationEnd}
                >
                    <h2 className="text-3xl font-bold text-my-dark animate-slideDown">
                        {t("phrases.passwordRecovery", { ns: "loginPage" })}
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

                        <FormValidationBlock
                            validationError={validationError}
                        />

                        <FormButtons
                            handleGetCode={handleGetCode}
                            handleChangePassword={handleChangePassword}
                            handleConfirmChange={handleConfirmChange}
                        />
                    </FormContext.Provider>
                </form>
            )}
        </section>
    )
}

export { PasswordRecoveryForm }
