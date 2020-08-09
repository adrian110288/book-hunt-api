import {Router} from 'express'

const authRouter: Router = Router({caseSensitive: true})

// TODO register route
authRouter.post('/register')

// TODO login route
authRouter.post('/login')

// TODO logout route
authRouter.post('/logout')

export const AuthRouter: Router = authRouter
