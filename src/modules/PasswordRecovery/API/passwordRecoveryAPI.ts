import { BASE_API_URL } from "@/utils/consts"
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"
import { IChangeDataResponse } from "@/types"

export const passwordRecoveryAPI = createApi({
    reducerPath: "passwordRecovery",
    baseQuery: fetchBaseQuery({
        baseUrl: BASE_API_URL + "/recover",
        credentials: "include",
        prepareHeaders: (headers) => {
            const accessToken: string | null =
                localStorage.getItem("accessToken")
            headers.set("Authorization", "Bearer " + accessToken!)
        },
    }),
    endpoints: (build) => ({
        verifyToken: build.mutation<
            IChangeDataResponse,
            { passwordRecoveryToken: string; email: string }
        >({
            query: (body) => ({
                url: "/verifyToken",
                method: "POST",
                body,
            }),
        }),
        passwordRecoveryRequest: build.mutation<
            IChangeDataResponse,
            {
                email: string
            }
        >({
            query: (body) => ({
                url: "/passwordRequest",
                method: "POST",
                body,
            }),
        }),
        passwordRecovery: build.mutation<
            IChangeDataResponse,
            { newPassword: string; email: string }
        >({
            query: (body) => ({
                url: "/password",
                method: "PUT",
                body,
            }),
        }),
    }),
})
