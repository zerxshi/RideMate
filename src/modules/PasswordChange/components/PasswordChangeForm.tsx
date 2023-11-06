import React, { useEffect, useState } from "react"
import FormInputs from "@/modules/PasswordChange/components/FormInputs"
import FormButtons from "@/modules/PasswordChange/components/FormButtons"
import { useTranslation } from "react-i18next"

const PasswordChangeForm = () => {
    const { t } = useTranslation("passwordChangePage")

    const [codeValue, setCodeValue] = useState<string>("")
    const [passwordValue, setPasswordValue] = useState<string>("")
    const [newPassValue, setNewPassValue] = useState<string>("")
    const [confirmPassValue, setConfirmPassValue] = useState<string>("")

    const [isCodePage, setIsCodePage] = useState<boolean>(true)
    const [isPasswordPage, setIsPasswordPage] = useState<boolean>(false)
    const [isNewPassPage, setIsNewPassPage] = useState<boolean>(false)

    const [isCodeTextVisible, setIsCodeTextVisible] = useState<boolean>(true)

    useEffect(() => {
        setTimeout(() => setIsCodeTextVisible(false), 4000)
    }, [])

    const setInputValue = (inputId: string, value: string) => {
        switch (inputId) {
            case "code":
                setCodeValue(value)
                break

            case "password":
                setPasswordValue(value)
                break

            case "newPassword":
                setNewPassValue(value)
                break

            case "confirmPassword":
                setConfirmPassValue(value)
                break
        }
    }

    const handleCheckCode = async () => {
        setIsCodePage(false)
        setIsPasswordPage(true)
    }

    const handleCheckPassword = async () => {
        setIsPasswordPage(false)
        setIsNewPassPage(true)
    }

    const handleConfirmChange = async () => {}

    return (
        <section className="w-605">
            {isCodePage && isCodeTextVisible && (
                <b className="absolute text-2xl top-10 right-5 text-my-dark animate-append">
                    The code has been sent to your email!
                </b>
            )}

            <form
                className="flex flex-col gap-4"
                onSubmit={(e: React.FormEvent<HTMLFormElement>) =>
                    e.preventDefault()
                }
            >
                <h2 className="text-3xl font-bold text-my-dark animate-slideDown">
                    {t("phrases.passwordChange")}
                </h2>
                <FormInputs
                    codeValue={codeValue}
                    passwordValue={passwordValue}
                    newPassValue={newPassValue}
                    confirmPassValue={confirmPassValue}
                    isCodePage={isCodePage}
                    isPasswordPage={isPasswordPage}
                    isNewPassPage={isNewPassPage}
                    setInputValue={setInputValue}
                />
                <FormButtons
                    handleCheckCode={handleCheckCode}
                    handleCheckPassword={handleCheckPassword}
                    handleConfirmChange={handleConfirmChange}
                    isPasswordPage={isPasswordPage}
                    isNewPassPage={isNewPassPage}
                    isCodePage={isCodePage}
                />
            </form>
        </section>
    )
}

export { PasswordChangeForm }
