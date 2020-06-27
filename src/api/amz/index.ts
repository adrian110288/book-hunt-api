import { Router } from 'express'
import WishlistController from './wishlist/interfaces/wishlist-controller'
import WishlistControllerImpl from './wishlist/controller'
import wrap from '../../util/wrap'
import WishlistService from './wishlist/interfaces/wishlist-service'
import WishlistServiceImpl from './wishlist/wishlist-service-impl'
import WishlistParser from './wishlist/interfaces/wishlist-parser'
import CheerioWishlistParser from './wishlist/cheerio-wishlist-parser'

const wishlistParser: WishlistParser = new CheerioWishlistParser()
const wishlistService: WishlistService = new WishlistServiceImpl(wishlistParser)
const wishlistController: WishlistController = new WishlistControllerImpl(wishlistService)

const router  = Router()
router.get('/wishlist', wrap(wishlistController.getWishlist))

export default router