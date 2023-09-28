import React, { FC } from "react"
import logo from "@/assets/images/logo.png"
import { Link } from "react-router-dom"
import CarsDropdownMenu from "@/modules/AppHeader/components/CarsDropdownMenu"
import UserDropdownMenu from "./UserDropdownMenu"
import { useTranslation } from "react-i18next"

const Header: FC = () => {
    const isAuth = true
    const { t } = useTranslation(["common"])

    return (
        <header className="flex justify-center bg-my-gray">
            <nav
                aria-label="primary-navigation"
                className="flex items-center justify-between w-1800"
            >
                <Link to="/">
                    <img src={logo} alt="rideMate logo" className="w-40 p-3" />
                </Link>

                <CarsDropdownMenu />

                {isAuth ? (
                    <UserDropdownMenu />
                ) : (
                    <Link to="/login">
                        <b className="text-3xl text-my-white">
                            {t("button.loginOrRegister")}
                        </b>
                    </Link>
                )}
            </nav>
        </header>
    )
}

export { Header }
