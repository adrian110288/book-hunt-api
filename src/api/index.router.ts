import {Router} from 'express'
import {AuthRouter} from "./auth/auth.router";
import {AmzRouter} from "./amz/amz.router";

const router: Router = Router()

router.use('/auth', AuthRouter)
router.use('/amz', AmzRouter)

export const IndexRouter: Router = router;
