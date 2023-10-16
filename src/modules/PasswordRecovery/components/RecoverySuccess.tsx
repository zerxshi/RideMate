import React from "react"
import { Link } from "react-router-dom"
import tickImg from "@/assets/images/tickImg.png"
import { useTranslation } from "react-i18next"

const RecoverySuccess = () => {
    const { t } = useTranslation("loginPage")

    return (
        <section className="absolute flex flex-col items-center -translate-x-1/2 -translate-y-1/2 left-1/2 top-1/2 ">
            <img src={tickImg} alt="tickImg" className="w-32 animate-append" />
            <h1 className="mb-10 text-3xl font-bold text-my-dark animate-slideDown400">
                {t("phrases.passwordChangeSuccess")}
            </h1>
            <Link
                to="/login"
                className="flex items-center justify-center w-full text-2xl font-bold text-center h-14 rounded-2xl bg-my-dark text-my-blue active:scale-99 animate-slideUp400"
            >
                {t("links.goToLogin")}
            </Link>
        </section>
    )
}

export default RecoverySuccess
