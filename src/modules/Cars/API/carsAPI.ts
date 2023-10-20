import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";
import {IResponseCar} from "@/modules/Cars/types";

export const carsAPI = createApi({
    reducerPath: "carsAPI",
    baseQuery: fetchBaseQuery({
        baseUrl: "/cars",
        credentials: "include"
    }),
    tagTypes: ["Cars"],
    endpoints: (build) => ({
        getAllCars: build.query<void, IResponseCar>({
            query: () => ({
                url: "/",
                method: "GET"
            }),
            providesTags: ["Cars"]
        })
    })
})