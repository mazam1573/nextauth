import mongoose from "mongoose";

const connectDB = async () => {
    if (mongoose.connections[0].readyState) return;
    try {
        mongoose.connect(process.env.MongoURL, {useUnifiedTopology: true});
        console.log("Database is successfully connected!");
    } catch (error) {
        throw new Error("Error in connecting Database")
    }
}

export default connectDB