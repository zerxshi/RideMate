import { BASE_API_URL } from "@/utils/consts"
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"
import { ITokenCheckRes } from "@/types"

export const tokenCheckAPI = createApi({
    reducerPath: "tokenCheck",
    baseQuery: fetchBaseQuery({
        baseUrl: BASE_API_URL + "/change",
        prepareHeaders: (headers) => {
            const accessToken: string | null =
                localStorage.getItem("accessToken")
            headers.set("Authorization", "Bearer " + accessToken!)
        },
    }),
    endpoints: (build) => ({
        checkToken: build.mutation<
            ITokenCheckRes,
            { emailChangeToken?: string; passwordChangeToken?: string }
        >({
            query: (body) => ({
                url: "/verifyToken",
                method: "POST",
                body,
            }),
        }),
    }),
})
