import mongoose from 'mongoose'
const reviewSchema = mongoose.Schema({
    // will pass an object with a name and everything 
    // this is the original rating
    name:{type:String , required:true},
    rating:{type:Number, required:true},
    comment:{type:String , required:true}

},{
    timestamps:true
})
// create user schema
const productSchema= mongoose.Schema({
    //here in this object we define all fields for the user
    // also want to make it acquired so sending in type too
    // want to know which admin created which product
    user:{
        type:mongoose.Schema.Types.ObjectId,
        required:true,
        // adds relationship between user and product
        ref:'User'
    },
    name:{
        type:String,
        required:true,
    },
    image:{
        type:String,
        required:true,
        unique:true
    },
    brand:{
        type:String,
        required:true,
    },
    category:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true
    },
    // review is going to be an array of rewiew objects 
    // so we will have a different schema called the reviewSchema
    reviews:[reviewSchema],
    
    // going to be average rating of the ratings mentioned above 
    rating:{
        type:Number,
        required:true,
        default:0
    },
    numReviews:{
        type:Number,
        required:true,
        default:0
    },
    price:{
        type:Number,
        required:true,
        default:0
    },
    countInStock:{
        type:Number,
        required:true,
        default:0
    },
},
// need a create and update field but with mongoose we can
// pass in a second argument here

// timestamps:to automatically manage createdAt and updatedAt properties on your documents
// true means it will create it automatically
{
    timestamps:true
})
const Product= mongoose.model('Product',productSchema)
export default Product