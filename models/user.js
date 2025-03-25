const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    adharCardNumber: {
        type: Number,
        required: true,
        unique: true
    },
    age: {
        type: Number, 
        required: true
    },
    email: {
        type: String,
    },
    mobile: {
        type: Number,
    },
    address: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    role: {
        type: String,
        enum: ['admin', 'user'],
        default: 'user'
    },
    isVerified: {
        type: Boolean,
        default: false
    }
})  

const User = mongoose.model('User', userSchema);
module.exports = User;