import React, { FC } from "react"
import { ICarAndBrand } from "@/modules/UserProfile/types"
import { BASE_SERVER_URL } from "@/utils/consts"
import { useTranslation } from "react-i18next"
interface RentalCarCardProps {
    car: ICarAndBrand | undefined
    rentalDates: string
    totalPrice: number
    status: string
    historyId: number
    cancelReservation: (historyId: number) => Promise<void>
}

const RentalCarCard: FC<RentalCarCardProps> = ({
    car,
    rentalDates,
    totalPrice,
    status,
    historyId,
    cancelReservation,
}) => {
    const { t } = useTranslation("historyPage")

    return (
        <article className="flex gap-5 p-4 shadow-xl bg-zinc-700 rounded-xl w-[630px]">
            <img src={BASE_SERVER_URL + car?.img} className="w-64 rounded-lg" />

            <div className="flex flex-col gap-14 w-80">
                <div>
                    <b className="text-xl">
                        {car?.brand} {car?.model}
                    </b>
                    <dl className="flex flex-wrap gap-1 text-lg font-bold">
                        <dt>{t("lists.rentalDates")}:</dt>
                        <dd>{rentalDates}</dd>
                    </dl>
                    <dl className="flex gap-1 text-lg font-bold">
                        <dt>{t("lists.totalPrice")}:</dt>
                        <dd>{totalPrice}</dd>
                    </dl>
                    <dl className="flex gap-1 text-lg font-bold">
                        <dt>{t("lists.status")}:</dt>
                        <dd>{status}</dd>
                    </dl>
                </div>

                {status === t("phrases.awaiting") && (
                    <button
                        className="self-end w-40 h-8 text-lg font-bold rounded-lg bg-my-blue text-my-dark"
                        type="button"
                        onClick={() => cancelReservation(historyId)}
                    >
                        {t("buttons.cancelReservation")}
                    </button>
                )}
            </div>
        </article>
    )
}

export default RentalCarCard
