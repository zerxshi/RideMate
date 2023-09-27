import React, { FC } from "react"
import logo from "@/assets/images/logo.png"
import { Link } from "react-router-dom"
import {
    MAIN_PAGE_ROUTE,
    PROFILE_ROUTE,
} from "@/modules/AppRouter/utils/consts"

const Header: FC = () => {
    return (
        <header className="flex justify-center bg-my-gray">
            <nav className="flex items-center justify-between w-1800">
                <Link to={MAIN_PAGE_ROUTE}>
                    <a>
                        <img
                            src={logo}
                            alt="rideMate logo"
                            className="w-40 p-3"
                        />
                    </a>
                </Link>
                <button>
                    <h1 className="text-5xl font-bold text-my-white">
                        Ride Mate
                    </h1>
                </button>
                <Link to={PROFILE_ROUTE}>
                    <a>
                        <p className="text-4xl font-bold text-my-white">
                            Login/Register
                        </p>
                    </a>
                </Link>
            </nav>
        </header>
    )
}

export { Header }
