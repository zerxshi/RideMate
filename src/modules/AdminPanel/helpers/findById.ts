import { IBrand, IClass } from "@/types"

export const findName = (
    arr: IBrand[] | IClass[] | undefined,
    id: number,
): string | undefined => {
    if (arr) {
        const obj = arr.find((el) => el.id === id)
        return obj?.name
    }
}
