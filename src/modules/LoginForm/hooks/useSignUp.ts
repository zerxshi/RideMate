import { authAPI } from "@/modules/LoginForm/API/authAPI"
import { useAppDispatch } from "@/hooks/useTypedStore"
import { setUser } from "@/store/slice/userSlice"
import { SerializedError } from "@reduxjs/toolkit"
import { FetchBaseQueryError } from "@reduxjs/toolkit/dist/query"
import { IToken } from "@/modules/LoginForm/types"

type useSignUp = (
    validateFn: () => string,
    emailValue: string,
    nameValue: string,
    passwordValue: string,
) => [
    () => Promise<void>,
    boolean,
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
            isError: isRegistrationError,
            isSuccess: IsRegistrationSuccess,
            error: registrationError,
            reset: registrationReset,
        },
    ] = authAPI.useRegisterMutation()
    const dispatch = useAppDispatch()

    const signUp = async (): Promise<void> => {
        const error: string = validateFn()

        if (error) {
            return
        }

        const result:
            | { data: IToken }
            | { error: FetchBaseQueryError | SerializedError } = await register(
            {
                email: emailValue,
                name: nameValue,
                password: passwordValue,
            },
        )

        if ("data" in result) {
            localStorage.setItem("accessToken", result.data.token)
            dispatch(setUser(result.data.token))
        }
    }

    return [
        signUp,
        isRegistrationError,
        IsRegistrationSuccess,
        registrationError,
        registrationReset,
    ]
}
