import React, { FC } from "react"
import logo from "@/assets/images/logo.png"
import { Link } from "react-router-dom"
import CarsDropdownMenu from "@/modules/AppHeader/components/CarsDropdownMenu"
import UserDropdownMenu from "./UserDropdownMenu"
import { useTranslation } from "react-i18next"
import { authAPI } from "@/modules/LoginForm"
import { useAppDispatch, useAppSelector } from "@/hooks/useTypedStore"
import { deleteUser } from "@/store/slice/userSlice"
const Header: FC = () => {
    const { t } = useTranslation("header")
    const { isAuth, name } = useAppSelector((state) => state.userReducer)
    const dispatch = useAppDispatch()
    const [logout, {}] = authAPI.useLogoutMutation()

    const userLogout = () => {
        logout({})
        dispatch(deleteUser())
    }

    return (
        <header className="sticky top-0 z-10 flex justify-center bg-my-gray2">
            <nav
                aria-label="primary-navigation"
                className="flex items-center justify-between w-1500"
            >
                <Link to="/">
                    <img src={logo} alt="rideMate logo" className="p-3 w-36" />
                </Link>

                <CarsDropdownMenu />

                {isAuth ? (
                    <UserDropdownMenu userName={name!} logout={userLogout} />
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
