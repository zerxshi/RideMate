import { IBrand, IClass } from "@/types/index"

interface Result {
    name: string
    id: number
}

export const toSelect = (arr: IBrand[] | IClass[] | undefined) => {
    let result: Result[] = []

    if (arr) {
        arr.map((item) => result.push({ name: item.name, id: item.id }))
    }

    return result
}
