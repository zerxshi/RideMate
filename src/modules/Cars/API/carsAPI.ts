import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";
import {IResponseCar} from "@/modules/Cars/types";
import {queryParamsCreate} from "@/modules/Cars/helpers/queryParamsCreate";

export const carsAPI = createApi({
    reducerPath: "carsAPI",
    baseQuery: fetchBaseQuery({
        baseUrl: "/cars",
        credentials: "include"
    }),
    tagTypes: ["Cars"],
    endpoints: (build) => ({
        getAllCars: build.query<IResponseCar, string>({
            query: (params) => {
                const queryParams = queryParamsCreate(params)

                return `/cars${params ? `?${new URLSearchParams(queryParams).toString()}` : ""}`
            },
            providesTags: ["Cars"]
        })
    })
})