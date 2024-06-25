const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');
const app = express();
const port = process.env.PORT || 5000;
mongoose.connect("mongodb://localhost:27017/todo")
.then(()=>{
    console.log("Connected ");
})
.catch((err)=>{
    console.log(err);
})

const Data = new mongoose.Schema({
    todo:{type:String, require : true}
});

const model = mongoose.model('student',Data);
// app.listen(port, () => {
//     console.log(`App is listening on port ${port}`);
// });
