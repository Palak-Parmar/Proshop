import express from 'express'
// package for environmental variables
import dotenv from 'dotenv'
import connectDB from './config/db.js'
import productRoutes from './routes/productRoute.js'
import {notFound, errorHandler} from './middleware/errorMiddleware.js'

dotenv.config()
connectDB()
const app=express()

app.get('/',(req,res)=>{
    res.send('api is running')
})

app.use('/api/products', productRoutes)

app.use(notFound);
app.use(errorHandler);

// if port not found use 5000
const PORT = process.env.PORT || 5000

app.listen(
    PORT,
    console.log(`server running in ${process.env.NODE_ENV} mode on port ${PORT}`)
    )
