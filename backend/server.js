import express from 'express'
// package for environmental variables
import dotenv from 'dotenv'
import connectDB from './config/db.js'
import productRoutes from './routes/productRoute.js'

dotenv.config()
connectDB()
const app=express()

app.get('/',(req,res)=>{
    res.send('api is running')
})
// no in routes to not make this crowdy


// app.get('/api/products',(req,res)=>{
//     // can do re.send but its json so we have to do res.json
//     res.json(products)
// })

// app.get('/api/products/:id',(req,res)=>{
//     // getting a single product using id 
//     const product = products.find((p)=>p._id === req.params.id)
//     // can do re.send but its json so we have to do res.json
//     // res.json(products)
//     res.json(product)
// })


app.use('/api/products', productRoutes)
// if port not found use 5000
const PORT = process.env.PORT || 5000

app.listen(
    PORT,
    console.log(`server running in ${process.env.NODE_ENV} mode on port ${PORT}`)
    )
