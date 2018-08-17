const express = require('express');
const router = express.Router();

router.get('/', (req, res, next)=> {
    res.status(200).json({
        message: 'Get request for /products'
    });
});

router.post('/', (req, res, next)=> {
    const product = {
        name: req.body.name,
        price: req.body.price
    }
    res.status(201).json({
        message: 'Post request for /products',
        createdProduct: product
    });
});

router.get('/:productId', (req, res, next)=>{
    const id = req.params.productId;
    if(id === 'special'){
        res.status(200).json({
            message: 'Get request for /Id url',
            id: id
        });
    }else {
        res.status(200).json({
            message: 'U passed an ID'
        });
    }
});

router.patch('/:productId', (req, res, next)=> {
    res.status(200).json({
        message: 'Added product'
    });
});

router.delete('/:productId', (req, res, next)=> {
    res.status(200).json({
        message: 'Product deleted'
    });
});

module.exports = router;