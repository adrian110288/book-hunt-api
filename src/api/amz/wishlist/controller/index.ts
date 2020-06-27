import {Request, Response} from 'express'
import WishlistController from '../interfaces/wishlist-controller'
import WishlistService from '../interfaces/wishlist-service'
import getWishlist from './get-wishlist'

class WishlistControllerImpl implements WishlistController  {

    constructor(private readonly wishlistService: WishlistService) {}

    getWishlist = async (req: Request, res: Response) => getWishlist(req, res, this.wishlistService)
}

export default WishlistControllerImpl