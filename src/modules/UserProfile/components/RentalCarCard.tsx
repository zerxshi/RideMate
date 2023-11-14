import React from "react"
import polo from "@/assets/images/cars/b-class-polo.jpg"

interface RentalCarCardProps {}

const RentalCarCard = () => {
    return (
        <article className="flex gap-5 p-4 shadow-xl bg-zinc-700 rounded-xl w-605">
            <img src={polo} className="w-64" />

            <div>
                <b className="text-xl">VOLKSWAGEN POLO</b>
                <dl className="flex flex-wrap gap-1 text-lg font-bold ">
                    <dt>Rental dates:</dt>
                    <dd>10.11.23, 29.11.23</dd>
                </dl>
                <dl className="flex gap-1 text-lg font-bold ">
                    <dt>Total price:</dt>
                    <dd>40000</dd>
                </dl>
                <dl className="flex gap-1 text-lg font-bold ">
                    <dt>Status:</dt>
                    <dd>Done</dd>
                </dl>
            </div>
        </article>
    )
}

export default RentalCarCard
