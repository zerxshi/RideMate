import { useAppDispatch, useAppSelector } from "@/hooks/useTypedStore"
import React, { FC, useState } from "react"
import { authAPI } from "../API/authAPI"
import LoginFormButtons from "./LoginFormButtons"
import LoginFormInputs from "./LoginFormInputs"
import { setUser } from "@/store/slice/userSlice"
import { useNavigate } from "react-router-dom"
import userImg from "@/assets/images/userImg.png"

const LoginForm: FC = () => {
    const [emailValue, setEmailValue] = useState<string>("")
    const [nameValue, setNameValue] = useState<string>("")
    const [passwordValue, setPasswordValue] = useState<string>("")
    const [confirmPasswordValue, setConfirmPasswordValue] = useState<string>("")
    const [isLogin, setIsLogin] = useState<boolean>(true)
    const dispatch = useAppDispatch()
    const navigate = useNavigate()
    const [register, {}] = authAPI.useRegisterMutation()
    const [login, {}] = authAPI.useLoginMutation()

    const clearInputs = (): void => {
        setEmailValue("")
        setNameValue("")
        setPasswordValue("")
    }

    const signUp = async () => {
        if (isLogin) {
            setIsLogin(false)
            clearInputs()
            return
        }
        if (passwordValue === confirmPasswordValue) {
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
        } else {
            return
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
            className="flex flex-col gap-4 p-4 w-[605px] bg-my-gray rounded-xl"
        >
            <img
                src={userImg}
                alt="user image"
                className="self-center w-40 h-40"
            />
            <LoginFormInputs
                emailValue={emailValue}
                setEmailValue={setEmailValue}
                nameValue={nameValue}
                setNameValue={setNameValue}
                passwordValue={passwordValue}
                setPasswordValue={setPasswordValue}
                confirmPasswordValue={confirmPasswordValue}
                setConfirmPasswordValue={setConfirmPasswordValue}
                isLogin={isLogin}
            />

            <LoginFormButtons
                isLogin={isLogin}
                register={signUp}
                login={signIn}
            />
        </form>
    )
}

export { LoginForm }
