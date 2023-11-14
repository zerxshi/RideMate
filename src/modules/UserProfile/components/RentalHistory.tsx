import React, { FC } from "react"
import RentalCarCard from "@/modules/UserProfile/components/RentalCarCard"
import {
    ICarAndBrand,
    IBrand,
    ICar,
    IRentalCar,
} from "@/modules/UserProfile/types"

interface RentalHistoryProps {
    cars: ICar[]
    brands: IBrand[]
    rentalCars: IRentalCar[]
}

const RentalHistory: FC<RentalHistoryProps> = ({
    cars,
    brands,
    rentalCars,
}) => {
    const findCarAndBrandById = (carId: number): ICarAndBrand | undefined => {
        const car = cars.find((car) => car.id === carId)
        const brand = brands.find((brand) => brand.id === car?.brandId)
        return {
            model: car?.model,
            img: car?.img,
            brand: brand?.name,
        }
    }

    const rentalDates = (dates: string[]): string => {
        const datesWithDots = dates.map((date): string => {
            const year = new Date(date).getFullYear()
            const month = new Date(date).getMonth() + 1
            const day = new Date(date).getDate()

            return year + "." + month + "." + day
        })

        if (datesWithDots.length <= 2) {
            return datesWithDots.join(", ")
        }
        if (datesWithDots.length > 2) {
            return `${datesWithDots[0]} - ${
                datesWithDots[datesWithDots.length - 1]
            }`
        }

        return ""
    }

    return (
        <section className="flex flex-col gap-4">
            {rentalCars.map((rentalCar) => (
                <RentalCarCard
                    car={findCarAndBrandById(rentalCar.carId)}
                    totalPrice={rentalCar.totalPrice}
                    rentalDates={rentalDates(rentalCar.occupied_dates)}
                    key={rentalCar.id}
                />
            ))}
        </section>
    )
}

export default RentalHistory
