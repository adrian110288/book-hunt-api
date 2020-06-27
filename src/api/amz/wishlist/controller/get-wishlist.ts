import {Request, Response} from 'express'
import to from 'await-to-js'
import WishlistService from "../interfaces/wishlist-service"
import ApiError from '../../../../util/errors/api-error'
import WishlistResponse from '../models/wishlist-response'

async function getWishlist(req: Request, res: Response, wishlistService: WishlistService): Promise<void> {

    const wishlistId: string = req.query.id as string
    if (!wishlistId) throw new ApiError("No wishlist id was not passed.", 400)

    const [error, books] = await to(wishlistService.getWishlistBooks(wishlistId))
    if (error) throw error

    const response: WishlistResponse = {
        items: books
    }

    res.status(200).json(response)
}

export default getWishlist