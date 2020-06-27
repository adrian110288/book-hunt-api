import {Request, Response} from 'express'

interface WishlistController {

    getWishlist(req: Request, res: Response): void
}

export default WishlistController