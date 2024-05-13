require('dotenv').config()

const express = require('express')
const mongoose = require('mongoose')
const coursesRoutes = require('./routes/courses')

//express app
const app = express()

//middleware
app.use(express.json())
app.use((req, res, next) => {
    console.log(req.path, req.method)
    next()
})

//routes
app.use('/api/courses', coursesRoutes)

//connect to db
mongoose.connect(process.env.MONGO_URI)
    .then(() => {
        //listening for requests
        app.listen(process.env.PORT, () => {
            console.log('Connect to db & listening on port', process.env.PORT)
})
    })
    .catch((error) => {
        console.log(error)
    })


