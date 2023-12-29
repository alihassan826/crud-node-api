const mongoose = require('mongoose');

const profileSchema = mongoose.Schema({
    name: {
        type: String
    },
    email: {
        type: String
    },
    country: {
        type: String
    }
});

module.exports = Profile = mongoose.model('profile', profileSchema);
