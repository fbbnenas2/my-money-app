const restful = require('node-restful')
const mongoose = restful.mongoose

const userSchema = new mongoose.Schema({
    name: {type: String, required: true},
    email: {type: String, requried: true},
    password: {type: String, min: 6, max: 12, requried: true}
})

module.exports = restful.model('User', userSchema)