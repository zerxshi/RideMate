import { baseQueryWithReauth } from "@/helpers/baseQueryWithReauth"
import { createApi } from "@reduxjs/toolkit/query/react"
import {
    ICancelRentalRes,
    IRentalHistoryRes,
} from "@/modules/UserProfile/types"

export const rentalHistoryAPI = createApi({
    reducerPath: "rentalHistory",
    baseQuery: baseQueryWithReauth,
    endpoints: (build) => ({
        getRentalHistory: build.query<IRentalHistoryRes, void>({
            query: () => ({
                url: "history",
                method: "GET",
            }),
        }),
        cancelRental: build.mutation<
            ICancelRentalRes,
            { carId: number; historyId: number; datesToRemove: string[] }
        >({
            query: (body) => ({
                url: "history",
                method: "DELETE",
                body,
            }),
        }),
    }),
})
