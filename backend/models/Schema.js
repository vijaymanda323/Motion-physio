const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    height:{
        type: String,
        required: false
    },
    weight:{
        type: String,
        required: false
    },
    age:{
        type: String,
        required: false
    },
    gender:{
        type: String,
        required: false
    },
    activityLevel:{
        type: String,
        required: false
    },
    goal:{
        type: String,
        required: false
    },
    healthConditions:{
        type: String,
        required: false
    },
    medications:{
        type: String,
        required: false
    },
    allergies:{
        type: String,
        required: false
    },
    birthDate:{
        type: Date,
        required: false
    },
    createdAt:{
        type: Date,
        default: Date.now
    },
    bioData:{
        type: String,
        required: false
    },
    location: {
        longitude: {
            type: Number,
            required: false
        },
        latitude: {
            type: Number,
            required: false
        }
    },
    id: {
        type: String,
        required: false  
    }
})

module.exports = mongoose.model('User', userSchema);