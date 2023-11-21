import { createApi } from "@reduxjs/toolkit/query/react"
import { IDataDeletionRes } from "@/modules/AdminPanel/types"
import { baseQueryWithReauth } from "@/helpers/baseQueryWithReauth"

export const carDeletionAPI = createApi({
    reducerPath: "carDeletion",
    baseQuery: baseQueryWithReauth,
    endpoints: (build) => ({
        deleteCar: build.mutation<IDataDeletionRes, { carId: number }>({
            query: (body) => ({
                url: "cars",
                method: "DELETE",
                body,
            }),
        }),
    }),
})
