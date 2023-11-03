import { BASE_API_URL } from "@/utils/consts"
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"
import { IPasswordCheckRes } from "@/types"

export const passwordCheckAPI = createApi({
    reducerPath: "passwordCheck",
    baseQuery: fetchBaseQuery({
        baseUrl: BASE_API_URL + "/user",
        prepareHeaders: (headers) => {
            const accessToken: string | null =
                localStorage.getItem("accessToken")
            headers.set("Authorization", "Bearer " + accessToken!)
        },
    }),
    endpoints: (build) => ({
        checkPassword: build.mutation<IPasswordCheckRes, { password: string }>({
            query: (body) => ({
                url: "/passwordCheck",
                method: "POST",
                body,
            }),
        }),
    }),
})
