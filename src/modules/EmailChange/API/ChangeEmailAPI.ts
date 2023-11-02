import { BASE_API_URL } from "@/utils/consts"
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"
import { IChangeDataResponse } from "@/modules/EmailChange/types"

export const changeEmailAPI = createApi({
    reducerPath: "changeEmail",
    baseQuery: fetchBaseQuery({
        baseUrl: BASE_API_URL + "/change",
        prepareHeaders: (headers) => {
            const accessToken: string | null =
                localStorage.getItem("accessToken")
            headers.set("Authorization", "Bearer " + accessToken!)
        },
    }),
    endpoints: (build) => ({
        changeEmail: build.mutation<
            IChangeDataResponse,
            { newEmail: string; changeToken: string }
        >({
            query: (body) => ({
                url: "/email",
                method: "PUT",
                body,
            }),
        }),
    }),
})
