const mongoose = require('mongoose')

const userSchema = mongoose.Schema({
    name: {
        type: String,
        require: true
    },

    email: {
        type: String,
        rerquire: true
    },

    password: {
        type: String,
        require: true
    }

}, { collection: 'Users' });

module.exports = mongoose.model('users', userSchema);