import mongoose from "mongoose";

const connectDB=async()=>{
    try {
        const conn=await mongoose.connect(process.env.MONGO_URL);
        console.log(`connect to mongodb database ${conn.connection.host}`);
        
    } catch (error) {
        console.log('error in mongodb');
    }
};

export default connectDB