import {Request, Response, NextFunction} from 'express'
import to from 'await-to-js'
import axios, { AxiosResponse, AxiosError } from 'axios'
import cheerio from 'cheerio'
import ApiError from '../../util/api-error'
import log from "../../util/log"

export default async function hello(req: Request, res: Response, next: NextFunction) {

    const wishlist: string = req.params.wishlist

    let response: AxiosResponse
    let error: AxiosError

    [error, response] = await to(axios.get(`https://www.amazon.co.uk/hz/wishlist/ls/${wishlist}`))
    if (error) next(new ApiError(500, "Cannot download html"))

    const $ = cheerio.load(response.data)

    const titles: string[] = $('#g-items')
        .find('.g-item-details')
        .find('h3 > a')
        .toArray()
        .map(el => $(el).attr('title'))

    res.status(200).send(titles)
}