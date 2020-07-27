const express = require('express')
const helmet = require('helmet')
const mongoose = require('mongoose')
const mongoSanitize = require('express-mongo-sanitize')

const resultRoute = require('./routes/result')

const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(helmet())
app.use(mongoSanitize())

mongoose.connect('mongodb://localhost:27017/Result', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    autoIndex: true,
    useCreateIndex: true
})
   .then(() => console.log("Established connection to Database!"))
   .catch(() => console.log('Error while establishing connection to Database!'))


app.use('/result', resultRoute)

module.exports = app

// Start standalone server if directly running
if (require.main === module) {
    const port = process.env.PORT || 3001
    app.listen(port, () => {
        console.log(`API server listening on port ${port}`)
    })
}