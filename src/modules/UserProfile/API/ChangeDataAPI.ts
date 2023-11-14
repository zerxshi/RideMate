import { baseQueryWithReauth } from "@/helpers/baseQueryWithReauth"
import { IChangeDataResponse } from "@/types"
import { createApi } from "@reduxjs/toolkit/query/react"

export const changeDataAPI = createApi({
    reducerPath: "changeData",
    baseQuery: baseQueryWithReauth,
    endpoints: (build) => ({
        changeEmailRequest: build.mutation<IChangeDataResponse, void>({
            query: () => ({
                url: "change/emailRequest",
                method: "POST",
            }),
        }),
        changePasswordRequest: build.mutation<IChangeDataResponse, void>({
            query: () => ({
                url: "change/passwordRequest",
                method: "POST",
            }),
        }),
    }),
})
