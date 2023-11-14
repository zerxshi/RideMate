import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";
import {IResponseCar} from "@/modules/Cars/types";
import {queryParamsCreate} from "@/modules/Cars/helpers/queryParamsCreate";
import {BASE_API_URL} from "@/utils/consts";

export const carsAPI = createApi({
    reducerPath: "carsAPI",
    baseQuery: fetchBaseQuery({
        baseUrl: BASE_API_URL + "/cars",
        credentials: "include"
    }),
    tagTypes: ["Cars"],
    endpoints: (build) => ({
        getAllCars: build.query<IResponseCar, string>({
            query: (params) => {
                const queryParams = queryParamsCreate(params)

                return `${params ? `?${new URLSearchParams(queryParams).toString()}` : ""}`
            },
            providesTags: ["Cars"]
        })
    })
})