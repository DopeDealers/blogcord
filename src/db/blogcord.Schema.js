const mongoose = require('mongoose');

const Blogs = mongoose.model('Blogs', {
    blogId: {
        type: String,
        required: true
    },
    title: { 
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    userId: {
        type: String,
        required: true
    },
    views: {
        type: Number,
        required: true
    },
    likes: {
        type: Number,
        required: true
    },
    commentsInt: {
        type: Number,
        required: true
    },
    comments: [{
        type: String,
        userId: String,
        comment: String,
        likes: Number,
        date: Date,
        required: true
    }],
    date: { 
        type: Date,
        required: true
    },
    image: {
        type: String,
        required: false
    },
});

module.exports = { Blogs };