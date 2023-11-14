import { createApi } from "@reduxjs/toolkit/query/react"
import { ICodeCheckRes } from "@/types"
import { baseQueryWithReauth } from "@/helpers/baseQueryWithReauth"

export const codeCheckAPI = createApi({
    reducerPath: "codeCheck",
    baseQuery: baseQueryWithReauth,
    endpoints: (build) => ({
        checkCode: build.mutation<
            ICodeCheckRes,
            { emailChangeCode?: string; passwordChangeCode?: string }
        >({
            query: (body) => ({
                url: "change/verifyCode",
                method: "POST",
                body,
            }),
        }),
    }),
})
