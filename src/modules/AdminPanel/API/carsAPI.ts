import { createApi } from "@reduxjs/toolkit/query/react"
import { IDataDeletionRes, IGetCarsRes } from "@/modules/AdminPanel/types"
import { baseQueryWithReauth } from "@/helpers/baseQueryWithReauth"

export const adminCarsAPI = createApi({
    reducerPath: "adminCarsAPI",
    baseQuery: baseQueryWithReauth,
    tagTypes: ["cars"],
    endpoints: (build) => ({
        getAllCars: build.query<IGetCarsRes, void>({
            query: () => ({
                url: "cars",
                method: "GET",
            }),
            providesTags: ["cars"],
        }),
        deleteCar: build.mutation<IDataDeletionRes, { carId: number }>({
            query: (body) => ({
                url: "cars",
                method: "DELETE",
                body,
            }),
            invalidatesTags: ["cars"],
        }),
    }),
})
