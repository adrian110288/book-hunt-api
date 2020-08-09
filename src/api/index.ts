import {Router} from 'express'
import auth from './auth'
import amz from './amz'

const router = Router()
router.use('/auth', auth)
router.use('/amz', amz)

export default router
