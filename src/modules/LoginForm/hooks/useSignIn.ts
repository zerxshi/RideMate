import { useNavigate } from "react-router-dom"
import { authAPI } from "@/modules/LoginForm/API/authAPI"
import { useAppDispatch } from "@/hooks/useTypedStore"
import { setUser } from "@/store/slice/userSlice"
import { SerializedError } from "@reduxjs/toolkit"
import { FetchBaseQueryError } from "@reduxjs/toolkit/dist/query"

type useSignIn = (
    validateFn: () => string,
    emailValue: string,
    passwordValue: string,
) => [
    () => Promise<void>,
    boolean,
    FetchBaseQueryError | SerializedError | undefined,
    () => void,
]

export const useSignIn: useSignIn = (validateFn, emailValue, passwordValue) => {
    const [
        login,
        { isError: isLoginError, error: loginError, reset: loginReset },
    ] = authAPI.useLoginMutation()
    const dispatch = useAppDispatch()
    const navigate = useNavigate()

    const signIn = async (): Promise<void> => {
        const error = validateFn()

        if (error) {
            return
        }

        const result = await login({
            email: emailValue,
            password: passwordValue,
        })

        if ("data" in result) {
            localStorage.setItem("accessToken", result.data.token)
            dispatch(setUser(result.data.token))
            navigate("/")
        }
    }

    return [signIn, isLoginError, loginError, loginReset]
}
