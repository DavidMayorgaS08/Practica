import mongoose from "mongoose";

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.CNX_MONGO);
    console.log("Connected to MongoDB");
  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
  }
};

export default connectDB;