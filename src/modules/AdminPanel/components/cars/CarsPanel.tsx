import React, { FC, useState } from "react"
import { ICar } from "@/modules/AdminPanel/types"
import { IBrand, IClass } from "@/types"
import { useTranslation } from "react-i18next"
import CarCreationForm from "@/modules/AdminPanel/components/cars/CarCreationForm"
import CarsList from "@/modules/AdminPanel/components/cars/CarsList"

interface CarsPanelProps {
    cars: ICar[]
    brands: IBrand[]
    classes: IClass[]
    removeCar: (carId: number) => Promise<void>
}

const CarsPanel: FC<CarsPanelProps> = ({
    cars,
    brands,
    classes,
    removeCar,
}) => {
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
            <CarsList
                cars={cars}
                brands={brands}
                classes={classes}
                removeCar={removeCar}
            />
        </section>
    )
}

export default CarsPanel
