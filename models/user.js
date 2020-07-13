const mongoose = require('mongoose');
const Resource = require('./resource');

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    location: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    profession: {
        type: String,
        required: true, 
    },
    interests: {
        type: String,
        required: true,  
    },
    resources: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Resource',
    }],
})

module.exports = mongoose.model('User', userSchema);

module.exports = User;