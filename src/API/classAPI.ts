import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"
import { BASE_API_URL } from "@/utils/consts"
import { IResponseClass } from "@/types"

export const classAPI = createApi({
    reducerPath: "classAPI",
    baseQuery: fetchBaseQuery({
        baseUrl: BASE_API_URL + "/class",
    }),
    endpoints: (build) => ({
        getAllClasses: build.query<IResponseClass, void>({
            query: () => ({
                url: "/",
            }),
        }),
    }),
})
