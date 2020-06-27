class ApiError extends Error {

  constructor(
    message: string = process.env.ERROR_DEFAULT_MESSAGE,
    readonly status:number = Number(process.env.ERROR_DEFAULT_STATUS),
    readonly code: string = process.env.ERROR_DEFAULT_CODE) {
      super(message)
  }
}

export default ApiError
