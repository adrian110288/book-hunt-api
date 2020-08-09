import {Router} from 'express'
import wrap from '../../util/wrap'
import getWishlist from "./wishlist/get-wishlist";

const amzRouter = Router({caseSensitive: true})

amzRouter.post('/wishlist/register',)

amzRouter.delete('/wishlist/unregister',)

amzRouter.get('/wishlist/:id', wrap(getWishlist))

export default amzRouter
