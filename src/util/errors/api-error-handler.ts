import ApiError from './api-error'
import {Request, Response, NextFunction} from 'express'
import log from '../log'
import ApiErrorResponse from './api-error-response'

 async function errorHandler(err: Error, req: Request, res: Response, next: NextFunction) {

    log(err.stack)

    const body: ApiErrorResponse = err instanceof ApiError ?
        {
            code: err.code,
            message: err.message,
            name: err.name,
            status: err.status
        } :
        {
            code: process.env.ERROR_DEFAULT_CODE,
            message: process.env.ERROR_DEFAULT_MESSAGE || err.message,
            name: err.name,
            status: Number(process.env.ERROR_DEFAULT_STATUS)
        }

    res.status(body.status).json(body)
}

export default errorHandler
