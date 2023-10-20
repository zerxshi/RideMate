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

export interface IResponseCar {
    count: number
    row: ICar[]
}