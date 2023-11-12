import { createApi } from "@reduxjs/toolkit/query/react"
import { IChangeDataResponse } from "@/types"
import { baseQueryWithReauth } from "@/helpers/baseQueryWithReauth"

export const changePasswordAPI = createApi({
    reducerPath: "changePassword",
    baseQuery: baseQueryWithReauth,
    endpoints: (build) => ({
        changePassword: build.mutation<
            IChangeDataResponse,
            { newPassword: string }
        >({
            query: (body) => ({
                url: "change/password",
                method: "PUT",
                body,
            }),
        }),
    }),
})
