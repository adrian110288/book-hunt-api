import express from 'express'
import cookieParser from 'cookie-parser'
import morgan from 'morgan'
import api from './api'
import errorHandler from './util/errors/api-error-handler'

const app = express()

app.use(morgan('dev'))
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(cookieParser())

app.use('/api', api)

app.use(errorHandler)

export default app