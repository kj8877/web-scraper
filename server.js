const express = require('express');
let mongoose = require('mongoose');

const app = express();
const port = process.env.PORT || 8080;

app.get('/', (req, res) => {
    res.send('This Node JS')
});

var mainRouter = require('./routes/mainRoutes.js');
app.use(mainRouter());

app.listen(port, () => {
    console.log('app now listening for requests on port', port);
});