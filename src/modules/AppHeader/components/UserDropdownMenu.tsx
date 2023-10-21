import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import React, { FC } from "react"
import { useTranslation } from "react-i18next"
import { Link } from "react-router-dom"

interface UserDropDownProps {
    userName: string
    logout: () => void
}

const UserDropdownMenu: FC<UserDropDownProps> = ({ userName, logout }) => {
    const { t } = useTranslation("header")

    return (
        <div
            aria-label="user-dropdown-menu"
            className="relative inline-block group"
        >
            <Link
                to="/profile"
                className="flex items-center justify-center w-40 h-20 transition-all duration-500 group-hover:bg-my-blue"
            >
                <b className="text-xl font-normal font-russo text-my-blue group-hover:text-my-dark">
                    {userName.toUpperCase()}
                </b>
            </Link>

            <button
                onClick={logout}
                type="button"
                className="absolute z-10 hidden w-40 bg-my-dark bg-my-gray rounded-xl origin-top-center group-hover:block group-hover:animate-append active:scale-99"
            >
                <b className="text-xl font-normal font-russo text-my-white hover:text-my-blue">
                    {t("buttons.logout")}
                </b>
            </button>
        </div>
    )
}

export default UserDropdownMenu
