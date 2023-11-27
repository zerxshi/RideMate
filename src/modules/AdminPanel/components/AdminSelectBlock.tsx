import React, { FC } from "react"
import { useTranslation } from "react-i18next"
import { ISelectOption } from "@/modules/AdminPanel/types"

interface SelectBlockProps {
    selectValue: string
    setSelectValue: (val: string) => void
    selectValues: ISelectOption[]
    selectId: string
    selectLabel: string
}

const AdminSelectBlock: FC<SelectBlockProps> = ({
    selectValue,
    setSelectValue,
    selectValues,
    selectId,
    selectLabel,
}) => {
    const { t, i18n } = useTranslation("adminPanelPage")

    return (
        <div className="flex flex-col gap-1">
            <label htmlFor={selectId} className="text-xl font-bold">
                {t(`selects.${selectLabel}`)}:
            </label>

            <select
                name={selectId}
                id={selectId}
                value={selectValue}
                onChange={(e: React.ChangeEvent<HTMLSelectElement>) =>
                    setSelectValue(e.target.value)
                }
                className="text-lg bg-transparent outline-none"
            >
                {selectValues.map((val) => (
                    <option
                        key={val.id}
                        value={val.name}
                        className="text-lg bg-zinc-700"
                    >
                        {i18n.exists(`adminPanelPage:common.${val.name}`)
                            ? t(`common.${val.name}`)
                            : val.name}
                    </option>
                ))}
            </select>
        </div>
    )
}

export default AdminSelectBlock
