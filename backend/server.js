const express =require('express');
const app=express()
const products = require('./data/products')

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

app.listen(5000,console.log('server running on port 5000'))
