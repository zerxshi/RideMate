import React, { useState } from "react"
import CarsList from "./CarsList"
import { adminCarsAPI } from "@/modules/AdminPanel"
import { brandAPI } from "@/API/brandAPI"
import { classAPI } from "@/API/classAPI"
import BrandsList from "./BrandsList"

const AdminPanel = () => {
    const { data: cars } = adminCarsAPI.useGetAllCarsQuery()
    const { data: brands } = brandAPI.useGetAllBrandsQuery()
    const { data: classes } = classAPI.useGetAllClassesQuery()

    const [isCarsList, setIsCarsList] = useState<boolean>(true)
    const [isBrandsList, setIsBrandsList] = useState<boolean>(false)
    const [isClassesList, setIsClassesList] = useState<boolean>(false)

    const handleCarsList = (): void => {
        setIsCarsList(true)
        setIsBrandsList(false)
        setIsClassesList(false)
    }

    const handleBrandsList = (): void => {
        setIsBrandsList(true)
        setIsCarsList(false)
        setIsClassesList(false)
    }

    const handleClassesList = (): void => {
        setIsClassesList(true)
        setIsCarsList(false)
        setIsBrandsList(false)
    }

    return (
        <section className="flex gap-14 w-1150">
            <div className="flex flex-col gap-4">
                <button
                    onClick={handleCarsList}
                    className="text-2xl font-bold rounded-lg h-9 w-52 text-my-dark bg-my-blue active:scale-99"
                >
                    Cars
                </button>
                <button
                    onClick={handleBrandsList}
                    className="text-2xl font-bold rounded-lg h-9 w-52 text-my-dark bg-my-blue active:scale-99"
                >
                    Brands
                </button>
                <button
                    onClick={handleClassesList}
                    className="text-2xl font-bold rounded-lg h-9 w-52 text-my-dark bg-my-blue active:scale-99"
                >
                    Classes
                </button>
            </div>

            {isCarsList &&
                cars &&
                cars.rows &&
                brands &&
                brands.rows &&
                classes &&
                classes.rows && (
                    <CarsList
                        cars={cars?.rows}
                        brands={brands.rows}
                        classes={classes.rows}
                    />
                )}

            {isBrandsList && brands && brands.rows && (
                <BrandsList brands={brands.rows} />
            )}
        </section>
    )
}

export { AdminPanel }
