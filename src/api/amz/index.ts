import hello from './hello'

import { Router } from 'express'

const router  = Router()
router.get('/', hello)

export default router