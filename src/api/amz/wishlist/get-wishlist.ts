import {Request, Response} from 'express'
import to from 'await-to-js'
import ApiError from '../../../util/errors/api-error'
import WishlistResponse from './models/wishlist-response'
import getWishlistBooks from "./wishlist-service";

async function getWishlist(req: Request, res: Response): Promise<void> {

    const { id } = req.params
    if (!id) throw new ApiError("Wishlist id was not passed.", 400)

    const [error, books] = await to(getWishlistBooks(id))
    if (error) throw error

    const response: WishlistResponse = {
        books,
        count: books.length
    }

    res.status(200).json(response)
}

export default getWishlist
