export interface IChangeDataResponse {
    message: string
}

export interface IError {
    status: number
    data: {
        message: string
        errors: unknown[]
    }
}
