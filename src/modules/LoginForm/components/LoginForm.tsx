import React, { FC, useState } from "react"
import { useTranslation } from "react-i18next"
import LoginFormButtons from "./LoginFormButtons"
import LoginFormInputs from "./LoginFormInputs"

const LoginForm: FC = () => {
    const { t } = useTranslation("loginPage")
    const [emailValue, setEmailValue] = useState<string>("")
    const [nameValue, setNameValue] = useState<string>("")
    const [passwordValue, setPasswordValue] = useState<string>("")
    const [isLogin, setIsLogin] = useState<boolean>(true)

    return (
        <form className="fixed flex flex-col gap-5 p-4 -translate-x-1/2 -translate-y-1/2 w-96 bg-my-gray rounded-xl top-1/2 left-1/2">
            <LoginFormButtons isLogin={isLogin} setIsLogin={setIsLogin} />
            <LoginFormInputs
                emailValue={emailValue}
                setEmailValue={setEmailValue}
                nameValue={nameValue}
                setNameValue={setNameValue}
                passwordValue={passwordValue}
                setPasswordValue={setPasswordValue}
                isLogin={isLogin}
            />
        </form>
    )
}

export { LoginForm }
