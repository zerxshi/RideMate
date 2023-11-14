import React, { FC } from "react"
import { ICarAndBrand } from "@/modules/UserProfile/types"
import { BASE_SERVER_URL } from "@/utils/consts"
interface RentalCarCardProps {
    car: ICarAndBrand | undefined
    rentalDates: string
    totalPrice: number
}

const RentalCarCard: FC<RentalCarCardProps> = ({
    car,
    rentalDates,
    totalPrice,
}) => {
    return (
        <article className="flex gap-5 p-4 shadow-xl bg-zinc-700 rounded-xl w-[630px]">
            <img src={BASE_SERVER_URL + car?.img} className="w-64 rounded-lg" />

            <div>
                <b className="text-xl">
                    {car?.brand} {car?.model}
                </b>
                <dl className="flex flex-wrap gap-1 text-lg font-bold">
                    <dt>Rental dates:</dt>
                    <dd>{rentalDates}</dd>
                </dl>
                <dl className="flex gap-1 text-lg font-bold">
                    <dt>Total price:</dt>
                    <dd>{totalPrice}</dd>
                </dl>
                <dl className="flex gap-1 text-lg font-bold">
                    <dt>Status:</dt>
                    <dd>Done</dd>
                </dl>
            </div>
        </article>
    )
}

export default RentalCarCard
