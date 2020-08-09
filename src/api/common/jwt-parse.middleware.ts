import jwt from 'express-jwt';

const secret = process.env.JWT_SECRET
const algorithms = ['HS256']

const jwtParse = jwt({secret, algorithms})

export {jwtParse}
