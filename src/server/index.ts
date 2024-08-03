import express from 'express'
import { api } from './api'

const app = express()
app.use(api)
app.use(express.static(process.cwd() + '/dist'))

app.listen(3002, () => console.log('Server started'))
