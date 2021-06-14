import express from 'express'
// package for environmental variables
import dotenv from 'dotenv'
import products from './data/products.js'

dotenv.config()
const app=express()

app.get('/',(req,res)=>{
    res.send('api is running')
})

app.get('/api/products',(req,res)=>{
    // can do re.send but its json so we have to do res.json
    res.json(products)
})

app.get('/api/products/:id',(req,res)=>{
    // getting a single product using id 
    const product = products.find((p)=>p._id === req.params.id)
    // can do re.send but its json so we have to do res.json
    // res.json(products)
    res.json(product)
})

// if port not found use 5000
const PORT = process.env.PORT || 5000

app.listen(
    PORT,
    console.log(`server running in ${process.env.NODE_ENV} mode on port ${PORT}`)
    )
