import React, { FC } from "react"
import { useTranslation } from "react-i18next"

interface ClassCardProps {
    classId: number
    className: string
}

const ClassCard: FC<ClassCardProps> = ({ classId, className }) => {
    const { t } = useTranslation("adminPanelPage")

    return (
        <article className="flex flex-col  p-4 shadow-xl bg-zinc-700 rounded-xl w-[630px]">
            <dl className="flex gap-1 text-lg font-bold">
                <dt>{t("lists.classId")}:</dt>
                <dd>{classId}</dd>
            </dl>
            <dl className="flex gap-1 text-lg font-bold">
                <dt>{t("lists.className")}:</dt>
                <dd>{className}</dd>
            </dl>
        </article>
    )
}

export default ClassCard
