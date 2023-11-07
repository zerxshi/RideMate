import React, { useEffect, useState } from "react"
import FormInputs from "@/modules/PasswordChange/components/FormInputs"
import FormButtons from "@/modules/PasswordChange/components/FormButtons"
import { useTranslation } from "react-i18next"
import { changePasswordAPI } from "@/modules/PasswordChange/API/changePasswordAPI"
import { passwordCheckAPI } from "@/API/passwordCheckAPI"
import { tokenCheckAPI } from "@/API/tokenCheckAPI"
import { useAppDispatch } from "@/hooks/useTypedStore"
import { deleteUser } from "@/store/slice/userSlice"
import FormValidationBlock from "@/modules/PasswordChange/components/FormValidationBlock"
import { IError } from "@/types"

const PasswordChangeForm = () => {
    const { t } = useTranslation(["passwordChangePage", "common"])

    const [
        changePassword,
        {
            isError: isChangeError,
            isSuccess: isChangeSuccess,
            error: changeError,
            reset: changeReset,
        },
    ] = changePasswordAPI.useChangePasswordMutation()

    const [
        checkPassword,
        {
            isError: isPasswordError,
            error: passwordError,
            reset: passwordReset,
        },
    ] = passwordCheckAPI.useCheckPasswordMutation()

    const [
        checkToken,
        { isError: isTokenError, error: tokenError, reset: tokenReset },
    ] = tokenCheckAPI.useCheckTokenMutation()

    const [codeValue, setCodeValue] = useState<string>("")
    const [passwordValue, setPasswordValue] = useState<string>("")
    const [newPassValue, setNewPassValue] = useState<string>("")
    const [confirmPassValue, setConfirmPassValue] = useState<string>("")
    const [validationError, setValidationError] = useState<string>("")

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
                setValidationError("")
                tokenReset()
                break

            case "password":
                setPasswordValue(value)
                setValidationError("")
                passwordReset()
                break

            case "newPassword":
                setNewPassValue(value)
                setValidationError("")
                changeReset()
                break

            case "confirmPassword":
                setConfirmPassValue(value)
                setValidationError("")
                changeReset()
                break
        }
    }

    const validateForm = () => {
        let error: string = ""

        if (isCodePage && !codeValue) {
            error = t("errors.fillInFields", { ns: "common" })
        }
        if (isPasswordPage && !passwordValue) {
            error = t("errors.fillInFields", { ns: "common" })
        }
        if (isNewPassPage && !newPassValue) {
            error = t("errors.fillInFields", { ns: "common" })
        }
        if (isNewPassPage && newPassValue !== confirmPassValue) {
            error = t("errors.passwordsMatch", { ns: "common" })
        }

        setValidationError(error)
        return error
    }

    const handleCheckCode = async () => {
        const error = validateForm()

        if (!error) {
            const result = await checkToken({ passwordChangeToken: codeValue })
            if ("data" in result) {
                setIsCodePage(false)
                setIsPasswordPage(true)
            }
        }
    }

    const handleCheckPassword = async () => {
        const error = validateForm()

        if (!error) {
            const result = await checkPassword({ password: passwordValue })
            if ("data" in result) {
                setIsPasswordPage(false)
                setIsNewPassPage(true)
            }
        }
    }

    const dispatch = useAppDispatch()

    const handleConfirmChange = async () => {
        const error = validateForm()

        if (!error) {
            const result = await changePassword({
                newPassword: newPassValue,
            })
            if ("data" in result) {
                dispatch(deleteUser())
            }
        }
    }

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
                <FormValidationBlock
                    validationError={validationError}
                    tokenError={tokenError as IError}
                    passwordError={passwordError as IError}
                    changeError={changeError as IError}
                    isTokenError={isTokenError}
                    isPasswordError={isPasswordError}
                    isChangeError={isChangeError}
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
