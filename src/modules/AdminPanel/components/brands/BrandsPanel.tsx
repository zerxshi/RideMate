import React, { FC, useState } from "react"
import { useTranslation } from "react-i18next"
import BrandsList from "@/modules/AdminPanel/components/brands/BrandsList"
import { IBrand } from "@/types"
import BrandCreationForm from "@/modules/AdminPanel/components/brands/BrandCreationForm"

interface BrandsPanelProps {
    brands: IBrand[]
}

const BrandsPanel: FC<BrandsPanelProps> = ({ brands }) => {
    const { t } = useTranslation("adminPanelPage")

    const [isFormVisible, setIsFormVisible] = useState<boolean>(false)

    const toggleFormVisibility = () => {
        setIsFormVisible((prev) => !isFormVisible)
    }

    return (
        <section className="flex gap-11">
            <div className="flex flex-col gap-4">
                <h1 className="text-4xl font-bold text-center">
                    {t("headers.allBrands")}
                </h1>
                <BrandsList brands={brands} />
            </div>

            <button
                onClick={toggleFormVisibility}
                className="h-8 px-2 text-2xl font-bold rounded-lg mt-14 w-max bg-my-blue text-my-dark"
                type="button"
            >
                {t("buttons.createBrand")}
            </button>

            {isFormVisible && <BrandCreationForm />}
        </section>
    )
}

export default BrandsPanel
