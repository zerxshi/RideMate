import React, { FC, useState } from "react"
import LoginFormButtons from "@/modules/LoginForm/components/LoginFormButtons"
import LoginFormInputs from "@/modules/LoginForm/components/LoginFormInputs"
import userImg from "@/assets/images/userImg.png"
import { useTranslation } from "react-i18next"
import FormValidationBlock from "@/modules/LoginForm/components/FormValidationBlock"
import { IError } from "@/modules/LoginForm/types"
import { useSignUp } from "@/modules/LoginForm/hooks/useSignUp"
import { useSignIn } from "@/modules/LoginForm/hooks/useSignIn"
import RegistrationSuccess from "@/modules/LoginForm/components/RegistrationSuccess"

const LoginForm: FC = () => {
    const { t } = useTranslation("loginPage")

    const [emailValue, setEmailValue] = useState<string>("")
    const [nameValue, setNameValue] = useState<string>("")
    const [passwordValue, setPasswordValue] = useState<string>("")
    const [confirmPasswordValue, setConfirmPasswordValue] = useState<string>("")
    const [isLogin, setIsLogin] = useState<boolean>(true)
    const [validationError, setValidationError] = useState<string>("")

    const validateForm = () => {
        let error: string = ""

        if (isLogin && (!emailValue || !passwordValue)) {
            error = t("errors.fillInFields")
        }
        if (
            !isLogin &&
            (!emailValue ||
                !passwordValue ||
                !nameValue ||
                !confirmPasswordValue)
        ) {
            error = t("errors.fillInFields")
        }
        if (!isLogin && passwordValue !== confirmPasswordValue) {
            error = t("errors.passwordsMatch")
        }

        setValidationError(error)
        return error
    }

    const [
        signUp,
        isRegistrationError,
        isRegistrationSuccess,
        registrationError,
        registrationReset,
    ] = useSignUp(validateForm, emailValue, nameValue, passwordValue)

    const [signIn, isLoginError, loginError, loginReset] = useSignIn(
        validateForm,
        emailValue,
        passwordValue,
    )

    const setInputValue = (inputId: string, value: string) => {
        switch (inputId) {
            case "name":
                setNameValue(value)
                setValidationError("")
                loginReset()
                registrationReset()
                break

            case "email":
                setEmailValue(value)
                setValidationError("")
                loginReset()
                registrationReset()
                break

            case "password":
                setPasswordValue(value)
                setValidationError("")
                loginReset()
                registrationReset()
                break

            case "confirmPassword":
                setConfirmPasswordValue(value)
                setValidationError("")
                loginReset()
                registrationReset()
                break
        }
    }

    const clearInputs = (): void => {
        setEmailValue("")
        setNameValue("")
        setPasswordValue("")
        setConfirmPasswordValue("")
    }

    const handleToggleIsLogin = () => {
        clearInputs()
        setValidationError("")
        loginReset()
        registrationReset()
        setIsLogin((prev) => !isLogin)
    }

    const [isFormVisible, setIsFormVisible] = useState<boolean>(true)

    const handleAnimationEnd = (e: React.AnimationEvent<HTMLFormElement>) => {
        if (e.animationName === "remove") {
            setIsFormVisible(false)
        }
    }

    return (
        <section>
            {isRegistrationSuccess && (
                <RegistrationSuccess
                    isRegistrationSuccess={isRegistrationSuccess}
                />
            )}

            {isFormVisible && (
                <form
                    onSubmit={(e: React.FormEvent<HTMLFormElement>) =>
                        e.preventDefault()
                    }
                    className={`flex flex-col gap-4 p-4 w-[605px] bg-my-gray rounded-xl ${
                        isRegistrationSuccess && "animate-remove"
                    }`}
                    onAnimationEnd={handleAnimationEnd}
                >
                    <img
                        src={userImg}
                        alt="user image"
                        className={`self-center w-40 h-40 animate ${
                            isLogin ? "animate-slideDownImg" : "animate-slideUp"
                        }`}
                    />
                    <LoginFormInputs
                        emailValue={emailValue}
                        nameValue={nameValue}
                        passwordValue={passwordValue}
                        confirmPasswordValue={confirmPasswordValue}
                        setInputValue={setInputValue}
                        isLogin={isLogin}
                    />
                    <FormValidationBlock
                        validationError={validationError}
                        isLoginError={isLoginError}
                        isRegistrationError={isRegistrationError}
                        loginError={loginError as IError}
                        registrationError={registrationError as IError}
                    />
                    <LoginFormButtons
                        isLogin={isLogin}
                        register={signUp}
                        login={signIn}
                        handleToggleIsLogin={handleToggleIsLogin}
                    />
                </form>
            )}
        </section>
    )
}

export { LoginForm }
