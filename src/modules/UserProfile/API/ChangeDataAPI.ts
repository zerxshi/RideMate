import { BASE_API_URL } from "@/utils/consts"
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"
import { IChangeDataResponse } from "@/modules/UserProfile/types"

export const changeDataAPI = createApi({
    reducerPath: "changeData",
    baseQuery: fetchBaseQuery({
        baseUrl: BASE_API_URL + "/change",
        prepareHeaders: (headers) => {
            const accessToken: string | null =
                localStorage.getItem("accessToken")
            headers.set("Authorization", "Bearer " + accessToken!)
        },
    }),
    endpoints: (build) => ({
        changeEmailRequest: build.mutation<string, void>({
            query: () => ({
                url: "/emailRequest",
                method: "POST",
            }),
        }),
        changePasswordRequest: build.mutation<string, void>({
            query: () => ({
                url: "/passwordRequest",
                method: "POST",
            }),
        }),
        changeEmail: build.mutation<
            IChangeDataResponse,
            { newEmail: string; changeToken: string; password: string }
        >({
            query: (body) => ({
                url: "/email",
                method: "PUT",
                body,
            }),
        }),
        changePassword: build.mutation<
            IChangeDataResponse,
            { newPassword: string; changeToken: string; password: string }
        >({
            query: (body) => ({
                url: "/password",
                method: "PUT",
                body,
            }),
        }),
    }),
})
