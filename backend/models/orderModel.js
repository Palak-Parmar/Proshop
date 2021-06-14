import mongoose from 'mongoose'
// create user schema
const orderSchema= mongoose.Schema({
    //here in this object we define all fields for the user
    // also want to make it acquired so sending in type too

    // we are going to have a user connected to the order as well(user that buys the product)
    user:{
     type:mongoose.Schema.Types.ObjectId,
     required:true,
     ref:'User'
    },
    // have the details:quantity, name, price etc
    orderItems:[
        {
            name:{type:String, required:true},
            qty:{type:Number, required:true},
            image:{type:String, required:true},
            price:{type:Number, required:true},

            //product- its going to be a product id but is linked to the product model 
            products:
            {
                type:mongoose.Schema.Types.ObjectId,
                required:'Product',
                ref:'Product'
            }
        }
    ],
    shippingAddress:{
        // embedded objects 
        address:{type:String,required:true},
        city:{type:String,required:true},
        postalCode:{type:String,required:true},
        country:{type:String,required:true}
    },

    paymentMethod:{
        type:String,
        required:true,
    },
    paymentResults:{
        // make payments and if successfull we are going to get data back, that is what we doing her
        id:{type:String},
        // paid or not 
        status:{type:String},
        update_time:{type:String},
        // paypal email that theyll use
        email_address:{type:String},
    },
    taxPrice:{
        type:Number,
        required:true,
        default:0.0
    },
    shippingPrice:{
        type:Number,
        required:true,
        default:0.0
    },
    totalPrice:{
        type:Number,
        required:true,
        default:0.0
    },
    // to know if its paid or not 
    isPaid:{
        type:Boolean,
        required:true,
        default:false
    },
    // get a time and date its paid at 
    paidAt:{
        type:Date
    },
    isDelivered:
    {
        type:Boolean,
        required:true,
        default:false
    },
    deliveredAt:
    {
        type:Date
    },
},

// need a create and update field but with mongoose we can
// pass in a second argument here

// timestamps:to automatically manage createdAt and updatedAt properties on your documents
// true means it will create it automatically
{
    timestamps:true,
}
)
// want to create a model from the schema called as User and passin UserSchema
const Order = mongoose.model('Order',orderSchema)
export default Order