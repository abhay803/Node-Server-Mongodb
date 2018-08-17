const express = require('express');
const app = express();
const morgan = require('morgan');
const bodyParser = require('body-parser');

const productRoutes = require('./api/routes/product');
const orderRoute = require('./api/routes/order');

app.use(morgan('dev'));

// we are parsing body messages in incoming requests
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

// for handling CORS issue
app.use((req, res, next)=>{
    res.header('Access-Control-Allow-Origin','*');
    res.header(
        'Access-Control-Allow-Headers',
        'Origin, X-Requested-Path, Content-Type, Access, Authorization'
    );
    if(req.method === 'OPTIONS'){
        req.header('Access-Control-Allow-Methods', 'PUT, DELETE, POST, GET, PATCH');
        return res.status(200).json({});
    }
    // blocking incoming request
    next();
});
/* app.use((req, res, next) => {
    res.status(200).json({
        message: 'It works'
    });
}); */

// routes will redirect
app.use('/products', productRoutes);
app.use('/orders', orderRoute);

// error handling
app.use((req, res, next)=>{
    const error = new Error('not found!');
    error.status = 404;
    next(error);
});

app.use((error, req, res, next)=>{
    res.status(error.status || 500);
    res.json({
        message: error.message
    })
});
module.exports = app;
