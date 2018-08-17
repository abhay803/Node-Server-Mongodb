const express = require('express');
const router = express();

router.get('/',(req, res, next)=>{
    res.status(200).json({
        message: 'Orders get request'
    });
});

router.post('/',(req, res, next)=>{
    const order ={
        orderId: req.body.orderId,
        quantity: req.body.quantity
    }
    res.status(201).json({
        message: 'Orders post request',
        placedOrder: order
    });
});

router.get('/:orderId',(req, res, next)=>{
    res.status(200).json({
        message: 'Order details',
        id: req.params.orderId
    });
});

router.delete('/:orderId', (req, res, next)=>{
    res.status(200).json({
        message: 'Order gets deleted',
        id: req.params.orderId
    })
});

module.exports = router;