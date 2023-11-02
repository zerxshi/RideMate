import React, { FC, useState } from "react"
import FormInputs from "@/modules/EmailChange/components/FormInputs"
import { useTranslation } from "react-i18next"
import FormButtons from "@/modules/EmailChange/components/FormButtons"
import { changeEmailAPI } from "@/modules/EmailChange/API/ChangeEmailAPI"
import FormValidationBlock from "@/modules/EmailChange/components/FormValidation"
import { IError } from "@/modules/EmailChange/types"

const EmailChangeForm: FC = () => {
    const { t } = useTranslation(["emailChangePage", "common"])

    const [changeEmail, { isError, isSuccess, error, reset }] =
        changeEmailAPI.useChangeEmailMutation()

    const [passwordValue, setPasswordValue] = useState<string>("")
    const [newEmailValue, setNewEmailValue] = useState<string>("")
    const [validationError, setValidationError] = useState<string>("")

    const [isPasswordPage, setIsPasswordPage] = useState<boolean>(true)
    const [isNewEmailPage, setIsNewEmailPage] = useState<boolean>(false)

    const setInputValue = (inputId: string, value: string) => {
        switch (inputId) {
            case "password":
                setPasswordValue(value)
                break

            case "newEmail":
                setNewEmailValue(value)
                break
        }
    }

    const validateForm = () => {
        let error: string = ""

        if (isPasswordPage && !passwordValue) {
            error = t("errors.fillInFields", { ns: "common" })
        }
        if (isNewEmailPage && !newEmailValue) {
            error = t("errors.fillInFields", { ns: "common" })
        }

        setValidationError(error)
        return error
    }

    const handleCheckPassword = () => {
        const error = validateForm()
        if (!error) {
            setIsPasswordPage(false)
            setIsNewEmailPage(true)
        }
    }

    const handleConfirmChange = () => {
        const error = validateForm()
        if (!error) {
            changeEmail({
                changeToken: "",
                newEmail: newEmailValue,
            })
        }
    }

    return (
        <section className="w-605">
            <form
                className="flex flex-col gap-4"
                onSubmit={(e: React.FormEvent<HTMLFormElement>) =>
                    e.preventDefault()
                }
            >
                <h2 className="text-3xl font-bold text-my-dark animate-slideDown">
                    {t("phrases.emailChange", { ns: "emailChangePage" })}
                </h2>
                <FormInputs
                    passwordValue={passwordValue}
                    newEmailValue={newEmailValue}
                    isPasswordPage={isPasswordPage}
                    isNewEmailPage={isNewEmailPage}
                    setInputValue={setInputValue}
                />
                <FormValidationBlock
                    validationError={validationError}
                    isError={isError}
                    emailChangeError={error as IError}
                />
                <FormButtons
                    handleCheckPassword={handleCheckPassword}
                    handleConfirmChange={handleConfirmChange}
                    isPasswordPage={isPasswordPage}
                    isNewEmailPage={isNewEmailPage}
                />
            </form>
        </section>
    )
}

export { EmailChangeForm }
