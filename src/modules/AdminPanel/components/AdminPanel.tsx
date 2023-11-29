import React, { useState } from "react"
import { adminCarsAPI } from "@/modules/AdminPanel"
import { brandAPI } from "@/API/brandAPI"
import { classAPI } from "@/API/classAPI"
import BrandsList from "@/modules/AdminPanel/components/brands/BrandsList"
import ClassesList from "@/modules/AdminPanel/components/carClasses/ClassesList"
import { useTranslation } from "react-i18next"
import CarsPanel from "@/modules/AdminPanel/components/cars/CarsPanel"

const AdminPanel = () => {
    const { t } = useTranslation("adminPanelPage")

    const { data: cars } = adminCarsAPI.useGetAllCarsQuery()
    const { data: brands } = brandAPI.useGetAllBrandsQuery()
    const { data: classes } = classAPI.useGetAllClassesQuery()

    const [removeCar] = adminCarsAPI.useDeleteCarMutation()
    const [restoreCar] = adminCarsAPI.useRestoreCarMutation()

    const [isCarsList, setIsCarsList] = useState<boolean>(true)
    const [isBrandsList, setIsBrandsList] = useState<boolean>(false)
    const [isClassesList, setIsClassesList] = useState<boolean>(false)

    const handleRemoveCar = async (carId: number): Promise<void> => {
        await removeCar({ carId })
    }

    const handleRestoreCar = async (carId: number): Promise<void> => {
        await restoreCar({ carId })
    }

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
        <section className="flex gap-11 w-1150">
            <div className="flex flex-col gap-4 mt-14">
                <button
                    onClick={handleCarsList}
                    className="text-2xl font-bold rounded-lg h-9 w-52 text-my-dark bg-my-blue active:scale-99"
                >
                    {t("buttons.cars")}
                </button>
                <button
                    onClick={handleBrandsList}
                    className="text-2xl font-bold rounded-lg h-9 w-52 text-my-dark bg-my-blue active:scale-99"
                >
                    {t("buttons.brands")}
                </button>
                <button
                    onClick={handleClassesList}
                    className="text-2xl font-bold rounded-lg h-9 w-52 text-my-dark bg-my-blue active:scale-99"
                >
                    {t("buttons.classes")}
                </button>
            </div>

            {isCarsList &&
                cars &&
                cars.rows &&
                brands &&
                brands.rows &&
                classes &&
                classes.rows && (
                    <CarsPanel
                        cars={cars?.rows}
                        brands={brands.rows}
                        classes={classes.rows}
                        removeCar={handleRemoveCar}
                        restoreCar={handleRestoreCar}
                    />
                )}

            {isBrandsList && brands && brands.rows && (
                <BrandsList brands={brands.rows} />
            )}
            {isClassesList && classes && classes.rows && (
                <ClassesList classes={classes.rows} />
            )}
        </section>
    )
}

export { AdminPanel }
