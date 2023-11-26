import React, { ChangeEvent, FC, useEffect, useState } from "react"
import { toSelect } from "@/modules/AdminPanel/helpers/toSelect"
import { IBrand, IClass } from "@/types"
import { adminCarsAPI } from "@/modules/AdminPanel"
import AdminInputBlock from "@/modules/AdminPanel/components/AdminInputBlock"
import AdminSelectBlock from "@/modules/AdminPanel/components/AdminSelectBlock"
import { useTranslation } from "react-i18next"
import { ISelectOption } from "@/modules/AdminPanel/types"

interface CarCreationFormProps {
    classes: IClass[]
    brands: IBrand[]
}

const CarCreationForm: FC<CarCreationFormProps> = ({ classes, brands }) => {
    const { t } = useTranslation("adminPanelPage")

    const [createCar, { isError, error }] = adminCarsAPI.useCreateCarMutation()

    const [modelValue, setModelValue] = useState<string>("")
    const [imageValue, setImageValue] = useState<File>()
    const [mileageValue, setMileageValue] = useState<string>("")
    const [fuelConsumptionValue, setFuelConsumptionValue] = useState<string>("")
    const [priceValue, setPriceValue] = useState<string>("")

    const [selectClasses, setSelectClasses] = useState<ISelectOption[]>([])
    const [selectBrands, setSelectBrands] = useState<ISelectOption[]>([])
    const [selectedClass, setSelectedClass] = useState<string>("")
    const [selectedBrand, setSelectedBrand] = useState<string>("")

    const convertToSelect = () => {
        setSelectClasses(toSelect(classes))
        setSelectBrands(toSelect(brands))
    }

    useEffect(() => {
        convertToSelect()
    }, [])

    const handleImageChange = (e: ChangeEvent<HTMLInputElement>) => {
        if (e.target.files) {
            setImageValue(e.target.files[0])
        }
    }

    const submitCreateCar = async (): Promise<void> => {
        const brand = selectBrands.find((brand) => brand.name === selectedBrand)
        const carClass = selectClasses.find(
            (carClass) => carClass.name === selectedClass,
        )

        if (imageValue) {
            const result = await createCar({
                model: modelValue,
                file: imageValue,
                fuelConsumption: fuelConsumptionValue,
                mileage: mileageValue,
                price: priceValue,
                brandId: brand?.id.toString()!,
                classId: carClass?.id.toString()!,
            })
        }
    }

    return (
        <div className="top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 fixed z-50 w-[630px]">
            <form
                className="flex flex-col gap-4 p-4 bg-zinc-700 rounded-xl"
                onSubmit={(e: React.FormEvent<HTMLFormElement>) =>
                    e.preventDefault()
                }
            >
                <AdminInputBlock
                    inputId="model"
                    inputType="text"
                    inputValue={modelValue}
                    setInputValue={setModelValue}
                    setImage={null}
                />
                <AdminInputBlock
                    inputId="carImage"
                    inputType="file"
                    inputValue=""
                    setImage={handleImageChange}
                    setInputValue={null}
                />

                <AdminSelectBlock
                    selectId="brands"
                    selectValue={selectedBrand}
                    setSelectValue={setSelectedBrand}
                    selectValues={selectBrands}
                />

                <AdminSelectBlock
                    selectId="classes"
                    selectValue={selectedClass}
                    setSelectValue={setSelectedClass}
                    selectValues={selectClasses}
                />

                <AdminInputBlock
                    inputId="price"
                    inputType="number"
                    inputValue={priceValue}
                    setInputValue={setPriceValue}
                    setImage={null}
                />
                <AdminInputBlock
                    inputId="fuelConsumption"
                    inputType="number"
                    inputValue={fuelConsumptionValue}
                    setInputValue={setFuelConsumptionValue}
                    setImage={null}
                />
                <AdminInputBlock
                    inputId="mileage"
                    inputType="number"
                    inputValue={mileageValue}
                    setInputValue={setMileageValue}
                    setImage={null}
                />

                <button
                    onClick={submitCreateCar}
                    className="w-full mt-3 text-2xl font-bold h-14 rounded-2xl text-my-blue bg-my-dark active:scale-99"
                    type="submit"
                >
                    Submit
                </button>
            </form>
        </div>
    )
}

export default CarCreationForm
