import { BASE_SERVER_URL } from "@/utils/consts"
import React, { FC } from "react"
import { useTranslation } from "react-i18next"

interface AdminCarCardProps {
    carId: number
    img: string
    model: string
    brand: string | undefined
    carClass: string | undefined
    removeCar: (carId: number) => Promise<void>
    isActive: boolean
    restoreCar: (carId: number) => Promise<void>
}

const AdminCarCard: FC<AdminCarCardProps> = ({
    carId,
    img,
    model,
    brand,
    carClass,
    removeCar,
    isActive,
    restoreCar,
}) => {
    const { t } = useTranslation("adminPanelPage")

    return (
        <article className="flex gap-5 p-4 shadow-xl bg-zinc-700 rounded-xl w-[630px]">
            <img src={BASE_SERVER_URL + img} className="w-64 rounded-lg" />

            <div className="flex flex-col gap-14 w-80">
                <div>
                    <b className="text-xl">
                        {brand} {model}
                    </b>
                    <dl className="flex flex-wrap gap-1 text-lg font-bold">
                        <dt>{t("lists.carId")}:</dt>
                        <dd>{carId}</dd>
                    </dl>
                    <dl className="flex gap-1 text-lg font-bold">
                        <dt>{t("lists.segment")}:</dt>
                        <dd>{carClass}</dd>
                    </dl>
                    <dl className="flex gap-1 text-lg font-bold">
                        <dt>{t("lists.brand")}:</dt>
                        <dd>{brand}</dd>
                    </dl>
                </div>

                {isActive ? (
                    <button
                        onClick={() => removeCar(carId)}
                        className="self-end h-8 px-2 text-lg font-bold rounded-lg w-max bg-my-blue text-my-dark"
                        type="button"
                    >
                        {t("buttons.removeCar")}
                    </button>
                ) : (
                    <button
                        onClick={() => restoreCar(carId)}
                        className="self-end h-8 px-2 text-lg font-bold rounded-lg w-max bg-my-blue text-my-dark"
                        type="button"
                    >
                        {t("buttons.restoreCar")}
                    </button>
                )}
            </div>
        </article>
    )
}

export default AdminCarCard
