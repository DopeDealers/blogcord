const mongoose = require('mongoose');

const DiscordUser = mongoose.model('DiscordUser', {
    userId: {
        type: String,
        required: true
    },
    username: {
        type: String,
        required: true
    },
    discriminator: {
        type: String,
        required: true
    },
    avatar: {
        type: String,
        required: true
    },
    nitro: {
        type: Boolean,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    blogs: [{
        type: String,
        required: true,
        blogId: String,
        title: String,
        description: String,
        userId: String
    }]});

module.exports = { DiscordUser };