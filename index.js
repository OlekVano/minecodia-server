import express from 'express'
const app = express()
import cors from 'cors'
app.use(cors())
app.use(express.json())

import usersRouter from './routes/users.js'
const usersRouter = require('./routes/users')

const corsOptions = {
  //origin: 'http://localhost:3000',
  optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
}

app.get('/test', cors(corsOptions), (req, res) => {
  res.send('asdf')
})

app.use('/users', usersRouter)

const port = process.env.PORT || 3001
app.listen(port, async () => {
  console.log( `Server started at http://localhost:${ port }` );
})