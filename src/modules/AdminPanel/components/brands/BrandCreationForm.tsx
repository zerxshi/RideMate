import React, { useEffect, useState } from "react"
import AdminInputBlock from "@/modules/AdminPanel/components/AdminInputBlock"
import { useTranslation } from "react-i18next"
import { brandAPI } from "@/API/brandAPI"
import FormValidationBlock from "@/modules/AdminPanel/components/FormValidationBlock"
import { IError } from "@/types"

const BrandCreationForm = () => {
    const { t } = useTranslation("common")

    const [
        createBrand,
        {
            isError: isCreationError,
            error: creationError,
            reset: creationReset,
        },
    ] = brandAPI.useCreateBrandMutation()

    const [brandNameValue, setBrandNameValue] = useState<string>("")
    const [validationError, setValidationError] = useState<string>("")

    const submitCreateBrand = async (): Promise<void> => {
        if (!brandNameValue) {
            setValidationError(t("errors.fillInFields"))
        }
        if (!validationError) {
            await createBrand({ name: brandNameValue })
        }
    }

    useEffect(() => {
        setValidationError("")
        creationReset()
    }, [brandNameValue])

    return (
        <div>
            <form
                className="flex flex-col gap-4 p-4 bg-zinc-700 rounded-xl"
                onSubmit={(e: React.FormEvent<HTMLFormElement>) =>
                    e.preventDefault()
                }
            >
                <AdminInputBlock
                    inputId="brandName"
                    inputType="text"
                    inputValue={brandNameValue}
                    setInputValue={setBrandNameValue}
                    setImage={null}
                />
                <FormValidationBlock
                    validationError={validationError}
                    creationError={creationError as IError}
                    isCreationError={isCreationError}
                />
                <button
                    onClick={submitCreateBrand}
                    className="w-full mt-3 text-2xl font-bold h-14 rounded-2xl text-my-blue bg-my-dark active:scale-99"
                    type="submit"
                >
                    {t("buttons.confirm")}
                </button>
            </form>
        </div>
    )
}

export default BrandCreationForm
