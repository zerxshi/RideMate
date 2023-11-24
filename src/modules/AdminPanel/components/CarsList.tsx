import React, { FC, useState } from "react"
import { ICar } from "@/modules/AdminPanel/types"
import { IBrand, IClass } from "@/types"
import AdminCarCard from "@/modules/AdminPanel/components/AdminCarCard"
import { useTranslation } from "react-i18next"
import CarCreationForm from "@/modules/AdminPanel/components/CarCreationForm"
import { findName } from "@/modules/AdminPanel/helpers/findById"

interface CarsListProps {
    cars: ICar[]
    brands: IBrand[]
    classes: IClass[]
    removeCar: (carId: number) => Promise<void>
}

const CarsList: FC<CarsListProps> = ({ cars, brands, classes, removeCar }) => {
    const { t } = useTranslation("adminPanelPage")

    const [isFormVisible, setIsFormVisible] = useState<boolean>(false)

    const toggleFormVisibility = () => {
        setIsFormVisible((prev) => !isFormVisible)
    }

    return (
        <section className="flex flex-col gap-4">
            <button
                onClick={toggleFormVisibility}
                className="self-end h-8 px-2 text-2xl font-bold rounded-lg w-max bg-my-blue text-my-dark"
                type="button"
            >
                {t("buttons.createCar")}
            </button>
            {isFormVisible && (
                <CarCreationForm brands={brands} classes={classes} />
            )}

            {cars.map((car) => (
                <AdminCarCard
                    key={car.id}
                    carId={car.id}
                    img={car.img}
                    model={car.model}
                    brand={findName(brands, car.brandId)}
                    carClass={findName(classes, car.classId)}
                    removeCar={removeCar}
                />
            ))}
        </section>
    )
}

export default CarsList
