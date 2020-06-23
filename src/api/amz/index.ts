import { Router } from 'express'
import getWishlist from './wishlist/get-wishlist'

const router  = Router()
router.get('/:wishlist', getWishlist)

export default router