import { IClass } from "@/types"
import React, { FC } from "react"
import ClassCard from "@/modules/AdminPanel/components/carClasses/ClassCard"

interface ClassesListProps {
    classes: IClass[]
}

const ClassesList: FC<ClassesListProps> = ({ classes }) => {
    return (
        <section className="flex flex-col gap-4">
            <h1 className="text-4xl font-bold text-center">All car classes</h1>
            {classes.map((carClass) => (
                <ClassCard
                    key={carClass.id}
                    classId={carClass.id}
                    className={carClass.name}
                />
            ))}
        </section>
    )
}

export default ClassesList
