import { BASE_API_URL } from "@/utils/consts"
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"
import { IToken } from "../types"

export const authAPI = createApi({
    reducerPath: "auth",
    baseQuery: fetchBaseQuery({
        baseUrl: BASE_API_URL + "/user",
        credentials: "include",
    }),
    endpoints: (build) => ({
        register: build.mutation<
            IToken,
            { email: string; name: string; password: string }
        >({
            query: (body) => ({
                url: "/registration",
                method: "POST",
                body,
            }),
        }),
        login: build.mutation<IToken, { email: string; password: string }>({
            query: (body) => ({
                url: "/login",
                method: "POST",
                body,
            }),
        }),
        logout: build.mutation({
            query: () => ({
                url: "/logout",
                method: "POST",
            }),
        }),
    }),
})
