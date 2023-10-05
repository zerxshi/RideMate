import { useAppDispatch, useAppSelector } from "@/hooks/useTypedStore"
import React, { FC, useState } from "react"
import { authAPI } from "../API/authAPI"
import LoginFormButtons from "./LoginFormButtons"
import LoginFormInputs from "./LoginFormInputs"
import { setUser } from "@/store/slice/userSlice"
import { useNavigate } from "react-router-dom"

const LoginForm: FC = () => {
    const [emailValue, setEmailValue] = useState<string>("")
    const [nameValue, setNameValue] = useState<string>("")
    const [passwordValue, setPasswordValue] = useState<string>("")
    const [isLogin, setIsLogin] = useState<boolean>(true)
    const dispatch = useAppDispatch()
    const navigate = useNavigate()
    const [register, {}] = authAPI.useRegisterMutation()
    const [login, {}] = authAPI.useLoginMutation()

    const signUp = async () => {
        const result = await register({
            email: emailValue,
            name: nameValue,
            password: passwordValue,
        })
        console.log(result)
        //@ts-ignore
        if (result && result.data) {
            //@ts-ignore
            localStorage.setItem("accessToken", result.data.token)
            //@ts-ignore
            dispatch(setUser(result.data.token))
            navigate("/")
        }
    }

    const signIn = async () => {
        const result = await login({
            email: emailValue,
            password: passwordValue,
        })
        console.log(result)
        //@ts-ignore
        if (result && result.data) {
            //@ts-ignore
            localStorage.setItem("accessToken", result.data.token)
            //@ts-ignore
            dispatch(setUser(result.data.token))
            navigate("/")
        }
    }

    return (
        <form
            onSubmit={(e: React.FormEvent<HTMLFormElement>) =>
                e.preventDefault()
            }
            className="absolute flex flex-col gap-5 p-4 -translate-x-1/2 -translate-y-1/2 w-96 bg-my-gray rounded-xl top-1/2 left-1/2"
        >
            <LoginFormButtons isLogin={isLogin} setIsLogin={setIsLogin} />
            <LoginFormInputs
                emailValue={emailValue}
                setEmailValue={setEmailValue}
                nameValue={nameValue}
                setNameValue={setNameValue}
                passwordValue={passwordValue}
                setPasswordValue={setPasswordValue}
                isLogin={isLogin}
                register={signUp}
                login={signIn}
            />
        </form>
    )
}

export { LoginForm }
