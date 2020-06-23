import {Request, Response, NextFunction} from 'express'
import to from 'await-to-js'
import log from "../../../util/log"
import getWishlistBooks from './wishlist-parser-service'
import WishlistBook from './models/wishlist-book'
import WishlistResponse from './models/wishlist-response'
import ApiError from '../../../util/api-error'

export default async function getWishlist(req: Request, res: Response, next: NextFunction) {

    const { wishlist } = req.params
    if (!wishlist) next(new ApiError(400, "No wishlist id was not passed."))

    const [error, books] = await to<WishlistBook[], Error>(getWishlistBooks(wishlist))
    if (error) next(error)

    const response: WishlistResponse = {
        items: books
    }

    res.status(200).json(response)
}