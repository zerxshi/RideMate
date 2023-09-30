import React, { FC } from "react"
import { useTranslation } from "react-i18next"
import ClassCard from "./ClassCard"

const CarClassCards: FC = () => {
    const { t } = useTranslation("mainPage")

    interface classCard {
        imageSrc: string
        classTitle: string
        classDescription: string
    }

    const classCards: classCard[] = [
        {
            imageSrc:
                "https://avatars.mds.yandex.net/get-verba/1030388/2a000001608db7faabc6f8ded968d00d80a0/cattouchret",
            classTitle: "sSegment",
            classDescription: "sSegment",
        },
        {
            imageSrc:
                "https://avatars.mds.yandex.net/get-verba/3587101/2a000001863c852097ca0a2aa9e5f50ef1fa/cattouchret",
            classTitle: "crossoverAndSuvSegment",
            classDescription: "crossoverAndSuvSegment",
        },
        {
            imageSrc:
                "https://avatars.mds.yandex.net/get-verba/787013/2a000001609d2da43049c5691672dc771b7e/cattouchret",
            classTitle: "fSegment",
            classDescription: "fSegment",
        },
        {
            imageSrc:
                "https://avatars.mds.yandex.net/get-verba/997355/2a00000187e6a56fc2d2c95326c2b0135d3c/cattouchret",
            classTitle: "eSegment",
            classDescription: "eSegment",
        },
        {
            imageSrc:
                "https://avatars.mds.yandex.net/get-verba/3587101/2a0000017f59f04c2aa3aefb0c48afe35dfb/cattouchret",
            classTitle: "dSegment",
            classDescription: "dSegment",
        },
        {
            imageSrc:
                "https://avatars.mds.yandex.net/get-verba/937147/2a0000017080e428ad83662495c8ac94d58b/cattouchret",
            classTitle: "bSegment",
            classDescription: "bSegment",
        },
    ]

    const textPosition = (index: number): boolean => {
        if (index % 2 === 0) return true
        return false
    }

    return (
        <section className="flex flex-col gap-6 mt-16 w-1500">
            <h2 className="mb-4 text-3xl font-bold text-center text-my-white">
                {t("headers.segmentsDescription")}
            </h2>
            {classCards.map((card, index) => (
                <ClassCard
                    key={card.classTitle}
                    classTitle={card.classTitle}
                    classDescription={card.classDescription}
                    imageSrc={card.imageSrc}
                    textPosition={textPosition(index)}
                />
            ))}
        </section>
    )
}

export { CarClassCards }
