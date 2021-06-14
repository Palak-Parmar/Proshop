import express from 'express'
import asyncHandler from 'express-async-handler'
const router = express.Router()
import Product from '../models/productModel.js'

//@desc fetch all products
//@route GET/api/products
//@access Public

// dont need(api/products) this because we are going to point this file to this so using /
router.get('/', asyncHandler(async(req,res) => { 
    // pass empty object that gives us  everything
    // but this will not catch error so we can use try catch but that will be have to use in all routes so not using that
    // so we'll use express-async-handler
    const products = await Product.find({})

    // can do re.send but its json so we have to do res.json
    res.json(products)
}))


// @desc fetch single product
//@route GET/api/products/:id
//@access Public

//mark this async as well and use handler 

router.get('/:id',asyncHandler(async(req,res)=>{
    // getting a single product using id 
    const product = await Product.findById(req.params.id)
    if(product){

 
    // can do re.send but its json so we have to do res.json
    // res.json(products)
    res.json(product)
    }
    else{
        res.status(404).json({message:'Product not found'})
    }
}))


export default router