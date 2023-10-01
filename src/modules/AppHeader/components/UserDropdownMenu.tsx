import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import React, { FC } from "react"
import { useTranslation } from "react-i18next"
import { Link, useNavigate } from "react-router-dom"

const UserDropdownMenu: FC = () => {
    const { t } = useTranslation("header")

    const navigate = useNavigate()
    const handleClick = () => {
        navigate("/login")
    }

    return (
        <div
            aria-label="user-dropdown-menu"
            className="relative inline-block group"
        >
            <Link className="flex flex-col" to="/profile">
                <b className="text-2xl text-my-white">
                    {t("buttons.username")}
                </b>
                <FontAwesomeIcon
                    icon="fa-solid fa-angle-down"
                    className="text-2xl text-my-white"
                />
            </Link>

            <button
                onClick={handleClick}
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
