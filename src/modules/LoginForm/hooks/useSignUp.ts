import { useNavigate } from "react-router-dom"
import { authAPI } from "../API/authAPI"
import { useAppDispatch } from "@/hooks/useTypedStore"
import { setUser } from "@/store/slice/userSlice"
import { SerializedError } from "@reduxjs/toolkit"
import { FetchBaseQueryError } from "@reduxjs/toolkit/dist/query"

type useSignUp = (
    validateFn: () => string,
    emailValue: string,
    nameValue: string,
    passwordValue: string,
) => [
    () => Promise<void>,
    boolean,
    FetchBaseQueryError | SerializedError | undefined,
    () => void,
]

export const useSignUp: useSignUp = (
    validateFn,
    emailValue,
    nameValue,
    passwordValue,
) => {
    const [
        register,
        {
            isError: IsRegistrationError,
            error: registrationError,
            reset: registrationReset,
        },
    ] = authAPI.useRegisterMutation()
    const dispatch = useAppDispatch()
    const navigate = useNavigate()

    const signUp = async (): Promise<void> => {
        const error: string = validateFn()

        if (error) {
            return
        }

        const result = await register({
            email: emailValue,
            name: nameValue,
            password: passwordValue,
        })

        if ("data" in result) {
            localStorage.setItem("accessToken", result.data.token)
            dispatch(setUser(result.data.token))
            navigate("/")
        }
    }

    return [signUp, IsRegistrationError, registrationError, registrationReset]
}
