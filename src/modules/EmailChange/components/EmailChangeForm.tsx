import React, { FC, useEffect, useState } from "react"
import FormInputs from "@/modules/EmailChange/components/FormInputs"
import { useTranslation } from "react-i18next"
import FormButtons from "@/modules/EmailChange/components/FormButtons"
import { changeEmailAPI } from "@/modules/EmailChange/API/ChangeEmailAPI"
import FormValidationBlock from "@/modules/EmailChange/components/FormValidation"
import { IError } from "@/types"
import { passwordCheckAPI } from "@/API/passwordCheckAPI"
import { codeCheckAPI } from "@/API/codeCheckAPI"
import SuccessFeature from "@/components/SuccessFeature"
import { useAppDispatch, useAppSelector } from "@/hooks/useTypedStore"
import { deleteUser } from "@/store/slice/userSlice"
import { NavigateFunction, useNavigate } from "react-router-dom"

const EmailChangeForm: FC = () => {
    const { t } = useTranslation(["emailChangePage", "common"])
    const { isAuth } = useAppSelector((state) => state.userReducer)

    const navigate: NavigateFunction = useNavigate()
    if (!isAuth) {
        navigate("/")
    }

    const [
        changeEmail,
        {
            isError: isEmailError,
            isSuccess: isEmailSuccess,
            error: emailError,
            reset: emailReset,
        },
    ] = changeEmailAPI.useChangeEmailMutation()

    const [
        checkPassword,
        {
            isError: isPasswordError,
            error: passwordError,
            reset: passwordReset,
        },
    ] = passwordCheckAPI.useCheckPasswordMutation()

    const [
        checkCode,
        { isError: isCodeError, error: codeError, reset: codeReset },
    ] = codeCheckAPI.useCheckCodeMutation()

    const [codeValue, setCodeValue] = useState<string>("")
    const [passwordValue, setPasswordValue] = useState<string>("")
    const [newEmailValue, setNewEmailValue] = useState<string>("")
    const [validationError, setValidationError] = useState<string>("")

    const [isCodePage, setIsCodePage] = useState<boolean>(true)
    const [isPasswordPage, setIsPasswordPage] = useState<boolean>(false)
    const [isNewEmailPage, setIsNewEmailPage] = useState<boolean>(false)

    const [isCodeTextVisible, setIsCodeTextVisible] = useState<boolean>(true)
    const [isFormVisible, setIsFormVisible] = useState<boolean>(true)

    const setInputValue = (inputId: string, value: string): void => {
        switch (inputId) {
            case "code":
                setCodeValue(value)
                setValidationError("")
                codeReset()
                break

            case "password":
                setPasswordValue(value)
                setValidationError("")
                passwordReset()
                break

            case "newEmail":
                setNewEmailValue(value)
                setValidationError("")
                emailReset()
                break
        }
    }

    const validateForm = (): string => {
        let error: string = ""

        if (isCodePage && !codeValue) {
            error = t("errors.fillInFields", { ns: "common" })
        }
        if (isPasswordPage && !passwordValue) {
            error = t("errors.fillInFields", { ns: "common" })
        }
        if (isNewEmailPage && !newEmailValue) {
            error = t("errors.fillInFields", { ns: "common" })
        }

        setValidationError(error)
        return error
    }

    useEffect(() => {
        setTimeout(() => setIsCodeTextVisible(false), 4000)
    }, [])

    const handleCheckCode = async (): Promise<void> => {
        const error = validateForm()
        if (!error) {
            const result = await checkCode({ emailChangeCode: codeValue })
            if ("data" in result) {
                setIsCodePage(false)
                setIsPasswordPage(true)
            }
        }
    }

    const handleCheckPassword = async (): Promise<void> => {
        const error = validateForm()
        if (!error) {
            const result = await checkPassword({ password: passwordValue })
            if ("data" in result) {
                setIsPasswordPage(false)
                setIsNewEmailPage(true)
            }
        }
    }

    const dispatch = useAppDispatch()

    const handleConfirmChange = async (): Promise<void> => {
        const error = validateForm()
        if (!error) {
            const result = await changeEmail({
                newEmail: newEmailValue,
            })
            if ("data" in result) {
                dispatch(deleteUser())
            }
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
            {isEmailSuccess && (
                <SuccessFeature
                    translationFile="emailChangePage"
                    headerTitle="emailChangeSuccess"
                    linkTitle="goToLogin"
                    linkDestination="/login"
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
                        isEmailSuccess && "animate-remove"
                    }`}
                    onSubmit={(e: React.FormEvent<HTMLFormElement>) =>
                        e.preventDefault()
                    }
                    onAnimationEnd={handleAnimationEnd}
                >
                    <h2 className="text-3xl font-bold text-my-dark animate-slideDown">
                        {t("phrases.emailChange", { ns: "emailChangePage" })}
                    </h2>
                    <FormInputs
                        codeValue={codeValue}
                        passwordValue={passwordValue}
                        newEmailValue={newEmailValue}
                        isCodePage={isCodePage}
                        isPasswordPage={isPasswordPage}
                        isNewEmailPage={isNewEmailPage}
                        setInputValue={setInputValue}
                    />
                    <FormValidationBlock
                        validationError={validationError}
                        isEmailError={isEmailError}
                        isPasswordError={isPasswordError}
                        isCodeError={isCodeError}
                        emailChangeError={emailError as IError}
                        passwordError={passwordError as IError}
                        codeError={codeError as IError}
                    />
                    <FormButtons
                        handleCheckCode={handleCheckCode}
                        handleCheckPassword={handleCheckPassword}
                        handleConfirmChange={handleConfirmChange}
                        isPasswordPage={isPasswordPage}
                        isNewEmailPage={isNewEmailPage}
                        isCodePage={isCodePage}
                    />
                </form>
            )}
        </section>
    )
}

export { EmailChangeForm }
