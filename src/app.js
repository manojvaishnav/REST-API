const express = require('express');
const mongoose = require('mongoose');
const port = process.env.PORT || 3000;
const db = require('./db/conn');
const bookDetail = require('./models/book');
const router = require('./routes/data');

const app =express();
app.use(express.json());
app.use(router);

app.listen(port,()=>{
    console.log(`server started at port number ${port}`);
})