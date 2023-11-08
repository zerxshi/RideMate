import React, { useState } from "react"
import { useTranslation } from "react-i18next"
import FormButtons from "@/modules/PasswordRecovery/components/FormButtons"
import FormInputs from "@/modules/PasswordRecovery/components/FormInputs"
import { FormContext } from "@/modules/PasswordRecovery/hooks/useFormContext"
import FormValidationBlock from "@/modules/PasswordRecovery/components/FormValidationBlock"
import SuccessFeature from "@/components/SuccessFeature"
import { passwordRecoveryAPI } from "@/modules/PasswordRecovery"
import { IError } from "@/types"

const PasswordRecoveryForm = () => {
    const { t } = useTranslation(["passwordRecoveryPage", "common"])

    const [
        requestRecovery,
        { isError: isRequestError, error: requestError, reset: requestReset },
    ] = passwordRecoveryAPI.usePasswordRecoveryRequestMutation()

    const [
        verifyToken,
        { isError: isTokenError, error: tokenError, reset: tokenReset },
    ] = passwordRecoveryAPI.useVerifyTokenMutation()

    const [
        recoverPassword,
        {
            isSuccess: isRecoverySuccess,
            isError: isRecoveryError,
            error: recoveryError,
            reset: recoveryReset,
        },
    ] = passwordRecoveryAPI.usePasswordRecoveryMutation()

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
    const [isCodeTextVisible, setIsCodeTextVisible] = useState<boolean>(true)

    const setInputValue = (inputId: string, value: string): void => {
        switch (inputId) {
            case "email":
                setEmailValue(value)
                setValidationError("")
                requestReset()
                break

            case "code":
                setCodeValue(value)
                setValidationError("")
                tokenReset()
                break

            case "newPassword":
                setNewPassValue(value)
                setValidationError("")
                recoveryReset()
                break

            case "confirmPassword":
                setConfirmPassValue(value)
                setValidationError("")
                recoveryReset()
                break
        }
    }

    const validateForm = (): string => {
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

    const handleGetCode = async (): Promise<void> => {
        const error = validateForm()
        if (!error) {
            const result = await requestRecovery({ email: emailValue })

            if ("data" in result) {
                setIsEmailPage(false)
                setIsCodePage(true)

                setIsCodeTextVisible(true)
                setTimeout(() => setIsCodeTextVisible(false), 4000)
            }
        }
    }

    const handleCheckCode = async (): Promise<void> => {
        const error = validateForm()
        if (!error) {
            const result = await verifyToken({
                email: emailValue,
                passwordRecoveryToken: codeValue,
            })

            if ("data" in result) {
                setIsCodePage(false)
                setIsNewPassPage(true)
            }
        }
    }

    const handleConfirmChange = async (): Promise<void> => {
        const error = validateForm()
        if (!error) {
            await recoverPassword({
                email: emailValue,
                newPassword: newPassValue,
            })
        }
    }

    const handleAnimationEnd = (
        e: React.AnimationEvent<HTMLFormElement>,
    ): void => {
        if (e.animationName === "remove") {
            setIsFormVisible(false)
        }
    }

    return (
        <section className="w-605">
            {isRecoverySuccess && (
                <SuccessFeature
                    translationFile="passwordRecoveryPage"
                    headerTitle="passwordChangeSuccess"
                    linkDestination="/login"
                    linkTitle="goToLogin"
                />
            )}

            {isCodePage && isCodeTextVisible && (
                <b className="absolute text-2xl top-10 right-5 text-my-dark animate-append">
                    {t("phrases.codeSentToEmail", { ns: "common" })}
                </b>
            )}

            {isFormVisible && (
                <form
                    className={`flex flex-col gap-4 ${
                        isRecoverySuccess && "animate-remove"
                    }`}
                    onSubmit={(e: React.FormEvent<HTMLFormElement>) =>
                        e.preventDefault()
                    }
                    onAnimationEnd={handleAnimationEnd}
                >
                    <h2 className="text-3xl font-bold text-my-dark animate-slideDown">
                        {t("phrases.passwordRecovery", {
                            ns: "passwordRecoveryPage",
                        })}
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
                            requestError={requestError as IError}
                            tokenError={tokenError as IError}
                            recoveryError={recoveryError as IError}
                            isRequestError={isRequestError}
                            isTokenError={isTokenError}
                            isRecoveryError={isRecoveryError}
                        />

                        <FormButtons
                            handleGetCode={handleGetCode}
                            handleCheckCode={handleCheckCode}
                            handleConfirmChange={handleConfirmChange}
                        />
                    </FormContext.Provider>
                </form>
            )}
        </section>
    )
}

export { PasswordRecoveryForm }
