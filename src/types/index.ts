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

export interface ICodeCheckRes {
    message: string
}

export interface IChangeDataResponse {
    message: string
}

export interface IAutoLoginRes {
    token: string
}
