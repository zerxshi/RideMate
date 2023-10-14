import React from "react"
import { useTranslation } from "react-i18next"

const PasswordRecoveryForm = () => {
    const { t } = useTranslation("loginPage")

    return (
        <section>
            <b>{t("phrases.passwordRecovery")}</b>

            <button>{t("buttons.getCode")}</button>
        </section>
    )
}

export { PasswordRecoveryForm }
