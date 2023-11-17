import React, { FC } from "react"
import RentalCarCard from "@/modules/UserProfile/components/RentalCarCard"
import {
    ICarAndBrand,
    IBrand,
    ICar,
    IRentalCar,
} from "@/modules/UserProfile/types"
import { useTranslation } from "react-i18next"

interface RentalHistoryProps {
    cars: ICar[]
    brands: IBrand[]
    rentalCars: IRentalCar[]
    cancelReservation: (historyId: number) => Promise<void>
}

const RentalHistory: FC<RentalHistoryProps> = ({
    cars,
    brands,
    rentalCars,
    cancelReservation,
}) => {
    const { t } = useTranslation("historyPage")

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
            return new Date(date).toLocaleDateString()
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

    const createStatus = (dates: string[]): string => {
        const dateNow = new Date().getTime()
        if (dates.length === 1) {
            const date = new Date(dates[0]).getTime()
            if (dateNow < date) {
                return t("phrases.awaiting")
            }
            if (dateNow > date) {
                return t("phrases.complete")
            }
            if (dateNow === date) {
                return t("phrases.inProcess")
            }
        }

        if (dates.length > 1) {
            const startDate = new Date(dates[0]).getTime()
            const endDate = new Date(dates[dates.length - 1]).getTime()
            if (startDate < dateNow && dateNow < endDate) {
                return t("phrases.inProcess")
            }
            if (dateNow < startDate) {
                return t("phrases.awaiting")
            }
            if (dateNow > endDate) {
                return t("phrases.complete")
            }
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
                    status={createStatus(rentalCar.occupied_dates)}
                    historyId={rentalCar.id}
                    cancelReservation={cancelReservation}
                    key={rentalCar.id}
                />
            ))}
        </section>
    )
}

export default RentalHistory
