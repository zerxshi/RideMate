export interface IRentalCar {
    id: number
    carId: number
    occupied_dates: string[]
    totalPrice: number
}

export interface IHistory {
    count: number
    rows: IRentalCar[]
}

export interface ICar {
    id: number
    model: string
    img: string
    brandId: number
}

export interface IBrand {
    id: number
    name: string
}

export interface IRentalHistoryRes {
    history: IHistory
    cars: ICar[]
    brands: IBrand[]
}

export interface ICancelRentalRes {
    message: string
}

export interface ICarAndBrand {
    model: string | undefined
    img: string | undefined
    brand: string | undefined
}
