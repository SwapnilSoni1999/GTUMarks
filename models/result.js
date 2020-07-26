const mongoose = require('mongoose')

const Schema = mongoose.Schema

const ResultSchema = new Schema({
    enrollment: { type: String, required: true, unique: true },
    result: { type: ResultTable }
})
