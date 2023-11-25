import { IBrand } from "@/types"
import React, { FC } from "react"
import BrandCard from "@/modules/AdminPanel/components/brands/BrandCard"

interface BrandsListProps {
    brands: IBrand[]
}

const BrandsList: FC<BrandsListProps> = ({ brands }) => {
    return (
        <section className="flex flex-col gap-4">
            <h1 className="text-4xl font-bold text-center">All car brands</h1>
            {brands.map((brand) => (
                <BrandCard
                    key={brand.id}
                    brandId={brand.id}
                    brandName={brand.name}
                />
            ))}
        </section>
    )
}

export default BrandsList
