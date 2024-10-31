import { json } from 'body-parser'
import express from 'express'
import morgan from 'morgan'
import cors from 'cors'
import { transitLinesRouter } from './api/transit-lines'

export const app = express()

app.use(
  cors({
    origin: 'http://localhost:4200',
  })
)

app.use(morgan('dev'))

app.use(json())

app.use('/transit-lines', transitLinesRouter)
