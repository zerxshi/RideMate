export const queryParamsCreate = (stringParams: string): URLSearchParams => {
    const queryParams: URLSearchParams = new URLSearchParams()
    const params: URLSearchParams = new URLSearchParams(stringParams)
    const classId: string | null = params.get("cars")
    if (classId) {
        if (getClassId(classId) !== -1) {
            queryParams.set("classId", getClassId(classId).toString())
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
    if (params.get("sort") && params.get("sortBy")) {
        queryParams.set("sort", params.get("sort")!)
        queryParams.set("sortBy", params.get("sortBy")!)
    }

    if (params.get("startDate") && params.get("endDate")) {
        queryParams.set("startDate", params.get("startDate")!)
        queryParams.set("endDate", params.get("endDate")!)
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
