export interface IToken {
    token: string
}

export interface IError {
    status: number
    data: {
        message: string
        errors: unknown[]
    }
}
