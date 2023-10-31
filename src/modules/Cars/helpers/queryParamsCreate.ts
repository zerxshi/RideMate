export const queryParamsCreate = (stringParams: string) => {
    const queryParams = new URLSearchParams()
    const params = new URLSearchParams(stringParams)
    const classId = params.get("cars")
    if (classId) {
        if (getClassId(classId) !== -1) {
            queryParams.set("classId", getClassId(classId).toString());
        }
    }
    if (params.get("brandId")) {
        queryParams.set("brandId", params.get("brandId")!)
    }
    if (params.get("minPrice")) {
        queryParams.set("minPrice", params.get("minPrice")!)
    }
    if (params.get("maxPrice")) {
        queryParams.set("maxPrice", params.get("maxPrice")!)
    }
    if (params.get("limit")) {
        queryParams.set("limit", params.get("limit")!)
    }
    if (params.get("page")) {
        queryParams.set("page", params.get("page")!)
    }

    return queryParams
}

const getClassId = (stringClass: string): number => {
    if (stringClass === "sSegment") {
        return 1
    }
    if (stringClass === "bSegment") {
        return 2
    }
    if (stringClass === "fSegment") {
        return 3
    }
    if (stringClass === "crossovers") {
        return 4
    }

    return -1
}