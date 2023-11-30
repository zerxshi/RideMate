import React, { FC, useEffect, useMemo, useState } from "react"
import { ICar, ISelectOption } from "@/modules/AdminPanel/types"
import { IBrand, IClass } from "@/types"
import { useTranslation } from "react-i18next"
import CarCreationForm from "@/modules/AdminPanel/components/cars/CarCreationForm"
import CarsList from "@/modules/AdminPanel/components/cars/CarsList"
import AdminSelectBlock from "@/modules/AdminPanel/components/AdminSelectBlock"

interface CarsPanelProps {
    cars: ICar[]
    brands: IBrand[]
    classes: IClass[]
    removeCar: (carId: number) => Promise<void>
    restoreCar: (carId: number) => Promise<void>
}

const CarsPanel: FC<CarsPanelProps> = ({
    cars,
    brands,
    classes,
    removeCar,
    restoreCar,
}) => {
    const { t } = useTranslation("adminPanelPage")

    const [selectedFilter, setSelectedFilter] = useState<string>("allCars")
    const [isFormVisible, setIsFormVisible] = useState<boolean>(false)

    const selectOptions: ISelectOption[] = [
        { id: 1, name: "allCars" },
        { id: 2, name: "activeCars" },
        { id: 3, name: "deactivatedCars" },
    ]

    const filterCars = (selectedFilter: string) => {
        if (selectedFilter === "activeCars") {
            return [...cars].filter((car) => car.isActive === true)
        }
        if (selectedFilter === "deactivatedCars") {
            return [...cars].filter((car) => car.isActive === false)
        }
        if (selectedFilter === "allCars") {
            return cars
        }
    }

    const filteredCars = useMemo(() => {
        if (selectedFilter) {
            return filterCars(selectedFilter)
        }
    }, [selectedFilter, cars])

    const toggleFormVisibility = () => {
        setIsFormVisible((prev) => !isFormVisible)
    }

    return (
        <section className="flex gap-11">
            <div className="flex flex-col gap-4">
                <h1 className="text-4xl font-bold text-center">
                    {selectedFilter === "allCars" && t("common.allCars")}
                    {selectedFilter === "activeCars" && t("common.activeCars")}
                    {selectedFilter === "deactivatedCars" &&
                        t("common.deactivatedCars")}
                </h1>
                <CarsList
                    cars={filteredCars}
                    brands={brands}
                    classes={classes}
                    removeCar={removeCar}
                    restoreCar={restoreCar}
                />
            </div>

            <div className="flex flex-col gap-4 p-4 rounded-xl mt-14 bg-zinc-700 h-max">
                <button
                    onClick={toggleFormVisibility}
                    className="self-end h-8 px-2 text-2xl font-bold rounded-lg w-max bg-my-blue text-my-dark"
                    type="button"
                >
                    {t("buttons.createCar")}
                </button>
                <AdminSelectBlock
                    selectId="carsFilter"
                    selectLabel="filterBy"
                    selectValue={selectedFilter}
                    selectValues={selectOptions}
                    setSelectValue={setSelectedFilter}
                />
            </div>
            {isFormVisible && (
                <CarCreationForm brands={brands} classes={classes} />
            )}
        </section>
    )
}

export default CarsPanel
