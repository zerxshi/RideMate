import React, { FC } from "react"
import logo from "@/assets/images/logo.png"
import { Link, useLocation } from "react-router-dom"
import CarsDropdownMenu from "@/modules/AppHeader/components/CarsDropdownMenu"
import UserDropdownMenu from "./UserDropdownMenu"
import { useTranslation } from "react-i18next"
import { authAPI } from "@/modules/LoginForm"
import { useAppDispatch, useAppSelector } from "@/hooks/useTypedStore"
import { deleteUser } from "@/store/slice/userSlice"

const Header: FC = () => {
    const location = useLocation()
    const { t } = useTranslation("header")
    const { isAuth, name } = useAppSelector((state) => state.userReducer)
    const dispatch = useAppDispatch()
    const [logout, {}] = authAPI.useLogoutMutation()

    const userLogout = () => {
        logout({})
        dispatch(deleteUser())
    }

    if (location.pathname.match("/login")) {
        return <div></div>
    } else {
        return (
            <header className="sticky top-0 z-10 flex justify-center h-20 bg-my-dark">
                <nav
                    aria-label="primary-navigation"
                    className="flex items-center justify-between w-[1150px]"
                >
                    <div className="flex items-center">
                        <Link to="/">
                            <img
                                src={logo}
                                alt="rideMate logo"
                                className="p-3 w-28"
                            />
                        </Link>

                        <CarsDropdownMenu />
                    </div>

                    {isAuth ? (
                        <UserDropdownMenu
                            userName={name!}
                            logout={userLogout}
                        />
                    ) : (
                        <Link to="/login">
                            <b className="text-xl font-normal font-russo text-my-blue">
                                {t("links.signIn")}
                            </b>
                        </Link>
                    )}
                </nav>
            </header>
        )
    }
}

export { Header }
