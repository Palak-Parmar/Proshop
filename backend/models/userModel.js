import mongoose from 'mongoose'
// create user schema
const userSchema= mongoose.Schema({
    //here in this object we define all fields for the user
    // also want to make it acquired so sending in type too

    name:{
        type:String,
        required:true,
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true,
    },
    isAdmin:{
        type:Boolean,
        required:true,
        // admin will have to go in and make another aadmin
        default:false
    }
},
// need a create and update field but with mongoose we can
// pass in a second argument here

// timestamps:to automatically manage createdAt and updatedAt properties on your documents
// true means it will create it automatically
{
    timestamps:true
})
// want to create a model from the schema called as User and passin UserSchema
const User = mongoose.model('User',userSchema)
export default User