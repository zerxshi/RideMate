import { createApi } from "@reduxjs/toolkit/query/react"
import { IDataDeletionRes } from "@/modules/AdminPanel/types"
import { baseQueryWithReauth } from "@/helpers/baseQueryWithReauth"

export const brandDeletionAPI = createApi({
    reducerPath: "brandDeletion",
    baseQuery: baseQueryWithReauth,
    endpoints: (build) => ({
        deleteBrand: build.mutation<IDataDeletionRes, { brandId: number }>({
            query: (body) => ({
                url: "brand",
                method: "DELETE",
                body,
            }),
        }),
    }),
})
