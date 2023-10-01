import React, { FC } from "react"
import logo from "@/assets/images/logo.png"
import { Link } from "react-router-dom"
import CarsDropdownMenu from "@/modules/AppHeader/components/CarsDropdownMenu"
import UserDropdownMenu from "./UserDropdownMenu"
import { useTranslation } from "react-i18next"

const Header: FC = () => {
    const isAuth = false
    const { t } = useTranslation("header")

    return (
        <header className="flex justify-center bg-my-gray">
            <nav
                aria-label="primary-navigation"
                className="flex items-center justify-between w-1500"
            >
                <Link to="/">
                    <img src={logo} alt="rideMate logo" className="p-3 w-36" />
                </Link>

                <CarsDropdownMenu />

                {isAuth ? (
                    <UserDropdownMenu />
                ) : (
                    <Link to="/login">
                        <b className="text-2xl text-my-white">
                            {t("buttons.loginOrRegister")}
                        </b>
                    </Link>
                )}
            </nav>
        </header>
    )
}

export { Header }
