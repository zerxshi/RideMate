import InputBlock from "@/components/InputBlock"
import React, { ChangeEvent, FC, useEffect, useState } from "react"
import { toSelect } from "@/modules/AdminPanel/helpers/toSelect"
import { IBrand, IClass } from "@/types"
import { adminCarsAPI } from "../API/carsAPI"

interface CarCreationFormProps {
    classes: IClass[]
    brands: IBrand[]
}

interface selectOption {
    name: string
    id: number
}

const CarCreationForm: FC<CarCreationFormProps> = ({ classes, brands }) => {
    const [createCar, { isError, error }] = adminCarsAPI.useCreateCarMutation()

    const [modelValue, setModelValue] = useState<string>("")
    const [imageValue, setImageValue] = useState<File>()
    const [mileageValue, setMileageValue] = useState<string>("")
    const [fuelConsumptionValue, setFuelConsumptionValue] = useState<string>("")
    const [priceValue, setPriceValue] = useState<string>("")

    const [selectClasses, setSelectClasses] = useState<selectOption[]>([])
    const [selectBrands, setSelectBrands] = useState<selectOption[]>([])
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
        console.log(carClass)

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
                <input
                    className="p-2 text-xl font-bold bg-transparent border-4 h-14 rounded-2xl border-my-dark text-my-dark placeholder:text-my-dark"
                    value={modelValue}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                        setModelValue(e.target.value)
                    }
                    type="text"
                    placeholder="Model"
                />
                <input
                    className="p-2 text-xl font-bold bg-transparent border-4 h-14 rounded-2xl border-my-dark text-my-dark placeholder:text-my-dark"
                    onChange={handleImageChange}
                    type="file"
                    accept="image/*"
                    placeholder="Car image"
                />

                <select
                    name="brands"
                    id="brands"
                    value={selectedBrand}
                    onChange={(e: React.ChangeEvent<HTMLSelectElement>) =>
                        setSelectedBrand(e.target.value)
                    }
                >
                    {selectBrands.map((brand) => (
                        <option key={brand.id} value={brand.name}>
                            {brand.name}
                        </option>
                    ))}
                </select>

                <select
                    name="classes"
                    id="classes"
                    value={selectedClass}
                    onChange={(e: React.ChangeEvent<HTMLSelectElement>) =>
                        setSelectedClass(e.target.value)
                    }
                >
                    {selectClasses.map((carClass) => (
                        <option key={carClass.id} value={carClass.name}>
                            {carClass.name}
                        </option>
                    ))}
                </select>

                <input
                    className="p-2 text-xl font-bold bg-transparent border-4 h-14 rounded-2xl border-my-dark text-my-dark placeholder:text-my-dark"
                    value={priceValue}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                        setPriceValue(e.target.value)
                    }
                    type="number"
                    placeholder="Price"
                />
                <input
                    className="p-2 text-xl font-bold bg-transparent border-4 h-14 rounded-2xl border-my-dark text-my-dark placeholder:text-my-dark"
                    value={fuelConsumptionValue}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                        setFuelConsumptionValue(e.target.value)
                    }
                    type="number"
                    placeholder="Fuel consumption"
                />
                <input
                    className="p-2 text-xl font-bold bg-transparent border-4 h-14 rounded-2xl border-my-dark text-my-dark placeholder:text-my-dark"
                    value={mileageValue}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                        setMileageValue(e.target.value)
                    }
                    type="number"
                    placeholder="Mileage"
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
