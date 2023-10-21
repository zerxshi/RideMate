import React, { FC } from "react"
import bClassPolo from "@/assets/images/b-class-polo.jpg"
import { Link } from "react-router-dom"

interface MenuItemProps {
    title: string
}

const CarsDropdownMenuItem: FC<MenuItemProps> = ({ title }) => {
    return (
        <li>
            <Link to="/cars" className="flex justify-center active:scale-99">
                <b className="text-xl font-normal text-white font-russo hover:text-my-blue">
                    {title}
                </b>
            </Link>
        </li>
    )
}

export default CarsDropdownMenuItem
