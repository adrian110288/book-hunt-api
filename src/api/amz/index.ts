import hello from './hello'

import { Router } from 'express'

const router  = Router()
router.get('/:wishlist', hello)

export default router