import ApiError from './api-error'
import {NextFunction, Request, Response} from 'express'
import log from '../log'
import ApiErrorResponse from './api-error-response'

async function errorHandler(err: Error, req: Request, res: Response, next: NextFunction) {

    log(err.stack)

    let body: ApiErrorResponse

    if (err instanceof ApiError) {

        body = {
            code: err.code,
            message: err.message,
            name: err.name,
            status: err.status
        }

    } else {

        let status = Number(process.env.ERROR_DEFAULT_STATUS);

        if (err.name === 'UnauthorizedError') {
            status = 401;
        }

        body = {
            code: process.env.ERROR_DEFAULT_CODE,
            message: process.env.ERROR_DEFAULT_MESSAGE || err.message,
            name: err.name,
            status
        }

    }

    res.status(body.status).json(body)
}

export default errorHandler
