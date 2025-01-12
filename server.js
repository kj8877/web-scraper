const express = require('express');
let mongoose = require('mongoose');
const axios = require("axios");

const app = express();
const port = process.env.PORT || 8080;

app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    
    let data = axios.get('http://localhost:8080/api/summarize')
    console.log('data', data)
    res.render('index', {data: data})
});

var mainRouter = require('./routes/mainRoutes.js');
app.use(mainRouter());

app.listen(port, () => {
    console.log('app now listening for requests on port', port);
});