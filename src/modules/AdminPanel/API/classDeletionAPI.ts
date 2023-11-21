import { createApi } from "@reduxjs/toolkit/query/react"
import { IDataDeletionRes } from "@/modules/AdminPanel/types"
import { baseQueryWithReauth } from "@/helpers/baseQueryWithReauth"

export const classDeletionAPI = createApi({
    reducerPath: "classDeletion",
    baseQuery: baseQueryWithReauth,
    endpoints: (build) => ({
        deleteClass: build.mutation<IDataDeletionRes, { classId: number }>({
            query: (body) => ({
                url: "class",
                method: "DELETE",
                body,
            }),
        }),
    }),
})
