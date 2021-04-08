const express = require('express');
const mongoose = require('mongoose');
const app = express();


//chuoi ket noi database
//password in mongo 
const password = "huutri"
//database name
const db = "USM"
const MONGO_URL = `mongodb+srv://huutri:${password}@cluster0.conck.mongodb.net/${db}?retryWrites=true&w=majority`

mongoose.connect(MONGO_URL, { useNewUrlParser: true, useUnifiedTopology: true }, () => {
     console.log("Connected MongoDB")
});


app.listen(3000, () => {
     console.log("sever is running")
})