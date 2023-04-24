const express = require("express")
require('dotenv').config()
const cors = require('cors')
const connectDB = require('./db/dbConfig')
const path = require('path')
const PORT = process.env.PORT
// const {errorHandler} = require('./middleware/errorMiddleware')

connectDB()
const app = express()

app.use(express.json())
app.use(express.urlencoded({extended: false}))
app.use(cors())
app.use('/userAuth', require('./routes/authRoutes'))
// app.use(errorMiddleware)

app.get('/testing', (req, res) => {
  res.send('hello world')
})

app.listen(PORT, ()=> { console.log("Listening on port ", PORT)})