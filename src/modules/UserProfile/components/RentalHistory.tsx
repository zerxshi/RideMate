import React, { FC } from "react"
import RentalCarCard from "@/modules/UserProfile/components/RentalCarCard"
import { ICar, IRentalCar } from "@/modules/UserProfile/types"

interface RentalHistoryProps {
    cars: ICar[]
    rentalCars: IRentalCar[]
}

const RentalHistory: FC<RentalHistoryProps> = ({ cars, rentalCars }) => {
    const findCarById = (carId: number): ICar | undefined => {
        return cars.find((car) => car.id === carId)
    }

    const rentalDates = (dates: string[]): string => {
        if (dates.length <= 2) {
            return dates.join(", ")
        }
        if (dates.length > 2) {
            return `${dates[0]} - ${dates[dates.length - 1]}`
        }

        return ""
    }

    return (
        <section className="flex flex-col gap-4">
            {rentalCars.map((rentalCar) => (
                <RentalCarCard
                    car={findCarById(rentalCar.carId)}
                    totalPrice={rentalCar.totalPrice}
                    rentalDates={rentalDates(rentalCar.occupied_dates)}
                    key={rentalCar.id}
                />
            ))}
        </section>
    )
}

export default RentalHistory
