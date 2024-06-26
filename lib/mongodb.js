import mongoose from "mongoose";

const connectMongoDB = () => {
    try {
        mongoose.connect(process.env.MONGODB_SERVER);
        console.log("Connected to MongoDB");
    } catch (error) {
        console.log(error);
    }
}

export default connectMongoDB;