import { createApi } from "@reduxjs/toolkit/query/react"
import {
    ICar,
    ICarStatusChangeRes,
    IGetCarsRes,
} from "@/modules/AdminPanel/types"
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
        deleteCar: build.mutation<ICarStatusChangeRes, { carId: number }>({
            query: (body) => ({
                url: "cars",
                method: "PUT",
                body,
            }),
            invalidatesTags: ["cars"],
        }),
        restoreCar: build.mutation<ICarStatusChangeRes, { carId: number }>({
            query: (body) => ({
                url: "cars/restore",
                method: "PUT",
                body,
            }),
            invalidatesTags: ["cars"],
        }),
        createCar: build.mutation<
            ICar,
            {
                model: string
                file: File
                classId: string
                brandId: string
                mileage: string
                fuelConsumption: string
                price: string
            }
        >({
            query: (body) => {
                let formData = new FormData()
                formData.append("model", body.model)
                formData.append("brandId", body.brandId)
                formData.append("classId", body.classId)
                formData.append("price", body.price)
                formData.append("mileage", body.mileage)
                formData.append("fuelConsumption", body.fuelConsumption)
                formData.append("img", body.file)

                return {
                    url: "cars",
                    method: "POST",
                    body: formData,
                }
            },
            invalidatesTags: ["cars"],
        }),
    }),
})
