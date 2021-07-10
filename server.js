const express = require('express');
const hbs = require('hbs');
const fs = require('fs');

const port = process.env.PORT || 3000;

var app = express();

app.get('/',(req,res)=>{
    res.send("Welcome to Djay Node Server")
});

app.listen(port,()=>{
    console.log('Server is up on port',port);
});