import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"
import { BASE_API_URL } from "@/utils/consts"
import { IAutoLoginRes } from "@/types"

export const autoLoginAPI = createApi({
    reducerPath: "autoLoginAPI",
    baseQuery: fetchBaseQuery({
        baseUrl: BASE_API_URL + "/user",
        credentials: "include",
    }),
    endpoints: (build) => ({
        autoLogin: build.mutation<IAutoLoginRes, void>({
            query: () => ({
                url: "/refresh",
                method: "POST",
            }),
        }),
    }),
})
