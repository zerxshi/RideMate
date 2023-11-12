import { createApi } from "@reduxjs/toolkit/query/react"
import { ITokenCheckRes } from "@/types"
import { baseQueryWithReauth } from "@/helpers/baseQueryWithReauth"

export const tokenCheckAPI = createApi({
    reducerPath: "tokenCheck",
    baseQuery: baseQueryWithReauth,
    endpoints: (build) => ({
        checkToken: build.mutation<
            ITokenCheckRes,
            { emailChangeToken?: string; passwordChangeToken?: string }
        >({
            query: (body) => ({
                url: "change/verifyCode",
                method: "POST",
                body,
            }),
        }),
    }),
})
