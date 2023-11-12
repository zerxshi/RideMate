import { createApi } from "@reduxjs/toolkit/query/react"
import { IPasswordCheckRes } from "@/types"
import { baseQueryWithReauth } from "@/helpers/baseQueryWithReauth"

export const passwordCheckAPI = createApi({
    reducerPath: "passwordCheck",
    baseQuery: baseQueryWithReauth,
    endpoints: (build) => ({
        checkPassword: build.mutation<IPasswordCheckRes, { password: string }>({
            query: (body) => ({
                url: "user/passwordCheck",
                method: "POST",
                body,
            }),
        }),
    }),
})
