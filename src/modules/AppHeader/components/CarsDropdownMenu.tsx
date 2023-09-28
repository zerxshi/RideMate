import React, { FC } from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import CarsDropdownMenuItem from "@/modules/AppHeader/components/CarsDropdownMenuItem"

const CarsDropdownMenu: FC = () => {
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
                className="w-[500px] rounded-xl hidden bg-my-gray absolute z-10  shadow-xl -left-40 animate-growOut origin-top-center group-hover:block"
            >
                <ul className="flex flex-col gap-6 p-3">
                    <CarsDropdownMenuItem />
                    <CarsDropdownMenuItem />
                    <CarsDropdownMenuItem />
                    <CarsDropdownMenuItem />
                    <CarsDropdownMenuItem />
                </ul>
            </nav>
        </div>
    )
}

export default CarsDropdownMenu
