import React, { FC } from "react"
import bClassPolo from "@/assets/images/b-class-polo.jpg"
import { Link } from "react-router-dom"

const CarsDropdownMenuItem: FC = () => {
    return (
        <li>
            <Link to="/cars">
                <div className="flex items-center gap-20">
                    <img src={bClassPolo} alt="B-class" className="w-44" />
                    <b className="text-3xl text-my-white">B-class</b>
                </div>
            </Link>
        </li>
    )
}

export default CarsDropdownMenuItem
