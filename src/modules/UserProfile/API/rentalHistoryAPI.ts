import { baseQueryWithReauth } from "@/helpers/baseQueryWithReauth"
import { createApi } from "@reduxjs/toolkit/query/react"
import {
    ICancelRentalRes,
    IRentalHistoryRes,
} from "@/modules/UserProfile/types"

export const rentalHistoryAPI = createApi({
    reducerPath: "rentalHistory",
    baseQuery: baseQueryWithReauth,
    tagTypes: ["history"],
    endpoints: (build) => ({
        getRentalHistory: build.query<IRentalHistoryRes, void>({
            query: () => ({
                url: "history",
                method: "GET",
            }),
            providesTags: ["history"],
        }),
        cancelRental: build.mutation<ICancelRentalRes, { historyId: number }>({
            query: (body) => ({
                url: "history",
                method: "DELETE",
                body,
            }),
            invalidatesTags: ["history"],
        }),
    }),
})
