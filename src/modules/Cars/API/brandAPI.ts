import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";
import {BASE_API_URL} from "@/utils/consts";
import {IResponseBrand} from "@/modules/Cars/types";

export const brandAPI = createApi({
    reducerPath: "brandAPI",
    baseQuery: fetchBaseQuery({
        baseUrl: BASE_API_URL + "/brand"
    }),
    endpoints: (build) => ({
        getAllBrands: build.query<IResponseBrand, void>({
            query: () => ({
                url: "/",
            })
        })
    })
})