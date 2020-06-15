class ApiError extends Error {

  status:number
  code: string

  constructor(status:number, message: string = process.env.ERROR_DEFAULT_MESSAGE || "Something went wrong", code?: string) {
    super(message)
    this.status = status
    this.code = code
  }
}

export default ApiError
