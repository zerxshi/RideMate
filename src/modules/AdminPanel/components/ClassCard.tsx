import React, { FC } from "react"

interface ClassCardProps {
    classId: number
    className: string
    removeClass: (classId: number) => Promise<void>
}

const ClassCard: FC<ClassCardProps> = ({ classId, className, removeClass }) => {
    return (
        <article className="flex flex-col  p-4 shadow-xl bg-zinc-700 rounded-xl w-[630px]">
            <dl className="flex gap-1 text-lg font-bold">
                <dt>Class ID:</dt>
                <dd>{classId}</dd>
            </dl>
            <dl className="flex gap-1 text-lg font-bold">
                <dt>Class name:</dt>
                <dd>{className}</dd>
            </dl>
            <button
                onClick={() => removeClass(classId)}
                className="self-end h-8 px-2 text-lg font-bold rounded-lg w-max bg-my-blue text-my-dark"
                type="button"
            >
                Remove the class
            </button>
        </article>
    )
}

export default ClassCard
