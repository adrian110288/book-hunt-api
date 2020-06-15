import {Request, Response} from 'express'

export default async function hello(req: Request, res: Response) {

    res.status(200).send("Hello from /amz route!")
    // next(new ApiError(500))
}