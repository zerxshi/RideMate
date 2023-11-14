export interface IRentalCar {
    id: number
    carId: number
    occupied_dates: string[]
    totalPrice: number
}

export interface IRentalHistoryRes {
    count: number
    rows: IRentalCar[]
}

export interface ICancelRentalRes {
    message: string
}
