import { IClass } from "@/types"
import React, { FC } from "react"
import ClassCard from "@/modules/AdminPanel/components/ClassCard"

interface ClassesListProps {
    classes: IClass[]
    removeClass: (classId: number) => Promise<void>
}

const ClassesList: FC<ClassesListProps> = ({ classes, removeClass }) => {
    return (
        <section className="flex flex-col gap-4">
            {classes.map((carClass) => (
                <ClassCard
                    key={carClass.id}
                    classId={carClass.id}
                    className={carClass.name}
                    removeClass={removeClass}
                />
            ))}
        </section>
    )
}

export default ClassesList
