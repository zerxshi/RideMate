export interface IDataDeletionRes {
    message: string
}

export interface ICar {
    id: number
    model: string
    price: number
    mileage: number
    img: string
    isActive: boolean
    classId: number
    brandId: number
}

export interface IGetCarsRes {
    count: number
    rows: ICar[]
}