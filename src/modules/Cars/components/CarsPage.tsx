import React, { FC, useEffect, useState } from "react"
import CarsMenu from "@/modules/Cars/components/CarsMenu"
import CarsForm from "@/modules/Cars/components/CarsForm"
import { useSearchParams } from "react-router-dom"
import { carsAPI } from "@/modules/Cars/API/carsAPI"
import CarFilter from "@/modules/Cars/components/CarFilter"
import { brandAPI } from "@/modules/Cars/API/brandAPI"
import { classAPI } from "@/modules/Cars"

const CarsPage: FC = () => {
    const [searchParams, setSearchParams] = useSearchParams()
    const [selectedMenu, setSelectedMenu] = useState<string>(
        searchParams.get("cars") || "allCars",
    )
    const { data: cars } = carsAPI.useGetAllCarsQuery(searchParams.toString())
    const { data: brands } = brandAPI.useGetAllBrandsQuery()
    const { data: carClasses } = classAPI.useGetAllClassesQuery()

    useEffect(() => {
        handleSelectedMenu("allCars")
    }, [])

    const handleSelectedMenu = (menu: string): void => {
        setSearchParams((params) => {
            params.set("cars", menu)
            return params
        })
        setSelectedMenu(menu)
    }

    return (
        <section className={"bg-white "}>
            <CarsMenu
                selectedMenu={selectedMenu}
                handleSelectedMenu={handleSelectedMenu}
            />
            <section className={"flex justify-center"}>
                <section className={"mt-4 w-[1150px] grid grid-cols-4 gap-4"}>
                    {cars &&
                        cars.rows &&
                        brands &&
                        brands.rows &&
                        carClasses &&
                        carClasses.rows && (
                            <CarsForm
                                cars={cars.rows}
                                brands={brands.rows}
                                carClasses={carClasses.rows}
                            />
                        )}
                    <CarFilter
                        searchParams={searchParams}
                        setSearchParams={setSearchParams}
                    />
                </section>
            </section>
        </section>
    )
}

export { CarsPage }
