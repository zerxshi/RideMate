import React, { FC } from "react"
import logo from "@/assets/images/logo.png"
import { Link } from "react-router-dom"
import {
    MAIN_PAGE_ROUTE,
    PROFILE_ROUTE,
} from "@/modules/AppRouter/utils/consts"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

const Header: FC = () => {
    return (
        <header className="flex justify-center bg-my-gray">
            <nav className="flex items-center justify-between w-1800">
                <Link to={MAIN_PAGE_ROUTE}>
                    <img src={logo} alt="rideMate logo" className="w-40 p-3" />
                </Link>
                <button>
                    <h1 className="text-5xl font-bold text-my-white">
                        Ride Mate
                    </h1>
                    <FontAwesomeIcon
                        icon="fa-solid fa-angle-down"
                        className="text-2xl text-my-white"
                    />
                </button>
                <Link to={PROFILE_ROUTE}>
                    <p className="text-4xl font-bold text-my-white">
                        Login/Register
                    </p>
                </Link>
            </nav>
        </header>
    )
}

export { Header }
