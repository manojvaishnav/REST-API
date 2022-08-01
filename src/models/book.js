const express = require('express');
const mongoose = require('mongoose');

const bookSchema = mongoose.Schema({
    title:{
        type: String,
        required: true
    },
    author:{
        type: String,
        required: true
    },
    year:{
        type: Number,
        required: true
    },
    // price:{
    //     type: Number,
    //     required: true
    // }
});

const BookDetail = new mongoose.model('BookDetail',bookSchema);

module.exports = BookDetail;