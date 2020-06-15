interface ApiErrorResponse {
    name: string
    status: number
    code?: string
    message: string
    stack: string
}