import {Router} from 'express'
import wrap from '../../util/wrap'
import getWishlist from "./wishlist/get-wishlist";
import {jwtParse} from "../common/jwt-parse.middleware";

const amzRouter = Router({caseSensitive: true})

amzRouter.post('/wishlist/register',)

amzRouter.delete('/wishlist/unregister',)

amzRouter.get('/wishlist/all')

amzRouter.get('/wishlist/:id/books', jwtParse, wrap(getWishlist))

export default amzRouter
