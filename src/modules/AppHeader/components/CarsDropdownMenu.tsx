import React, { FC, useState } from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import CarsDropdownMenuItem from "@/modules/AppHeader/components/CarsDropdownMenuItem"

const CarsDropdownMenu: FC = () => {
    const [carClasses, setCarClasses] = useState<string[]>([
        "B-segment",
        "E-segment",
        "F-segment",
        "Sports cars",
        "SUVs and crossovers",
    ])

    return (
        <div
            aria-label="cars-classes-dropdown-menu"
            className="relative inline-block group"
        >
            <button type="button">
                <b className="text-5xl text-my-white ">Ride Mate</b>
                <FontAwesomeIcon
                    icon="fa-solid fa-angle-down"
                    className="text-2xl text-my-white"
                />
            </button>

            <nav
                aria-label="cars-classes-navigation"
                className="absolute z-10 hidden -translate-x-1/2 shadow-xl w-max rounded-xl bg-my-gray left-1/2 animate-growOut origin-top-center group-hover:block"
            >
                <ul className="flex flex-col gap-6 p-3">
                    {carClasses.map((title) => (
                        <CarsDropdownMenuItem key={title} title={title} />
                    ))}
                </ul>
            </nav>
        </div>
    )
}

export default CarsDropdownMenu
