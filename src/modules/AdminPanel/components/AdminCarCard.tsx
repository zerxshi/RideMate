import { BASE_SERVER_URL } from "@/utils/consts"
import React, { FC } from "react"

interface AdminCarCardProps {
    carId: number
    img: string
    model: string
    brand: string | undefined
    carClass: string | undefined
    removeCar: (carId: number) => Promise<void>
}

const AdminCarCard: FC<AdminCarCardProps> = ({
    carId,
    img,
    model,
    brand,
    carClass,
    removeCar,
}) => {
    return (
        <article className="flex gap-5 p-4 shadow-xl bg-zinc-700 rounded-xl w-[630px]">
            <img src={BASE_SERVER_URL + img} className="w-64 rounded-lg" />

            <div className="flex flex-col gap-14 w-80">
                <div>
                    <b className="text-xl">
                        {brand} {model}
                    </b>
                    <dl className="flex flex-wrap gap-1 text-lg font-bold">
                        <dt>Car ID:</dt>
                        <dd>{carId}</dd>
                    </dl>
                    <dl className="flex gap-1 text-lg font-bold">
                        <dt>Segment:</dt>
                        <dd>{carClass}</dd>
                    </dl>
                    <dl className="flex gap-1 text-lg font-bold">
                        <dt>Brand:</dt>
                        <dd>{brand}</dd>
                    </dl>
                </div>

                <button
                    onClick={() => removeCar(carId)}
                    className="self-end h-8 px-2 text-lg font-bold rounded-lg w-max bg-my-blue text-my-dark"
                    type="button"
                >
                    Remove the car
                </button>
            </div>
        </article>
    )
}

export default AdminCarCard
