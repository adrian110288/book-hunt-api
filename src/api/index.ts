import { Router } from 'express'
import amz from './amz'

const router  = Router()
router.use('/amz', amz)

export default router