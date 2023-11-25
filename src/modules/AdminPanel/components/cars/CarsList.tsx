import React, { FC } from "react"
import { ICar } from "@/modules/AdminPanel/types"
import { IBrand, IClass } from "@/types"
import AdminCarCard from "@/modules/AdminPanel/components/cars/AdminCarCard"
import { findName } from "@/modules/AdminPanel/helpers/findById"

interface CarsListProps {
    cars: ICar[]
    brands: IBrand[]
    classes: IClass[]
    removeCar: (carId: number) => Promise<void>
}

const CarsList: FC<CarsListProps> = ({ cars, brands, classes, removeCar }) => {
    return (
        <section className="flex flex-col gap-4">
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
