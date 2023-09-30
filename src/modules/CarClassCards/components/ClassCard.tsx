import React, { FC } from "react"
import { useTranslation } from "react-i18next"

interface ClassCardProps {
    imageSrc: string
    classTitle: string
    classDescription: string
    textPosition: boolean
}

const ClassCard: FC<ClassCardProps> = ({
    imageSrc,
    classTitle,
    classDescription,
    textPosition,
}) => {
    const { t } = useTranslation(["mainPage", "common"])

    return (
        <article
            className={`flex gap-10 p-4 shadow-xl bg-my-gray rounded-xl ${
                textPosition ? "flex-row" : "flex-row-reverse"
            }`}
        >
            <div className="flex flex-col gap-3">
                <img src={imageSrc} alt="classCardImg" className="rounded-lg" />
                <h2 className="text-2xl font-bold text-center text-my-white">
                    {t(`carClassTitles.${classTitle}`)}
                </h2>
            </div>

            <div className="flex flex-col gap-3">
                <p className="text-xl font-medium text-my-white">
                    {t(`carClassDescriptions.${classDescription}`)}
                </p>
                <button
                    type="button"
                    className={`${
                        textPosition ? "self-end" : "self-start"
                    } w-max p-1 text-xl font-bold rounded-lg shadow-lg text-my-white bg-my-copper`}
                >
                    {t("button.selectCar", { ns: "common" })}
                </button>
            </div>
        </article>
    )
}

export default ClassCard
