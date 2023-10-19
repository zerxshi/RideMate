import React, { FC, useState } from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import CarsDropdownMenuItem from "@/modules/AppHeader/components/CarsDropdownMenuItem"

const CarsDropdownMenu: FC = () => {
    const [carClasses, setCarClasses] = useState<string[]>([
        "ALL CARS",
        "SPOTS CARS",
        "F-SEGMENT",
        "B-SEGMENT",
        "E-SEGMENT",
        "CROSSOVERS",
    ])

    return (
        <div
            aria-label="cars-classes-dropdown-menu"
            className="relative inline-block group"
        >
            <button
                type="button"
                className="flex items-center justify-center w-40 h-20 transition-all duration-500 group-hover:bg-my-blue"
            >
                <b className="text-xl font-normal font-russo text-my-blue group-hover:text-my-dark">
                    CARS
                </b>
            </button>

            <nav
                aria-label="cars-classes-navigation"
                className="absolute z-10 hidden w-40 rounded-lg bg-my-dark origin-top-center group-hover:block group-hover:animate-append"
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
