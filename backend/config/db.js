import mongoose from "mongoose";

export const connectDB = async ()=> {
    try{
        const conn =await mongoose.connect(process.env.MONGO_URI);
        console.log(`MongoDB connected : ${conn.connection.host}`);
    } catch(error){
        console.log(`Error: ${error.messsage}`);
        process.exit(1);//process code 1 meanss failure, O means success
    }
}