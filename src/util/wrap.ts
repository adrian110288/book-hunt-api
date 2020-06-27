import {Request, Response, NextFunction} from 'express'

function wrap(fn: any) {

    return async function wrappedFn(req: Request, res: Response, next: NextFunction) {

      try {
          await fn(req, res)
      } catch (err) {
          next(err)
      }
    }
}

export default wrap