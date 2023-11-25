import React, { FC } from "react"
import { useTranslation } from "react-i18next"

interface BrandCardProps {
    brandId: number
    brandName: string
    removeBrand: (brandId: number) => Promise<void>
}

const BrandCard: FC<BrandCardProps> = ({ brandId, brandName, removeBrand }) => {
    const { t } = useTranslation("adminPanelPage")

    return (
        <article className="flex flex-col  p-4 shadow-xl bg-zinc-700 rounded-xl w-[630px]">
            <dl className="flex gap-1 text-lg font-bold">
                <dt>{t("lists.brandId")}:</dt>
                <dd>{brandId}</dd>
            </dl>
            <dl className="flex gap-1 text-lg font-bold">
                <dt>{t("lists.brandName")}:</dt>
                <dd>{brandName}</dd>
            </dl>
            <button
                onClick={() => removeBrand(brandId)}
                className="self-end h-8 px-2 text-lg font-bold rounded-lg w-max bg-my-blue text-my-dark"
                type="button"
            >
                Remove the brand
            </button>
        </article>
    )
}

export default BrandCard
