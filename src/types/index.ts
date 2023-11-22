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

export interface IBrand {
    id: number
    name: string
}

export interface IResponseBrand {
    count: number
    rows: IBrand[]
}

export interface IClass {
    id: number
    name: string
}

export interface IResponseClass {
    count: number
    rows: IClass[]
}
