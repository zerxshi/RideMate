import React, { FC } from "react"
import tickImg from "@/assets/images/tickImg.png"
import { useTranslation } from "react-i18next"
import { Link } from "react-router-dom"

interface RegSuccessProps {
    isRegistrationSuccess: boolean
}

const RegistrationSuccess: FC<RegSuccessProps> = ({
    isRegistrationSuccess,
}) => {
    const { t } = useTranslation("loginPage")

    return (
        <section className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center w-[605px]">
            <img src={tickImg} alt="tickImg" className="w-32 animate-append" />
            <b className="mb-10 text-3xl text-my-dark animate-slideDown400">
                {t("phrases.registrationSuccess")}
            </b>
            <Link
                to="/"
                className="flex items-center justify-center w-full text-2xl font-bold text-center h-14 rounded-2xl bg-my-dark text-my-blue active:scale-99 animate-slideUp400"
            >
                {t("phrases.goToHome")}
            </Link>
        </section>
    )
}

export default RegistrationSuccess
