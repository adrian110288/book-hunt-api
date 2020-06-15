import ApiError from './api-error'
import {Request, Response} from 'express'

export default async function (err: Error, req: Request, res: Response) {

    const body: ApiErrorResponse = err instanceof ApiError ?
        {
            code: err.code,
            message: err.message,
            name: err.name,
            stack: err.stack,
            status: err.status
        } :
        {
            message: err.message,
            name: err.name,
            stack: err.stack,
            status: 500
        }

    res.status(body.status).json(body)
}
