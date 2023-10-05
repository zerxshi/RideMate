import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import React, { FC } from "react"
import { useTranslation } from "react-i18next"
import { Link } from "react-router-dom"

interface UserDropDownProps {
    userName: string
    // logout: () => void
}

const UserDropdownMenu: FC<UserDropDownProps> = ({ userName }) => {
    const { t } = useTranslation("header")

    return (
        <div
            aria-label="user-dropdown-menu"
            className="relative inline-block group"
        >
            <Link className="flex flex-col" to="/profile">
                <b className="text-2xl text-my-white">{userName}</b>
                <FontAwesomeIcon
                    icon="fa-solid fa-angle-down"
                    className="text-2xl text-my-white"
                />
            </Link>

            <button
                type="button"
                className="absolute z-10 hidden p-3 -translate-x-1/2 shadow-xl left-1/2 bg-my-gray rounded-xl animate-growOut origin-top-center group-hover:block"
            >
                <b className="text-2xl text-my-white active:scale-95">
                    {t("buttons.logout")}
                </b>
            </button>
        </div>
    )
}

export default UserDropdownMenu
