import { IBrand } from "@/types"
import React, { FC } from "react"
import BrandCard from "@/modules/AdminPanel/components/brands/BrandCard"

interface BrandsListProps {
    brands: IBrand[]
    removeBrand: (brandId: number) => Promise<void>
}

const BrandsList: FC<BrandsListProps> = ({ brands, removeBrand }) => {
    return (
        <section className="flex flex-col gap-4">
            {brands.map((brand) => (
                <BrandCard
                    key={brand.id}
                    brandId={brand.id}
                    brandName={brand.name}
                    removeBrand={removeBrand}
                />
            ))}
        </section>
    )
}

export default BrandsList
