import React, { FC } from "react"
import { useTranslation } from "react-i18next"

interface BrandCardProps {
    brandId: number
    brandName: string
}

const BrandCard: FC<BrandCardProps> = ({ brandId, brandName }) => {
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
        </article>
    )
}

export default BrandCard
