// seperate script run to import data 
// Database seeding is the initial seeding of a database with data. Seeding a database is a process in which an initial set of data is provided to a database when it is being installed. ... The data can be dummy data or necessary data such as an initial administrator account.
import mongoose from 'mongoose'
import dotenv from 'dotenv'
import colors from 'colors'
import users from './data/users.js'
import products from './data/products.js'
import User from './models/userModel.js'
import Product from './models/productModel.js'
import Order from './models/orderModel.js'
import connectDB from './config/db.js'

dotenv.config()
connectDB()
// going to be async because we are dealing with mongoose and so everthing returns a promise

const importData = async() =>{
    try{
        await Order.deleteMany()
        await Product.deleteMany()
        await User.deleteMany()
        
        const createdUsers= await User.insertMany(users)
        // want admin(from those users)user to be object id for all the products
          const adminUser= createdUsers[0]._id
          const sampleProducts=products.map(product =>{
            //   ... is the spread operator
             return {...product, user:adminUser} 
          })
          await Product.insertMany(sampleProducts)
          console.log('Data Imported!'.green.inverse)
          process.exit()
    }    catch(error)
    {
       console.log(`${error}`.red.inverse)
       process.exit(1)
    }
}

const destroyData = async() =>{
    try{
        await Order.deleteMany()
        await Product.deleteMany()
        await User.deleteMany()
        
          console.log('Data Destroyed!'.red.inverse)
          process.exit()
    }    catch(error)
    {
       console.log(`${error}`.red.inverse)
       process.exit(1)
    }
}

if(process.argv[2] === '-d')
{
    destroyData()
}
else{
    importData()
}