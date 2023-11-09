import React, { FC } from "react"
import { IBrand, ICar, IClass } from "@/modules/Cars/types"
import CarItem from "@/modules/Cars/components/CarItem"

interface Props {
    cars: ICar[]
    brands: IBrand[]
    carClasses: IClass[]
}

const CarsForm: FC<Props> = ({ cars, brands, carClasses }) => {
    const findBrandName = (brandId: number): IClass | undefined => {
        return brands.find((brand) => brand.id === brandId)
    }

    const findClassName = (classId: number): IClass | undefined => {
        return carClasses.find((carClass) => carClass.id === classId)
    }

    return (
        <section className={"col-span-3"}>
            {cars.map((car) => (
                <CarItem
                    key={car.id}
                    car={car}
                    brand={findBrandName(car.brandId)}
                    carClass={findClassName(car.classId)}
                />
            ))}
        </section>
    )
}

export default CarsForm
