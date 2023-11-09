import { IChangeDataResponse } from "@/types"
import { BASE_API_URL } from "@/utils/consts"
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"

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
        changeEmailRequest: build.mutation<IChangeDataResponse, void>({
            query: () => ({
                url: "/emailRequest",
                method: "POST",
            }),
        }),
        changePasswordRequest: build.mutation<IChangeDataResponse, void>({
            query: () => ({
                url: "/passwordRequest",
                method: "POST",
            }),
        }),
    }),
})
