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

export interface ICar {
    id: number
    model: string
    price: number
    mileage: number
    lastMileageOnTs: number
    fuelConsumption: number
    technicalCondition: number
    img: string
    classId: number
    brandId: number
    rentalParkingId: number | null
    maintenanceParkingId: number | null
    carScheduleId: number | null
}
