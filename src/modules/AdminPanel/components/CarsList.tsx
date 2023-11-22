import React, { FC } from "react"
import { ICar } from "@/modules/AdminPanel/types"
import { IBrand, IClass } from "@/types"
import AdminCarCard from "@/modules/AdminPanel/components/AdminCarCard"

interface CarsListProps {
    cars: ICar[]
    brands: IBrand[]
    classes: IClass[]
}

const CarsList: FC<CarsListProps> = ({ cars, brands, classes }) => {
    const findBrandName = (brandId: number): string | undefined => {
        const brand = brands.find((brand) => brand.id === brandId)
        return brand?.name
    }

    const findClassName = (classId: number): string | undefined => {
        const carClass = classes.find((carClass) => carClass.id === classId)
        return carClass?.name
    }

    return (
        <section className="flex flex-col gap-4">
            {cars.map((car) => (
                <AdminCarCard
                    key={car.id}
                    carId={car.id}
                    img={car.img}
                    model={car.model}
                    brand={findBrandName(car.brandId)}
                    carClass={findClassName(car.classId)}
                />
            ))}
        </section>
    )
}

export default CarsList
