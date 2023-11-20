import React, { FC } from "react"
import { useTranslation } from "react-i18next"

interface PersonalDataProps {
    name: string | null
    email: string | null
    emailChangeRequest: () => void
    passwordChangeRequest: () => void
}

const PersonalData: FC<PersonalDataProps> = ({
    name,
    email,
    emailChangeRequest,
    passwordChangeRequest,
}) => {
    const { t } = useTranslation("userProfilePage")

    const modifiedEmail: string = email!.replace(
        /(.*)(.{3})@(.*)/,
        (_, prefix, lastThree, afterAt) =>
            prefix.replace(/[a-zA-Z]/g, "*") + lastThree + "@" + afterAt,
    )

    return (
        <section className="flex flex-col gap-3 ">
            <h2 className="text-2xl font-bold text-white">
                {t("phrases.personalData")}
            </h2>
            <dl className="flex gap-2 text-xl font-bold text-white">
                <dt>{t("lists.name")}:</dt>
                <dd>{name}</dd>
            </dl>
            <div className="flex gap-5">
                <dl className="flex gap-2 text-xl font-bold text-white">
                    <dt>{t("lists.email")}:</dt>
                    <dd>{modifiedEmail}</dd>
                </dl>
                <button
                    onClick={emailChangeRequest}
                    className="text-xl font-bold rounded-lg w-44 text-my-dark bg-my-blue active:scale-99"
                >
                    {t("buttons.changeEmail")}
                </button>
            </div>
            <div className="flex gap-5">
                <b className="text-xl text-white">{t("lists.password")}:</b>

                <button
                    onClick={passwordChangeRequest}
                    className="text-xl font-bold rounded-lg w-44 text-my-dark bg-my-blue active:scale-99"
                >
                    {t("buttons.changePassword")}
                </button>
            </div>
        </section>
    )
}

export default PersonalData
