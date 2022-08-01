const express = require('express');
const bookDetail = require('../models/book');
const router = new express.Router();


// ------------------------------------
// -----------ADD BOOK DATA-------------
// ------------------------------------
router.post('/book', async (req,res)=>{
    try{
        const data = new bookDetail(req.body);
        const result = await data.save();
        res.status(200).send(result);
    } catch(error){
        res.status(404).send(error)
    }
});

// ------------------------------------
// -----------READ ALL BOOK DATA----------
// ------------------------------------
router.get('/book', async (req,res)=>{
    try{
        const result = await bookDetail.find();
        res.status(200).send(result);
    } catch(error){
        res.status(404).send(error)
    }
});

// ------------------------------------
// -------READ INDIVIDUAL BOOK DATA-------
// ------------------------------------
router.get('/book/:name', async (req,res)=>{
    try{
        const name = req.params.name;
        const result = await bookDetail.find({title:name});
        res.status(200).send(result);
    } catch(error){
        res.status(404).send(error)
    }
});

// ------------------------------------
// -----------DELETE BOOK DATA-------------
// ------------------------------------
router.patch('/book/:id', async (req,res)=>{
    try{
        const id = req.params.id;
        const result = await bookDetail.findByIdAndUpdate({_id:id},req.body,{
            new:true
        });
        res.status(200).send(result);
    } catch(error){
        res.status(404).send(error)
    }
});

// ------------------------------------
// -----------DELETE BOOK DATA-------------
// ------------------------------------
router.delete('/book/:id', async (req,res)=>{
    try{
        const id = req.params.id;
        const result = await bookDetail.findByIdAndDelete({_id:id});
        res.status(200).send(result);
    } catch(error){
        res.status(404).send(error)
    }
});

module.exports = router;