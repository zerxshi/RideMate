import React, { FC } from "react"

interface BrandCardProps {
    brandId: number
    brandName: string
}

const BrandCard: FC<BrandCardProps> = ({ brandId, brandName }) => {
    return (
        <article className="flex flex-col  p-4 shadow-xl bg-zinc-700 rounded-xl w-[630px]">
            <dl className="flex gap-1 text-lg font-bold">
                <dt>Brand ID:</dt>
                <dd>{brandId}</dd>
            </dl>
            <dl className="flex gap-1 text-lg font-bold">
                <dt>Brand name:</dt>
                <dd>{brandName}</dd>
            </dl>
            <button
                className="self-end h-8 px-2 text-lg font-bold rounded-lg w-max bg-my-blue text-my-dark"
                type="button"
            >
                Remove the brand
            </button>
        </article>
    )
}

export default BrandCard
