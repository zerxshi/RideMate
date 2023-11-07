import { BASE_API_URL } from "@/utils/consts"
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"
import { IChangeDataResponse } from "@/types"

export const changePasswordAPI = createApi({
    reducerPath: "changePassword",
    baseQuery: fetchBaseQuery({
        baseUrl: BASE_API_URL + "/change",
        credentials: "include",
        prepareHeaders: (headers) => {
            const accessToken: string | null =
                localStorage.getItem("accessToken")
            headers.set("Authorization", "Bearer " + accessToken!)
        },
    }),
    endpoints: (build) => ({
        changePassword: build.mutation<
            IChangeDataResponse,
            { newPassword: string }
        >({
            query: (body) => ({
                url: "/password",
                method: "PUT",
                body,
            }),
        }),
    }),
})
