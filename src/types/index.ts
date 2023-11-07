export interface IError {
    status: number
    data: {
        message: string
        errors: unknown[]
    }
}

export interface IPasswordCheckRes {
    message: string
}

export interface ITokenCheckRes {
    message: string
}

export interface IChangeDataResponse {
    message: string
}
