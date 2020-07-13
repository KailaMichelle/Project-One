const mongoose = require('mongoose');

const resourceSchema = new mongoose.Schema({
    type: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    link: {
        type: String,
    },
}, {timestamps: true});

const Resource = mongoose.model('Resource', userSchema);

module.exports = Resource;