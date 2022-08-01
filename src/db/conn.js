const mongoose = require('mongoose');
require('dotenv').config();

mongoose.connect(process.env.MONGO_URL)
.then(()=>{
    console.log('Database Connected Successfully');
})
.catch((err)=>{
    console.log('Database Connection Error');
    console.log(err);
});

