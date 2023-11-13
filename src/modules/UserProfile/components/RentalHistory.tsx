import React, { FC } from "react"
import { rentalHistoryAPI } from "../API/rentalHistoryAPI"
import RentalCarCard from "./RentalCarCard"

const RentalHistory: FC = () => {
    const { data: rentalHistory } = rentalHistoryAPI.useGetRentalHistoryQuery()

    return (
        <section className="flex flex-col gap-4">
            {rentalHistory &&
                rentalHistory.rows &&
                rentalHistory.rows.map(() => <RentalCarCard />)}
        </section>
    )
}

export default RentalHistory
