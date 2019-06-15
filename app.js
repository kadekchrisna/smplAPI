const express = require('express')
const helmet = require('helmet')

const db = require('./app/config/db')

const app = express()

const personRouter = require('./app/route/person')

app.use(helmet())
app.use('/person', personRouter)


app.listen(3000)