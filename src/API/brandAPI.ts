import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"
import { BASE_API_URL } from "@/utils/consts"
import { IResponseBrand, ICreateBrandRes } from "@/types"
import { baseQueryWithReauth } from "@/helpers/baseQueryWithReauth"

export const brandAPI = createApi({
    reducerPath: "brandAPI",
    baseQuery: baseQueryWithReauth,
    endpoints: (build) => ({
        getAllBrands: build.query<IResponseBrand, void>({
            query: () => ({
                url: "/brand",
                method: "GET",
            }),
        }),
        createBrand: build.mutation<ICreateBrandRes, { name: string }>({
            query: (body) => ({
                url: "/brand",
                method: "POST",
                body,
            }),
        }),
    }),
})
