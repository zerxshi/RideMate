import { createApi } from "@reduxjs/toolkit/query/react"
import { IChangeDataResponse } from "@/types"
import { baseQueryWithReauth } from "@/helpers/baseQueryWithReauth"

export const changeEmailAPI = createApi({
    reducerPath: "changeEmail",
    baseQuery: baseQueryWithReauth,
    endpoints: (build) => ({
        changeEmail: build.mutation<IChangeDataResponse, { newEmail: string }>({
            query: (body) => ({
                url: "change/email",
                method: "PUT",
                body,
            }),
        }),
    }),
})
