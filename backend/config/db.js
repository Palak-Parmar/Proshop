import mongoose from 'mongoose'
//  its going to be async because when we deal withmongodb
// when we call .connext or .find it is going to return a
// promise so async and want to wrap it up in a try catch

const connectDB =async()=>{
    try{
        // returns a promise so we hava to wait
       const conn=await mongoose.connect(process.env.MONGO_URI,{
        //    we have to add few options below or we will get warnings 
           useUnifiedTopology:true,
           useNewUrlParser:true,
           useCreateIndex:true
       })
       console.log(`MongoDB Connected: ${conn.connection.host} `)
    }
    catch(error){
        console.log(`error ${error.message}`)
        process.exit(1)
    }
}
export default connectDB