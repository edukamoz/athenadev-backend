import express from 'express'
import userRoutes from './routes/user.routes'
import cors from 'cors'
import { config } from 'dotenv'

config()
const app = express();
app.use(cors())
app.use(express.json())

app.use('/', express.static('public'))

app.use('/api/users', userRoutes)

export default app;